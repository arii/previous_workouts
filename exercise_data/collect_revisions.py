#!/usr/bin/env python3
"""
Incrementally collect new Google Docs revisions for the workout document.

Downloads only revisions not already present in exercise_data/revisions/,
preserving all previously collected files. Uses Drive API v2 export links
(text/plain), matching the original collection process.

Config comes from the repo-root .env file:
  GOOGLE_CLIENT_ID            OAuth client ID (must match the secret file)
  GOOGLE_CLIENT_SECRET_FILE   OAuth client secret JSON, repo-root-relative
  GOOGLE_DRIVE_FILE_ID        Workout Google Doc file ID
  GOOGLE_TOKEN_FILE           Cached OAuth token, repo-root-relative
  GOOGLE_API_DELAY_SECONDS    Delay between downloads (default: 5)

Usage:
  python exercise_data/collect_revisions.py --dry-run      # validate config only
  python exercise_data/collect_revisions.py --auth-url     # first run: get consent URL
  python exercise_data/collect_revisions.py --list-only --auth-code <code>
  python exercise_data/collect_revisions.py --rebuild      # download + rebuild data
  python exercise_data/collect_revisions.py --rebuild-only # rebuild from local files

First run needs the two-step consent: --auth-url prints a Google URL, then
rerun with --auth-code <code>. Later runs reuse the cached token.
"""

import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]
REVISION_RE = re.compile(r"^revision_(\d+)_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.txt$")

REPO_ROOT = Path(__file__).resolve().parent.parent
REVISIONS_DIR = REPO_ROOT / "exercise_data" / "revisions"
PENDING_PATH = REPO_ROOT / "exercise_data" / ".oauth_pending.json"


def load_env():
    """Load repo-root .env into os.environ (dotenv if available, else manual)."""
    env_file = REPO_ROOT / ".env"
    if not env_file.exists():
        return
    try:
        from dotenv import load_dotenv

        load_dotenv(env_file)
        return
    except ImportError:
        pass
    for line in env_file.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip("\"'"))


def load_config():
    """Validate config and return (secret_path, file_id, token_path, delay)."""
    load_env()
    expected_client_id = os.environ.get("GOOGLE_CLIENT_ID", "").strip()
    secret_rel = os.environ.get("GOOGLE_CLIENT_SECRET_FILE", "").strip()
    file_id = os.environ.get("GOOGLE_DRIVE_FILE_ID", "").strip()
    token_rel = os.environ.get("GOOGLE_TOKEN_FILE", "exercise_data/token.json").strip()
    delay = float(os.environ.get("GOOGLE_API_DELAY_SECONDS", "5"))

    missing = [
        name
        for name, value in [
            ("GOOGLE_CLIENT_ID", expected_client_id),
            ("GOOGLE_CLIENT_SECRET_FILE", secret_rel),
            ("GOOGLE_DRIVE_FILE_ID", file_id),
        ]
        if not value
    ]
    if missing:
        raise SystemExit(f"Missing in .env: {', '.join(missing)}")

    secret_path = (REPO_ROOT / secret_rel).resolve()
    if not secret_path.exists():
        raise SystemExit(f"Client secret file not found: {secret_path}")
    with open(secret_path, encoding="utf-8") as f:
        secret_data = json.load(f)
    actual_client_id = secret_data.get("installed", {}).get("client_id", "")
    if actual_client_id != expected_client_id:
        raise SystemExit(
            "GOOGLE_CLIENT_ID does not match client_id in the secret file. "
            "Update .env to the new client."
        )

    token_path = (REPO_ROOT / token_rel).resolve()
    token_path.parent.mkdir(parents=True, exist_ok=True)
    return secret_path, file_id, token_path, delay


def local_revision_ids():
    """Return {revision_id: filename} for downloaded revision files."""
    found = {}
    if REVISIONS_DIR.exists():
        for path in sorted(REVISIONS_DIR.glob("revision_*.txt")):
            match = REVISION_RE.match(path.name)
            if match:
                found[match.group(1)] = path.name
    return found


