# Codebase Map — previous_workouts

Static client-side app: HTML pages at the root load JS bundles from `public/js/`.

| Path (depth ≤ 2) | What it is |
|---|---|
| `index.html` | Main workout generator page (entry point) |
| `workout-history.html` | Historical workout viewer |
| `data-exploration.html` | Data insights / exploration page |
| `all-workouts.html` | Full historical workout list |
| `exercise-list.html` | Exercise browser |
| `public/js/app-static.js` | Main application logic (workout generation) |
| `public/js/exercise-data.js` | Embedded exercise/workout data (~1 MB, generated) |
| `public/js/workout-history-static.js` | History page logic |
| `public/js/data-exploration-static.js` | Exploration page logic |
| `public/js/all-workouts-static.js` | All-workouts page logic |
| `public/js/exercise-list-static.js` | Exercise list page logic |
| `public/js/exercise-list-new.js`, `workout-history-combined.js` | Alternate/combined bundles |
| `public/css/style.css` | Tailwind build output (gitignored, regenerate with `npm run build:css`) |
| `public/css/design-system.css` | Hand-maintained design system styles |
| `src/input.css` | Tailwind source (entry for the CSS build) |
| `exercise_data/` | Python data pipeline: collect Google Drive revisions, normalize, regenerate `exercise-data.js`; see `exercise_data/README.md` |
| `tailwind.config.js` | Tailwind configuration |
