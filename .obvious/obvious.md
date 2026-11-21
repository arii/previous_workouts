# previous_workouts — Agent Guidance

Static workout-generator web app (no backend, no database). Vanilla JS + Tailwind CSS,
served by Python's built-in HTTP server, deployed to GitHub Pages from `main`.

## Stack

- **Frontend:** Vanilla JavaScript, HTML pages at repo root, Tailwind CSS 3
- **Data:** Historical workout data embedded in `public/js/exercise-data.js` (generated
  from `exercise_data/workout_history_data_categorized.json`; ~1 MB)
- **Dev server:** `python3 -m http.server 8000` (no build step required to serve)
- **CSS build:** Tailwind CLI via npm; output `public/css/style.css` is gitignored

## Commands

| Task | Command |
|---|---|
| Install deps | `npm install` (or `bun install`; a `bun.lock` is present) |
| Build CSS (watch) | `npm run build:css` |
| Build CSS (one-shot) | `npx tailwindcss -i ./src/input.css -o ./public/css/style.css --minify` |
| Start dev server | `npm start` — serves at `http://localhost:8000` |

No lint, typecheck, or test tooling is configured. Verification is manual/browser-based.

## Local verification

1. Start the server: `python3 -m http.server 8000`.
2. `curl` each page — all must return 200: `index.html`, `workout-history.html`,
   `data-exploration.html`, `all-workouts.html`, `exercise-list.html`.
3. In a browser, open `index.html`, click **Generate Workout**, and confirm a workout
   containing warmup/cardio/strength phases renders with no console errors.
4. Check `workout-history.html` renders the historical workout list.

## Codebase map

| Path | What it is |
|---|---|
| `index.html` | Main workout generator page (entry point) |
| `workout-history.html` | Historical workout viewer |
| `data-exploration.html` | Data insights / exploration page |
| `all-workouts.html`, `exercise-list.html` | Full workout list and exercise browser |
| `public/js/` | App logic: `app-static.js`, `exercise-data.js` (embedded data), page-specific `*-static.js` bundles |
| `public/css/` | `style.css` (Tailwind build output, gitignored), `design-system.css` |
| `src/input.css` | Tailwind CSS source |
| `exercise_data/` | Python tooling (Google Drive API) to collect/normalize raw workout revisions and regenerate `exercise-data.js`; `requirements.txt` for this tooling |
| `tailwind.config.js` | Tailwind config |

## Environment

No env vars required. No external services. Everything runs client-side.

## Snapshot

- **Snapshot ID:** `9fos1v0edel17iabqpf3:default`
- **Captured:** 2026-11-13T19:56:07.486Z
- **State:** deps installed, Tailwind CSS built, dev server verified on port 8000