def local_content_hashes():
    """Return set of sha256 hashes of downloaded revision contents."""
    hashes = set()
    if REVISIONS_DIR.exists():
        for path in REVISIONS_DIR.glob("revision_*.txt"):
            hashes.add(hashlib.sha256(path.read_bytes()).hexdigest())
    return hashes


def auth_start(secret_path):
    """Print the consent URL and save the pending PKCE state."""
    from google_auth_oauthlib.flow import InstalledAppFlow

    flow = InstalledAppFlow.from_client_secrets_file(str(secret_path), SCOPES)
    flow.redirect_uri = "http://localhost"
    auth_url, state = flow.authorization_url(access_type="offline", prompt="consent")
    PENDING_PATH.write_text(json.dumps({"code_verifier": flow.code_verifier, "state": state}))
    print("\nOpen this URL in your browser and authorize read-only Drive access:")
    print(f"\n  {auth_url}\n")
    print("Google will redirect to an http://localhost page that cannot load.")
    print("Copy the 'code' value from that page's address bar, then rerun with:")
    print("  python exercise_data/collect_revisions.py --auth-code <code> ...")


def auth_finish(secret_path, token_path, raw):
    """Exchange a pasted code for tokens using the pending PKCE state."""
    from google_auth_oauthlib.flow import InstalledAppFlow

    if not PENDING_PATH.exists():
        raise SystemExit("No pending authorization. Run with --auth-url first.")
    pending = json.loads(PENDING_PATH.read_text())
    code, state = split_code_state(raw)
    if state and state != pending["state"]:
        raise SystemExit("State mismatch: that code is for a different authorization URL.")
    flow = InstalledAppFlow.from_client_secrets_file(str(secret_path), SCOPES)
    flow.redirect_uri = "http://localhost"
    flow.code_verifier = pending["code_verifier"]
    flow.fetch_token(code=code)
    token_path.write_text(flow.credentials.to_json())
    PENDING_PATH.unlink()
    return flow.credentials


def get_credentials(secret_path, token_path, auth_mode, auth_code):
    """Return cached OAuth credentials, exchanging --auth-code if needed."""
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow

    creds = None
    if token_path.exists():
        creds = Credentials.from_authorized_user_file(str(token_path), SCOPES)
    if creds and creds.valid:
        return creds
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
        token_path.write_text(creds.to_json())
        return creds
    if auth_code:
        return auth_finish(secret_path, token_path, auth_code)
    if auth_mode == "local":
        flow = InstalledAppFlow.from_client_secrets_file(str(secret_path), SCOPES)
        creds = flow.run_local_server(port=0)
        token_path.write_text(creds.to_json())
        return creds
    raise SystemExit(
        "No cached token. Run with --auth-url, authorize in your browser,\n"
        "then rerun with --auth-code <code>."
    )


def split_code_state(raw):
    """Split a bare code or full localhost redirect URL into (code, state)."""
    if "code=" in raw:
        from urllib.parse import parse_qs, urlparse

        qs = parse_qs(urlparse(raw).query)
        code = (qs.get("code") or [raw])[0]
        state = (qs.get("state") or [None])[0]
        return code, state
    return raw, None


def list_remote_revisions(service, file_id):
    """List all revisions via Drive v2, returning {id: (modifiedDate, exportLinks)}."""
    revisions = {}
    page_token = None
    while True:
        resp = (
            service.revisions()
            .list(
                fileId=file_id,
                fields="items(id,modifiedDate,exportLinks),nextPageToken",
                maxResults=1000,
                pageToken=page_token,
            )
            .execute()
        )
        for item in resp.get("items", []):
            revisions[str(item["id"])] = (
                item.get("modifiedDate", ""),
                item.get("exportLinks", {}) or {},
            )
        page_token = resp.get("nextPageToken")
        if not page_token:
            break
    return revisions


def download_with_retry(session, url, attempts=3):
    """GET an export URL, retrying rate-limit/server errors with backoff."""
    last_error = None
    for attempt in range(attempts):
        resp = session.get(url, timeout=60)
        if resp.status_code == 200:
            return resp.content
        last_error = f"HTTP {resp.status_code}"
        if resp.status_code not in (403, 429, 500, 502, 503):
            break
        time.sleep(5 * (2**attempt))
    raise RuntimeError(f"Download failed after {attempts} attempts ({last_error})")


