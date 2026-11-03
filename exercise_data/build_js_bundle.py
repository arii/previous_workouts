#!/usr/bin/env python3
"""
Build public/js/exercise-data.js from exercise_data/workout_history_data_categorized.json.

Preserves the bundle format the pages expect: a `const exerciseData` payload
plus a `window.EXERCISE_DATA` alias for global access.
"""

import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = REPO_ROOT / "exercise_data" / "workout_history_data_categorized.json"
JS_PATH = REPO_ROOT / "public" / "js" / "exercise-data.js"

HEADER = "// Exercise data generated from workout_history_data_categorized.json\nconst exerciseData = "
TRAILER = ";\n\n// Make data available globally\nwindow.EXERCISE_DATA = exerciseData;\n"


def main():
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    JS_PATH.write_text(HEADER + json.dumps(data, indent=2) + TRAILER, encoding="utf-8")
    summary = data.get("metadata", {}).get("summary", {})
    print(f"Wrote {JS_PATH}")
    print(f"Workouts: {summary.get('total_workouts')}, days: {summary.get('total_days')}")


if __name__ == "__main__":
    main()
