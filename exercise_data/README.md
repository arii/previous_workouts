# Exercise Data Directory

This directory contains the processed workout history data and related files.

## Files

### Data Files
- **`workout_history_data_categorized.json`** - Main categorized workout data with exercises organized by category (Warmup, Cardio, Strength, Accessory, Recovery)

### Source Files
- **`revisions/`** - Directory containing 147 unique workout revision files downloaded from Google Drive
- **`token.json`** - Google Drive API authentication token (keep secure)

## Data Collection

### API Used
- **Google Drive API v2** - Used to access historical revisions of Google Docs
- **Google Docs API** - For exporting document content as plain text
- **Authentication**: OAuth2 with service account credentials

### Collection Process
The raw workout data was collected from Google Drive using the following approach:
1. **Google Drive API v2** was used to list all revisions of the workout document
2. **Export Links** from API v2 were used to download specific historical versions
3. **Rate limiting** was implemented with 30-second delays between requests to avoid API quotas
4. **Deduplication** was performed to remove identical files (80 duplicates removed from 227 total files)
5. **Data processing** standardized exercise names and categorized exercises by type

### Data Structure

The categorized data includes:
- **141 workout revisions** from July 31, 2023 to September 24, 2025
- **659 unique exercises** categorized into 5 phases
- **117 workout days** with 24 days having multiple workouts (up to 3 per day)
- **Exercise frequency tracking** and daily workout counts

## Categories
- **Warmup** (49 exercises): Basic movements to prepare the body
- **Cardio** (427 exercises): High-intensity interval training and cardiovascular exercises  
- **Strength** (492 exercises): Resistance training with weights and bands
- **Accessory** (544 exercises): Supporting exercises for muscle groups
- **Recovery** (9 exercises): Mobility and stretching

## Most Common Exercises
- **Dumbbell Floor Press** (21 times)
- **Band Clamshells** (21 times)
- **Glute Bridges** (17 times)
- **Band Kickbacks** (16 times)
- **Band Press** (15 times)
- **Band Drag Curls** (14 times)
- **Romanian Deadlift** (13 times)

## Technical Notes
- **File ID**: `1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo`
- **Collection Method**: Google Drive API v2 with export links for historical revisions
- **Rate Limiting**: 30-second delays between API requests
- **Data Processing**: Exercise name standardization and categorization

Last updated: September 27, 2025

## Incremental updates

New revisions are collected without touching existing files in `revisions/`.

Setup (once):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r exercise_data/requirements.txt
```

Credentials live in the repo-root `.env` (gitignored): `GOOGLE_CLIENT_ID`,
`GOOGLE_CLIENT_SECRET_FILE`, `GOOGLE_DRIVE_FILE_ID`, `GOOGLE_TOKEN_FILE`.

```bash
source .venv/bin/activate
python exercise_data/collect_revisions.py --dry-run   # validate config only
python exercise_data/collect_revisions.py --auth-url  # first run: get consent URL
python exercise_data/collect_revisions.py --list-only --auth-code <code>
python exercise_data/collect_revisions.py --rebuild   # download new + rebuild data
```

The first run is a two-step consent: `--auth-url` prints a Google URL;
authorize it, then rerun with `--auth-code` and the pasted code. The token
is cached at `exercise_data/token.json` (gitignored) for later runs.

`--rebuild` regenerates `workout_history_data_categorized.json`, rebuilds
`public/js/exercise-data.js`, sanitizes it, and verifies completeness.
Note: the current JSON contains 13 merged same-day entries from an earlier
manual step; a rebuild lists each revision file separately instead. The
site already renders multi-entry dates, so this is display-safe.
