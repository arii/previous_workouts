#!/usr/bin/env python3
"""Focused regression tests for workout parsing and exercise-name cleanup.

Covers: workout-type + timing-line combining (Chipper 20/15/10), scheme-suffixed
exercises (Cat cow 5 x), standalone labels kept as phases (Finisher), Tabata vs
Tabata holds staying distinct, junk-name filtering, and name canonicalization.

Runs under pytest or bare python:  python exercise_data/test_data_quality.py
"""

import os
import sys
import tempfile

_HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, _HERE)
sys.path.insert(0, os.path.dirname(_HERE))

from regenerate_workout_data import parse_workout_file
from sanitize_exercise_data import is_valid_exercise, standardize_exercise_name


def parse_lines(lines):
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".txt", prefix="revision_1_2024-01-01_00-00-00_",
        delete=False, encoding="utf-8",
    ) as f:
        f.write("\n".join(lines) + "\n")
        path = f.name
    try:
        return parse_workout_file(path)
    finally:
        os.unlink(path)


def test_chipper_timing_combines():
    parsed = parse_lines(["Chipper", "20/15/10", "Band seal jack", "Band squat"])
    assert parsed is not None
    assert [p["phase"] for p in parsed["phases"]] == ["Chipper 20/15/10"]
    assert parsed["phases"][0]["exercises"] == ["Band seal jack", "Band squat"]


def test_lunge_matrix_scheme_appends():
    parsed = parse_lines(["Lunge matrix", "5 per side", "3 way push up 5 each"])
    assert parsed is not None
    assert [p["phase"] for p in parsed["phases"]] == ["Lunge matrix 5 per side"]
    assert parsed["phases"][0]["exercises"] == ["3 way push up 5 each"]


def test_pure_scheme_still_splits_phases():
    parsed = parse_lines(["3 x 10", "Push up", "2 x 15", "Squat"])
    assert parsed is not None
    assert [p["phase"] for p in parsed["phases"]] == ["3 x 10", "2 x 15"]


def test_cat_cow_is_exercise():
    parsed = parse_lines(["3 x 12", "Band s. Row", "Cat cow 5 x"])
    assert parsed is not None
    assert [p["phase"] for p in parsed["phases"]] == ["3 x 12"]
    assert parsed["phases"][0]["exercises"] == ["Band s. Row", "Cat cow 5 x"]


def test_trailing_finisher_kept_as_phase():
    parsed = parse_lines(["3 x 10", "Push up", "Finisher"])
    assert parsed is not None
    assert [p["phase"] for p in parsed["phases"]] == ["3 x 10", "Finisher"]
    assert parsed["phases"][1]["exercises"] == []


def test_standalone_empty_phase_survives_sanitize():
    from sanitize_exercise_data import sanitize_workouts

    out = sanitize_workouts([{"date": "2024-01-01", "filename": "f", "phases": [
        {"phase": "3 x 10", "exercises": ["Push up"]},
        {"phase": "Finisher", "exercises": []},
    ]}], {})
    assert [p["phase"] for p in out[0]["phases"]] == ["3 x 10", "Finisher"]


def test_nonstandalone_empty_phase_dropped():
    from sanitize_exercise_data import sanitize_workouts

    out = sanitize_workouts([{"date": "2024-01-01", "filename": "f", "phases": [
        {"phase": "Emom", "exercises": ["Push up"]},
        {"phase": "60 sec penguins", "exercises": []},
    ]}], {})
    assert [p["phase"] for p in out[0]["phases"]] == ["Emom"]


def test_tabata_holds_stays_distinct():
    parsed = parse_lines(["Tabata", "Push up", "Tabata holds", "Plank"])
    assert parsed is not None
    assert [p["phase"] for p in parsed["phases"]] == ["Tabata", "Tabata holds"]


def test_junk_patterns_rejected():
    for junk in ["1x10", "30x10x3", "40/10 x 2", "30/10 x 2", "2 rounds", "3 rounds"]:
        assert not is_valid_exercise(junk), junk


def test_real_names_accepted():
    for ok in ["Kb swing", "3 way push up 5 each", "Cat cow 5 x", "60 sec penguins", "Rest", "Hold"]:
        assert is_valid_exercise(ok), ok


def test_replacements_run_first():
    assert standardize_exercise_name("Bulgarians") == "Bulgarian Split Squat"
    assert standardize_exercise_name("F. lunge") == "Forward Lunge"


def test_canonical_map():
    from sanitize_exercise_data import build_canonical_map

    mapping = build_canonical_map({
        "Bikes": 16, "bikes": 6,
        "Band kickback": 10, "Band kickbacks": 18,
        "Squat": 5,
    })
    assert mapping["Bikes"] == "Bikes"
    assert mapping["bikes"] == "Bikes"
    assert mapping["Band kickback"] == "Band kickback"
    assert mapping["Band kickbacks"] == "Band kickback"
    assert mapping["Squat"] == "Squat"


if __name__ == "__main__":
    failed = 0
    for name, fn in sorted({k: v for k, v in globals().items() if k.startswith("test_")}.items()):
        try:
            fn()
            print(f"PASS {name}")
        except Exception as e:  # noqa: BLE001 - minimal runner reports all failures
            failed += 1
            print(f"FAIL {name}: {type(e).__name__}: {e}")
    print(f"\n{failed} failed" if failed else "\nall passed")
    sys.exit(1 if failed else 0)
