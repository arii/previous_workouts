# Deploy & Update Guide

How code and data changes in this repo reach the websites. Nothing here runs
automatically — every step below is manual until stated otherwise.

## Targets

| Target | URL | How it updates |
|---|---|---|
| Production (GitHub Pages) | https://arii.github.io/previous_workouts/ | Push to `main` → Pages rebuilds in ~1–2 min |
| Dev box | https://dev-onasafari.ddns.net:8443/hrm | Depends on the box (see below) |
| Local | http://localhost:8000 | `npm start` in repo root |

## 1. Preview locally first

```bash
npm start
# open http://localhost:8000 (use another port if 8000 is taken:
#  python3 -m http.server 8001 --directory .)
```

Click through the changed pages. For data changes, also run the checks:

```bash
.venv/bin/python exercise_data/test_data_quality.py
node /tmp/smoke_select.js   # only if you still have the scratch harness
```

## 2. Commit (production path)

Stage only intended files — never force-add ignored secrets:

```bash
git status --short          # review; must show no .env, client_secret*.json,
                            # exercise_data/token.json, .venv/, __pycache__/
git add <files you changed> # name files; avoid bare `git add .`
git commit -m "Short summary of the change"
```

Ignored (never committed): `.env`, `client_secret*.json`,
`exercise_data/token.json`, `exercise_data/.oauth_pending.json`, `.venv/`,
`exercise_data/__pycache__/`. Note: root-level `__pycache__/` is not in
`.gitignore` yet — leave it untracked or delete it.

## 3. Publish to GitHub Pages

```bash
git push origin main
```

Requires push access to `github.com/arii/previous_workouts` (HTTPS remote —
use a personal access token or `gh auth login` where you run the push).
Pages rebuilds automatically; reload the live URL after a minute or two.
To confirm a deploy went out: repo Settings → Pages shows the build, or
check the commit is on GitHub first (`git status` should print clean /
up-to-date after pushing).

Rollback: `git revert <bad-commit> && git push origin main`.

## 4. Update the dev box

The exact command depends on how `/hrm` is served there — confirm once:

- Is `/hrm` served from a git checkout of this repo? Then updating is:
  `ssh <user>@<dev-host> 'cd <docroot> && git pull origin main'`
- Otherwise (files copied/rsynced in)? Then sync the changed web files:
  `rsync -av --exclude .git --exclude .venv --exclude __pycache__ \
     --exclude .env --exclude 'client_secret*.json' \
     ./ <user>@<dev-host>:<docroot>/`
  Never sync secrets, `.venv`, or caches to the box.

Fill in here once known: SSH host/user: ____, docroot path: ____,
checkout or copy: ____.

## 5. Refresh the workout data (quarterly-ish)

Needs the project venv + `.env` credentials (see `exercise_data/README.md`
for first-time setup, including the two-step Google consent).

```bash
source .venv/bin/activate
python exercise_data/collect_revisions.py --list-only   # preview new IDs
python exercise_data/collect_revisions.py --rebuild     # download + rebuild + verify
.venv/bin/python exercise_data/test_data_quality.py     # regression tests
```

Then preview locally (step 1), commit the new `revisions/*.txt`,
`workout_history_data_categorized.json`, and `public/js/exercise-data.js`
(step 2), and publish (steps 3–4).

Notes:

- Collection is incremental and idempotent — reruns skip saved revisions.
- Google throttles export downloads; ~100 revisions takes ~25 minutes.
- Google prunes very old Doc revisions from the API, so refresh before
  history you care about ages out of `revisions.list`.
