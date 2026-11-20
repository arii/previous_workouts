---
name: local-dev
---

# local-dev — previous_workouts

Recorded during onboarding (2026-11-13).

## What the stack is

Fully static client-side app. Python 3 `http.server` on **port 8000** for serving;
Node 20 + Tailwind CLI 3 for the CSS build. No backend, no database, no env vars,
no external services.

## Setup steps that worked

1. Dependencies: `node_modules` was already present (a `bun.lock` exists at root,
   untracked). `npm install` fails with EACCES if `node_modules`/`bun.lock` are
   root-owned; `npx tailwindcss` still works read-only. If you need a fresh install
   and hit EACCES, use `bun install` or `npm install --prefix` into a writable dir.
2. Build CSS once: `npx tailwindcss -i ./src/input.css -o ./public/css/style.css --minify`.
   Output is gitignored — the site looks unstyled without it.
3. Start server: `python3 -m http.server 8000` (equivalent to `npm start`).
   Run detached: `setsid nohup python3 -m http.server 8000 > /tmp/httpserver.log 2>&1 < /dev/null &`

## Verified primary flow (2026-11-13)

- All 5 HTML pages + CSS/JS assets return HTTP 200.
- Headless Chromium (Playwright): `index.html` loads, clicking **Generate Workout**
  renders a workout with warmup/cardio/strength phases; `workout-history.html` renders;
  zero console/page errors. Screenshots captured at `/tmp/shot-index.png`,
  `/tmp/shot-history.png`.

## Gotchas

- Port 8000 is the canonical port; check for a leftover listener before starting.
- `public/css/style.css` must be built or pages render unstyled.
- The Python scripts under `exercise_data/` are a separate toolchain (Google Drive
  API, `exercise_data/requirements.txt`) — not needed for local dev.
- No lint/typecheck/test tooling exists; do not invent `npm test`.