def revision_timestamp(modified_date):
    """Format a Drive v2 modifiedDate as UTC YYYY-MM-DD_HH-MM-SS."""
    dt = datetime.fromisoformat(modified_date.replace("Z", "+00:00"))
    return dt.astimezone(timezone.utc).strftime("%Y-%m-%d_%H-%M-%S")


def run_step(label, cmd, cwd):
    print(f"\n=== {label} ===", flush=True)
    subprocess.run(cmd, cwd=cwd, check=True)


def rebuild_data(python):
    """Regenerate JSON, rebuild the JS bundle, sanitize, and verify."""
    run_step(
        "Regenerating workout JSON",
        [python, "regenerate_workout_data.py"],
        cwd=REPO_ROOT / "exercise_data",
    )
    run_step(
        "Rebuilding JS bundle",
        [python, "exercise_data/build_js_bundle.py"],
        cwd=REPO_ROOT,
    )
    run_step(
        "Sanitizing exercise data",
        [python, "sanitize_exercise_data.py"],
        cwd=REPO_ROOT,
    )
    run_step(
        "Verifying data completeness",
        [python, "verify_data_completeness.py"],
        cwd=REPO_ROOT / "exercise_data",
    )


def main():
    parser = argparse.ArgumentParser(description="Incrementally collect Drive revisions.")
    parser.add_argument("--dry-run", action="store_true", help="validate config only")
    parser.add_argument("--list-only", action="store_true", help="list remote revisions")
    parser.add_argument("--rebuild", action="store_true", help="rebuild data after download")
    parser.add_argument("--rebuild-only", action="store_true", help="rebuild without download")
    parser.add_argument("--auth-mode", choices=["console", "local"], default="console")
    parser.add_argument("--auth-url", action="store_true", help="print consent URL and exit")
    parser.add_argument("--auth-code", default=None, help="code from the --auth-url step")
    parser.add_argument("--delay", type=float, default=None, help="seconds between downloads")
    args = parser.parse_args()

    secret_path, file_id, token_path, env_delay = load_config()
    if args.auth_url:
        auth_start(secret_path)
        return
    delay = env_delay if args.delay is None else args.delay
    local = local_revision_ids()
    print(f"Local revisions: {len(local)} in {REVISIONS_DIR}")
    if args.dry_run or args.rebuild_only:
        if args.rebuild_only:
            rebuild_data(sys.executable)
        else:
            print("Config OK (client ID matches secret file).")
        return

    from google.auth.transport.requests import AuthorizedSession
    from googleapiclient.discovery import build

    creds = get_credentials(secret_path, token_path, args.auth_mode, args.auth_code)
    service = build("drive", "v2", credentials=creds)
    remote = list_remote_revisions(service, file_id)
    print(f"Remote revisions: {len(remote)}")
    new_ids = [rid for rid in remote if rid not in local]
    print(f"New revisions: {len(new_ids)}")
    if args.list_only:
        for rid in sorted(new_ids, key=int):
            print(f"  {rid}  {remote[rid][0]}")
        return

    if not new_ids:
        print("Already up to date.")
    else:
        session = AuthorizedSession(creds)
        known_hashes = local_content_hashes()
        downloaded, skipped = 0, 0
        for rid in sorted(new_ids, key=int):
            modified_date, export_links = remote[rid]
            url = export_links.get("text/plain")
            if not url:
                print(f"  skip {rid}: no text/plain export link")
                skipped += 1
                continue
            content = download_with_retry(session, url)
            if hashlib.sha256(content).hexdigest() in known_hashes:
                print(f"  skip {rid}: identical content already collected")
                skipped += 1
                continue
            filename = f"revision_{rid}_{revision_timestamp(modified_date)}.txt"
            (REVISIONS_DIR / filename).write_bytes(content)
            known_hashes.add(hashlib.sha256(content).hexdigest())
            downloaded += 1
            print(f"  saved {filename} ({len(content)} bytes)")
            time.sleep(delay)
        print(f"\nDownloaded: {downloaded}, skipped: {skipped}")

    if args.rebuild:
        rebuild_data(sys.executable)


if __name__ == "__main__":
    main()
