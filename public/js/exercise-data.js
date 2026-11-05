// Exercise data generated from workout_history_data_categorized.json
const exerciseData = {
  "metadata": {
    "generated_at": "2026-11-03T06:37:56.355131",
    "source": "raw revision files (regenerated)",
    "total_files_processed": 227,
    "summary": {
      "total_workouts": 227,
      "total_days": 187,
      "date_range": {
        "start": "2023-07-31",
        "end": "2026-10-30"
      },
      "daily_workout_counts": {
        "2024-09-27": 1,
        "2024-09-30": 1,
        "2024-10-02": 2,
        "2024-10-04": 3,
        "2024-10-07": 1,
        "2024-10-09": 1,
        "2024-10-11": 1,
        "2024-10-14": 1,
        "2024-10-16": 2,
        "2024-10-21": 1,
        "2024-10-23": 1,
        "2024-10-28": 1,
        "2024-10-30": 2,
        "2024-11-01": 2,
        "2024-11-04": 1,
        "2024-11-08": 2,
        "2024-11-13": 1,
        "2024-11-18": 2,
        "2024-11-20": 1,
        "2024-11-22": 1,
        "2024-11-25": 1,
        "2024-11-27": 1,
        "2024-12-02": 2,
        "2024-12-04": 2,
        "2024-12-06": 1,
        "2024-12-20": 1,
        "2024-12-23": 1,
        "2024-12-30": 1,
        "2025-01-03": 2,
        "2025-01-13": 1,
        "2025-01-15": 1,
        "2025-01-24": 1,
        "2025-01-27": 1,
        "2025-01-29": 1,
        "2025-02-05": 2,
        "2025-02-10": 1,
        "2025-02-19": 1,
        "2025-02-21": 1,
        "2025-02-24": 1,
        "2025-02-26": 1,
        "2025-02-28": 1,
        "2025-03-03": 1,
        "2025-03-05": 1,
        "2025-03-12": 1,
        "2025-03-14": 1,
        "2025-03-17": 2,
        "2025-03-24": 1,
        "2025-03-28": 2,
        "2025-03-31": 1,
        "2025-04-02": 1,
        "2025-04-04": 1,
        "2025-04-07": 1,
        "2025-04-09": 1,
        "2025-04-11": 2,
        "2025-04-14": 1,
        "2025-04-23": 2,
        "2025-04-25": 1,
        "2025-04-28": 2,
        "2025-04-30": 1,
        "2025-05-05": 1,
        "2025-05-09": 1,
        "2025-05-12": 1,
        "2025-05-19": 1,
        "2025-05-28": 1,
        "2025-05-30": 1,
        "2025-06-18": 1,
        "2025-06-23": 1,
        "2025-06-25": 1,
        "2025-06-27": 1,
        "2025-07-07": 1,
        "2025-07-11": 1,
        "2025-07-23": 1,
        "2025-08-06": 1,
        "2025-08-08": 1,
        "2025-08-13": 1,
        "2025-08-18": 1,
        "2025-08-20": 1,
        "2025-08-22": 1,
        "2025-08-25": 1,
        "2025-08-27": 2,
        "2025-08-29": 2,
        "2025-09-03": 1,
        "2025-09-10": 1,
        "2025-09-12": 1,
        "2025-09-17": 1,
        "2025-09-19": 2,
        "2025-09-22": 1,
        "2025-09-24": 2,
        "2026-01-09": 1,
        "2026-01-16": 1,
        "2026-01-21": 1,
        "2026-01-30": 1,
        "2026-02-01": 1,
        "2026-02-04": 1,
        "2026-02-06": 1,
        "2026-02-20": 2,
        "2026-02-25": 1,
        "2026-02-27": 1,
        "2026-03-02": 1,
        "2026-03-11": 1,
        "2026-03-16": 1,
        "2026-03-18": 1,
        "2026-03-25": 1,
        "2026-03-27": 1,
        "2026-03-30": 2,
        "2026-04-01": 1,
        "2026-04-03": 4,
        "2026-04-08": 1,
        "2026-04-10": 1,
        "2026-04-13": 1,
        "2026-04-15": 1,
        "2026-04-17": 1,
        "2026-04-22": 1,
        "2026-04-24": 1,
        "2026-04-27": 1,
        "2026-05-01": 1,
        "2026-05-06": 1,
        "2026-05-08": 1,
        "2026-06-01": 2,
        "2026-06-03": 1,
        "2026-06-08": 1,
        "2026-06-10": 2,
        "2026-06-15": 1,
        "2026-06-19": 1,
        "2026-06-22": 1,
        "2026-06-26": 1,
        "2026-06-29": 1,
        "2026-07-01": 1,
        "2026-07-03": 1,
        "2026-07-06": 1,
        "2026-07-08": 2,
        "2026-07-10": 1,
        "2026-07-17": 1,
        "2026-07-20": 1,
        "2026-07-24": 1,
        "2026-07-27": 2,
        "2026-08-07": 2,
        "2026-08-10": 2,
        "2026-08-12": 1,
        "2026-08-13": 1,
        "2026-08-17": 1,
        "2026-09-07": 1,
        "2026-09-11": 2,
        "2026-09-14": 1,
        "2026-09-16": 2,
        "2026-09-18": 1,
        "2026-09-21": 1,
        "2026-09-23": 1,
        "2026-09-30": 1,
        "2026-10-02": 1,
        "2026-10-14": 1,
        "2026-10-16": 1,
        "2026-10-19": 1,
        "2026-10-28": 1,
        "2026-10-30": 1,
        "2023-07-31": 2,
        "2023-08-02": 2,
        "2023-08-04": 1,
        "2023-08-09": 1,
        "2023-09-20": 1,
        "2023-10-09": 1,
        "2023-12-11": 1,
        "2024-01-24": 1,
        "2024-02-09": 1,
        "2024-02-28": 1,
        "2024-03-18": 1,
        "2024-04-19": 1,
        "2024-05-08": 1,
        "2024-05-22": 1,
        "2024-06-07": 1,
        "2024-06-26": 1,
        "2024-07-19": 1,
        "2024-08-14": 1,
        "2024-08-19": 1,
        "2024-08-23": 2,
        "2024-08-26": 2,
        "2024-08-28": 2,
        "2024-08-30": 1,
        "2024-09-04": 1,
        "2024-09-06": 1,
        "2024-09-09": 1,
        "2024-09-11": 2,
        "2024-09-13": 1,
        "2024-09-16": 1,
        "2024-09-18": 1,
        "2024-09-20": 1,
        "2024-09-25": 1
      },
      "exercise_counts_by_category": {
        "Warmup": 993,
        "Cardio": 213,
        "Strength": 369,
        "Accessory": 1589,
        "Recovery": 14
      },
      "most_common_exercises": {
        "Db floor press": 33,
        "Band hydrant": 31,
        "Band kickback": 28,
        "Basic crunch": 28,
        "Leg lift": 28,
        "Sh tap": 26,
        "Band facepull": 26,
        "Band bridge": 25,
        "Band press": 23,
        "Leg curl": 23,
        "Bikes": 22,
        "Push up": 21,
        "Kb swing": 20,
        "Burpee": 20,
        "Hip thrust": 20
      },
      "total_unique_exercises": 911
    }
  },
  "categorized_exercises": {
    "Warmup": [
      {
        "exercise": "Ab mat runner clap",
        "phase": "30/10x3",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "30/10x3",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Arrested superman",
        "phase": "30/10x3",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Leg up crunch L",
        "phase": "Tabata",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Leg up crunch r",
        "phase": "Tabata",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Hold leg lift",
        "phase": "Tabata",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "Tabata band",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Kickback L",
        "phase": "Tabata band",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Kick back r",
        "phase": "Tabata band",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata band",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Ab mat",
        "phase": "30/10x2",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "30/10x2",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "30/10x2",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Butterfly",
        "phase": "30/10x2",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Superman",
        "phase": "30/10x3",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "30/10x3",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Mod sp dip L",
        "phase": "30/10x3",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Mod sp dir R",
        "phase": "30/10x3",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "30/10x2",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "M.c",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Plank hip tap",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Heels to heaven",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Superman hold",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Band hip abd",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "M.c",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Plank hip tap",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Heels to heaven",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Superman hold",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Band hip abd",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/10x3",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Plank",
        "phase": "30/10x3",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Band clam L",
        "phase": "30/10x3",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "Tabata",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "Tabata",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Oblique reach",
        "phase": "Tabata",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Oblique reach",
        "phase": "Tabata",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Reach left",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Reach right",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Hydrants",
        "phase": "30/10x3",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Kick backs L/R",
        "phase": "30/10x3",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Arrested supers",
        "phase": "30/10x3",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Weighted d.b.",
        "phase": "30/10x3",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Db russian twist",
        "phase": "30/10x3",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Alt leg drop",
        "phase": "30/10x3",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Weighted d.b.",
        "phase": "30/10x3",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Db russian twist",
        "phase": "30/10x3",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Alt leg drop",
        "phase": "30/10x3",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "Tabata",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Plank",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Reach r",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Reach l",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Band bridge r",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Alt leg drop",
        "phase": "30/10x3",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Heels to heav",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Band butterfly",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Band march",
        "phase": "Tabata",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Dead bug L",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Dead bug R",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Bike crunch",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Step out lunge L",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Step out lunge R",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "R lunge L",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "R lunge R",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Dead bug L",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Dead bug R",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Bike crunch",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Step out lunge L",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Step out lunge R",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "R lunge L",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "R lunge R",
        "phase": "Tabata",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "30/10x3",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Superman",
        "phase": "30/10x3",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Ss L",
        "phase": "Tabata holds",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Ss R",
        "phase": "Tabata holds",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Wide out drops",
        "phase": "Tabata holds",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Alt Curtsy",
        "phase": "Tabata holds",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata holds",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Bw russian twist",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Single reach l",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Single reach r",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Band 45 jack",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Ramp 3 min",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Runner lunge 10",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Sh. tap 20",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Leg flutter 10",
        "phase": "Tabata",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Ab mat runner clap",
        "phase": "30/10x3",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Arrested superman",
        "phase": "30/10x3",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "L sit over kb",
        "phase": "30/10x3",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Tabata",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Slider m.c.",
        "phase": "Tabata",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Soccer tap",
        "phase": "Tabata",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Heels to heav",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Band butterfly",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Band march",
        "phase": "Tabata",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "30/10x3",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Reach obliques",
        "phase": "30/10x3",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "V crunch",
        "phase": "30/10x3",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "45 d lunge",
        "phase": "Tabata",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x3",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Leg circles L",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Leg circles R",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "F Lunge tt",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "R Lunge tt",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Cursty R",
        "phase": "Tabata",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Ab walk outs",
        "phase": "30/10x3",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "30/10x3",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "30/10x3",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "30/10x3",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "30/10x3",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Reverse cr",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "F lunge",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Lateral L",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Lateral R",
        "phase": "Tabata",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "30/10x2",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Single reach l",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Single reach r",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Criss cross flutters",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Split squats l",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Split squats r",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata holds",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "V crunch",
        "phase": "Tabata",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Ab circles L",
        "phase": "Tabata",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Ab circles R",
        "phase": "Tabata",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "Tabata",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Side plank pulse",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Side plank pulse",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "Tabata",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Alt leg drop",
        "phase": "30/10x3",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "30/10x3",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Core march",
        "phase": "30/10x3",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Superman",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Pointers",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Mod sp dip L",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Mod sp dir R",
        "phase": "30/10x3",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Tabata",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band bridge r",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "Tabata",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Tight bird dogL",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Tight bird dogR",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Db march L",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Db march R",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "f/b lunge L",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "f/b lunge r",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Cursty R",
        "phase": "Tabata",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Half burpee",
        "phase": "Tabata",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "runner sit up",
        "phase": "Tabata",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Wide knee tuck",
        "phase": "Tabata",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Hip mobility",
        "phase": "Tabata",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Side plank dip l",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Side plank dip r",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "f/b lunge r",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "f/b lunge L",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "High knees",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Get ups",
        "phase": "Tabata",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Leg up reach L",
        "phase": "Tabata",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Leg up reach R",
        "phase": "Tabata",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Leg up reach L",
        "phase": "Tabata",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Leg up reach R",
        "phase": "Tabata",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Wide knee touch",
        "phase": "Tabata",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Wide knee touch",
        "phase": "Tabata",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Plank",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Slow bikes",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Superman hold",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "March",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Speed skater",
        "phase": "Tabata",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Single reach l",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Single reach r",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Criss cross flutters",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Split squats l",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Split squats r",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata holds",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Side plank dip",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Side plank dip",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "30/10x2",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Plank",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Reach r",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Reach l",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Band bridge r",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Plank",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Reach r",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Reach l",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Band bridge r",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "45 lunge",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Lateral",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "10 reps x 1",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Crabs",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Quadr. Leg circles",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Judo push up",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "30/10x3",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Glute lat tap l",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Stag. pistol l",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Glute lat tap r",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Stag. pistol r",
        "phase": "Tabata",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/10x3",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Reach l",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Reach r",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Side lying leg lifts L",
        "phase": "30/10x2",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Cat cow",
        "phase": "30/10x2",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Rev lunge",
        "phase": "Tabata",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Clams L",
        "phase": "Tabata",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Clams R",
        "phase": "Tabata",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Slider knee tuck",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Obliques L",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Obliques R",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "See saw",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Band 45 jack",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Heels to heav",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Band butterfly",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Band march",
        "phase": "Tabata",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Core march",
        "phase": "30/10x3",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Leg flutters",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Shoulder tap",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Pointers",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Single sh tap",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Single sh tap",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Band dead bug",
        "phase": "30/10x3",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Side plank row",
        "phase": "30/10x3",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Step up",
        "phase": "30/10x3",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "30/10x3",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Band h. Bridge",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Band p. Squat",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Band p. Squat",
        "phase": "Tabata",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/10x3",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "30/10x3",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "30/10x3",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Pointers",
        "phase": "30/10x3",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Bike crunch",
        "phase": "30/10x3",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Feet over kb",
        "phase": "30/10x3",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band jump sq",
        "phase": "Tabata",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "30/10x3",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "30/10x3",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "30/10x3",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Leg up crunch L",
        "phase": "Tabata",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Plank reach L",
        "phase": "Tabata",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "F lunge",
        "phase": "Tabata",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Speed skater",
        "phase": "Tabata",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "Tabata",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Single bird dog",
        "phase": "30/10x3",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Ab mat coffin crunch",
        "phase": "30/10x3",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Rev lunge",
        "phase": "Tabata",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Lat. step L",
        "phase": "Tabata",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Lat. step R",
        "phase": "Tabata",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Plank jack",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Plank jack",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "30/10x2",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x2",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Band plank tap",
        "phase": "30/10x2",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "SP Left",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Sp Right",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "HB march",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "SP Left",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Sp Right",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Clams L",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Clams R",
        "phase": "Tabata",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Cross body knees",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Star sit up",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Alt superman",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Half burpee sumo",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Band plank jack",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Band hip bridge",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Alt Supermans",
        "phase": "30/10x3",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "30/10x3",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Mod sp clam L",
        "phase": "30/10x3",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Mod sp clam R",
        "phase": "30/10x3",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Slider cross tuck",
        "phase": "30/10x3",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Band seal jack",
        "phase": "30/10x3",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "30/10x3",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Band plank march",
        "phase": "30/10x3",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "Tabata",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Single b. R",
        "phase": "Tabata",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Abduction L",
        "phase": "Tabata",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Abduction R",
        "phase": "Tabata",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Palloff press L",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Hold L",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Palloff press R",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Hold R",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Band kick back",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Band clam L",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Band Clamshell Right",
        "phase": "Tabata",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Bike crunch",
        "phase": "30/10x3",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Feet over kb",
        "phase": "30/10x3",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band jump sq",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Feet over kb",
        "phase": "30/10x3",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band jump sq",
        "phase": "Tabata",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "30/10x3",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Stag. pistol l",
        "phase": "Tabata",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Stag. pistol r",
        "phase": "Tabata",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "30/10x2",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Split squat R",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Split squat L",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "SL bridge L",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "SL bridge R",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Band chipper",
        "phase": "Tabata",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "30/10x2",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Ab walk outs",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Ab rev. crunch",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Pointers",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band bridge march",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "30/10x3",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Slider alt curls",
        "phase": "30/10x3",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Clams L/R",
        "phase": "30/10x3",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Slider alt curls",
        "phase": "30/10x3",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Clams L/R",
        "phase": "30/10x3",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "30/10x3",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Band lateral taps",
        "phase": "30/10x3",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata holds",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Star crunch L",
        "phase": "Tabata holds",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Star crunch R",
        "phase": "Tabata holds",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "Tabata  hold",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Hydrant L",
        "phase": "Tabata  hold",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Hydrant R",
        "phase": "Tabata  hold",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata  hold",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "SP Left",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Sp Right",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "Tabata",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Single b. R",
        "phase": "Tabata",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Abduction L",
        "phase": "Tabata",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Abduction R",
        "phase": "Tabata",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Single b. R",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Abduction L",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Abduction R",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Single b. R",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Abduction L",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Abduction R",
        "phase": "Tabata",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Band hydrant L",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Band hydrant R",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "Tabata",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Band hydrant L",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Band hydrant R",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "Tabata",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "45 lunge",
        "phase": "Tabata",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Lateral",
        "phase": "Tabata",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Feet over kb",
        "phase": "30/10x3",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Band jump sq",
        "phase": "Tabata",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Band dead bug",
        "phase": "30/10x3",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Side plank row",
        "phase": "30/10x3",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Leg up reach L",
        "phase": "Tabata",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Leg up reach R",
        "phase": "Tabata",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Criss cross flut",
        "phase": "Tabata",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Leg lift hold",
        "phase": "Tabata",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/10x3",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Plank atw",
        "phase": "30/10x3",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Russian twist",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Ab circles L",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Ab circles R",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Russian twist",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Ab circles L",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Ab circles R",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "Tabata",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Half burpee",
        "phase": "Tabata",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "runner sit up",
        "phase": "Tabata",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Wide knee tuck",
        "phase": "Tabata",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Side plank pulse",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Side plank pulse",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "Tabata",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "45 lunge",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Lateral",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "10 reps x 4 ladder",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Mod push up",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Db drop squat",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Db wide row",
        "phase": "Tabata",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Leg circles L",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Leg circles R",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "S. P. Clam L",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "S. P. Clam R",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Ramp 3 min",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "M.c. 20",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Half burpee 5",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Bridge 10",
        "phase": "Tabata",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "30/10x3",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Curtsy L",
        "phase": "Tabata",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Stag. pistol l",
        "phase": "Tabata",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Curtsy R",
        "phase": "Tabata",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Stag. pistol r",
        "phase": "Tabata",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Superman",
        "phase": "30/10x3",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "30/10x3",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Mod sp dip L",
        "phase": "30/10x3",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Mod sp dir R",
        "phase": "30/10x3",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Ab mat",
        "phase": "30/10x2",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "30/10x2",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "30/10x2",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Butterfly",
        "phase": "30/10x2",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "45 lunge",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Lateral",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "45 lunge",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Lateral",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Split squat R",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Split squat L",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "SL bridge L",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "SL bridge R",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Band chipper",
        "phase": "Tabata",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "30/10x3",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x3",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Feet over kb",
        "phase": "30/10x3",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "Tabata",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band jump sq",
        "phase": "Tabata",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "M.c",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Plank jacks 10",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Plank jacks 10",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "30/10x3",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Heels to heav",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "L. lunge L",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "L. lunge R",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Heels to heav",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Forward Lunge",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "L. lunge L",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "L. lunge R",
        "phase": "Tabata",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata Holds",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata Holds",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Side plank dip l",
        "phase": "Tabata Holds",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Side plank dip r",
        "phase": "Tabata Holds",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Alt leg drop",
        "phase": "30/10x3",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Alt superman",
        "phase": "30/10x3",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Bridge march",
        "phase": "30/10x3",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Leg up reach L",
        "phase": "Tabata holds",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Leg up reach R",
        "phase": "Tabata holds",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata holds",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Ab mat crunch",
        "phase": "Tabata",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Ab circles L",
        "phase": "Tabata",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Ab circles R",
        "phase": "Tabata",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "Tabata",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Band hydrant L",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Band hydrant R",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Reverse",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Band hydrant L",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Band hydrant R",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "Tabata",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Split squat R",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Split squat L",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "SL bridge L",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "SL bridge R",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Band chipper",
        "phase": "Tabata",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Mod v up",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Plank tap",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "F lunge",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Single b. R",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Abduction L",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Abduction R",
        "phase": "Tabata",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Rolling  plank 3 sec",
        "phase": "30/10x3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "30/10x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "V up",
        "phase": "Tabata holds",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata holds",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata holds",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Heels to heav",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Coffin",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Band butterfly",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Leg up reach L",
        "phase": "Tabata",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Leg up reach R",
        "phase": "Tabata",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Criss cross flut",
        "phase": "Tabata",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Leg lift hold",
        "phase": "Tabata",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "See saw plank",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Mod v up",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Bike crunch",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Band single bridge L",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Band jump",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "squat",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "See saw plank",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Mod v up",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Bike crunch",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Band single bridge L",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Band jump",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "squat",
        "phase": "30/10x3",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Runner crunch",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Superman",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Leg lift swipe",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Wide knee tuck",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Single thrust l",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Single thrust r",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Bulgarian l",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Bulgarian r",
        "phase": "Tabata",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "High knees",
        "phase": "Tabata",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Plank jack",
        "phase": "Tabata",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Speed skater",
        "phase": "Tabata",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "Tabata",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "30/10x3",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "30/10x3",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "30/10x3",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Reach left",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Reach right",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Hold",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "2 to 6 ladder",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Box jump sq",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Box push up",
        "phase": "Tabata",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Leg circles L",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Leg circles R",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "S. P. Clam L",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "S. P. Clam R",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Ramp 3 min",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "M.c. 20",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Half burpee 5",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Bridge 10",
        "phase": "Tabata",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Rev lunge",
        "phase": "Tabata",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Lat. step L",
        "phase": "Tabata",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Lat. step R",
        "phase": "Tabata",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "M.c",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Db complex",
        "phase": "Tabata",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Side plank pulse",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Side plank pulse",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "squat",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Split squat L",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Split squat R",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Rest",
        "phase": "Tabata holds",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Cross mc 10",
        "phase": "30/10x3",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Push up 5",
        "phase": "30/10x3",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Drop squat 10",
        "phase": "30/10x3",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Leg up reach L",
        "phase": "Tabata",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Leg up reach R",
        "phase": "Tabata",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "3 way crunch",
        "phase": "30/10x3",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/10x3",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Plank atw",
        "phase": "30/10x3",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "30/10x3",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "30/10x3",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "30/10x3",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "30/10x3",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "30/10x3",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "30/10x3",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Hard plank",
        "phase": "Tabata",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "Tabata",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Superman hold",
        "phase": "Tabata",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Half burpee",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "runner sit up",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Wide knee tuck",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Wall thoracic",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Wall sit lat mobility",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Half burpee",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "runner sit up",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Wide knee tuck",
        "phase": "Tabata",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Ss right",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Ss left",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "Tabata holds",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Ss right",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Ss left",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Bridge",
        "phase": "Tabata hold",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Reach crunch",
        "phase": "30/10x3",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "30/10x3",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/10x3",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "30/10x3",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Plank",
        "phase": "30/10x3",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "30/10x3",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Band clam L",
        "phase": "30/10x3",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "30/10x3",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "SP Left",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Sp Right",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Hollow hold",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "HB march",
        "phase": "Tabata",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Mod v up",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Mod v up",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "Tabata",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Slider knee tuck",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Obliques L",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Obliques R",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "See saw",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band 45 jack",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band f/b jack",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band hydrant",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Tabata",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "30/10x2",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "30/10x2",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "30/10x2",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "30/10x2",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "30/10x2",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "30/10x2",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "Tabata",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "Tabata",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "Tabata",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Star crunch",
        "phase": "Tabata",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      }
    ],
    "Cardio": [
      {
        "exercise": "Kb swing",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Slider tucks",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Band full row",
        "phase": "Chipper 20/15/10",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "Chipper 20/15/10",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Kb clean",
        "phase": "Ladder 6-2",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder 6-2",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Kb clean press",
        "phase": "Ladder 5 to 1",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Burpee row",
        "phase": "Ladder 5 to 1",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Kb clean press",
        "phase": "Ladder 5 to 1",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Burpee row",
        "phase": "Ladder 5 to 1",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Single clean press",
        "phase": "Ladder 1-5",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Kb clean",
        "phase": "Ladder 10-4",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "1 \u00bd band chest press",
        "phase": "Ladder 10-4",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Ladder 2-12",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Db drop squat",
        "phase": "Ladder 2-12",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder 14-4",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Ladder 14-4",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Db thruster",
        "phase": "Ladder 2-12",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Db bent row",
        "phase": "Ladder 2-12",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Kb clean",
        "phase": "Ladder 1 -6",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder 1 -6",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Band full row",
        "phase": "Chipper 20/15/10",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "Chipper 20/15/10",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Pend swing",
        "phase": "Ladder 5-10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "Step yoga push up",
        "phase": "Ladder 5-10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "Single clean press",
        "phase": "Ladder 1-5",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "5 to 10",
        "phase": "Ladder",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Dl high pull",
        "phase": "Ladder",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Wall t spine mob 12",
        "phase": "Ladder",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Chipper 25/20/15/10",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 25/20/15/10",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Band seated row",
        "phase": "Chipper 25/20/15/10",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Hip flexor mob",
        "phase": "Chipper 25/20/15/10",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Band swim V up",
        "phase": "Ladder",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Band swim V up",
        "phase": "Ladder",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Single clean press",
        "phase": "Ladder 1-5",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Single clean press",
        "phase": "Ladder 1-5",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Band full row",
        "phase": "Chipper 20/15/10",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "Chipper 20/15/10",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Chipper 20/15/10",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Kb dl hp",
        "phase": "Ladder",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Bench push up",
        "phase": "Ladder",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "Ladder",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Band full row",
        "phase": "Chipper 20/15/10",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "Chipper 20/15/10",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Chipper 20/15/10",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Db push up row",
        "phase": "Ladder 2 to 6",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Kb deadlift to high pull",
        "phase": "Ladder 2 to 6",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Chipper 20/15/10",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Double crunch",
        "phase": "Chipper 20/15/10",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "10 down",
        "phase": "5 min ladder",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "5 min ladder",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Db push press",
        "phase": "5 min ladder",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "Ladder",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "V up",
        "phase": "Ladder",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Pause hip thrusts",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Cat cow",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Thoracic mob all fours",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Thoracic mob wall",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Db squat curl",
        "phase": "Ladder 2-12",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Ladder",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "Ladder",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Swings",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Db jack",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Db complex",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "1 \u00bd",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Swings",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Db jack",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Db complex",
        "phase": "Chipper 20/15/10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Db squat curl press",
        "phase": "Ladder 2-12",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Db bent wide row",
        "phase": "Ladder 2-12",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "5 up",
        "phase": "5 min ladder",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Kb clean",
        "phase": "5 min ladder",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Kb push press",
        "phase": "5 min ladder",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Band full row",
        "phase": "Chipper 20/15/10",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "Chipper 20/15/10",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Db wide out drops",
        "phase": "Chipper 20/15/10",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "Chipper 20/15/10",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Slider knee tuck",
        "phase": "Chipper 20/15/10",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Box push up",
        "phase": "Ladder 6-2",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Box jump sq",
        "phase": "Ladder 6-2",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "5 to 10",
        "phase": "Ladder",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Dl high pull",
        "phase": "Ladder",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "5 to 10",
        "phase": "Ladder",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Dl high pull",
        "phase": "Ladder",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Band s. Row",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder 2-10",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Kb push press",
        "phase": "Ladder 2-10",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Band skier",
        "phase": "Ladder",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "V up",
        "phase": "Ladder",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Kb clean",
        "phase": "Ladder 10-2",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Db thruster",
        "phase": "Ladder 10-2",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "Ladder",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "V up",
        "phase": "Ladder",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "Ladder",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "V up",
        "phase": "Ladder",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "5 to 10",
        "phase": "Ladder",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Dl high pull",
        "phase": "Ladder",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Wall t spine mob 12",
        "phase": "Ladder",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Wide outs",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Hip flexor mob",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "Ladder 5 to 10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Face pull",
        "phase": "Ladder 5 to 10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "Ladder 5 to 10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "5 to 10",
        "phase": "Ladder",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Dl high pull",
        "phase": "Ladder",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Wall t spine mob 12",
        "phase": "Ladder",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Hip flexor mob",
        "phase": "Chipper 25/20/15/10",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Pend swing",
        "phase": "Ladder 5-10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Db thruster",
        "phase": "Ladder 5-10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Single clean press",
        "phase": "Ladder 1-5",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Band skier",
        "phase": "Ladder",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "V up",
        "phase": "Ladder",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Sumo dl",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Ladder 12/2",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "Chipper 25/20/15",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Chipper 25/20/15",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 25/20/15",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Shoulder tap",
        "phase": "Chipper 25/20/15",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder 2-10",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Kb push press",
        "phase": "Ladder 2-10",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "2 part get up",
        "phase": "Ladder 1-5",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Band squ. Row",
        "phase": "Ladder 12-2",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Pend kb swing",
        "phase": "Ladder 12-2",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Leg lift swipe",
        "phase": "Ladder 12-2",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Band seal jack",
        "phase": "Chipper 20/15/10",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Band alt row",
        "phase": "Chipper 20/15/10",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "Chipper 20/15/10",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "Chipper 20/15/10",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Ladder 5 to 10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder 5 to 10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Ladder",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "Ladder",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Band plank jack",
        "phase": "Chipper 20/15/10",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "Chipper 20/15/10",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Seated row",
        "phase": "Chipper 20/15/10",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Hands free hips",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "Chipper 20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt"
      },
      {
        "exercise": "5 to 10",
        "phase": "Ladder",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Dl high pull",
        "phase": "Ladder",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Wall t spine mob 12",
        "phase": "Ladder",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "Chipper 25/20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Chipper 25/20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "Chipper 25/20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Hip flexor mob",
        "phase": "Chipper 25/20/15/10",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "5 up",
        "phase": "5 min ladder",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Push up",
        "phase": "5 min ladder",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Prisoner jump squat",
        "phase": "5 min ladder",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Pend kb swing",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Db s.s. press l 15",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Db s.sq press r 15",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "P.u.p. Row l 15",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "P.u.p row r 15",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Pend kb swing",
        "phase": "Ladder 5 up for 5 min",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Db push up row",
        "phase": "Ladder 2 to 6",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Kb deadlift to high pull",
        "phase": "Ladder 2 to 6",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Drop squat",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Double crunch",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Ladder",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "Ladder",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "V up",
        "phase": "Ladder",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Punches",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Chipper 20/15/10",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      }
    ],
    "Strength": [
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Band s. Pull",
        "phase": "Spartan",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Box squat",
        "phase": "Spartan",
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt"
      },
      {
        "exercise": "Db thruster 20",
        "phase": "Emom",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band skiers 30",
        "phase": "Emom",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Db renegade 20",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Kb hike swing 10",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Db floor press 20",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Leg curls 20",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "21,s",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Db tricep",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt"
      },
      {
        "exercise": "Band s. Pulls 30",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Kb hike swing 10",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Db floor press 25",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Leg curls 20",
        "phase": "Emom",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "Spartan",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Db alt thruster 20",
        "phase": "Emom",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Renegade row 12",
        "phase": "Emom",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Soccer tap 40",
        "phase": "Emom",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Plank up 12",
        "phase": "Emom",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Db drop squat 25",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Lateral step 20",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Band piston row",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Db drop squat 25",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Lateral step 20",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Db s. Lateral 15",
        "phase": "Emom",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Alt thruster 20",
        "phase": "Emom",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Band skiers 25",
        "phase": "Emom",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Push up tucks 10",
        "phase": "Emom",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Kb feet overs 20",
        "phase": "Emom",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Kb clean 10",
        "phase": "Emom",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Kb sh. To sh. 20",
        "phase": "Emom",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Pull through",
        "phase": "Spartan",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Pull through",
        "phase": "Spartan",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "R lunge pass 16",
        "phase": "Emom",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Db bent row 15",
        "phase": "Emom",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Basic crunch 60 seconds",
        "phase": "Emom",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Kb feet overs 20",
        "phase": "Emom",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Kb clean 10",
        "phase": "Emom",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Kb sh. To sh. 20",
        "phase": "Emom",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt"
      },
      {
        "exercise": "Kb hike swing 15",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Db ren row 16",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Db lat step 16",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Slider 3 way 8",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Side laterals 15",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Pistols  8/8",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Kick backs 8/8",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Pull thru 15",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt"
      },
      {
        "exercise": "Kb hike swing 15",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Db ren row 16",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Db step up 16",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Slider 3 way 8",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Side laterals 15",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Pistols  8/8",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Band Kick backs 15",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "Emom",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Kb clean 15",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Db R. lunge curl 16",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Kb sh. To sh. 12",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Reverse hyper 20",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Thoracic mob",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Ankle",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "21s",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Shoulders",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Hamstrings",
        "phase": "Emom",
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt"
      },
      {
        "exercise": "Db piston row 40",
        "phase": "Emom",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Emom",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Db piston press 40",
        "phase": "Emom",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Kb fast drops 30",
        "phase": "Emom",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Db alt floor press 20",
        "phase": "Emom",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Band lat pull bridge 20",
        "phase": "Emom",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Step up and over 20",
        "phase": "Emom",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Sand bag pull thru 20",
        "phase": "Emom",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Seated band row",
        "phase": "Spartan",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Db \u00be squats",
        "phase": "Spartan",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Toe grabs",
        "phase": "Spartan",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Push up 10",
        "phase": "Emom",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Lateral step 20",
        "phase": "Emom",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Lat pull bridge 30",
        "phase": "Emom",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Band piston row 40",
        "phase": "Emom",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Pull thru 25",
        "phase": "Emom",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Band punches 40",
        "phase": "Emom",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Heels elev squat 15",
        "phase": "Emom",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Db alt thruster 20",
        "phase": "Emom",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "B. bridge lat pull 20",
        "phase": "Emom",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Alt floor press 20",
        "phase": "Emom",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Lat. band walk 60 sec.",
        "phase": "Emom",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band punches 40",
        "phase": "Emom",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Kb dl high pull 15",
        "phase": "Emom",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Db floor press 20",
        "phase": "Emom",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Band swims 40",
        "phase": "Emom",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Band skiers 20",
        "phase": "Emom",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Band punches 40",
        "phase": "Emom",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Db drop squat 20",
        "phase": "Emom",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Dead bug 60 sec",
        "phase": "Emom",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Db jacks 30",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Renegade row 8/8",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Hip thrust 20",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Band punch 50",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Db tricep",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Jump squat",
        "phase": "Emom",
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "Spartan",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Band x jack",
        "phase": "Spartan",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Db alt floor press 20",
        "phase": "Emom",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Band lat pull bridge 20",
        "phase": "Emom",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Step up and over 20",
        "phase": "Emom",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Sand bag pull thru 20",
        "phase": "Emom",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Bag squat 20",
        "phase": "Emom",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Db floor press 15",
        "phase": "Emom",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Wall sit front raise 15",
        "phase": "Emom",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Skiers 60 sec.",
        "phase": "Emom",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Db thruster",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Plank up",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Spartan 10-/25",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Db alt thruster 20",
        "phase": "Emom",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Band swim 30",
        "phase": "Emom",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Band punches 40",
        "phase": "Emom",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Rdl row 15",
        "phase": "Emom",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Kb feet overs 20",
        "phase": "Emom",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Kb clean 10",
        "phase": "Emom",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Kb sh. To sh. 20",
        "phase": "Emom",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Spartan 10-/25",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Band piston row 50",
        "phase": "Emom",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Pull thru 25",
        "phase": "Emom",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Heels elev squat 15",
        "phase": "Emom",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "R lunge pass 16",
        "phase": "Emom",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Db bent row 15",
        "phase": "Emom",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Basic crunch 60 seconds",
        "phase": "Emom",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Band squat row 20",
        "phase": "Emom",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Box push up 10",
        "phase": "Emom",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Band pull thru 20",
        "phase": "Emom",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Db alt sh press 20",
        "phase": "Emom",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Db jacks 25",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Mod V ups 20",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Jump lunge 20",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Plank up 10",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Db bent row 15",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "R lunge pass 16",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Basic crunch 60 seconds",
        "phase": "EMOM x 3",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Wall runners",
        "phase": "Spartan 10-20",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Pull through",
        "phase": "Spartan 10-20",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Heels to heaven",
        "phase": "Spartan 10-20",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "B. squat row 20 Floor press 15",
        "phase": "Emom",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Swings 20",
        "phase": "Emom",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Alt curl press 60 seconds",
        "phase": "Emom",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Wide outs 40",
        "phase": "Emom",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Kb clean 15",
        "phase": "Emom",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Kb sh. To sh. 20",
        "phase": "Emom",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Bike crunch 60",
        "phase": "Emom",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "Spartan",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Wall runners",
        "phase": "Spartan 10-20",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Pull through",
        "phase": "Spartan 10-20",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Heels to heaven",
        "phase": "Spartan 10-20",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Db ren row 16",
        "phase": "Emom",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Band press 30",
        "phase": "Emom",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Penguins 60 sec",
        "phase": "Emom",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Db jacks 25",
        "phase": "EMOM x 3",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Mod V ups 20",
        "phase": "EMOM x 3",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Jump lunge 20",
        "phase": "EMOM x 3",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Plank up 10",
        "phase": "EMOM x 3",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Db jacks 25",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Butterfly sit ups ups 20",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Jump or speed lunge 20",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Plank ups 60",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Db jacks 25",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Butterfly sit ups ups 20",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Jump or speed lunge 20",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Plank ups 60",
        "phase": "EMOM x 3",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Band alt row",
        "phase": "Spartan",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Band alt press",
        "phase": "Spartan",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Spartan",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Spartan",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Spartan",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Spartan 10-/25",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Seated band row",
        "phase": "Spartan",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Db \u00be squats",
        "phase": "Spartan",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Toe grabs",
        "phase": "Spartan",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Seated band row",
        "phase": "Spartan",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Db \u00be squats",
        "phase": "Spartan",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Slider tucks",
        "phase": "Spartan",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Superman alt",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Spartan 10-/25",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Db floor press 15",
        "phase": "Emom",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Lateral step 20",
        "phase": "Emom",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Lat pull bridge 30",
        "phase": "Emom",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Db thruster 20",
        "phase": "Emom",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band piston row 50",
        "phase": "Emom",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Db piston row 30",
        "phase": "Emom",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Db wide outs 25",
        "phase": "Emom",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Kb thruster 20",
        "phase": "Emom",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Ball push out 20",
        "phase": "Emom",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Db thruster 20",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Band b.row 30",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "V up sit up 10",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Db thruster 20",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Band row 30",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Ab mat sit up",
        "phase": "Emom",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Db  feet overs 20",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Kb clean 10",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Kb sh. To sh. 20",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Db  feet overs 20",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Kb clean 10",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Kb sh. To sh. 60 sec",
        "phase": "Emom",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Seated band row",
        "phase": "Spartan",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Db \u00be squats",
        "phase": "Spartan",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Toe grabs",
        "phase": "Spartan",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "Spartan",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Spartan",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "Spartan",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "Spartan",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Band piston row 50",
        "phase": "Emom",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Pull thru 25",
        "phase": "Emom",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Alt leg drops 60 sec",
        "phase": "Emom",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Band row",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Push up",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "Spartan 10-/25",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Band punch 60",
        "phase": "Emom",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Kb dl hi pull 15",
        "phase": "Emom",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Band s. Rows 40",
        "phase": "Emom",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Arrested s.m.",
        "phase": "Emom",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Kb feet overs 20",
        "phase": "Emom",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Kb clean 10",
        "phase": "Emom",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Kb sh. To sh. 20",
        "phase": "Emom",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Band punch 50",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Slider m.c. 50",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Db alt thruster 20",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Db renegade r. 20",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Band punch 50",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Slider m.c. 50",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Db alt thruster 20",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Db renegade r. 20",
        "phase": "Emom",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Band pulls",
        "phase": "Spartan",
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "Spartan",
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt"
      },
      {
        "exercise": "Band bridge pull 20",
        "phase": "Emom",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Band punches 50",
        "phase": "Emom",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Kb swing 25",
        "phase": "Emom",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Plank jacks 50",
        "phase": "Emom",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Db ren row 16",
        "phase": "Emom",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Db alt f. Press 20",
        "phase": "Emom",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Db ren row 16",
        "phase": "Emom",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Kb swing 20",
        "phase": "Emom",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Db alt f. Press 20",
        "phase": "Emom",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Db burpee 10",
        "phase": "Emom",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Db r. Lunge press 20",
        "phase": "Emom",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Db wide row 15",
        "phase": "Emom",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "60 Band plank jack 60 sec",
        "phase": "Emom",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "Emom",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "Emom",
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt"
      },
      {
        "exercise": "Bench thruster",
        "phase": "Spartan",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Piston row",
        "phase": "Spartan",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Slider m.c.",
        "phase": "Spartan",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Db jacks 25",
        "phase": "EMOM x 3",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Mod V ups 20",
        "phase": "EMOM x 3",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Jump lunge 20",
        "phase": "EMOM x 3",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Plank up 10",
        "phase": "EMOM x 3",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Band press",
        "phase": "Spartan",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Band sup pull",
        "phase": "Spartan",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Db thruster",
        "phase": "Spartan",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Band skiers 30",
        "phase": "Emom",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Kb pend swing 15",
        "phase": "Emom",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Band punch 40",
        "phase": "Emom",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Db twist thrust 20",
        "phase": "Emom",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      }
    ],
    "Accessory": [
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Drop squat 10",
        "phase": "3 min ramp",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Burpee 5",
        "phase": "3 min ramp",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 12",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "heels elev kb squat",
        "phase": "3 x 12",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Db bent row",
        "phase": "3 x 12",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 12",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "60 sec.",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Lunge squat lunge",
        "phase": "60 sec.",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Single leg drop",
        "phase": "60 sec.",
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 12",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band french press",
        "phase": "3 x 12",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Box sl hip thrust",
        "phase": "3 x 10",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Db alt floor press",
        "phase": "3 x 10",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 10",
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt"
      },
      {
        "exercise": "R. Lunge Row",
        "phase": "2 x 10",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "2 x 10",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Ankle mobility 12 per",
        "phase": "12 per side",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "3x10",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Db o.h. Tricep",
        "phase": "3x10",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Stag. rdl",
        "phase": "3x10",
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt"
      },
      {
        "exercise": "Spider climbers",
        "phase": "2 x 30",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Bw rus twist",
        "phase": "2 x 30",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "2 x 30",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "2 x 30",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Band lat pull",
        "phase": "3 x 12",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Db sumo d.l.",
        "phase": "3 x 12",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Band chest cross",
        "phase": "3 x 12",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Db \u00be curtsy",
        "phase": "3 x 12",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "2 x 15",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Band tricep pressdowns",
        "phase": "2 x 15",
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 10",
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "2 x 15",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Split squat curl L/R",
        "phase": "2 x 15",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2 x 15",
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 12",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 12",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Db o.h. Tricep",
        "phase": "3 x 12",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Step up L/R",
        "phase": "3 x 10",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Floor press",
        "phase": "3 x 10",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Db full b. curl",
        "phase": "3 x 10",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "Finisher",
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "Finisher",
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "Finisher",
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt"
      },
      {
        "exercise": "Drop squat 8",
        "phase": "3 min ramp",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Dd toe touch 8",
        "phase": "3 min ramp",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Plank jack 8",
        "phase": "3 min ramp",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Db 1 \u00bd rdl",
        "phase": "3 x 10",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Db push press",
        "phase": "3 x 10",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Bridge press",
        "phase": "3 x 10",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "1 \u00bd wedge squat",
        "phase": "3 x 10",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Band upper back pull",
        "phase": "3 x 10",
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "3 x 15",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 15",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Band x jack",
        "phase": "3 x 15",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3 x 12",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Db arnold press",
        "phase": "3 x 12",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Bag hip thrust",
        "phase": "3 x 12",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Wall sit bus driver",
        "phase": "60 sec",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Plank up knee tuck",
        "phase": "60 sec",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "21s bicep",
        "phase": "60 sec",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "Tricep",
        "phase": "60 sec",
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt"
      },
      {
        "exercise": "L/R",
        "phase": "5 min full get up",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x12",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Tricep press ext",
        "phase": "3 x12",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Travel lunge",
        "phase": "3 x12",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "3 x12",
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt"
      },
      {
        "exercise": "Full get up",
        "phase": "5 min",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "L/R",
        "phase": "5 min",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "40/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "40/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Ab mat butterfly sit up",
        "phase": "40/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Band face pull",
        "phase": "30/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Thoracic mob L",
        "phase": "30/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Bridge chest press",
        "phase": "30/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Thoraci mob R",
        "phase": "30/15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "1.5 hip thrust L",
        "phase": "30x15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Hip flexor mob L",
        "phase": "30x15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "1.5 hip thrust R",
        "phase": "30x15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Hip flexor mob R",
        "phase": "30x15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Arm finisher",
        "phase": "30x15x2",
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt"
      },
      {
        "exercise": "Band bridge to lat pull",
        "phase": "3 x 12",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 12",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Wall sit sh glide",
        "phase": "60 sec.",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Sh tap dd toe touch",
        "phase": "60 sec.",
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Band single bridge L",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Abduction",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Abduction",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2 x 12",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Band kickbacks",
        "phase": "2 x 12",
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Band single bridge L",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Abduction",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Abduction",
        "phase": "25/10x3",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 12",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Band kickbacks",
        "phase": "3 x 12",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Slider curls",
        "phase": "3 x 12",
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "25/10x3",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Oblique L",
        "phase": "25/10x3",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Oblique R",
        "phase": "25/10x3",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Band straight arm lat pull",
        "phase": "3x12",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Sumo d.l.",
        "phase": "3x12",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Db tricep floor press",
        "phase": "3 x 10",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Db hammer curl",
        "phase": "3 x 10",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Wall sit shoulder glide",
        "phase": "60 sec x 1",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Thoracic mobility L",
        "phase": "60 sec x 1",
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt"
      },
      {
        "exercise": "Single band row",
        "phase": "3 x 10",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Ss curl L/R",
        "phase": "3 x 10",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 10",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Single press",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Bridge tricep extension",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "3 x 12",
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt"
      },
      {
        "exercise": "Single band row",
        "phase": "3 x 10",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Ss curl L/R",
        "phase": "3 x 10",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 10",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Single press",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Bridge tricep extension",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2 x 12",
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt"
      },
      {
        "exercise": "Y, T, W",
        "phase": "2 x 10",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Seated row",
        "phase": "3 x 15",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Wall sit pull apart",
        "phase": "3 x 15",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Single chest press",
        "phase": "3 x 15",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Tricep pressdown",
        "phase": "3 x 15",
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Side plank p. L",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Side plank p. R",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Side plank p. L",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Side plank p. R",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Db tricep press",
        "phase": "2x12",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "2x12",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "2x12",
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Band lat pull",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Floor press",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Wall tricep ext",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Single calf raise",
        "phase": "3 x 10",
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 10",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Db bridge tricep",
        "phase": "3 x 10",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 10",
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt"
      },
      {
        "exercise": "Lunge squat lunge",
        "phase": "45/15x3",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Sh tap dd toe touch",
        "phase": "45/15x3",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Db Rdl to row",
        "phase": "45/15x3",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Single bridge to chest press",
        "phase": "3 x 10",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Single leg db row",
        "phase": "3 x 10",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Ab mat butterfly sit up",
        "phase": "3 x 10",
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "3x10",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3x10",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "T flies",
        "phase": "3x10",
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt"
      },
      {
        "exercise": "Db W- rows",
        "phase": "2 x 15",
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt"
      },
      {
        "exercise": "Db squat curl",
        "phase": "3x10",
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt"
      },
      {
        "exercise": "Db overhead ext",
        "phase": "3x10",
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt"
      },
      {
        "exercise": "T flies",
        "phase": "3x10",
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt"
      },
      {
        "exercise": "L/R",
        "phase": "5 min get up",
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Side plank dip",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Thoracic mob l/r",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Db hammer curl",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Sit squat",
        "phase": "3 x 10",
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3x15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "3 x 15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Travel lunge 8/8",
        "phase": "3 x 15",
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "2 x 15",
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "3 x 10",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "Slider curls",
        "phase": "3 x 10",
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt"
      },
      {
        "exercise": "3 way push up 5 each",
        "phase": "Lunge matrix 5 per side",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "Ankle mobility 12 per",
        "phase": "12 per side",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "1 \u00bd bulagarians",
        "phase": "3x8",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Renegade row",
        "phase": "3x8",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "Wall sit 1 \u00bd bicep culs",
        "phase": "3x8",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "finisher",
        "phase": "3x8",
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt"
      },
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Half burpee 5",
        "phase": "3 min ramp",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "3 min ramp",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "1 \u00bd hip thrust",
        "phase": "3x8",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Single bridge to chest press",
        "phase": "3x8",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Db hammer curl",
        "phase": "3x8",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "finisher",
        "phase": "3x8",
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "2 x 15",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "2 x 15",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "2 x 15",
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt"
      },
      {
        "exercise": "Hip mob floor",
        "phase": "2 x 10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "90 leg rotations",
        "phase": "2 x 10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "Wall",
        "phase": "2 x 10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "1 \u00bd band press",
        "phase": "2 x 10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "1 \u00bd band pull",
        "phase": "2 x 10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "1 \u00bd bw thrust",
        "phase": "2 x 10",
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "25/10x3",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Side plank RT l",
        "phase": "25/10x3",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Side plank RT r",
        "phase": "25/10x3",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Band deep squat",
        "phase": "40/10x3",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "40/10x3",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Db 1.5 floor press",
        "phase": "3 x 8",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Single RDL 8/8",
        "phase": "3 x 8",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Coffin 1.5 crunch",
        "phase": "3 x 8",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Db 1.5 pull over",
        "phase": "3 x 10",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Bulgarians 10/10",
        "phase": "3 x 10",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "60 sec",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Plank up, sh tap, dd toe touch",
        "phase": "60 sec",
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt"
      },
      {
        "exercise": "Slider tucks",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Alt kickbacks",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x10",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Bag thrust",
        "phase": "3x10",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Bent row",
        "phase": "3x10",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Slider curls",
        "phase": "3x10",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "2 x 15",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "2 x 15",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Butterfly situp",
        "phase": "2 x 15",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2 x 15",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "2 x 15",
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt"
      },
      {
        "exercise": "Slider tucks",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Alt kickbacks",
        "phase": "25/10x3",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "3x15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Bent row",
        "phase": "3x15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Slider curls",
        "phase": "3x15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "3 x 15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "3 x 15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "3 x 15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 15",
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt"
      },
      {
        "exercise": "Palloff press L",
        "phase": "25/10x2",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Kneeling band chop L",
        "phase": "25/10x2",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Repeat R",
        "phase": "25/10x2",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "F. walk 6",
        "phase": "3 min bands",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Plank jack 6",
        "phase": "3 min bands",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "R. walk 6",
        "phase": "3 min bands",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Speed squat 6",
        "phase": "3 min bands",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Band bridge pull",
        "phase": "3 x 10",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Kb stag. rdl",
        "phase": "3 x 10",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "One arm press w bridge",
        "phase": "3 x 10",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "3 x 10",
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "25/10x3",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Clams L/R",
        "phase": "25/10x3",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Drag curl",
        "phase": "3 x 12",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "3 x 12",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Single leg bridge pulse",
        "phase": "3 x 12",
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 10",
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt"
      },
      {
        "exercise": "Basic crunch",
        "phase": "25/10x3",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Reverse crunch",
        "phase": "25/10x3",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Oblique reach",
        "phase": "25/10x3",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Alt curl press",
        "phase": "3 x 8",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "S.L. hip thrust",
        "phase": "3 x 8",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Db alt kickback",
        "phase": "3 x 8",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Wall sit",
        "phase": "45 sec",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Sh. tap to dd tt",
        "phase": "45 sec",
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "2 x 15",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Wall sit bus driver",
        "phase": "60 sec",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Plank up knee tuck",
        "phase": "60 sec",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "21s bicep",
        "phase": "60 sec",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "Tricep",
        "phase": "60 sec",
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 10",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 10",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Strict press",
        "phase": "3 x 10",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Db lying tricep",
        "phase": "3 x 10",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 12",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Band french press",
        "phase": "3 x 12",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "3 x 12",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "3 x 12",
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "25/10x3",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Side plank dip l",
        "phase": "25/10x3",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Side plank dip r",
        "phase": "25/10x3",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Db wide row",
        "phase": "3 x 12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "3x12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "3x12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Db curl arnold press",
        "phase": "3x12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "3x12",
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "25/10x3",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "25/10x3",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Pointer",
        "phase": "25/10x3",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Drop squat 10",
        "phase": "3 min ramp",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Slider m.c. 10",
        "phase": "3 min ramp",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Pull apart 5",
        "phase": "3 min ramp",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Kneeling curl press l/r",
        "phase": "3 x 8",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Single kick back",
        "phase": "3 x 8",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3 x 8",
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt"
      },
      {
        "exercise": "Ss hammer curl L",
        "phase": "3 x 10",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Ss hammer curl R",
        "phase": "3 x 10",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Bridge press tricep ext.",
        "phase": "3 x 10",
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt"
      },
      {
        "exercise": "Wall sit hammer curl",
        "phase": "60 sec",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Alt band pressdowns",
        "phase": "60 sec",
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Pull down",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Sumo deadlift",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Push up",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Dd knee tuck Up",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Pull down",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Sumo deadlift",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Db alt curl press",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x12",
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Sup sand bag row",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Band face pull",
        "phase": "3x12",
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 12",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Tricep extension",
        "phase": "3 x 12",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "3 x 12",
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3x8",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3x8",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Wall sit bicep curls",
        "phase": "3x8",
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt"
      },
      {
        "exercise": "Criss cross leg lifts",
        "phase": "3 x 10",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Side plank clams L/R",
        "phase": "3 x 10",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Pointers",
        "phase": "3 x 10",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db drop squat",
        "phase": "3 min ramp",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Shoulder tap",
        "phase": "3 min ramp",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 min ramp",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Incline bench",
        "phase": "3 x 12",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db sumos",
        "phase": "3 x 12",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 12",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Ss arnold press",
        "phase": "3 x 12",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db compex",
        "phase": "Finisher",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "8 reps x 4",
        "phase": "Finisher",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "Finisher",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db s. Rows",
        "phase": "Finisher",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Db squat",
        "phase": "Finisher",
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "3 x 10",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Alt leg curl",
        "phase": "3 x 10",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Band lateral walk",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Step up",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Squat curl",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "3 x 8",
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt"
      },
      {
        "exercise": "R. lunge press",
        "phase": "3x10",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3x10",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "3x10",
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt"
      },
      {
        "exercise": "Ankle mobility 12 per side",
        "phase": "12 per side",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "21,s",
        "phase": "12 per side",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Bicep",
        "phase": "12 per side",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Tricep",
        "phase": "12 per side",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Glutes",
        "phase": "12 per side",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Shoulders",
        "phase": "12 per side",
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "40/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "40/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Ab mat butterfly sit up",
        "phase": "40/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Band face pull",
        "phase": "30/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Thoracic mob L",
        "phase": "30/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Bridge chest press",
        "phase": "30/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Thoraci mob R",
        "phase": "30/15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "1.5 hip thrust L",
        "phase": "30x15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Hip flexor mob L",
        "phase": "30x15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "1.5 hip thrust R",
        "phase": "30x15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Hip flexor mob R",
        "phase": "30x15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Arm finisher",
        "phase": "30x15x2",
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt"
      },
      {
        "exercise": "Rev. lunge to curtsy",
        "phase": "3x8",
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt"
      },
      {
        "exercise": "1 \u00bd floor press",
        "phase": "3x8",
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt"
      },
      {
        "exercise": "Db 1 \u00bd pullover",
        "phase": "3x8",
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "2x15",
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "2x15",
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2x15",
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "3 x 15",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 15",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Band x jack",
        "phase": "3 x 15",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3 x 12",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Db arnold press",
        "phase": "3 x 12",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Bag hip thrust",
        "phase": "3 x 12",
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "3 x 15",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 15",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 15",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3 x 12",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Db arnold press",
        "phase": "3 x 12",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Bag hip thrust",
        "phase": "3 x 12",
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "30/5x3",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/5x3",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Rdl to row",
        "phase": "3 x 6",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Curl press stand",
        "phase": "3 x 6",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Long stetch",
        "phase": "3 x 6",
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt"
      },
      {
        "exercise": "Band one arm pull",
        "phase": "3 x 12",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 12",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Band one arm press",
        "phase": "3 x 12",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 12",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 12",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 12",
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt"
      },
      {
        "exercise": "Curl to press",
        "phase": "3 x 10",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Sumo dl",
        "phase": "3 x 10",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "3 x 10",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Yoga cool down",
        "phase": "3 x 10",
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "60/15 45/15",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "60/15 45/15",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Squat row",
        "phase": "60/15 45/15",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "L sit over kb",
        "phase": "60/15 45/15",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Drag curl",
        "phase": "3 x 10",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "O.h. tricep",
        "phase": "3 x 10",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Calf raise 10 sec/10reps",
        "phase": "3 x 10",
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt"
      },
      {
        "exercise": "Ankle mobility 12 per side",
        "phase": "12 per side",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "21,s",
        "phase": "12 per side",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Bicep",
        "phase": "12 per side",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Tricep",
        "phase": "12 per side",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Glutes",
        "phase": "12 per side",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Shoulders",
        "phase": "12 per side",
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 12",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3 x 12",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Split squats",
        "phase": "3 x 12",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Band seated row",
        "phase": "3 x 12",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "3 x 12",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Db o.h. Tricep",
        "phase": "3 x 12",
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt"
      },
      {
        "exercise": "Db ab march L",
        "phase": "25/10x3",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Band stir the pot L",
        "phase": "25/10x3",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x12",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x12",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 12",
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt"
      },
      {
        "exercise": "Bulgarians l/r",
        "phase": "3 x 10",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Band straight arm lat pull",
        "phase": "3 x 10",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Db bicep curl",
        "phase": "3 x 10",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 12",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "3 x 12",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "3 x 12",
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt"
      },
      {
        "exercise": "Hold pointer L",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Pointer L",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Hold Pointer R",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Pointer R",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Hold hip thrust L",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Hip thrust L",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Hold hip thrust R",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "20/20x3",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Staggered rdl",
        "phase": "3 x 8",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Staggered push up",
        "phase": "3 x 8",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Lateral lunge",
        "phase": "3 x 8",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "L sit over kb",
        "phase": "3 x 8",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Yoga cool down",
        "phase": "3 x 8",
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt"
      },
      {
        "exercise": "Press bridge",
        "phase": "3 x 12",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Staggered Rdl to row",
        "phase": "3 x 12",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Wall sit sh glide",
        "phase": "60 sec.",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Sh tap dd toe touch",
        "phase": "60 sec.",
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10/3",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Straight leg lift",
        "phase": "25/10/3",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Drag curl",
        "phase": "3 x 12",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "3 x 12",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Easy leg curls",
        "phase": "3 x 12",
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt"
      },
      {
        "exercise": "Rdl row",
        "phase": "3 x 10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Bulgarian",
        "phase": "3 x 10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3x10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3x10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3x10",
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 12",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 12",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 12",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 12",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Band oh tricep",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2 x 15",
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt"
      },
      {
        "exercise": "Band s. Row",
        "phase": "3 x 12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Band press",
        "phase": "3 x 12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Cat cow 5 x",
        "phase": "3 x 12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Db hammers",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Wall tricep",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Calf raise x 20",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2x12",
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "Complex 5x5",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "High pull",
        "phase": "Complex 5x5",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "1 \u00bd squat",
        "phase": "Complex 5x5",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Hang clean",
        "phase": "Complex 5x5",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Alt box ch press",
        "phase": "3x10",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Single Hip thurst",
        "phase": "3x10",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Kb curl",
        "phase": "3 x 12",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Tricep plank",
        "phase": "3 x 12",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Butterfly bridge",
        "phase": "3 x 12",
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt"
      },
      {
        "exercise": "Curl to press",
        "phase": "3 x 10",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Sumo dl",
        "phase": "3 x 10",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "3 x 10",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Yoga cool down",
        "phase": "3 x 10",
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt"
      },
      {
        "exercise": "Band squat row",
        "phase": "40/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Cross chest press",
        "phase": "40/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Ab mat butterfly sit up",
        "phase": "40/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Band face pull",
        "phase": "30/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Thoracic mob L",
        "phase": "30/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Bridge chest press",
        "phase": "30/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Thoraci mob R",
        "phase": "30/15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "1.5 hip thrust L",
        "phase": "30x15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Hip flexor mob L",
        "phase": "30x15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "1.5 hip thrust R",
        "phase": "30x15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Hip flexor mob R",
        "phase": "30x15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Arm finisher",
        "phase": "30x15x2",
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt"
      },
      {
        "exercise": "Db goblet squat",
        "phase": "40/30/20 (15 off)",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "40/30/20 (15 off)",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Db sumo dl",
        "phase": "40/30/20 (15 off)",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "40/30/20 (15 off)",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Db 1.5 pull over",
        "phase": "3 x 10",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Bulgarians 10/10",
        "phase": "3 x 10",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "60 sec",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Plank up, sh tap, dd toe touch",
        "phase": "60 sec",
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Rear delt flye",
        "phase": "3x15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 15",
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3x10",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Bridge chest tricep",
        "phase": "3x10",
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt"
      },
      {
        "exercise": "Back bridge",
        "phase": "60 sec",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Hip mob",
        "phase": "60 sec",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Ankle mob.",
        "phase": "60 sec",
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt"
      },
      {
        "exercise": "Db bent row",
        "phase": "3 x 10",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Single press bridge",
        "phase": "3 x 10",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 10",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "21s",
        "phase": "3 x 10",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 10",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3 x 10",
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Push press",
        "phase": "3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "squat",
        "phase": "3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "rows",
        "phase": "3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Straight arm pulls",
        "phase": "3 x 10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Bridge tricep extension",
        "phase": "3 x 10",
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "1 \u00bd  3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Push press",
        "phase": "1 \u00bd  3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "squat",
        "phase": "1 \u00bd  3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "rows",
        "phase": "1 \u00bd  3 x 6",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Straight arm pulls",
        "phase": "3 x 10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Bridge tricep extension",
        "phase": "3 x 10",
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt"
      },
      {
        "exercise": "Renegade row",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Db kick back",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Human maker",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "lunge",
        "phase": "3 x 10",
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt"
      },
      {
        "exercise": "1.5 hip thrust L",
        "phase": "30x15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Hip flexor mob L",
        "phase": "30x15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "1.5 hip thrust R",
        "phase": "30x15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Hip flexor mob R",
        "phase": "30x15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Band face pull",
        "phase": "30/15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Thoracic mob L",
        "phase": "30/15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Bridge chest press",
        "phase": "30/15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Thoraci mob R",
        "phase": "30/15x2",
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Finisher or Stretch",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Plank up",
        "phase": "Finisher or Stretch",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Reverse lunge",
        "phase": "Finisher or Stretch",
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Box sl hip thrust",
        "phase": "3 x 10",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Db 1 \u00bd chest press",
        "phase": "3 x 10",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 10",
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt"
      },
      {
        "exercise": "Band seated row",
        "phase": "3 x 12",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "3 x 12",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Db push press",
        "phase": "3 x 12",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Wall sit Db hammer curl",
        "phase": "3 x 12",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "3 x 12",
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt"
      },
      {
        "exercise": "B. pressdown",
        "phase": "2 x 15",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "2 x 15",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 15",
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Single leg curl",
        "phase": "3 x 10",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Single calf raise",
        "phase": "3 x 10",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Band lateral walk",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Step up",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "3 x 8",
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "Alt leg curl",
        "phase": "3 x 10",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "T flies",
        "phase": "2 x 15",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "Band hip b. Lat pull",
        "phase": "2 x 15",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "2 x 15",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "2 x 15",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "2 x 15",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2 x 15",
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt"
      },
      {
        "exercise": "Split squats",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Single calf raise",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Yoga cooldown",
        "phase": "3 x 10",
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt"
      },
      {
        "exercise": "Db goblet squat",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Db sumo dl",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Step up",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2 x 15",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "2 x 15",
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt"
      },
      {
        "exercise": "Db goblet squat",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Db sumo dl",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "40/30/20 (15 off)",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2 x 15",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "2 x 15",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Slider knee tuck",
        "phase": "2 x 15",
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt"
      },
      {
        "exercise": "Ab mat coffin",
        "phase": "25/10x3",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "25/10x3",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Runner",
        "phase": "25/10x3",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x12",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x12",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Curstys",
        "phase": "3 x 10",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 10",
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt"
      },
      {
        "exercise": "Leg lifts",
        "phase": "3 x 10",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Side plank clams L/R",
        "phase": "3 x 10",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Pointers",
        "phase": "3 x 10",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Db drop squat",
        "phase": "3 min ramp",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "3 min ramp",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 min ramp",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Db compex",
        "phase": "Finisher",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "6 reps x 4",
        "phase": "Finisher",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "Finisher",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Db s. Rows",
        "phase": "Finisher",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Db squat",
        "phase": "Finisher",
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt"
      },
      {
        "exercise": "Band one arm pull",
        "phase": "3 x 12",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 12",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Band one arm press",
        "phase": "3 x 12",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 12",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 12",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 12",
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt"
      },
      {
        "exercise": "Press bridge",
        "phase": "3 x 12",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Staggered Rdl to row",
        "phase": "3 x 12",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "3 x 12",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "Ankle mobility 12 per side",
        "phase": "12 per side",
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt"
      },
      {
        "exercise": "X - Jacks",
        "phase": "20/15/10",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "squat",
        "phase": "20/15/10",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Seated Rows",
        "phase": "20/15/10",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 12",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Ab mat sit up",
        "phase": "3 x 12",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "2 x 12",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "2 x 12",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Db curl to arnold press",
        "phase": "2 x 12",
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt"
      },
      {
        "exercise": "Kickbacks l/r",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band bridge l",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band bridge r",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band squat 10",
        "phase": "25/5x2",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band curls",
        "phase": "3 x 12",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Band kick back",
        "phase": "3 x 12",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Bw calf raise",
        "phase": "3 x 12",
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt"
      },
      {
        "exercise": "Fb lunge L",
        "phase": "60/15x1",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Fb lunge R",
        "phase": "60/15x1",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Ankle mobility 12 per",
        "phase": "12 per side",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Rdl row",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Bulgarian",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Thoracic mob",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Ankle",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt"
      },
      {
        "exercise": "Rdl row",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Bulgarian",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Thoracic mob",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Ankle",
        "phase": "3x10",
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt"
      },
      {
        "exercise": "Db ab march L",
        "phase": "25/10x3",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Band stir the pot L",
        "phase": "25/10x3",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x12",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x12",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 12",
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt"
      },
      {
        "exercise": "Stag rld to row",
        "phase": "3x10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Bridge to press",
        "phase": "3x10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3x10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Single calf raise",
        "phase": "3x10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 12",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Stag rld to row",
        "phase": "3x10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Bridge to press",
        "phase": "3x10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3x10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Single calf raise",
        "phase": "3x10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2x15",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "B. kickback",
        "phase": "2x15",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "2x15",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "40/15x2",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Alt floor press",
        "phase": "40/15x2",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Ab mat butterfly sit up",
        "phase": "40/15x2",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Single leg curl",
        "phase": "3 x 10",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Single calf raise",
        "phase": "3 x 10",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "3 x 10",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Box jump squat",
        "phase": "3 x 10",
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt"
      },
      {
        "exercise": "Db squat",
        "phase": "Db complex 4x8",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Db clean",
        "phase": "Db complex 4x8",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Db push press",
        "phase": "Db complex 4x8",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "Db complex 4x8",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "B. bridge pulls",
        "phase": "3 x 15",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "B. chest press",
        "phase": "3 x 15",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "slider/ball curl",
        "phase": "3 x 15",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3 x 15",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Plank up",
        "phase": "Finisher 10",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Finisher 10",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "Finisher 10",
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt"
      },
      {
        "exercise": "M.c. 20",
        "phase": "3 min",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Dead bug 10",
        "phase": "3 min",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Wide drops",
        "phase": "3 min",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "60/45/30",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Kb elev squat",
        "phase": "60/45/30",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "60/45/30",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "L sits",
        "phase": "60/45/30",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Db bicep curl",
        "phase": "3x10",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Wall tricep",
        "phase": "3x10",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Calf raise 2 sec",
        "phase": "3x10",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Plank up",
        "phase": "Finisher 10",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Finisher 10",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "Finisher 10",
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt"
      },
      {
        "exercise": "Single curl press",
        "phase": "2 x 8",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "2 x 8",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "2 x 8",
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt"
      },
      {
        "exercise": "Renegade row",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Db kick back",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Human maker",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "lunge",
        "phase": "3 x 10",
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt"
      },
      {
        "exercise": "Renegade row",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Db kick back",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Human maker",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "lunge",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt"
      },
      {
        "exercise": "Db alt row",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Db kick back",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Human maker",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "lunge",
        "phase": "3 x 10",
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Pulse squat top",
        "phase": "25/5x3 band",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Pulse sq. bottom",
        "phase": "25/5x3 band",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Rdl to row",
        "phase": "3 x 10",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Single press/br",
        "phase": "3 x 10",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "slider/ball tuck",
        "phase": "3 x 10",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Arnold press",
        "phase": "3 x 10",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Sp squat curl",
        "phase": "3 x 10",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Tricep plank",
        "phase": "3 x 10",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "2 x 20",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Mod v up",
        "phase": "2 x 20",
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt"
      },
      {
        "exercise": "Alt curl to arnolds",
        "phase": "3 x 8",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Single rdl",
        "phase": "3 x 8",
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt"
      },
      {
        "exercise": "Single rdl row",
        "phase": "3x8",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "Box push up",
        "phase": "3x8",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "10 HM",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "lunge / lunge",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt"
      },
      {
        "exercise": "Single rdl row",
        "phase": "3x8",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "Box push up",
        "phase": "3x8",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "10 HM",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "lunge / lunge",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt"
      },
      {
        "exercise": "Stag kb rdl",
        "phase": "3x8",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "Plank up l/r",
        "phase": "3x8",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "10 HM",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "lunge / lunge",
        "phase": "Finisher",
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt"
      },
      {
        "exercise": "Alt curl to arnolds",
        "phase": "3 x 8",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Single rdl",
        "phase": "3 x 8",
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "25/10x3",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Side p ll RT l",
        "phase": "25/10x3",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Side p ll RT r",
        "phase": "25/10x3",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Band deep squat",
        "phase": "40/10x3",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "40/10x3",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Db 1.5 floor press",
        "phase": "3 x 8",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Single RDL 8/8",
        "phase": "3 x 8",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Coffin 1.5 crunch",
        "phase": "3 x 8",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Db 1.5 pull over",
        "phase": "3 x 10",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Bulgarians 10/10",
        "phase": "3 x 10",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "60 sec",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Plank up, sh tap, dd toe touch",
        "phase": "60 sec",
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Wall sit hammer curl",
        "phase": "60 sec",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Alt band pressdowns",
        "phase": "60 sec",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "60 sec",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "60 sec",
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt"
      },
      {
        "exercise": "f/b b. walk 3",
        "phase": "25/5x3 band",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Plank jack",
        "phase": "25/5x3 band",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Wall sit hammer curl",
        "phase": "60 sec",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Alt band pressdowns",
        "phase": "60 sec",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "60 sec",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "60 sec",
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Toe touch",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Flutter",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Band single bridge L",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Abduction",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Bridge R",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Abduction",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Ramp 3min",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Band seals 10",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Band f/b 10",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Band squat",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "25/10x3",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Ankle mobility 12 per side",
        "phase": "12 per side",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "21,s",
        "phase": "12 per side",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Bicep",
        "phase": "12 per side",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Tricep",
        "phase": "12 per side",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Glutes",
        "phase": "12 per side",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Shoulders",
        "phase": "12 per side",
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "30/5x3",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/5x3",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Band press",
        "phase": "3x10",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x10",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Band high pull",
        "phase": "3x10",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Hip thrust",
        "phase": "3x10",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Rdl to row",
        "phase": "3 x 6",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Curl press stand",
        "phase": "3 x 6",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Long stetch",
        "phase": "3 x 6",
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt"
      },
      {
        "exercise": "Band face pull",
        "phase": "30/15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Thoracic mob L",
        "phase": "30/15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Bridge chest press",
        "phase": "30/15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Thoraci mob R",
        "phase": "30/15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "1.5 hip thrust L",
        "phase": "30x15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Hip flexor mob L",
        "phase": "30x15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "1.5 hip thrust R",
        "phase": "30x15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Hip flexor mob R",
        "phase": "30x15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Arm finisher",
        "phase": "30x15x2",
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Band s. Row",
        "phase": "3 x 12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Band press",
        "phase": "3 x 12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Cat cow 5 x",
        "phase": "3 x 12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Db hammers",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Wall tricep",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Calf raise x 20",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2x12",
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Sand bag pull thru",
        "phase": "3x12",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "3x12",
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "f/b jack",
        "phase": "25/5x3 band",
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Sh. tap 10",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "March bridge",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "60,45,30 sec.(20)",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "3 way squat",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Runner clap",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Plank up",
        "phase": "3 min ramp",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "Ankle mobility 12 per",
        "phase": "12 per side",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "plan",
        "phase": "3 min ramp",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "3 min ramp",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "1 \u00bd hip thrust",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Single bridge to chest press",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "Db hammer curl",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "finisher",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt"
      },
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Dd toe touch 6",
        "phase": "3 min ramp",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "3 min ramp",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "1 \u00bd hip thrust",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Single bridge to chest press",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Db hammer curl",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "finisher",
        "phase": "3x8",
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "3 x 15",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "3 x 15",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Wall sh glide",
        "phase": "3 x 15",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3 x 15",
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "25/10x3",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Side plank p. L",
        "phase": "25/10x3",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Side plank p. R",
        "phase": "25/10x3",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "3x12",
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "25/5x3",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Side reach t",
        "phase": "25/5x3",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Side reach t",
        "phase": "25/5x3",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt"
      },
      {
        "exercise": "Plank reach",
        "phase": "25/5x3",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Side reach t",
        "phase": "25/5x3",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Side reach t",
        "phase": "25/5x3",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt"
      },
      {
        "exercise": "Wall sit hammer curl",
        "phase": "60 sec",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Alt band pressdowns",
        "phase": "60 sec",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "60 sec",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "60 sec",
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "2 x 15",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "2 x 15",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "2 x 15",
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "30/5x3",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/5x3",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Single rdl",
        "phase": "3 x 8",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Curl press",
        "phase": "3 x 8",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Db alt kickback",
        "phase": "3 x 8",
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt"
      },
      {
        "exercise": "Single rdl row",
        "phase": "3 x 10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Ss press",
        "phase": "3 x 10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Tricep Plank up",
        "phase": "3 x 10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Curtsy curl",
        "phase": "3x10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Band straight arm row",
        "phase": "3x10",
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt"
      },
      {
        "exercise": "Band one arm pull",
        "phase": "3 x 12",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 12",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Band one arm press",
        "phase": "3 x 12",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 12",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 12",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 12",
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt"
      },
      {
        "exercise": "M.c",
        "phase": "2 x 30",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Bw rus twist",
        "phase": "2 x 30",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Bikes",
        "phase": "2 x 30",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "2 x 30",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Seated row",
        "phase": "3 x12",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Db sumo d.l.",
        "phase": "3 x12",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Band chest cross",
        "phase": "3 x12",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Db r lunge curtsy",
        "phase": "3 x12",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "2 x 15",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Band tricep pressdowns",
        "phase": "2 x 15",
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Box sl hip thrust",
        "phase": "3 x 10",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Db alt incline press",
        "phase": "3 x 10",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Db inc. curls",
        "phase": "3 x 10",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 10",
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 12",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band french press",
        "phase": "3 x 12",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "30/5x3",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/5x3",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x12",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x12",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 12",
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "30/5x3",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Dead bug",
        "phase": "30/5x3",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x12",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x12",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Db curl press",
        "phase": "3 x 12",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Wall tricep",
        "phase": "3 x 12",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 12",
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt"
      },
      {
        "exercise": "X - Jacks",
        "phase": "20/15/10",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "squat",
        "phase": "20/15/10",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Seated Rows",
        "phase": "20/15/10",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Db renegade row",
        "phase": "3 x 8/8",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Kb single rdl",
        "phase": "3 x 8/8",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Ab mat sit up (15)",
        "phase": "3 x 8/8",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "2 x 12",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "2 x 12",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Db curl to arnold press",
        "phase": "2 x 12",
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt"
      },
      {
        "exercise": "Plank march",
        "phase": "25/10x3",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Penguins",
        "phase": "25/10x3",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Superman",
        "phase": "25/10x3",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Band deep squat",
        "phase": "40/10x3",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "40/10x3",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Bulgarian",
        "phase": "3 x 10",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Dd push up",
        "phase": "3 x 10",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "3 x 10",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 10",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "3 x 10",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "60 sec",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Plank up, sh tap, dd toe touch",
        "phase": "60 sec",
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt"
      },
      {
        "exercise": "Db goblet squat",
        "phase": "40/30/20 (15 off)",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band swim",
        "phase": "40/30/20 (15 off)",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Db sumo dl",
        "phase": "40/30/20 (15 off)",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band Punch",
        "phase": "40/30/20 (15 off)",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "40/30/20 (15 off)",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "2 x 15",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "2 x 15",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Slider knee tuck",
        "phase": "2 x 15",
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt"
      },
      {
        "exercise": "Alt curl to arnolds",
        "phase": "3 x 8",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Single rdl",
        "phase": "3 x 8",
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt"
      },
      {
        "exercise": "Star sit up",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "atwp",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Ramp 3:30",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "M.c. 20",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Speed skat 10",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Burpee 5",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Db curl press",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Hip thrust 20",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Slider 3 way 5",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "8 half burpee",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "8 push up",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "8 jump squat",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "8 pikes",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "32 Birthday Reps :)",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt"
      },
      {
        "exercise": "Leg circles L",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Leg circles R",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "atwp",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Ramp 3:30",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "M.c. 20",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Speed skate 10",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Burpee 5",
        "phase": "25/10x3",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "slider/ball leg curl",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Step up curl",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "9 half burpee",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "9 push up",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "9 jump squat",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "9 pikes",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "36 Birthday Reps :)",
        "phase": "3 x 10",
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Rear delt flye",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Rear delt flye",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x8 1 \u00bd",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 15",
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt"
      },
      {
        "exercise": "Press bridge",
        "phase": "3 x 12",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Staggered Rdl to row",
        "phase": "3 x 12",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Wall sit sh glide",
        "phase": "60 sec.",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Sh tap dd toe touch",
        "phase": "60 sec.",
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt"
      },
      {
        "exercise": "Press bridge",
        "phase": "3 x 10",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Staggered Rdl to row",
        "phase": "3 x 10",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Wall sit sh glide",
        "phase": "60 sec.",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Sh tap dd toe touch",
        "phase": "60 sec.",
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt"
      },
      {
        "exercise": "Wall sit hammer curl",
        "phase": "60 sec",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Alt band pressdowns",
        "phase": "60 sec",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "60 sec",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "60 sec",
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt"
      },
      {
        "exercise": "Hip mob floor",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "90 leg rotations",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Wall",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Incline bench",
        "phase": "3x15",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Ball leg curls",
        "phase": "3x15",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Ball sit ups",
        "phase": "3x15",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "1 \u00bd band press",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "1 \u00bd hip thrust",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "1 \u00bd band row",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Paige 3 sets",
        "phase": "2 x 10",
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "3x12",
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt"
      },
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Half burpee 5",
        "phase": "3 min ramp",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "3 min ramp",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "1 \u00bd hip thrust",
        "phase": "3x10",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "bridge to chest press",
        "phase": "3x10",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Band bridge to lat pull",
        "phase": "3x10",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "finisher",
        "phase": "3x10",
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt"
      },
      {
        "exercise": "Alt curl to arnolds",
        "phase": "3 x 8",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Single rdl",
        "phase": "3 x 8",
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt"
      },
      {
        "exercise": "Rev lunge curl l/r",
        "phase": "3 x 10",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Wall tricep ext",
        "phase": "3 x 10",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "Wall thoracic mob",
        "phase": "3 x 10",
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt"
      },
      {
        "exercise": "X - Jacks",
        "phase": "20/15/10",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "squat",
        "phase": "20/15/10",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Seated Rows",
        "phase": "20/15/10",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Db row",
        "phase": "3 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Ab mat sit up",
        "phase": "3 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "2 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "2 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Db curl to arnold press",
        "phase": "2 x 12",
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Single leg hip thrust",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Db pull over",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Step up",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "B. drag curls",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "B. kick backs",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Single leg hip thrust",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Db pull over",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Step up",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "B. drag curls",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "B. kick backs",
        "phase": "3 x 10",
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10/3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Pulse lunge R/L",
        "phase": "25/10/3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "T\u2019s, w\u2019s, l\u2019s",
        "phase": "25/10/3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Thoracic mobility",
        "phase": "25/10/3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "12 reps per side",
        "phase": "25/10/3",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Drag curl",
        "phase": "3 x 12",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "3 x 12",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Easy leg curls",
        "phase": "3 x 12",
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt"
      },
      {
        "exercise": "Db ab march L",
        "phase": "40/10x2",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Band chop L",
        "phase": "40/10x2",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Band bridge",
        "phase": "40/10x2",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Band clam R",
        "phase": "40/10x2",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x12",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3x12",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Ab mat butterfly",
        "phase": "3x12",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Curstys",
        "phase": "3 x 10",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "3 x 10",
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Pulse s. squat l",
        "phase": "25/5x3 band",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Pulse s. Squat r",
        "phase": "25/5x3 band",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Kb swing",
        "phase": "45/35/25",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "V up",
        "phase": "45/35/25",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Band Skiers",
        "phase": "45/35/25",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Leg lifts",
        "phase": "45/35/25",
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt"
      },
      {
        "exercise": "Lunge squat lunge",
        "phase": "40/15x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Push up knee tuck",
        "phase": "40/15x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "atwp",
        "phase": "40/15x2",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Ankle mobility 12 per",
        "phase": "12 per side",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Wide drops",
        "phase": "3 min ramp",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "M.c",
        "phase": "3 min ramp",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "R. lunge",
        "phase": "3 min ramp",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Sh. taps",
        "phase": "3 min ramp",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "3x10",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3x10",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Step out lunge",
        "phase": "3x10",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "finisher",
        "phase": "3x10",
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt"
      },
      {
        "exercise": "Press bridge",
        "phase": "3 x 12",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Staggered Rdl to row",
        "phase": "3 x 12",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Wall sit sh glide",
        "phase": "60 sec.",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Sh tap dd toe touch",
        "phase": "60 sec.",
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Mod push push ups",
        "phase": "3x12",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Band pull-thu",
        "phase": "3x12",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3x12",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "3x12",
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 10",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 10",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "T flies",
        "phase": "2 x 15",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "2 x 15",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "60 finisher",
        "phase": "2 x 15",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "L,S,L",
        "phase": "2 x 15",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "Sh tap to DD toe touch",
        "phase": "2 x 15",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "Coffin crunch",
        "phase": "2 x 15",
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 10",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Stag. rdl",
        "phase": "3 x 10",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Strict press",
        "phase": "3 x 10",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Band flye",
        "phase": "3 x 10",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "3 x 10",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 12",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Band french press",
        "phase": "3 x 12",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Band pull thru",
        "phase": "3 x 12",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "3 x 12",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "3 x 12",
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt"
      },
      {
        "exercise": "Rdl to row",
        "phase": "3 x 10",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Push up to h.b.",
        "phase": "3 x 10",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Db hammer curl to press",
        "phase": "3 x 10",
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt"
      },
      {
        "exercise": "Rdl to row",
        "phase": "2 x 12",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Push up to h.b.",
        "phase": "2 x 12",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Db hammer curl to press",
        "phase": "2 x 12",
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt"
      },
      {
        "exercise": "Db W- rows",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt"
      },
      {
        "exercise": "Wall sit sup pull apart",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt"
      },
      {
        "exercise": "Db t flies",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Wall sh glide",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3 x 15",
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt"
      },
      {
        "exercise": "Single bridge press",
        "phase": "3 x 8",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Db 1.5 pull over",
        "phase": "3 x 8",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Bulgarian o.h.",
        "phase": "3 x 8",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Press",
        "phase": "3 x 8",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Thoracic mob",
        "phase": "3 x 8",
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt"
      },
      {
        "exercise": "Sumo deadlift",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Shoulder press",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Face pull",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Heels up squat",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Bent sup row",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Pistols 5/5",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Plank up 5/5",
        "phase": "3 x 10",
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt"
      },
      {
        "exercise": "Band seal",
        "phase": "25/10x3",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Band leg lift adb",
        "phase": "25/10x3",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Band jump squat",
        "phase": "25/10x3",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Band plank jack",
        "phase": "25/10x3",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "High knees 20",
        "phase": "3 min ramp",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "M.c. 20",
        "phase": "3 min ramp",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Burpee 5",
        "phase": "3 min ramp",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Bikes 20",
        "phase": "3 min ramp",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Db complex",
        "phase": "3 min ramp",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Sumo dead",
        "phase": "4 x 8",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Push press",
        "phase": "4 x 8",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "squat",
        "phase": "4 x 8",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Rdl w row",
        "phase": "4 x 8",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Floor press",
        "phase": "3 x 10",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 10",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Tucks",
        "phase": "3 x 10",
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "4 x 8",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Db push press",
        "phase": "4 x 8",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Sumo to high pull",
        "phase": "4 x 8",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Db crunch",
        "phase": "4 x 8",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Db curl",
        "phase": "2 x 15",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Band pressdown",
        "phase": "2 x 15",
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Rear delt flye",
        "phase": "3x15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Kb sumos",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Db bent row",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Db curl press",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Db tricep ext",
        "phase": "3 x 10",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "2 x 15",
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt"
      },
      {
        "exercise": "Db W- rows",
        "phase": "2 x 15",
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt"
      },
      {
        "exercise": "Single rdl row",
        "phase": "3 x 10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Ss press",
        "phase": "3 x 10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Tricep Plank up",
        "phase": "3 x 10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Curtsy curl",
        "phase": "3x10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Band straight arm row",
        "phase": "3x10",
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt"
      },
      {
        "exercise": "Db bent row",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Single press bridge",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "21s",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "3 x 10",
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "4x6",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Row",
        "phase": "4x6",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Sumo high pull",
        "phase": "4x6",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Push press",
        "phase": "4x6",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Cat cow",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Thoracic mob",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Hip mob",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Db man maker 10",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Push up",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Row",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "squat",
        "phase": "2 x 10",
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 12",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Kb deadlift",
        "phase": "3 x 12",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Db wide row",
        "phase": "3 x 12",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3 x 12",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Wall sit curl",
        "phase": "60/15x1",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Plank up",
        "phase": "60/15x1",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Lunge squat lunge",
        "phase": "60/15x1",
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x15",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Rear delt flye",
        "phase": "3x15",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x15",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Band preacher curls",
        "phase": "2 x 15",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Band kickback",
        "phase": "2 x 15",
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt"
      },
      {
        "exercise": "Db thruster 10",
        "phase": "5 min",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Db row 10",
        "phase": "5 min",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Db drop squat 10",
        "phase": "5 min",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Incline bench",
        "phase": "3 x 10",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Thoracic mob",
        "phase": "3 x 10",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Single leg hip thrust",
        "phase": "3 x 10",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Hip mobility",
        "phase": "3 x 10",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "2 x 10",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Drop squat 10",
        "phase": "3 min ramp",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Butt kicker 20",
        "phase": "3 min ramp",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Db one arm row",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Single leg thrust",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Db oh tricep",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Bulgarian",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Db bicep curl",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Cross knee",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 x 10",
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt"
      },
      {
        "exercise": "Runner lunge",
        "phase": "3 min ramp",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Sh. tap 10",
        "phase": "3 min ramp",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "March bridge",
        "phase": "3 min ramp",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Band bridge lat pull",
        "phase": "3x10",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Db rdl",
        "phase": "3x10",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "All 4 thoracic mobility",
        "phase": "3x10",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3 x 10",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Kb heels elev squat",
        "phase": "3 x 10",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Full hip mobility",
        "phase": "3 x 10",
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3x15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Leg curl",
        "phase": "3x15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Rear delt flye",
        "phase": "3x15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3x15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Band facepull",
        "phase": "2 x 15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Band Drag curls",
        "phase": "2 x 15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "2 x 15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Calf raise",
        "phase": "2 x 15",
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt"
      },
      {
        "exercise": "Wide outs 10",
        "phase": "3 min ramp",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "M.c. 10",
        "phase": "3 min ramp",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Half burpee 5",
        "phase": "3 min ramp",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Pull aparts 10",
        "phase": "3 min ramp",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Rev. hyper 10",
        "phase": "3 min ramp",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Curl to arnold",
        "phase": "3 x 8",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Bulgarian Split Squat",
        "phase": "3 x 8",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Leg circles",
        "phase": "3 x 8",
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt"
      },
      {
        "exercise": "Wall sit hammer curl",
        "phase": "60 sec",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Alt band pressdowns",
        "phase": "60 sec",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "60 sec",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "60 sec",
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Strict press",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Floor press",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Db lying tricep",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Rdl",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Strict press",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Heels elev squat",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Db lying tricep",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "3 x 10",
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt"
      },
      {
        "exercise": "Man maker",
        "phase": "60 sec penguins",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "60 sec penguins",
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt"
      },
      {
        "exercise": "Single curl press",
        "phase": "2 x 8",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "2 x 8",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Stretch",
        "phase": "2 x 8",
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt"
      },
      {
        "exercise": "Db side lateral",
        "phase": "3 x 10",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Band drag curl",
        "phase": "3 x 10",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 10",
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt"
      },
      {
        "exercise": "Plank dip",
        "phase": "25/10x3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Side plank p. L",
        "phase": "25/10x3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Side plank p. R",
        "phase": "25/10x3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Butterfly pump",
        "phase": "25/10x3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Single bridge l",
        "phase": "25/10x3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Single bridge r",
        "phase": "25/10x3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Single clean press",
        "phase": "5 min 3/3",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "S. sand bag row",
        "phase": "3x12",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Sand bag box squat",
        "phase": "3x12",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Butterfly sit up",
        "phase": "3x12",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Kb sumo deadlift",
        "phase": "3x12",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Leg lift",
        "phase": "3x12",
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt"
      },
      {
        "exercise": "Renegade row",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "1 \u00bd RDL",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Db kick back",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Human maker",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Dd toe touch",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Knee tuck",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "lunge",
        "phase": "3 x 12",
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 15",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "3 x 15",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "Bag hip thrust",
        "phase": "3 x 15",
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt"
      },
      {
        "exercise": "B. split squat",
        "phase": "3 x 10",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "One arm row",
        "phase": "3 x 10",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Floor press",
        "phase": "3 x 10",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 15",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "3 x 15",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Bag hip thrust",
        "phase": "3 x 15",
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt"
      },
      {
        "exercise": "Stag. rdl",
        "phase": "3 x 10",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band straight arm lat pull",
        "phase": "3 x 10",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band chest flye",
        "phase": "3 x 10",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Slider leg curl",
        "phase": "3 x 12",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Band chest press",
        "phase": "3 x 12",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Db kickbacks",
        "phase": "3 x 12",
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt"
      },
      {
        "exercise": "Leg circle L",
        "phase": "25/10x3",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Leg circle R",
        "phase": "25/10x3",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Slider m.c.",
        "phase": "25/10x3",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "T flies",
        "phase": "3 x 10",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Pull thru",
        "phase": "3 x 10",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Bridge press ext",
        "phase": "3 x 10",
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt"
      },
      {
        "exercise": "Plank",
        "phase": "25/5x3",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Side plank L",
        "phase": "25/5x3",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Side plank R",
        "phase": "25/5x3",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Lateral walk 3",
        "phase": "25/5x3 band",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Pulse squat",
        "phase": "25/5x3 band",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Kick back",
        "phase": "25/5x3 band",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Pull down",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Db floor press",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Sumo deadlift",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "10 man maker",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Burpee",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Push up",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Sh tap",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "Dd knee tuck",
        "phase": "3x12",
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt"
      },
      {
        "exercise": "3 way push up 5 each",
        "phase": "Lunge matrix 5 per side",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "Ankle mobility 12 per",
        "phase": "12 per side",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      },
      {
        "exercise": "L/R",
        "phase": "5 min get up",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Hold 10 sec",
        "phase": "2x10",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Single hip thrust",
        "phase": "2x10",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Kneeling push up",
        "phase": "2x10",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Supinated pull",
        "phase": "2x10",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Band curl",
        "phase": "3 x 15",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Band Overhead ext",
        "phase": "3 x 15",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      },
      {
        "exercise": "Travel lunge 8/8",
        "phase": "3 x 15",
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt"
      }
    ],
    "Recovery": [
      {
        "exercise": "90/90 rotations",
        "phase": "Hip rotations",
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt"
      },
      {
        "exercise": "90/90 rotations",
        "phase": "Hip rotations",
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt"
      },
      {
        "exercise": "90/90 rotations",
        "phase": "Hip rotations",
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt"
      },
      {
        "exercise": "Wall thoracic",
        "phase": "Hip rotations 10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Hip rotations 10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Ankle mob.",
        "phase": "Hip rotations 10",
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt"
      },
      {
        "exercise": "Wall thoracic",
        "phase": "Hip rotations 10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Hip Flexor",
        "phase": "Hip rotations 10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "Ankle mob.",
        "phase": "Hip rotations 10",
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt"
      },
      {
        "exercise": "90/90 rotations",
        "phase": "Hip rotations",
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt"
      },
      {
        "exercise": "90/90 rotations",
        "phase": "Hip rotations",
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt"
      },
      {
        "exercise": "Pistol",
        "phase": "Lat stretch",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "Hip flexor mob",
        "phase": "Lat stretch",
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt"
      },
      {
        "exercise": "90/90 rotations",
        "phase": "Hip rotations",
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt"
      }
    ]
  },
  "daily_workouts": {
    "2024-09-27": [
      {
        "date": "2024-09-27",
        "filename": "revision_100171_2024-09-27_14-56-28.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat runner clap",
              "Coffin crunch",
              "Arrested superman"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "M.c. 10",
              "Drop squat 10",
              "Burpee 5"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db floor press",
              "heels elev kb squat",
              "Db bent row",
              "Rdl"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": [
              "Wall sit curl",
              "Lunge squat lunge",
              "Single leg drop"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2024-09-30": [
      {
        "date": "2024-09-30",
        "filename": "revision_100391_2024-09-30_14-51-28.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up crunch L",
              "Leg up crunch r",
              "Flutter",
              "Hold leg lift"
            ]
          },
          {
            "phase": "Tabata band",
            "exercises": [
              "Bridge",
              "Kickback L",
              "Kick back r",
              "Plank tap"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Kb swing",
              "Drop squat",
              "Slider tucks"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band press",
              "Band s. Pull",
              "Box squat"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2024-10-02": [
      {
        "date": "2024-10-02",
        "filename": "revision_100392_2024-10-02_14-42-17.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Ab mat",
              "Coffin",
              "Runner clap",
              "Butterfly"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band seal",
              "Band bridge",
              "Band f/b jack",
              "Band kickback"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db thruster 20",
              "Band skiers 30",
              "Kb swing 20",
              "Band punches 50"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band drag curl",
              "Band french press",
              "Band pull thru"
            ]
          }
        ]
      },
      {
        "date": "2024-10-02",
        "filename": "revision_100574_2024-10-02_14-54-21.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Superman"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Bridge",
              "Mod sp dip L",
              "Mod sp dir R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Box sl hip thrust",
              "Db alt floor press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Band drag curl",
              "Db tricep ext",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2024-10-04": [
      {
        "date": "2024-10-04",
        "filename": "revision_100575_2024-10-04_14-58-03.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Plank march",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band full row",
              "Cross chest press",
              "Pull thru"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "R. Lunge Row",
              "Kick back"
            ]
          },
          {
            "phase": "Hip rotations",
            "exercises": [
              "90/90 rotations"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per"
            ]
          }
        ]
      },
      {
        "date": "2024-10-04",
        "filename": "revision_100576_2024-10-04_14-58-31.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "M.c",
              "Plank hip tap",
              "Heels to heaven",
              "Superman hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band kickback",
              "Band hip abd",
              "Band bridge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db renegade 20",
              "Kb hike swing 10",
              "Db floor press 20",
              "Leg curls 20",
              "21,s",
              "Band curl",
              "Db tricep"
            ]
          }
        ]
      },
      {
        "date": "2024-10-04",
        "filename": "revision_100616_2024-10-04_15-40-30.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "M.c",
              "Plank hip tap",
              "Heels to heaven",
              "Superman hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band kickback",
              "Band hip abd",
              "Band bridge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band s. Pulls 30",
              "Kb hike swing 10",
              "Db floor press 25",
              "Leg curls 20"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Db curl",
              "Db o.h. Tricep",
              "Stag. rdl"
            ]
          }
        ]
      }
    ],
    "2024-10-07": [
      {
        "date": "2024-10-07",
        "filename": "revision_100837_2024-10-07_14-54-27.txt",
        "phases": [
          {
            "phase": "2 x 30",
            "exercises": [
              "Spider climbers",
              "Bw rus twist",
              "Bikes",
              "Leg lift"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "R. lunge",
              "Lateral lunge",
              "Wide outs"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band lat pull",
              "Db sumo d.l.",
              "Band chest cross",
              "Db \u00be curtsy"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Wall sit curl",
              "Band tricep pressdowns"
            ]
          }
        ]
      }
    ],
    "2024-10-09": [
      {
        "date": "2024-10-09",
        "filename": "revision_100872_2024-10-09_15-28-48.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Dead bug",
              "Pointer",
              "Plank"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam L",
              "Band clam R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band pull thru",
              "Band row",
              "Band press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db side lateral",
              "Band drag curl",
              "Slider leg curl"
            ]
          }
        ]
      }
    ],
    "2024-10-11": [
      {
        "date": "2024-10-11",
        "filename": "revision_101053_2024-10-11_14-54-14.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Single leg drop",
              "Oblique reach"
            ]
          },
          {
            "phase": "Ladder 6-2",
            "exercises": [
              "Kb clean",
              "Push up"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db alt thruster 20",
              "Renegade row 12",
              "Soccer tap 40",
              "Plank up 12"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db kickbacks",
              "Split squat curl L/R",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2024-10-14": [
      {
        "date": "2024-10-14",
        "filename": "revision_101054_2024-10-14_14-58-07.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg lift",
              "Hold",
              "Reach left",
              "Reach right",
              "Basic crunch",
              "Rest"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Hydrants",
              "Kick backs L/R",
              "Arrested supers"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Bulgarian Split Squat",
              "One arm row",
              "Db o.h. Tricep"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Step up L/R",
              "Floor press",
              "Db full b. curl"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-10-16": [
      {
        "date": "2024-10-16",
        "filename": "revision_101255_2024-10-16_14-54-57.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Weighted d.b.",
              "Db russian twist",
              "Alt leg drop"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Curtsy L",
              "Curtsy R",
              "Reverse lunge"
            ]
          },
          {
            "phase": "Ladder 5 to 1",
            "exercises": [
              "Kb clean press",
              "Burpee row"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db drop squat 25",
              "Band punches 50",
              "Lateral step 20",
              "Band piston row"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "Stretch"
            ]
          }
        ]
      },
      {
        "date": "2024-10-16",
        "filename": "revision_101268_2024-10-16_15-30-50.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Weighted d.b.",
              "Db russian twist",
              "Alt leg drop"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Curtsy L",
              "Curtsy R",
              "Reverse lunge"
            ]
          },
          {
            "phase": "Ladder 5 to 1",
            "exercises": [
              "Kb clean press",
              "Burpee row"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db drop squat 25",
              "Band punches 50",
              "Lateral step 20",
              "Db s. Lateral 15"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-10-21": [
      {
        "date": "2024-10-21",
        "filename": "revision_101539_2024-10-21_15-11-59.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank march",
              "Basic crunch",
              "Plank dip",
              "Bikes"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Drop squat 8",
              "Dd toe touch 8",
              "Plank jack 8"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Db 1 \u00bd rdl",
              "Db push press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Bridge press",
              "1 \u00bd wedge squat",
              "Band upper back pull"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2024-10-23": [
      {
        "date": "2024-10-23",
        "filename": "revision_101540_2024-10-23_14-59-38.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank",
              "Basic crunch",
              "Reach r",
              "Reach l"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band bridge l",
              "Band bridge r",
              "squat"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band squat row",
              "Db floor press",
              "Band x jack"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band bridge lat pull",
              "Db arnold press",
              "Bag hip thrust"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit bus driver",
              "Plank up knee tuck",
              "21s bicep",
              "Tricep"
            ]
          }
        ]
      }
    ],
    "2024-10-28": [
      {
        "date": "2024-10-28",
        "filename": "revision_101718_2024-10-28_14-47-01.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Alt leg drop",
              "Pointer"
            ]
          },
          {
            "phase": "5 min full get up",
            "exercises": [
              "L/R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Alt thruster 20",
              "Band skiers 25",
              "Push up tucks 10",
              "Kb swing 20"
            ]
          },
          {
            "phase": "3 x12",
            "exercises": [
              "Band drag curl",
              "Tricep press ext",
              "Travel lunge",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-10-30": [
      {
        "date": "2024-10-30",
        "filename": "revision_101719_2024-10-30_14-57-12.txt",
        "phases": [
          {
            "phase": "5 min",
            "exercises": [
              "Full get up",
              "L/R"
            ]
          },
          {
            "phase": "40/15x2",
            "exercises": [
              "Band squat row",
              "Cross chest press",
              "Ab mat butterfly sit up"
            ]
          },
          {
            "phase": "30/15x2",
            "exercises": [
              "Band face pull",
              "Thoracic mob L",
              "Bridge chest press",
              "Thoraci mob R"
            ]
          },
          {
            "phase": "30x15x2",
            "exercises": [
              "1.5 hip thrust L",
              "Hip flexor mob L",
              "1.5 hip thrust R",
              "Hip flexor mob R",
              "Arm finisher"
            ]
          }
        ]
      },
      {
        "date": "2024-10-30",
        "filename": "revision_101720_2024-10-30_14-58-57.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Heels to heav",
              "Flutter",
              "Coffin",
              "Bikes"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band butterfly",
              "Band kickback",
              "Band march"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Kb feet overs 20",
              "Kb clean 10",
              "Kb sh. To sh. 20"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band bridge to lat pull",
              "Db side lateral"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": [
              "Wall sit sh glide",
              "Sh tap dd toe touch"
            ]
          }
        ]
      }
    ],
    "2024-11-01": [
      {
        "date": "2024-11-01",
        "filename": "revision_101721_2024-11-01_14-59-52.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Leg lift",
              "Flutter",
              "Toe touch"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Band single bridge L",
              "Abduction",
              "Bridge R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band row",
              "Band press",
              "Pull through"
            ]
          },
          {
            "phase": "2 x 12",
            "exercises": [
              "Band curl",
              "Band kickbacks"
            ]
          }
        ]
      },
      {
        "date": "2024-11-01",
        "filename": "revision_101729_2024-11-01_15-13-05.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Leg lift",
              "Flutter",
              "Toe touch"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Band single bridge L",
              "Abduction",
              "Bridge R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band row",
              "Band press",
              "Pull through"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band curl",
              "Band kickbacks",
              "Slider curls"
            ]
          }
        ]
      }
    ],
    "2024-11-04": [
      {
        "date": "2024-11-04",
        "filename": "revision_102022_2024-11-04_15-51-32.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Basic crunch",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "R. lunge",
              "Curtsy L",
              "Curtsy R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Band straight arm lat pull",
              "Sumo d.l.",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db tricep floor press",
              "Heels elev squat",
              "Db hammer curl"
            ]
          },
          {
            "phase": "60 sec x 1",
            "exercises": [
              "Wall sit shoulder glide",
              "Thoracic mobility L"
            ]
          }
        ]
      }
    ],
    "2024-11-08": [
      {
        "date": "2024-11-08",
        "filename": "revision_102351_2024-11-08_15-46-20.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Dead bug L",
              "Dead bug R",
              "Bike crunch"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge L",
              "Step out lunge R",
              "R lunge L",
              "R lunge R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Single band row",
              "Ss curl L/R",
              "Slider leg curl"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Single press",
              "Bridge tricep extension",
              "Calf raise",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      },
      {
        "date": "2024-11-08",
        "filename": "revision_102353_2024-11-08_16-41-22.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Dead bug L",
              "Dead bug R",
              "Bike crunch"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge L",
              "Step out lunge R",
              "R lunge L",
              "R lunge R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Single band row",
              "Ss curl L/R",
              "Slider leg curl"
            ]
          },
          {
            "phase": "2 x 12",
            "exercises": [
              "Single press",
              "Bridge tricep extension",
              "Calf raise",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2024-11-13": [
      {
        "date": "2024-11-13",
        "filename": "revision_102863_2024-11-13_15-52-38.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Runner clap",
              "Superman"
            ]
          },
          {
            "phase": "Tabata holds",
            "exercises": [
              "Ss L",
              "Ss R",
              "Wide out drops",
              "Alt Curtsy",
              "Rest"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "Y, T, W"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Seated row",
              "Wall sit pull apart",
              "Single chest press",
              "Tricep pressdown"
            ]
          }
        ]
      }
    ],
    "2024-11-18": [
      {
        "date": "2024-11-18",
        "filename": "revision_102864_2024-11-18_16-00-00.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank dip",
              "Side plank p. L",
              "Side plank p. R"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 1-5",
            "exercises": [
              "Single clean press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      },
      {
        "date": "2024-11-18",
        "filename": "revision_102908_2024-11-18_16-47-51.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank dip",
              "Side plank p. L",
              "Side plank p. R"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 10-4",
            "exercises": [
              "Kb clean",
              "1 \u00bd band chest press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "2x12",
            "exercises": [
              "Db tricep press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      }
    ],
    "2024-11-20": [
      {
        "date": "2024-11-20",
        "filename": "revision_103161_2024-11-20_15-52-44.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Reverse crunch",
              "Bw russian twist",
              "Single reach l",
              "Single reach r"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band 45 jack",
              "Band squat",
              "Band f/b jack",
              "Band bridge",
              "Ramp 3 min",
              "Runner lunge 10",
              "Sh. tap 20",
              "Leg flutter 10"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Band lat pull",
              "Rdl",
              "Floor press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db curl",
              "Wall tricep ext",
              "Single calf raise"
            ]
          }
        ]
      }
    ],
    "2024-11-22": [
      {
        "date": "2024-11-22",
        "filename": "revision_103384_2024-11-22_15-59-55.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat runner clap",
              "Arrested superman",
              "L sit over kb"
            ]
          },
          {
            "phase": "Ladder 2-12",
            "exercises": [
              "Band facepull",
              "Db drop squat"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "R lunge pass 16",
              "Db bent row 15",
              "Kb swing 20",
              "Basic crunch 60 seconds"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Band curl",
              "Db bridge tricep",
              "Leg curl"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2024-11-25": [
      {
        "date": "2024-11-25",
        "filename": "revision_103620_2024-11-25_15-55-04.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Drop squat",
              "Slider m.c.",
              "Soccer tap"
            ]
          },
          {
            "phase": "Ladder 14-4",
            "exercises": [
              "Kb swing",
              "Band chest press"
            ]
          },
          {
            "phase": "45/15x3",
            "exercises": [
              "Lunge squat lunge",
              "Sh tap dd toe touch",
              "Db Rdl to row"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Single bridge to chest press",
              "Single leg db row",
              "Ab mat butterfly sit up"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2024-11-27": [
      {
        "date": "2024-11-27",
        "filename": "revision_103675_2024-11-27_16-40-37.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Heels to heav",
              "Flutter",
              "Coffin",
              "Bikes"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band butterfly",
              "Band kickback",
              "Band march"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Kb feet overs 20",
              "Kb clean 10",
              "Kb sh. To sh. 20"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Wall sit curl",
              "Band kickback",
              "T flies"
            ]
          }
        ]
      }
    ],
    "2024-12-02": [
      {
        "date": "2024-12-02",
        "filename": "revision_103676_2024-12-02_15-56-59.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db W- rows",
              "Band Drag curls",
              "Band Overhead ext"
            ]
          }
        ]
      },
      {
        "date": "2024-12-02",
        "filename": "revision_103710_2024-12-02_16-24-29.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Db squat curl",
              "Db overhead ext",
              "T flies"
            ]
          }
        ]
      }
    ],
    "2024-12-04": [
      {
        "date": "2024-12-04",
        "filename": "revision_103711_2024-12-04_15-42-34.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Coffin crunch",
              "Reach obliques",
              "V crunch"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "R. lunge",
              "45 d lunge",
              "Lateral lunge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb hike swing 15",
              "Db ren row 16",
              "Db lat step 16",
              "Slider 3 way 8",
              "Side laterals 15",
              "Pistols  8/8",
              "Kick backs 8/8",
              "Pull thru 15"
            ]
          }
        ]
      },
      {
        "date": "2024-12-04",
        "filename": "revision_103831_2024-12-04_16-00-08.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Single leg drop",
              "Pointer"
            ]
          },
          {
            "phase": "5 min get up",
            "exercises": [
              "L/R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb hike swing 15",
              "Db ren row 16",
              "Db step up 16",
              "Slider 3 way 8",
              "Side laterals 15",
              "Pistols  8/8",
              "Band Kick backs 15",
              "Band curl"
            ]
          }
        ]
      }
    ],
    "2024-12-06": [
      {
        "date": "2024-12-06",
        "filename": "revision_104132_2024-12-06_15-52-58.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Runner clap",
              "Plank dip",
              "Leg circles L",
              "Leg circles R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "F Lunge tt",
              "R Lunge tt",
              "Curtsy L",
              "Cursty R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Single hip thrust",
              "Side plank dip",
              "Thoracic mob l/r"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db tricep ext",
              "Db hammer curl",
              "Sit squat"
            ]
          }
        ]
      }
    ],
    "2024-12-20": [
      {
        "date": "2024-12-20",
        "filename": "revision_104135_2024-12-20_15-48-57.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab walk outs",
              "Reverse crunch"
            ]
          },
          {
            "phase": "Ladder 2-12",
            "exercises": [
              "Db thruster",
              "Db bent row"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb clean 15",
              "Db R. lunge curl 16",
              "Kb sh. To sh. 12",
              "Reverse hyper 20",
              "Thoracic mob",
              "Hip Flexor",
              "Ankle",
              "21s",
              "Shoulders",
              "Hamstrings"
            ]
          }
        ]
      }
    ],
    "2024-12-23": [
      {
        "date": "2024-12-23",
        "filename": "revision_104136_2024-12-23_15-40-08.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Band chest flye",
              "Leg curl",
              "Band facepull",
              "Heels elev squat"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band curl",
              "Band Overhead ext",
              "Travel lunge 8/8"
            ]
          }
        ]
      }
    ],
    "2024-12-30": [
      {
        "date": "2024-12-30",
        "filename": "revision_104137_2024-12-30_15-53-46.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db t flies",
              "Band Drag curls",
              "Band Overhead ext"
            ]
          }
        ]
      }
    ],
    "2025-01-03": [
      {
        "date": "2025-01-03",
        "filename": "revision_104138_2025-01-03_15-55-42.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg lift",
              "Bikes",
              "Reverse cr",
              "Plank dip"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "F lunge",
              "R. lunge",
              "Lateral L",
              "Lateral R"
            ]
          },
          {
            "phase": "Ladder 1 -6",
            "exercises": [
              "Kb clean",
              "Push up"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db piston row 40",
              "Kb swing",
              "Db piston press 40",
              "Kb fast drops 30"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Wall sit curl",
              "Db tricep ext",
              "Slider curls"
            ]
          }
        ]
      },
      {
        "date": "2025-01-03",
        "filename": "revision_104139_2025-01-03_15-56-42.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Plank march",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band full row",
              "Cross chest press",
              "Pull thru"
            ]
          },
          {
            "phase": "Lunge matrix 5 per side",
            "exercises": [
              "3 way push up 5 each"
            ]
          },
          {
            "phase": "Hip rotations",
            "exercises": [
              "90/90 rotations"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per"
            ]
          }
        ]
      }
    ],
    "2025-01-13": [
      {
        "date": "2025-01-13",
        "filename": "revision_104156_2025-01-13_16-21-56.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Single reach l",
              "Single reach r",
              "Leg lift",
              "Criss cross flutters",
              "Rest"
            ]
          },
          {
            "phase": "Tabata holds",
            "exercises": [
              "squat",
              "Split squats l",
              "Split squats r",
              "Wide outs",
              "Rest"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db alt floor press 20",
              "Band lat pull bridge 20",
              "Step up and over 20",
              "Sand bag pull thru 20"
            ]
          },
          {
            "phase": "3x8",
            "exercises": [
              "1 \u00bd bulagarians",
              "Renegade row",
              "Wall sit 1 \u00bd bicep culs",
              "finisher"
            ]
          }
        ]
      }
    ],
    "2025-01-15": [
      {
        "date": "2025-01-15",
        "filename": "revision_104157_2025-01-15_15-52-22.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "V crunch",
              "Ab circles L",
              "Ab circles R",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "M.c. 10",
              "Half burpee 5",
              "Wide outs 10"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Seated band row",
              "Db \u00be squats",
              "Toe grabs"
            ]
          },
          {
            "phase": "3x8",
            "exercises": [
              "1 \u00bd hip thrust",
              "Single bridge to chest press",
              "Db hammer curl",
              "finisher"
            ]
          }
        ]
      }
    ],
    "2025-01-24": [
      {
        "date": "2025-01-24",
        "filename": "revision_104159_2025-01-24_15-54-42.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Bikes",
              "Side plank pulse",
              "Runner clap"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Reverse lunge",
              "Runner lunge",
              "Bridge march"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Push up 10",
              "Lateral step 20",
              "Lat pull bridge 30"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band drag curl",
              "Kick back",
              "Leg curl"
            ]
          }
        ]
      }
    ],
    "2025-01-27": [
      {
        "date": "2025-01-27",
        "filename": "revision_104160_2025-01-27_15-56-31.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Alt leg drop",
              "Pointer",
              "Bridge march"
            ]
          },
          {
            "phase": "Ladder 5-10",
            "exercises": [
              "Pend swing",
              "Step yoga push up"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "Hip mob floor",
              "90 leg rotations",
              "Wall"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "1 \u00bd band press",
              "1 \u00bd band pull",
              "1 \u00bd bw thrust"
            ]
          }
        ]
      }
    ],
    "2025-01-29": [
      {
        "date": "2025-01-29",
        "filename": "revision_104161_2025-01-29_15-58-50.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank march",
              "Side plank RT l",
              "Side plank RT r"
            ]
          },
          {
            "phase": "40/10x3",
            "exercises": [
              "Band deep squat",
              "Band kickback"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Db 1.5 floor press",
              "Single RDL 8/8",
              "Coffin 1.5 crunch"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db 1.5 pull over",
              "Bulgarians 10/10"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit curl",
              "Plank up, sh tap, dd toe touch"
            ]
          }
        ]
      }
    ],
    "2025-02-05": [
      {
        "date": "2025-02-05",
        "filename": "revision_104420_2025-02-05_15-54-57.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Slider tucks",
              "Bikes",
              "Pointer"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Single bridge l",
              "Single bridge r",
              "Alt kickbacks"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Db floor press",
              "Bag thrust",
              "Bent row",
              "Slider curls"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db t flies",
              "Butterfly pump",
              "Butterfly situp",
              "Band curl",
              "Band pressdown"
            ]
          }
        ]
      },
      {
        "date": "2025-02-05",
        "filename": "revision_104465_2025-02-05_16-14-04.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Slider tucks",
              "Bikes",
              "Pointer"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Single bridge l",
              "Single bridge r",
              "Alt kickbacks"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Db floor press",
              "Db rdl",
              "Bent row",
              "Slider curls"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Db t flies",
              "Butterfly pump",
              "Ab mat coffin",
              "Calf raise"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2025-02-10": [
      {
        "date": "2025-02-10",
        "filename": "revision_104995_2025-02-10_16-00-06.txt",
        "phases": [
          {
            "phase": "25/10x2",
            "exercises": [
              "Palloff press L",
              "Kneeling band chop L",
              "Repeat R"
            ]
          },
          {
            "phase": "3 min bands",
            "exercises": [
              "F. walk 6",
              "Plank jack 6",
              "R. walk 6",
              "Speed squat 6"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Band bridge pull",
              "Db one arm row",
              "Kb stag. rdl"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "One arm press w bridge",
              "Bulgarian Split Squat",
              "Band flye"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2025-02-19": [
      {
        "date": "2025-02-19",
        "filename": "revision_105148_2025-02-19_15-57-47.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Core march"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Band bridge",
              "Clams L/R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band piston row 40",
              "Pull thru 25",
              "Band punches 40",
              "Heels elev squat 15"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Drag curl",
              "Kick back",
              "Single leg bridge pulse"
            ]
          }
        ]
      }
    ],
    "2025-02-21": [
      {
        "date": "2025-02-21",
        "filename": "revision_105165_2025-02-21_16-00-14.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Superman"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat coffin",
              "Plank tap",
              "Pointers"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Bridge",
              "Mod sp dip L",
              "Mod sp dir R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Band drag curl",
              "Db tricep ext",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2025-02-24": [
      {
        "date": "2025-02-24",
        "filename": "revision_105483_2025-02-24_16-47-32.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Basic crunch",
              "Reverse crunch",
              "Oblique reach"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Reverse lunge",
              "Lateral lunge",
              "Drop squat"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db alt thruster 20",
              "B. bridge lat pull 20",
              "Alt floor press 20",
              "Lat. band walk 60 sec."
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Alt curl press",
              "S.L. hip thrust",
              "Db alt kickback"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": []
          },
          {
            "phase": "45 sec",
            "exercises": [
              "Wall sit",
              "Sh. tap to dd tt"
            ]
          }
        ]
      }
    ],
    "2025-02-26": [
      {
        "date": "2025-02-26",
        "filename": "revision_105503_2025-02-26_15-50-13.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band bridge l",
              "Band bridge r",
              "squat",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db t flies",
              "Band Drag curls",
              "Band Overhead ext"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit bus driver",
              "Plank up knee tuck",
              "21s bicep",
              "Tricep"
            ]
          }
        ]
      }
    ],
    "2025-02-28": [
      {
        "date": "2025-02-28",
        "filename": "revision_105509_2025-02-28_15-53-53.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "One arm row",
              "Rdl",
              "Strict press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Heels elev squat",
              "Band drag curl",
              "Db lying tricep"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band drag curl",
              "Band french press",
              "Band pull thru",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2025-03-03": [
      {
        "date": "2025-03-03",
        "filename": "revision_105616_2025-03-03_15-56-21.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank dip",
              "Side plank dip l",
              "Side plank dip r"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 1-5",
            "exercises": [
              "Single clean press"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db wide row",
              "Band pull thru",
              "Leg curl"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Band chest press",
              "Sand bag box squat",
              "Ab mat coffin"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db curl arnold press",
              "Band pressdown"
            ]
          }
        ]
      }
    ],
    "2025-03-05": [
      {
        "date": "2025-03-05",
        "filename": "revision_105827_2025-03-05_15-58-39.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Toe touch",
              "Bikes",
              "Pointer"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Drop squat 10",
              "Slider m.c. 10",
              "Pull apart 5"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band punches 40",
              "Kb dl high pull 15",
              "Db floor press 20",
              "Band swims 40"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Kneeling curl press l/r",
              "Single kick back",
              "1 \u00bd RDL"
            ]
          }
        ]
      }
    ],
    "2025-03-12": [
      {
        "date": "2025-03-12",
        "filename": "revision_105830_2025-03-12_14-59-21.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Tight bird dogL",
              "Tight bird dogR",
              "Db march L",
              "Db march R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "f/b lunge L",
              "f/b lunge r",
              "Curtsy L",
              "Cursty R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band skiers 20",
              "Band punches 40",
              "Db drop squat 20",
              "Dead bug 60 sec"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Ss hammer curl L",
              "Ss hammer curl R",
              "Bridge press tricep ext."
            ]
          },
          {
            "phase": "Finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2025-03-14": [
      {
        "date": "2025-03-14",
        "filename": "revision_105883_2025-03-14_14-53-55.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Half burpee",
              "runner sit up",
              "Wide knee tuck",
              "Hip mobility"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "5 to 10",
              "Dl high pull",
              "Push up",
              "Wall t spine mob 12"
            ]
          },
          {
            "phase": "Chipper 25/20/15/10",
            "exercises": [
              "Band press",
              "Band pull thru",
              "Band seated row",
              "Hip flexor mob"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit hammer curl",
              "Alt band pressdowns"
            ]
          },
          {
            "phase": "Yoga Cooldown",
            "exercises": []
          }
        ]
      }
    ],
    "2025-03-17": [
      {
        "date": "2025-03-17",
        "filename": "revision_105896_2025-03-17_14-55-46.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band swim V up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Pull down",
              "Db floor press",
              "Sumo deadlift",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck Up"
            ]
          }
        ]
      },
      {
        "date": "2025-03-17",
        "filename": "revision_105940_2025-03-17_15-31-03.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band swim V up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Pull down",
              "Db floor press",
              "Sumo deadlift"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db alt curl press",
              "Db tricep ext",
              "Leg curl"
            ]
          }
        ]
      }
    ],
    "2025-03-24": [
      {
        "date": "2025-03-24",
        "filename": "revision_105942_2025-03-24_14-46-45.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Side plank dip l",
              "Side plank dip r",
              "Hollow hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Wide outs",
              "f/b lunge r",
              "f/b lunge L",
              "High knees",
              "Get ups"
            ]
          },
          {
            "phase": "10 per side",
            "exercises": []
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db jacks 30",
              "Renegade row 8/8",
              "Hip thrust 20",
              "Band punch 50",
              "Db curl",
              "Db tricep",
              "Jump squat"
            ]
          }
        ]
      }
    ],
    "2025-03-28": [
      {
        "date": "2025-03-28",
        "filename": "revision_105943_2025-03-28_14-41-32.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up reach L",
              "Leg up reach R"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 1-5",
            "exercises": [
              "Single clean press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      },
      {
        "date": "2025-03-28",
        "filename": "revision_106034_2025-03-28_15-25-33.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up reach L",
              "Leg up reach R",
              "Wide knee touch"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 1-5",
            "exercises": [
              "Single clean press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Sup sand bag row",
              "Sand bag box squat",
              "Band drag curl",
              "Db tricep ext"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Band face pull"
            ]
          }
        ]
      }
    ],
    "2025-03-31": [
      {
        "date": "2025-03-31",
        "filename": "revision_106035_2025-03-31_14-47-30.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank",
              "Pointer",
              "Bridge",
              "Hollow hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Slow bikes",
              "Superman hold",
              "March",
              "Speed skater"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band press",
              "Band squat row",
              "Band x jack"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band curl",
              "Tricep extension",
              "Hip thrust"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2025-04-02": [
      {
        "date": "2025-04-02",
        "filename": "revision_106058_2025-04-02_14-49-37.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Single reach l",
              "Single reach r",
              "Leg lift",
              "Criss cross flutters",
              "Rest"
            ]
          },
          {
            "phase": "Tabata holds",
            "exercises": [
              "squat",
              "Split squats l",
              "Split squats r",
              "Wide outs",
              "Rest"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db alt floor press 20",
              "Band lat pull bridge 20",
              "Step up and over 20",
              "Sand bag pull thru 20"
            ]
          },
          {
            "phase": "3x8",
            "exercises": [
              "1 \u00bd RDL",
              "One arm row",
              "Wall sit bicep curls"
            ]
          }
        ]
      }
    ],
    "2025-04-04": [
      {
        "date": "2025-04-04",
        "filename": "revision_106331_2025-04-04_14-58-51.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "Criss cross leg lifts",
              "Side plank clams L/R",
              "Pointers"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Db drop squat",
              "Shoulder tap",
              "Dd toe touch"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Incline bench",
              "Db sumos",
              "Db one arm row",
              "Ss arnold press"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "Db compex",
              "8 reps x 4",
              "Db rdl",
              "Db s. Rows",
              "Db squat"
            ]
          }
        ]
      }
    ],
    "2025-04-07": [
      {
        "date": "2025-04-07",
        "filename": "revision_106397_2025-04-07_14-51-26.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Db t flies",
              "Alt leg curl"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Band lateral walk",
              "Step up",
              "Single hip thrust",
              "60 finisher",
              "Squat curl",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2025-04-09": [
      {
        "date": "2025-04-09",
        "filename": "revision_106563_2025-04-09_14-56-42.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Flutter",
              "Penguins",
              "Side plank dip"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "R. lunge",
              "Curtsy L",
              "Curtsy R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Bag squat 20",
              "Db floor press 15",
              "Wall sit front raise 15",
              "Skiers 60 sec."
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "R. lunge press",
              "Db tricep ext",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2025-04-11": [
      {
        "date": "2025-04-11",
        "filename": "revision_106564_2025-04-11_14-39-29.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Plank march",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band full row",
              "Cross chest press",
              "Pull thru",
              "Hip Flexor"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per side",
              "21,s",
              "Bicep",
              "Tricep",
              "Glutes",
              "Shoulders"
            ]
          }
        ]
      },
      {
        "date": "2025-04-11",
        "filename": "revision_106566_2025-04-11_14-48-23.txt",
        "phases": [
          {
            "phase": "40/15x2",
            "exercises": [
              "Band squat row",
              "Cross chest press",
              "Ab mat butterfly sit up"
            ]
          },
          {
            "phase": "30/15x2",
            "exercises": [
              "Band face pull",
              "Thoracic mob L",
              "Bridge chest press",
              "Thoraci mob R"
            ]
          },
          {
            "phase": "30x15x2",
            "exercises": [
              "1.5 hip thrust L",
              "Hip flexor mob L",
              "1.5 hip thrust R",
              "Hip flexor mob R",
              "Arm finisher"
            ]
          }
        ]
      }
    ],
    "2025-04-14": [
      {
        "date": "2025-04-14",
        "filename": "revision_106741_2025-04-14_14-56-25.txt",
        "phases": [
          {
            "phase": "3x8",
            "exercises": [
              "Rev. lunge to curtsy",
              "1 \u00bd floor press",
              "Db 1 \u00bd pullover"
            ]
          },
          {
            "phase": "2x15",
            "exercises": [
              "Wall sit curl",
              "Db kickbacks",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2025-04-23": [
      {
        "date": "2025-04-23",
        "filename": "revision_106895_2025-04-23_14-28-26.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank",
              "Basic crunch",
              "Reach r",
              "Reach l"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band bridge l",
              "Band bridge r",
              "squat"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band squat row",
              "Db floor press",
              "Band x jack"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band bridge lat pull",
              "Db arnold press",
              "Bag hip thrust"
            ]
          }
        ]
      },
      {
        "date": "2025-04-23",
        "filename": "revision_106906_2025-04-23_15-00-35.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank",
              "Basic crunch",
              "Reach r",
              "Reach l"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band bridge l",
              "Band bridge r",
              "squat"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band squat row",
              "Db floor press",
              "Band pull thru"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band bridge lat pull",
              "Db arnold press",
              "Bag hip thrust"
            ]
          }
        ]
      }
    ],
    "2025-04-25": [
      {
        "date": "2025-04-25",
        "filename": "revision_106959_2025-04-25_14-54-54.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb dl hp",
              "Bench push up",
              "Leg lift"
            ]
          },
          {
            "phase": "Spartan 10-/25",
            "exercises": [
              "Band row",
              "Hip thrust",
              "Db thruster",
              "10 man maker",
              "Burpee",
              "Plank up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2025-04-28": [
      {
        "date": "2025-04-28",
        "filename": "revision_106960_2025-04-28_14-29-50.txt",
        "phases": [
          {
            "phase": "30/5x3",
            "exercises": [
              "Plank dip",
              "Dead bug"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "45 lunge",
              "Lateral",
              "Reverse",
              "10 reps x 1",
              "Crabs",
              "Quadr. Leg circles",
              "Judo push up"
            ]
          },
          {
            "phase": "3 x 6",
            "exercises": [
              "Rdl to row",
              "Curl press stand",
              "Long stetch"
            ]
          }
        ]
      },
      {
        "date": "2025-04-28",
        "filename": "revision_107138_2025-04-28_14-55-47.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat coffin",
              "Pointer"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Glute lat tap l",
              "Stag. pistol l",
              "Glute lat tap r",
              "Stag. pistol r"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band one arm pull",
              "Leg curl",
              "Band one arm press"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band facepull",
              "Heels elev squat",
              "Band chest flye"
            ]
          },
          {
            "phase": "60 sec finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2025-04-30": [
      {
        "date": "2025-04-30",
        "filename": "revision_107318_2025-04-30_14-55-31.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Dead bug",
              "Penguins"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band hydrant"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db alt thruster 20",
              "Band swim 30",
              "Band punches 40",
              "Rdl row 15"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Curl to press",
              "Sumo dl",
              "Db kickbacks",
              "Yoga cool down"
            ]
          }
        ]
      }
    ],
    "2025-05-05": [
      {
        "date": "2025-05-05",
        "filename": "revision_107528_2025-05-05_14-53-11.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Reach l",
              "Reach r",
              "Reverse crunch"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "R. lunge",
              "Curtsy L",
              "Curtsy R"
            ]
          },
          {
            "phase": "60/15 45/15",
            "exercises": [
              "Band pull thru",
              "Db floor press",
              "Squat row",
              "L sit over kb"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Drag curl",
              "O.h. tricep",
              "Calf raise 10 sec/10reps"
            ]
          }
        ]
      }
    ],
    "2025-05-09": [
      {
        "date": "2025-05-09",
        "filename": "revision_107557_2025-05-09_15-00-50.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Side lying leg lifts L",
              "Cat cow",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band full row",
              "Cross chest press",
              "Pull thru",
              "Hip Flexor"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per side",
              "21,s",
              "Bicep",
              "Tricep",
              "Glutes",
              "Shoulders"
            ]
          }
        ]
      }
    ],
    "2025-05-12": [
      {
        "date": "2025-05-12",
        "filename": "revision_107764_2025-05-12_14-58-02.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Rev lunge",
              "Clams L",
              "Clams R"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band chest flye",
              "Band bridge lat pull",
              "Split squats"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band seated row",
              "Pull thru",
              "Db o.h. Tricep"
            ]
          }
        ]
      }
    ],
    "2025-05-19": [
      {
        "date": "2025-05-19",
        "filename": "revision_107986_2025-05-19_14-54-04.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Db ab march L",
              "Band stir the pot L"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Band bridge lat pull",
              "Rdl"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db side lateral"
            ]
          }
        ]
      }
    ],
    "2025-05-28": [
      {
        "date": "2025-05-28",
        "filename": "revision_107988_2025-05-28_14-34-54.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Slider knee tuck",
              "Obliques L",
              "Obliques R",
              "See saw"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band 45 jack",
              "Band f/b jack",
              "Band hydrant",
              "Band bridge"
            ]
          },
          {
            "phase": "Ladder 2 to 6",
            "exercises": [
              "Db push up row",
              "Kb deadlift to high pull"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarians l/r",
              "Band straight arm lat pull",
              "Db bicep curl"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Slider leg curl",
              "Band chest press",
              "Db kickbacks"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Drop squat",
              "Double crunch"
            ]
          }
        ]
      }
    ],
    "2025-05-30": [
      {
        "date": "2025-05-30",
        "filename": "revision_108427_2025-05-30_14-54-56.txt",
        "phases": [
          {
            "phase": "20/20x3",
            "exercises": [
              "Hold pointer L",
              "Pointer L",
              "Hold Pointer R",
              "Pointer R"
            ]
          },
          {
            "phase": "20/20x3",
            "exercises": [
              "Hold hip thrust L",
              "Hip thrust L",
              "Hold hip thrust R",
              "Hip thrust"
            ]
          },
          {
            "phase": "5 min ladder",
            "exercises": [
              "10 down",
              "Band squat row",
              "Db push press"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Staggered rdl",
              "Staggered push up",
              "Lateral lunge",
              "L sit over kb",
              "Yoga cool down"
            ]
          }
        ]
      }
    ],
    "2025-06-18": [
      {
        "date": "2025-06-18",
        "filename": "revision_108432_2025-06-18_14-52-37.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Heels to heav",
              "Flutter",
              "Coffin",
              "Bikes"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band butterfly",
              "Band kickback",
              "Band march"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Kb feet overs 20",
              "Kb clean 10",
              "Kb sh. To sh. 20"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Press bridge",
              "Staggered Rdl to row"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": [
              "Wall sit sh glide",
              "Sh tap dd toe touch"
            ]
          }
        ]
      }
    ],
    "2025-06-23": [
      {
        "date": "2025-06-23",
        "filename": "revision_108434_2025-06-23_14-45-18.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band swim",
              "V up"
            ]
          },
          {
            "phase": "Spartan 10-/25",
            "exercises": [
              "Band row",
              "Hip thrust",
              "Band chest press",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2025-06-25": [
      {
        "date": "2025-06-25",
        "filename": "revision_108436_2025-06-25_14-53-51.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Core march"
            ]
          },
          {
            "phase": "25/10/3",
            "exercises": [
              "Butterfly pump",
              "Straight leg lift"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band piston row 50",
              "Pull thru 25",
              "Band punches 50",
              "Heels elev squat 15"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Drag curl",
              "Kick back",
              "Easy leg curls"
            ]
          }
        ]
      }
    ],
    "2025-06-27": [
      {
        "date": "2025-06-27",
        "filename": "revision_108437_2025-06-27_14-57-34.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg flutters",
              "Basic crunch",
              "Shoulder tap",
              "Pointers",
              "Band bridge",
              "Band hydrant",
              "Band kickback"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Rdl row",
              "Bulgarian",
              "Band facepull",
              "Band chest flye"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Band drag curl",
              "Band kickback",
              "Slider leg curl"
            ]
          }
        ]
      }
    ],
    "2025-07-07": [
      {
        "date": "2025-07-07",
        "filename": "revision_108668_2025-07-07_14-55-39.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Hold",
              "Plank march",
              "Single sh tap"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "R. lunge",
              "Curtsy L",
              "Curtsy R"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db floor press",
              "Rdl",
              "One arm row",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band curl",
              "Band oh tricep",
              "Calf raise",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2025-07-11": [
      {
        "date": "2025-07-11",
        "filename": "revision_108836_2025-07-11_14-58-39.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band dead bug",
              "Side plank row"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Step up",
              "Bridge march"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band s. Row",
              "Rdl",
              "Band press",
              "Cat cow 5 x"
            ]
          },
          {
            "phase": "2x12",
            "exercises": [
              "Db hammers",
              "Wall tricep",
              "Calf raise x 20",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2025-07-23": [
      {
        "date": "2025-07-23",
        "filename": "revision_108841_2025-07-23_14-18-34.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank reach",
              "Bikes",
              "Plank tap",
              "Reverse crunch"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band h. Bridge",
              "Band p. Squat",
              "Band hydrant"
            ]
          },
          {
            "phase": "Complex 5x5",
            "exercises": [
              "Rdl",
              "High pull",
              "1 \u00bd squat",
              "Hang clean"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Alt box ch press",
              "Single Hip thurst"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Kb curl",
              "Tricep plank",
              "Butterfly bridge"
            ]
          }
        ]
      }
    ],
    "2025-08-06": [
      {
        "date": "2025-08-06",
        "filename": "revision_108848_2025-08-06_14-53-17.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Dead bug",
              "Penguins"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band hydrant"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "R lunge pass 16",
              "Db bent row 15",
              "Kb swing 20",
              "Basic crunch 60 seconds"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Curl to press",
              "Sumo dl",
              "Db kickbacks",
              "Yoga cool down"
            ]
          }
        ]
      }
    ],
    "2025-08-08": [
      {
        "date": "2025-08-08",
        "filename": "revision_108849_2025-08-08_14-53-15.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat coffin",
              "Plank tap",
              "Pointers"
            ]
          },
          {
            "phase": "40/15x2",
            "exercises": [
              "Band squat row",
              "Cross chest press",
              "Ab mat butterfly sit up"
            ]
          },
          {
            "phase": "30/15x2",
            "exercises": [
              "Band face pull",
              "Thoracic mob L",
              "Bridge chest press",
              "Thoraci mob R"
            ]
          },
          {
            "phase": "30x15x2",
            "exercises": [
              "1.5 hip thrust L",
              "Hip flexor mob L",
              "1.5 hip thrust R",
              "Hip flexor mob R",
              "Arm finisher"
            ]
          }
        ]
      }
    ],
    "2025-08-13": [
      {
        "date": "2025-08-13",
        "filename": "revision_108851_2025-08-13_14-27-12.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Bike crunch",
              "Feet over kb"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band f/b jack",
              "Band hydrant",
              "Band seal",
              "Band jump sq"
            ]
          },
          {
            "phase": "40/30/20 (15 off)",
            "exercises": [
              "Db goblet squat",
              "Band swim",
              "Db sumo dl",
              "Band Punch"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db 1.5 pull over",
              "Bulgarians 10/10"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit curl",
              "Plank up, sh tap, dd toe touch"
            ]
          }
        ]
      }
    ],
    "2025-08-18": [
      {
        "date": "2025-08-18",
        "filename": "revision_108854_2025-08-18_14-56-24.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Band chest flye",
              "Leg curl",
              "Rear delt flye",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band Drag curls",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2025-08-20": [
      {
        "date": "2025-08-20",
        "filename": "revision_108855_2025-08-20_14-43-50.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up crunch L",
              "Plank reach L"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "F lunge",
              "R. lunge",
              "Speed skater",
              "Bridge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band squat row 20",
              "Box push up 10",
              "Band pull thru 20",
              "Db alt sh press 20"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Band curl",
              "Bridge chest tricep"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2025-08-22": [
      {
        "date": "2025-08-22",
        "filename": "revision_108856_2025-08-22_14-25-17.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Single bird dog",
              "Ab mat coffin crunch"
            ]
          },
          {
            "phase": "Ladder 2-12",
            "exercises": [
              "Band facepull",
              "Pause hip thrusts",
              "Cat cow",
              "Thoracic mob all fours",
              "Thoracic mob wall"
            ]
          },
          {
            "phase": "Ladder 2-12",
            "exercises": [
              "Band flye",
              "Db squat curl"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Back bridge",
              "Hip mob",
              "Ankle mob."
            ]
          }
        ]
      }
    ],
    "2025-08-25": [
      {
        "date": "2025-08-25",
        "filename": "revision_108857_2025-08-25_14-56-11.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Rev lunge",
              "Lat. step L",
              "Lat. step R"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band chest press",
              "Knee tuck"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db bent row",
              "Single press bridge",
              "Leg curl",
              "21s",
              "Band curl",
              "Band kickback"
            ]
          }
        ]
      }
    ],
    "2025-08-27": [
      {
        "date": "2025-08-27",
        "filename": "revision_108858_2025-08-27_14-51-58.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Drop squat",
              "Plank jack",
              "Bridge march",
              "Plank march"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Swings",
              "Db jack",
              "Sh tap",
              "Db complex",
              "1 \u00bd"
            ]
          },
          {
            "phase": "3 x 6",
            "exercises": [
              "Rdl",
              "Push press",
              "squat",
              "rows"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Straight arm pulls",
              "Bridge tricep extension"
            ]
          }
        ]
      },
      {
        "date": "2025-08-27",
        "filename": "revision_108873_2025-08-27_14-52-56.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Drop squat",
              "Plank jack",
              "Bridge march",
              "Plank march"
            ]
          },
          {
            "phase": "30/10x2",
            "exercises": [
              "Band kickback",
              "Band bridge",
              "Band plank tap"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Swings",
              "Db jack",
              "Sh tap",
              "Db complex"
            ]
          },
          {
            "phase": "1 \u00bd  3 x 6",
            "exercises": [
              "Rdl",
              "Push press",
              "squat",
              "rows"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Straight arm pulls",
              "Bridge tricep extension"
            ]
          }
        ]
      }
    ],
    "2025-08-29": [
      {
        "date": "2025-08-29",
        "filename": "revision_108874_2025-08-29_14-23-32.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank reach",
              "SP Left",
              "Sp Right",
              "Hollow hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Reverse lunge",
              "Lateral lunge",
              "HB march"
            ]
          },
          {
            "phase": "EMOM x 3",
            "exercises": [
              "Db jacks 25",
              "Mod V ups 20",
              "Jump lunge 20",
              "Plank up 10"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Renegade row",
              "1 \u00bd RDL",
              "Db kick back",
              "Human maker",
              "Burpee",
              "Sh tap",
              "Dd toe touch",
              "Knee tuck",
              "lunge"
            ]
          }
        ]
      },
      {
        "date": "2025-08-29",
        "filename": "revision_108911_2025-08-29_14-31-29.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank reach",
              "SP Left",
              "Sp Right",
              "Hollow hold",
              "Band bridge",
              "Clams L",
              "Clams R"
            ]
          },
          {
            "phase": "30x15x2",
            "exercises": [
              "1.5 hip thrust L",
              "Hip flexor mob L",
              "1.5 hip thrust R",
              "Hip flexor mob R"
            ]
          },
          {
            "phase": "EMOM x 3",
            "exercises": [
              "Db bent row 15",
              "R lunge pass 16",
              "Kb swing 20",
              "Basic crunch 60 seconds"
            ]
          },
          {
            "phase": "30/15x2",
            "exercises": [
              "Band face pull",
              "Thoracic mob L",
              "Bridge chest press",
              "Thoraci mob R"
            ]
          }
        ]
      }
    ],
    "2025-09-03": [
      {
        "date": "2025-09-03",
        "filename": "revision_108912_2025-09-03_14-31-08.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Cross body knees",
              "Star sit up",
              "Alt superman",
              "Half burpee sumo",
              "Band plank jack",
              "Band hip bridge",
              "Band hydrant"
            ]
          },
          {
            "phase": "Ladder 2-12",
            "exercises": [
              "Db squat curl press",
              "Db bent wide row"
            ]
          },
          {
            "phase": "Spartan 10-20",
            "exercises": [
              "Wall runners",
              "Pull through",
              "Heels to heaven"
            ]
          },
          {
            "phase": "Finisher or Stretch",
            "exercises": [
              "Burpee",
              "Plank up",
              "Reverse lunge"
            ]
          }
        ]
      }
    ],
    "2025-09-10": [
      {
        "date": "2025-09-10",
        "filename": "revision_109021_2025-09-10_14-57-13.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Alt Supermans"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Butterfly pump",
              "Mod sp clam L",
              "Mod sp clam R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Box sl hip thrust",
              "Db 1 \u00bd chest press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Band drag curl",
              "Db tricep ext",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2025-09-12": [
      {
        "date": "2025-09-12",
        "filename": "revision_109228_2025-09-12_14-54-36.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Slider cross tuck",
              "Pointer"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band seal jack",
              "Band kickback",
              "Band plank march"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band seated row",
              "Db rdl",
              "Db push press"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Wall sit Db hammer curl",
              "Band pressdown"
            ]
          }
        ]
      }
    ],
    "2025-09-17": [
      {
        "date": "2025-09-17",
        "filename": "revision_109481_2025-09-17_14-51-56.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Single bridge l",
              "Single b. R",
              "Abduction L",
              "Abduction R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "B. squat row 20 Floor press 15",
              "Swings 20",
              "Alt curl press 60 seconds"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "B. pressdown",
              "Slider leg curl",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2025-09-19": [
      {
        "date": "2025-09-19",
        "filename": "revision_109482_2025-09-19_14-41-14.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Single leg curl",
              "Single calf raise"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Band lateral walk",
              "Step up",
              "Single hip thrust",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      },
      {
        "date": "2025-09-19",
        "filename": "revision_109590_2025-09-19_14-55-55.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Db side lateral",
              "Alt leg curl"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "T flies",
              "Band hip b. Lat pull",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2025-09-22": [
      {
        "date": "2025-09-22",
        "filename": "revision_109591_2025-09-22_14-29-59.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Palloff press L",
              "Hold L",
              "Palloff press R",
              "Hold R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band bridge",
              "Band kick back",
              "Band clam L",
              "Band Clamshell Right"
            ]
          },
          {
            "phase": "5 min ladder",
            "exercises": [
              "5 up",
              "Kb clean",
              "Kb push press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Split squats",
              "Db one arm row",
              "Single hip thrust",
              "Db side lateral"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Slider leg curl",
              "Db floor press",
              "Single calf raise",
              "Yoga cooldown"
            ]
          }
        ]
      }
    ],
    "2025-09-24": [
      {
        "date": "2025-09-24",
        "filename": "revision_109592_2025-09-24_14-27-12.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Bike crunch",
              "Feet over kb"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band f/b jack",
              "Band hydrant",
              "Band seal",
              "Band jump sq"
            ]
          },
          {
            "phase": "40/30/20 (15 off)",
            "exercises": [
              "Db goblet squat",
              "Band swim",
              "Db sumo dl",
              "Band Punch",
              "Step up"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band curl",
              "Band kickback"
            ]
          },
          {
            "phase": "Mobility stretches",
            "exercises": []
          }
        ]
      },
      {
        "date": "2025-09-24",
        "filename": "revision_109624_2025-09-24_14-46-23.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Feet over kb"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band f/b jack",
              "Band hydrant",
              "Band seal",
              "Band jump sq"
            ]
          },
          {
            "phase": "40/30/20 (15 off)",
            "exercises": [
              "Db goblet squat",
              "Band swim",
              "Db sumo dl",
              "Band Punch",
              "Dd toe touch"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band curl",
              "Band kickback",
              "Slider knee tuck"
            ]
          },
          {
            "phase": "Mobility stretches",
            "exercises": []
          }
        ]
      }
    ],
    "2026-01-09": [
      {
        "date": "2026-01-09",
        "filename": "revision_110962_2026-01-09_16-02-57.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Ab mat coffin",
              "Butterfly sit up",
              "Runner"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Band bridge lat pull",
              "Rdl"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db side lateral",
              "Curstys",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2026-01-16": [
      {
        "date": "2026-01-16",
        "filename": "revision_111099_2026-01-16_16-41-06.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "Leg lifts",
              "Side plank clams L/R",
              "Pointers"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Db drop squat",
              "Plank march",
              "Dd toe touch"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Wide outs 40",
              "Kb clean 15",
              "Kb sh. To sh. 20",
              "Bike crunch 60"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "Db compex",
              "6 reps x 4",
              "Db rdl",
              "Db s. Rows",
              "Db squat"
            ]
          }
        ]
      }
    ],
    "2026-01-21": [
      {
        "date": "2026-01-21",
        "filename": "revision_111132_2026-01-21_16-03-29.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat coffin",
              "Pointer"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Curtsy L",
              "Stag. pistol l",
              "Curtsy R",
              "Stag. pistol r"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band one arm pull",
              "Leg curl",
              "Band one arm press"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band facepull",
              "Heels elev squat",
              "Band chest flye"
            ]
          },
          {
            "phase": "60 sec finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2026-01-30": [
      {
        "date": "2026-01-30",
        "filename": "revision_111153_2026-01-30_06-32-00.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Plank march",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band full row",
              "Cross chest press",
              "Pull thru"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Press bridge",
              "Staggered Rdl to row",
              "Hip Flexor"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per side"
            ]
          }
        ]
      }
    ],
    "2026-02-01": [
      {
        "date": "2026-02-01",
        "filename": "revision_111154_2026-02-01_23-20-31.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Oblique L",
              "Plank march",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Split squat R",
              "Split squat L",
              "SL bridge L",
              "SL bridge R",
              "Band chipper"
            ]
          },
          {
            "phase": "20/15/10",
            "exercises": [
              "X - Jacks",
              "squat",
              "Seated Rows"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db floor press",
              "Band pull thru",
              "Ab mat sit up"
            ]
          },
          {
            "phase": "2 x 12",
            "exercises": [
              "Band pressdown",
              "Leg curl",
              "Db curl to arnold press"
            ]
          }
        ]
      }
    ],
    "2026-02-04": [
      {
        "date": "2026-02-04",
        "filename": "revision_111155_2026-02-04_15-55-36.txt",
        "phases": [
          {
            "phase": "25/5x2",
            "exercises": [
              "Kickbacks l/r",
              "Band bridge l",
              "Band bridge r",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat 10"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Pull thru"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band curls",
              "Band kick back",
              "Bw calf raise"
            ]
          }
        ]
      }
    ],
    "2026-02-06": [
      {
        "date": "2026-02-06",
        "filename": "revision_111240_2026-02-06_16-02-05.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Plank march",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Db wide out drops",
              "Band Punch",
              "Slider knee tuck"
            ]
          },
          {
            "phase": "60/15x1",
            "exercises": [
              "Fb lunge L",
              "Fb lunge R"
            ]
          },
          {
            "phase": "Hip rotations",
            "exercises": [
              "90/90 rotations"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per"
            ]
          }
        ]
      }
    ],
    "2026-02-20": [
      {
        "date": "2026-02-20",
        "filename": "revision_111247_2026-02-20_02-13-18.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab walk outs",
              "Reverse crunch",
              "Band bridge",
              "Band hydrant",
              "Band kickback"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Rdl row",
              "Bulgarian",
              "Band facepull",
              "Band chest flye"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Band drag curl",
              "Band kickback",
              "Slider leg curl",
              "Thoracic mob",
              "Hip Flexor",
              "Ankle"
            ]
          }
        ]
      },
      {
        "date": "2026-02-20",
        "filename": "revision_111310_2026-02-20_16-00-33.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab rev. crunch",
              "Bikes",
              "Pointers",
              "Band bridge march",
              "Band hydrant",
              "Band kickback"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Rdl row",
              "Bulgarian",
              "Band facepull",
              "Band chest flye"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Db curl",
              "Band kickback",
              "Slider leg curl",
              "Thoracic mob",
              "Hip Flexor",
              "Ankle"
            ]
          }
        ]
      }
    ],
    "2026-02-25": [
      {
        "date": "2026-02-25",
        "filename": "revision_111318_2026-02-25_15-58-40.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Db ab march L",
              "Band stir the pot L"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Band bridge lat pull",
              "Rdl"
            ]
          },
          {
            "phase": "Spartan 10-20",
            "exercises": [
              "Wall runners",
              "Pull through",
              "Heels to heaven"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db side lateral"
            ]
          }
        ]
      }
    ],
    "2026-02-27": [
      {
        "date": "2026-02-27",
        "filename": "revision_111497_2026-02-27_16-08-37.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Slider alt curls",
              "Clams L/R"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Stag rld to row",
              "Bridge to press",
              "Band facepull",
              "Single calf raise"
            ]
          },
          {
            "phase": "Mobility",
            "exercises": []
          },
          {
            "phase": "Hip rotations 10",
            "exercises": [
              "Wall thoracic",
              "Hip Flexor",
              "Ankle mob."
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db side lateral"
            ]
          }
        ]
      }
    ],
    "2026-03-02": [
      {
        "date": "2026-03-02",
        "filename": "revision_111535_2026-03-02_16-00-46.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Slider alt curls",
              "Clams L/R"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Stag rld to row",
              "Bridge to press",
              "Band facepull",
              "Single calf raise"
            ]
          },
          {
            "phase": "2x15",
            "exercises": [
              "Band curl",
              "B. kickback",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "Mobility",
            "exercises": []
          },
          {
            "phase": "Hip rotations 10",
            "exercises": [
              "Wall thoracic",
              "Hip Flexor",
              "Ankle mob."
            ]
          }
        ]
      }
    ],
    "2026-03-11": [
      {
        "date": "2026-03-11",
        "filename": "revision_111539_2026-03-11_14-30-20.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band squat",
              "Band lateral taps"
            ]
          },
          {
            "phase": "40/15x2",
            "exercises": [
              "Band bridge lat pull",
              "Alt floor press",
              "Ab mat butterfly sit up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Single leg curl",
              "Single calf raise"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db tricep ext",
              "Db curl",
              "Box jump squat"
            ]
          }
        ]
      }
    ],
    "2026-03-16": [
      {
        "date": "2026-03-16",
        "filename": "revision_111541_2026-03-16_01-07-04.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Basic crunch",
              "Leg lift",
              "Star crunch L",
              "Star crunch R"
            ]
          },
          {
            "phase": "Tabata  hold",
            "exercises": [
              "Bridge",
              "Hydrant L",
              "Hydrant R",
              "squat"
            ]
          },
          {
            "phase": "Db complex 4x8",
            "exercises": [
              "Db squat",
              "Db clean",
              "Db push press",
              "Db rdl"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "B. bridge pulls",
              "B. chest press",
              "slider/ball curl",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "Finisher 10",
            "exercises": [
              "Plank up",
              "Sh tap",
              "Dd toe touch"
            ]
          }
        ]
      }
    ],
    "2026-03-18": [
      {
        "date": "2026-03-18",
        "filename": "revision_111727_2026-03-18_15-00-56.txt",
        "phases": [
          {
            "phase": "3 min",
            "exercises": [
              "M.c. 20",
              "Dead bug 10",
              "Wide drops"
            ]
          },
          {
            "phase": "Ladder 6-2",
            "exercises": [
              "Box push up",
              "Box jump sq"
            ]
          },
          {
            "phase": "60/45/30",
            "exercises": [
              "Band swim",
              "Kb elev squat",
              "Band Punch",
              "L sits"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Db bicep curl",
              "Wall tricep",
              "Calf raise 2 sec"
            ]
          },
          {
            "phase": "Finisher 10",
            "exercises": [
              "Plank up",
              "Sh tap",
              "Dd toe touch"
            ]
          }
        ]
      }
    ],
    "2026-03-25": [
      {
        "date": "2026-03-25",
        "filename": "revision_111772_2026-03-25_15-03-01.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank reach",
              "SP Left",
              "Sp Right",
              "Hollow hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Reverse lunge",
              "Lateral lunge",
              "Wide outs"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db ren row 16",
              "Kb swing 20",
              "Band press 30",
              "Penguins 60 sec"
            ]
          },
          {
            "phase": "2 x 8",
            "exercises": [
              "Single curl press",
              "Single hip thrust",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2026-03-27": [
      {
        "date": "2026-03-27",
        "filename": "revision_111787_2026-03-27_07-34-00.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Single bridge l",
              "Single b. R",
              "Abduction L",
              "Abduction R"
            ]
          },
          {
            "phase": "EMOM x 3",
            "exercises": [
              "Db jacks 25",
              "Mod V ups 20",
              "Jump lunge 20",
              "Plank up 10"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Renegade row",
              "1 \u00bd RDL",
              "Db kick back",
              "Human maker",
              "Burpee",
              "Sh tap",
              "Dd toe touch",
              "Knee tuck",
              "lunge"
            ]
          }
        ]
      }
    ],
    "2026-03-30": [
      {
        "date": "2026-03-30",
        "filename": "revision_111819_2026-03-30_15-01-09.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Single bridge l",
              "Single b. R",
              "Abduction L",
              "Abduction R"
            ]
          },
          {
            "phase": "EMOM x 3",
            "exercises": [
              "Db jacks 25",
              "Butterfly sit ups ups 20",
              "Jump or speed lunge 20",
              "Plank ups 60"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Renegade row",
              "1 \u00bd RDL",
              "Db kick back",
              "Human maker",
              "Burpee",
              "Sh tap",
              "Dd toe touch",
              "Knee tuck",
              "lunge"
            ]
          }
        ]
      },
      {
        "date": "2026-03-30",
        "filename": "revision_111840_2026-03-30_15-43-34.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Single bridge l",
              "Single b. R",
              "Abduction L",
              "Abduction R"
            ]
          },
          {
            "phase": "EMOM x 3",
            "exercises": [
              "Db jacks 25",
              "Butterfly sit ups ups 20",
              "Jump or speed lunge 20",
              "Plank ups 60"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db alt row",
              "1 \u00bd RDL",
              "Db kick back",
              "Human maker",
              "Burpee",
              "Sh tap",
              "Dd toe touch",
              "Knee tuck",
              "lunge"
            ]
          }
        ]
      }
    ],
    "2026-04-01": [
      {
        "date": "2026-04-01",
        "filename": "revision_111841_2026-04-01_05-32-33.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat top",
              "Pulse sq. bottom"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Rdl to row",
              "Single press/br",
              "slider/ball tuck"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Arnold press",
              "Sp squat curl",
              "Tricep plank"
            ]
          },
          {
            "phase": "2 x 20",
            "exercises": [
              "Hip thrust",
              "Mod v up"
            ]
          }
        ]
      }
    ],
    "2026-04-03": [
      {
        "date": "2026-04-03",
        "filename": "revision_111842_2026-04-03_08-17-08.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Toe touch",
              "Reverse",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant L",
              "Band bridge l",
              "Band hydrant R",
              "Bridge R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band alt row",
              "Band alt press",
              "Kb swing"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Alt curl to arnolds",
              "Single rdl"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": []
          }
        ]
      },
      {
        "date": "2026-04-03",
        "filename": "revision_111843_2026-04-03_08-20-45.txt",
        "phases": [
          {
            "phase": "3x8",
            "exercises": [
              "Single rdl row",
              "Box push up"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "10 HM",
              "Burpee",
              "Sh tap",
              "Knee tuck",
              "lunge / lunge"
            ]
          }
        ]
      },
      {
        "date": "2026-04-03",
        "filename": "revision_111862_2026-04-03_15-02-36.txt",
        "phases": [
          {
            "phase": "3x8",
            "exercises": [
              "Single rdl row",
              "Box push up"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "10 HM",
              "Burpee",
              "Sh tap",
              "Knee tuck",
              "lunge / lunge"
            ]
          }
        ]
      },
      {
        "date": "2026-04-03",
        "filename": "revision_111909_2026-04-03_15-43-26.txt",
        "phases": [
          {
            "phase": "3x8",
            "exercises": [
              "Stag kb rdl",
              "Plank up l/r"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": [
              "10 HM",
              "Burpee",
              "Sh tap",
              "Knee tuck",
              "lunge / lunge"
            ]
          }
        ]
      }
    ],
    "2026-04-08": [
      {
        "date": "2026-04-08",
        "filename": "revision_111915_2026-04-08_15-17-35.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Toe touch",
              "Reverse",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant L",
              "Band bridge l",
              "Band hydrant R",
              "Bridge R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band row",
              "Band press",
              "Kb swing"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Alt curl to arnolds",
              "Single rdl"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": []
          }
        ]
      }
    ],
    "2026-04-10": [
      {
        "date": "2026-04-10",
        "filename": "revision_111916_2026-04-10_08-19-09.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank march",
              "Side p ll RT l",
              "Side p ll RT r"
            ]
          },
          {
            "phase": "40/10x3",
            "exercises": [
              "Band deep squat",
              "Band kickback"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Db 1.5 floor press",
              "Single RDL 8/8",
              "Coffin 1.5 crunch"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db 1.5 pull over",
              "Bulgarians 10/10"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit curl",
              "Plank up, sh tap, dd toe touch"
            ]
          }
        ]
      }
    ],
    "2026-04-13": [
      {
        "date": "2026-04-13",
        "filename": "revision_111927_2026-04-13_04-23-15.txt",
        "phases": [
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "5 to 10",
              "Dl high pull",
              "Push up"
            ]
          },
          {
            "phase": "Chipper 25/20/15/10",
            "exercises": [
              "Band flye",
              "Band pull thru",
              "Band facepull"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit hammer curl",
              "Alt band pressdowns",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2026-04-15": [
      {
        "date": "2026-04-15",
        "filename": "revision_111985_2026-04-15_15-00-52.txt",
        "phases": [
          {
            "phase": "25/5x3 band",
            "exercises": [
              "f/b b. walk 3",
              "Pulse squat",
              "Plank jack"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "5 to 10",
              "Dl high pull",
              "Push up"
            ]
          },
          {
            "phase": "Chipper 25/20/15/10",
            "exercises": [
              "Band press",
              "Band pull thru",
              "Band s. Row"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit hammer curl",
              "Alt band pressdowns",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2026-04-17": [
      {
        "date": "2026-04-17",
        "filename": "revision_112017_2026-04-17_15-00-09.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Leg lift",
              "Flutter",
              "Toe touch"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Band single bridge L",
              "Abduction",
              "Bridge R",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat",
              "Thoracic mobility"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust",
              "Hip Flexor"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per side",
              "21,s",
              "Bicep",
              "Tricep",
              "Glutes",
              "Shoulders"
            ]
          }
        ]
      }
    ],
    "2026-04-22": [
      {
        "date": "2026-04-22",
        "filename": "revision_112067_2026-04-22_15-02-08.txt",
        "phases": [
          {
            "phase": "30/5x3",
            "exercises": [
              "Plank dip",
              "Dead bug"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "45 lunge",
              "Lateral",
              "Reverse"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Band press",
              "Rdl",
              "Band high pull",
              "Hip thrust"
            ]
          },
          {
            "phase": "3 x 6",
            "exercises": [
              "Rdl to row",
              "Curl press stand",
              "Long stetch"
            ]
          }
        ]
      }
    ],
    "2026-04-24": [
      {
        "date": "2026-04-24",
        "filename": "revision_112069_2026-04-24_14-38-29.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Feet over kb"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band f/b jack",
              "Band hydrant",
              "Band seal",
              "Band jump sq"
            ]
          },
          {
            "phase": "30/15x2",
            "exercises": [
              "Band face pull",
              "Thoracic mob L",
              "Bridge chest press",
              "Thoraci mob R"
            ]
          },
          {
            "phase": "30x15x2",
            "exercises": [
              "1.5 hip thrust L",
              "Hip flexor mob L",
              "1.5 hip thrust R",
              "Hip flexor mob R",
              "Arm finisher"
            ]
          }
        ]
      }
    ],
    "2026-04-27": [
      {
        "date": "2026-04-27",
        "filename": "revision_112071_2026-04-27_14-46-29.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band dead bug",
              "Side plank row"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band s. Row",
              "Rdl",
              "Band press",
              "Cat cow 5 x"
            ]
          },
          {
            "phase": "2x12",
            "exercises": [
              "Db hammers",
              "Wall tricep",
              "Calf raise x 20",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2026-05-01": [
      {
        "date": "2026-05-01",
        "filename": "revision_112145_2026-05-01_15-27-10.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up reach L",
              "Leg up reach R",
              "Criss cross flut",
              "Leg lift hold"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 2-10",
            "exercises": [
              "Kb swing",
              "Kb push press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Sand bag pull thru"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      }
    ],
    "2026-05-06": [
      {
        "date": "2026-05-06",
        "filename": "revision_112161_2026-05-06_15-00-52.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "f/b jack"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band skier",
              "V up"
            ]
          },
          {
            "phase": "Spartan 10-/25",
            "exercises": [
              "Band row",
              "Hip thrust",
              "Band chest press",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2026-05-08": [
      {
        "date": "2026-05-08",
        "filename": "revision_112236_2026-05-08_14-57-25.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Dead bug",
              "Pointer",
              "Plank atw"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Runner lunge",
              "Sh. tap 10",
              "March bridge",
              "60,45,30 sec.(20)",
              "Dd toe touch",
              "3 way squat",
              "Runner clap",
              "Plank up"
            ]
          },
          {
            "phase": "Hip rotations",
            "exercises": [
              "90/90 rotations"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per"
            ]
          }
        ]
      }
    ],
    "2026-06-01": [
      {
        "date": "2026-06-01",
        "filename": "revision_112244_2026-06-01_03-49-01.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Russian twist",
              "Ab circles L",
              "Ab circles R",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "M.c. 10",
              "plan",
              "Wide outs 10"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Seated band row",
              "Db \u00be squats",
              "Toe grabs"
            ]
          },
          {
            "phase": "3x8",
            "exercises": [
              "1 \u00bd hip thrust",
              "Single bridge to chest press",
              "Db hammer curl",
              "finisher"
            ]
          }
        ]
      },
      {
        "date": "2026-06-01",
        "filename": "revision_112270_2026-06-01_15-03-56.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Russian twist",
              "Ab circles L",
              "Ab circles R",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "M.c. 10",
              "Dd toe touch 6",
              "Wide outs 10"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Seated band row",
              "Db \u00be squats",
              "Slider tucks"
            ]
          },
          {
            "phase": "3x8",
            "exercises": [
              "1 \u00bd hip thrust",
              "Single bridge to chest press",
              "Db hammer curl",
              "finisher"
            ]
          }
        ]
      }
    ],
    "2026-06-03": [
      {
        "date": "2026-06-03",
        "filename": "revision_112278_2026-06-03_15-02-04.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Db t flies",
              "Band Drag curls",
              "Wall sh glide",
              "Band kickback"
            ]
          }
        ]
      }
    ],
    "2026-06-08": [
      {
        "date": "2026-06-08",
        "filename": "revision_112317_2026-06-08_14-59-06.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank dip",
              "Side plank p. L",
              "Side plank p. R"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 10-2",
            "exercises": [
              "Kb clean",
              "Db thruster"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      }
    ],
    "2026-06-10": [
      {
        "date": "2026-06-10",
        "filename": "revision_112342_2026-06-10_14-58-04.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank reach",
              "Side reach t"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band swim",
              "V up"
            ]
          },
          {
            "phase": "Spartan 10-/25",
            "exercises": [
              "Band row",
              "Hip thrust",
              "Band chest press",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      },
      {
        "date": "2026-06-10",
        "filename": "revision_112350_2026-06-10_15-31-18.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank reach",
              "Side reach t"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band swim",
              "V up"
            ]
          },
          {
            "phase": "Spartan 10-/25",
            "exercises": [
              "Band row",
              "Hip thrust",
              "Band chest press",
              "Superman alt",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2026-06-15": [
      {
        "date": "2026-06-15",
        "filename": "revision_112374_2026-06-15_15-36-01.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Half burpee",
              "runner sit up",
              "Wide knee tuck"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "5 to 10",
              "Dl high pull",
              "Push up",
              "Wall t spine mob 12"
            ]
          },
          {
            "phase": "Chipper 25/20/15/10",
            "exercises": [
              "Band flye",
              "Band pull thru",
              "Band facepull",
              "Wide outs",
              "Hip flexor mob"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit hammer curl",
              "Alt band pressdowns",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2026-06-19": [
      {
        "date": "2026-06-19",
        "filename": "revision_112376_2026-06-19_14-54-02.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Bikes",
              "Side plank pulse",
              "Runner clap"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Reverse lunge",
              "Runner lunge",
              "Bridge march"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Db floor press 15",
              "Lateral step 20",
              "Lat pull bridge 30"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band drag curl",
              "Kick back",
              "Leg curl"
            ]
          }
        ]
      }
    ],
    "2026-06-22": [
      {
        "date": "2026-06-22",
        "filename": "revision_112448_2026-06-22_15-39-54.txt",
        "phases": [
          {
            "phase": "30/5x3",
            "exercises": [
              "Plank dip",
              "Dead bug"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "45 lunge",
              "Lateral",
              "Reverse",
              "10 reps x 4 ladder",
              "Mod push up",
              "Db drop squat",
              "Db wide row"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Single rdl",
              "Curl press",
              "Db alt kickback"
            ]
          },
          {
            "phase": "Long stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2026-06-26": [
      {
        "date": "2026-06-26",
        "filename": "revision_112509_2026-06-26_15-02-07.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg circles L",
              "Leg circles R",
              "S. P. Clam L",
              "S. P. Clam R",
              "Ramp 3 min",
              "M.c. 20",
              "Half burpee 5",
              "Bridge 10"
            ]
          },
          {
            "phase": "Ladder 5 to 10",
            "exercises": [
              "Heels elev squat",
              "Face pull",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Single rdl row",
              "Ss press",
              "Tricep Plank up"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Curtsy curl",
              "Band straight arm row"
            ]
          }
        ]
      }
    ],
    "2026-06-29": [
      {
        "date": "2026-06-29",
        "filename": "revision_112512_2026-06-29_14-59-41.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Ab mat coffin",
              "Pointer"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Curtsy L",
              "Stag. pistol l",
              "Curtsy R",
              "Stag. pistol r"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band one arm pull",
              "Leg curl",
              "Band one arm press"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band facepull",
              "Heels elev squat",
              "Band chest flye"
            ]
          },
          {
            "phase": "60 sec finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2026-07-01": [
      {
        "date": "2026-07-01",
        "filename": "revision_112560_2026-07-01_15-01-03.txt",
        "phases": [
          {
            "phase": "2 x 30",
            "exercises": [
              "M.c",
              "Bw rus twist",
              "Bikes",
              "Leg lift"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "R. lunge",
              "Lateral lunge",
              "Wide outs"
            ]
          },
          {
            "phase": "3 x12",
            "exercises": [
              "Seated row",
              "Db sumo d.l.",
              "Band chest cross",
              "Db r lunge curtsy"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Wall sit curl",
              "Band tricep pressdowns"
            ]
          }
        ]
      }
    ],
    "2026-07-03": [
      {
        "date": "2026-07-03",
        "filename": "revision_112584_2026-07-03_15-00-38.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Superman"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Bridge",
              "Mod sp dip L",
              "Mod sp dir R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Box sl hip thrust",
              "Db alt incline press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db inc. curls",
              "Db tricep ext",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2026-07-06": [
      {
        "date": "2026-07-06",
        "filename": "revision_112585_2026-07-06_14-47-03.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Ab mat",
              "Coffin",
              "Runner clap",
              "Butterfly"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band seal",
              "Band bridge",
              "Band f/b jack",
              "Band kickback"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db thruster 20",
              "Band piston row 50",
              "Kb swing 20",
              "Band punches 50"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band drag curl",
              "Band french press",
              "Band pull thru"
            ]
          }
        ]
      }
    ],
    "2026-07-08": [
      {
        "date": "2026-07-08",
        "filename": "revision_112607_2026-07-08_06-33-58.txt",
        "phases": [
          {
            "phase": "30/5x3",
            "exercises": [
              "Plank dip",
              "Dead bug"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "45 lunge",
              "Lateral",
              "Reverse"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Band bridge lat pull",
              "Rdl"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db side lateral"
            ]
          }
        ]
      },
      {
        "date": "2026-07-08",
        "filename": "revision_112631_2026-07-08_15-37-09.txt",
        "phases": [
          {
            "phase": "30/5x3",
            "exercises": [
              "Plank dip",
              "Dead bug"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "45 lunge",
              "Lateral",
              "Reverse"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Band bridge lat pull",
              "Rdl"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db curl press",
              "Wall tricep",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2026-07-10": [
      {
        "date": "2026-07-10",
        "filename": "revision_112670_2026-07-10_15-11-12.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Oblique L",
              "Plank march",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Split squat R",
              "Split squat L",
              "SL bridge L",
              "SL bridge R",
              "Band chipper"
            ]
          },
          {
            "phase": "20/15/10",
            "exercises": [
              "X - Jacks",
              "squat",
              "Seated Rows"
            ]
          },
          {
            "phase": "3 x 8/8",
            "exercises": [
              "Db renegade row",
              "Kb single rdl",
              "Ab mat sit up (15)"
            ]
          },
          {
            "phase": "2 x 12",
            "exercises": [
              "Band pressdown",
              "Leg curl",
              "Db curl to arnold press"
            ]
          }
        ]
      }
    ],
    "2026-07-17": [
      {
        "date": "2026-07-17",
        "filename": "revision_112803_2026-07-17_15-02-25.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank march",
              "Penguins",
              "Superman"
            ]
          },
          {
            "phase": "40/10x3",
            "exercises": [
              "Band deep squat",
              "Band kickback"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Bulgarian",
              "Dd push up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Band pressdown",
              "Slider leg curl",
              "Band facepull"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit curl",
              "Plank up, sh tap, dd toe touch"
            ]
          }
        ]
      }
    ],
    "2026-07-20": [
      {
        "date": "2026-07-20",
        "filename": "revision_112804_2026-07-20_06-34-02.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Basic crunch",
              "Penguins",
              "Feet over kb"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band f/b jack",
              "Band hydrant",
              "Band seal",
              "Band jump sq"
            ]
          },
          {
            "phase": "40/30/20 (15 off)",
            "exercises": [
              "Db goblet squat",
              "Band swim",
              "Db sumo dl",
              "Band Punch",
              "Dd toe touch"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band curl",
              "Band kickback",
              "Slider knee tuck"
            ]
          }
        ]
      }
    ],
    "2026-07-24": [
      {
        "date": "2026-07-24",
        "filename": "revision_112898_2026-07-24_15-00-41.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Toe touch",
              "Reverse",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "M.c",
              "Wide outs",
              "Sh tap",
              "Flutter"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db piston row 30",
              "Db wide outs 25",
              "Kb thruster 20",
              "Ball push out 20"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Alt curl to arnolds",
              "Single rdl"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": []
          }
        ]
      }
    ],
    "2026-07-27": [
      {
        "date": "2026-07-27",
        "filename": "revision_112899_2026-07-27_14-31-37.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Star sit up",
              "atwp",
              "Ramp 3:30",
              "M.c. 20",
              "Speed skat 10",
              "Burpee 5"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db thruster 20",
              "Band b.row 30",
              "Kb swing 20",
              "V up sit up 10"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db curl press",
              "Hip thrust 20",
              "Slider 3 way 5",
              "8 half burpee",
              "8 push up",
              "8 jump squat",
              "8 pikes",
              "32 Birthday Reps :)"
            ]
          }
        ]
      },
      {
        "date": "2026-07-27",
        "filename": "revision_113015_2026-07-27_15-01-06.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Leg circles L",
              "Leg circles R",
              "atwp",
              "Ramp 3:30",
              "M.c. 20",
              "Speed skate 10",
              "Burpee 5"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db thruster 20",
              "Band row 30",
              "Kb swing 20",
              "Ab mat sit up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db tricep ext",
              "slider/ball leg curl",
              "Step up curl",
              "9 half burpee",
              "9 push up",
              "9 jump squat",
              "9 pikes",
              "36 Birthday Reps :)"
            ]
          }
        ]
      }
    ],
    "2026-08-07": [
      {
        "date": "2026-08-07",
        "filename": "revision_113018_2026-08-07_14-56-21.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Wide outs 10",
              "Plank jacks 10",
              "Butterfly pump"
            ]
          },
          {
            "phase": "3x8 1 \u00bd",
            "exercises": [
              "Band chest flye",
              "Leg curl",
              "Rear delt flye",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band Drag curls",
              "Band Overhead ext",
              "Calf raise"
            ]
          }
        ]
      },
      {
        "date": "2026-08-07",
        "filename": "revision_113025_2026-08-07_15-00-04.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Wide outs 10",
              "Plank jacks 10",
              "Butterfly pump"
            ]
          },
          {
            "phase": "3x8 1 \u00bd",
            "exercises": [
              "Band chest flye",
              "Leg curl",
              "Rear delt flye",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band Drag curls",
              "Band Overhead ext",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2026-08-10": [
      {
        "date": "2026-08-10",
        "filename": "revision_113026_2026-08-10_14-38-50.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Heels to heav",
              "Flutter",
              "Coffin",
              "Bikes"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "R. lunge",
              "L. lunge L",
              "L. lunge R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Db  feet overs 20",
              "Kb clean 10",
              "Kb sh. To sh. 20"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Press bridge",
              "Staggered Rdl to row"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": [
              "Wall sit sh glide",
              "Sh tap dd toe touch"
            ]
          }
        ]
      },
      {
        "date": "2026-08-10",
        "filename": "revision_113039_2026-08-10_14-58-50.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Heels to heav",
              "Flutter",
              "Coffin",
              "Bikes"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Forward Lunge",
              "R. lunge",
              "L. lunge L",
              "L. lunge R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Db  feet overs 20",
              "Kb clean 10",
              "Kb sh. To sh. 60 sec"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Press bridge",
              "Staggered Rdl to row"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": [
              "Wall sit sh glide",
              "Sh tap dd toe touch"
            ]
          }
        ]
      }
    ],
    "2026-08-12": [
      {
        "date": "2026-08-12",
        "filename": "revision_113075_2026-08-12_14-58-20.txt",
        "phases": [
          {
            "phase": "Tabata Holds",
            "exercises": [
              "Basic crunch",
              "Leg lift",
              "Side plank dip l",
              "Side plank dip r"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "5 to 10",
              "Dl high pull",
              "Push up",
              "Wall t spine mob 12"
            ]
          },
          {
            "phase": "Chipper 25/20/15/10",
            "exercises": [
              "Band flye",
              "Band pull thru",
              "Band facepull",
              "Hip flexor mob"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit hammer curl",
              "Alt band pressdowns",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2026-08-13": [
      {
        "date": "2026-08-13",
        "filename": "revision_113165_2026-08-13_15-17-12.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Alt leg drop",
              "Alt superman",
              "Bridge march"
            ]
          },
          {
            "phase": "Ladder 5-10",
            "exercises": [
              "Pend swing",
              "Db thruster"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "Hip mob floor",
              "90 leg rotations",
              "Wall"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Incline bench",
              "Ball leg curls",
              "Ball sit ups"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "1 \u00bd band press",
              "1 \u00bd hip thrust",
              "1 \u00bd band row",
              "Paige 3 sets"
            ]
          }
        ]
      }
    ],
    "2026-08-17": [
      {
        "date": "2026-08-17",
        "filename": "revision_113166_2026-08-17_17-28-05.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Leg up reach L",
              "Leg up reach R",
              "Leg lift",
              "Bikes"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 1-5",
            "exercises": [
              "Single clean press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      }
    ],
    "2026-09-07": [
      {
        "date": "2026-09-07",
        "filename": "revision_113214_2026-09-07_15-36-16.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Ab mat crunch",
              "Ab circles L",
              "Ab circles R",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "M.c. 10",
              "Half burpee 5",
              "Wide outs 10"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Seated band row",
              "Db \u00be squats",
              "Toe grabs"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "1 \u00bd hip thrust",
              "bridge to chest press",
              "Band bridge to lat pull",
              "finisher"
            ]
          }
        ]
      }
    ],
    "2026-09-11": [
      {
        "date": "2026-09-11",
        "filename": "revision_113251_2026-09-11_15-03-39.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Toe touch",
              "Reverse",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant L",
              "Band bridge l",
              "Band hydrant R",
              "Bridge R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band squat row",
              "Sh tap",
              "Kb swing"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Alt curl to arnolds",
              "Single rdl"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": []
          }
        ]
      },
      {
        "date": "2026-09-11",
        "filename": "revision_113303_2026-09-11_15-36-37.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Toe touch",
              "Reverse",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant L",
              "Band bridge l",
              "Band hydrant R",
              "Bridge R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band squat row",
              "Sh tap",
              "Kb swing"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Rev lunge curl l/r",
              "Wall tricep ext",
              "Wall thoracic mob"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": []
          }
        ]
      }
    ],
    "2026-09-14": [
      {
        "date": "2026-09-14",
        "filename": "revision_113327_2026-09-14_15-00-15.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank tap",
              "Oblique L",
              "Plank march",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Split squat R",
              "Split squat L",
              "SL bridge L",
              "SL bridge R",
              "Band chipper"
            ]
          },
          {
            "phase": "20/15/10",
            "exercises": [
              "X - Jacks",
              "squat",
              "Seated Rows"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db floor press",
              "Band pull thru",
              "Db row",
              "Ab mat sit up"
            ]
          },
          {
            "phase": "2 x 12",
            "exercises": [
              "Band pressdown",
              "Leg curl",
              "Db curl to arnold press"
            ]
          }
        ]
      }
    ],
    "2026-09-16": [
      {
        "date": "2026-09-16",
        "filename": "revision_113328_2026-09-16_14-58-45.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Mod v up",
              "Plank tap",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "F lunge",
              "R. lunge",
              "Lateral lunge",
              "Runner lunge"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db floor press",
              "Single leg hip thrust",
              "Db pull over",
              "Heels elev squat"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db side lateral",
              "Step up",
              "B. drag curls",
              "B. kick backs"
            ]
          }
        ]
      },
      {
        "date": "2026-09-16",
        "filename": "revision_113342_2026-09-16_14-59-47.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Single bridge l",
              "Single b. R",
              "Abduction L",
              "Abduction R"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db floor press",
              "Single leg hip thrust",
              "Db pull over",
              "Heels elev squat"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db side lateral",
              "Step up",
              "B. drag curls",
              "B. kick backs"
            ]
          }
        ]
      }
    ],
    "2026-09-18": [
      {
        "date": "2026-09-18",
        "filename": "revision_113422_2026-09-18_15-01-44.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Rolling  plank 3 sec"
            ]
          },
          {
            "phase": "25/10/3",
            "exercises": [
              "Butterfly pump",
              "Pulse lunge R/L",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band piston row 50",
              "Pull thru 25",
              "Band punches 50",
              "Alt leg drops 60 sec"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Drag curl",
              "Kick back",
              "Easy leg curls"
            ]
          }
        ]
      }
    ],
    "2026-09-21": [
      {
        "date": "2026-09-21",
        "filename": "revision_113428_2026-09-21_14-57-22.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band skier",
              "V up"
            ]
          },
          {
            "phase": "Spartan 10-/25",
            "exercises": [
              "Band row",
              "Hip thrust",
              "Band chest press",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2026-09-23": [
      {
        "date": "2026-09-23",
        "filename": "revision_113464_2026-09-23_15-00-51.txt",
        "phases": [
          {
            "phase": "40/10x2",
            "exercises": [
              "Db ab march L",
              "Band chop L"
            ]
          },
          {
            "phase": "40/10x2",
            "exercises": [
              "Band bridge",
              "Band clam R"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Band bridge lat pull",
              "Rdl",
              "Ab mat butterfly"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db side lateral",
              "Curstys",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2026-09-30": [
      {
        "date": "2026-09-30",
        "filename": "revision_113583_2026-09-30_15-01-47.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse s. squat l",
              "Pulse s. Squat r"
            ]
          },
          {
            "phase": "45/35/25",
            "exercises": [
              "Kb swing",
              "V up",
              "Band Skiers",
              "Leg lifts"
            ]
          },
          {
            "phase": "Ladder 12/2",
            "exercises": [
              "Band row",
              "Sumo dl",
              "Band chest press",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2026-10-02": [
      {
        "date": "2026-10-02",
        "filename": "revision_113666_2026-10-02_15-00-59.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Toe touch",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 25/20/15",
            "exercises": [
              "Band squat row",
              "Drop squat",
              "Pull thru",
              "Shoulder tap"
            ]
          },
          {
            "phase": "40/15x2",
            "exercises": [
              "Lunge squat lunge",
              "Push up knee tuck",
              "atwp"
            ]
          },
          {
            "phase": "Hip rotations",
            "exercises": [
              "90/90 rotations"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per"
            ]
          }
        ]
      }
    ],
    "2026-10-14": [
      {
        "date": "2026-10-14",
        "filename": "revision_113864_2026-10-14_15-01-43.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "V up",
              "Leg lift",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Wide drops",
              "M.c",
              "R. lunge",
              "Sh. taps"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band punch 60",
              "Kb dl hi pull 15",
              "Band s. Rows 40",
              "Arrested s.m."
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Db curl",
              "Db tricep ext",
              "Step out lunge",
              "finisher"
            ]
          }
        ]
      }
    ],
    "2026-10-16": [
      {
        "date": "2026-10-16",
        "filename": "revision_113868_2026-10-16_15-00-04.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Heels to heav",
              "Flutter",
              "Coffin",
              "Bikes"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band hydrant",
              "Band butterfly",
              "Band kickback",
              "Band bridge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Kb swing 20",
              "Kb feet overs 20",
              "Kb clean 10",
              "Kb sh. To sh. 20"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Press bridge",
              "Staggered Rdl to row"
            ]
          },
          {
            "phase": "60 sec.",
            "exercises": [
              "Wall sit sh glide",
              "Sh tap dd toe touch"
            ]
          }
        ]
      }
    ],
    "2026-10-19": [
      {
        "date": "2026-10-19",
        "filename": "revision_113956_2026-10-19_15-01-26.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up reach L",
              "Leg up reach R",
              "Criss cross flut",
              "Leg lift hold"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "Ladder 2-10",
            "exercises": [
              "Kb swing",
              "Kb push press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Mod push push ups"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Band pull-thu",
              "Db tricep ext",
              "Db curl"
            ]
          }
        ]
      }
    ],
    "2026-10-28": [
      {
        "date": "2026-10-28",
        "filename": "revision_113987_2026-10-28_15-14-52.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "Bulgarian Split Squat",
              "Db side lateral",
              "Leg curl"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "T flies",
              "Knee tuck",
              "60 finisher",
              "L,S,L",
              "Sh tap to DD toe touch",
              "Coffin crunch"
            ]
          }
        ]
      }
    ],
    "2026-10-30": [
      {
        "date": "2026-10-30",
        "filename": "revision_113988_2026-10-30_14-59-21.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "One arm row",
              "Stag. rdl",
              "Strict press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Heels elev squat",
              "Band flye",
              "Db t flies"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Band drag curl",
              "Band french press",
              "Band pull thru",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2023-07-31": [
      {
        "date": "2023-07-31",
        "filename": "revision_81140_2023-07-31_14-57-52.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "See saw plank",
              "Mod v up",
              "Bike crunch"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band single bridge L",
              "Band jump",
              "squat"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band punch 50",
              "Slider m.c. 50",
              "Db alt thruster 20",
              "Db renegade r. 20"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Rdl to row",
              "Push up to h.b.",
              "Db hammer curl to press"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": []
          }
        ]
      },
      {
        "date": "2023-07-31",
        "filename": "revision_81144_2023-07-31_15-43-46.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "See saw plank",
              "Mod v up",
              "Bike crunch"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band single bridge L",
              "Band jump",
              "squat"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band punch 50",
              "Slider m.c. 50",
              "Db alt thruster 20",
              "Db renegade r. 20"
            ]
          },
          {
            "phase": "2 x 12",
            "exercises": [
              "Rdl to row",
              "Push up to h.b.",
              "Db hammer curl to press"
            ]
          },
          {
            "phase": "Finisher",
            "exercises": []
          }
        ]
      }
    ],
    "2023-08-02": [
      {
        "date": "2023-08-02",
        "filename": "revision_81145_2023-08-02_14-57-05.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Db W- rows",
              "Band Drag curls",
              "Wall sit sup pull apart"
            ]
          }
        ]
      },
      {
        "date": "2023-08-02",
        "filename": "revision_81219_2023-08-02_15-40-06.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Db t flies",
              "Band Drag curls",
              "Wall sh glide",
              "Band kickback"
            ]
          }
        ]
      }
    ],
    "2023-08-04": [
      {
        "date": "2023-08-04",
        "filename": "revision_81393_2023-08-04_14-51-00.txt",
        "phases": [
          {
            "phase": "Ladder 1-5",
            "exercises": [
              "2 part get up"
            ]
          },
          {
            "phase": "Ladder 12-2",
            "exercises": [
              "Band squ. Row",
              "Pend kb swing",
              "Leg lift swipe"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Single bridge press",
              "Db 1.5 pull over"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Bulgarian o.h.",
              "Press",
              "Thoracic mob"
            ]
          },
          {
            "phase": "stretch",
            "exercises": []
          }
        ]
      }
    ],
    "2023-08-09": [
      {
        "date": "2023-08-09",
        "filename": "revision_81394_2023-08-09_14-58-57.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Runner crunch",
              "Superman",
              "Leg lift swipe",
              "Wide knee tuck"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Single thrust l",
              "Single thrust r",
              "Bulgarian l",
              "Bulgarian r"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Sumo deadlift",
              "Shoulder press",
              "Rdl",
              "Face pull"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Heels up squat",
              "Bent sup row",
              "Pistols 5/5",
              "Plank up 5/5"
            ]
          }
        ]
      }
    ],
    "2023-09-20": [
      {
        "date": "2023-09-20",
        "filename": "revision_83578_2023-09-20_14-57-51.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Band seal",
              "Band leg lift adb",
              "Band jump squat",
              "Band plank jack"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "High knees 20",
              "M.c. 20",
              "Burpee 5",
              "Bikes 20",
              "Db complex"
            ]
          },
          {
            "phase": "4 x 8",
            "exercises": [
              "Sumo dead",
              "Push press",
              "squat",
              "Rdl w row"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Floor press",
              "Leg curl",
              "Tucks"
            ]
          }
        ]
      }
    ],
    "2023-10-09": [
      {
        "date": "2023-10-09",
        "filename": "revision_84564_2023-10-09_14-59-51.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "High knees",
              "Plank jack",
              "Speed skater",
              "Dd toe touch"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band seal jack",
              "Band alt row",
              "Band squat",
              "Band Punch"
            ]
          },
          {
            "phase": "4 x 8",
            "exercises": [
              "Db rdl",
              "Db push press",
              "Sumo to high pull",
              "Db crunch"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db curl",
              "Band pressdown"
            ]
          }
        ]
      }
    ],
    "2023-12-11": [
      {
        "date": "2023-12-11",
        "filename": "revision_86594_2023-12-11_15-53-52.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Band chest flye",
              "Leg curl",
              "Rear delt flye",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band Drag curls",
              "Band Overhead ext"
            ]
          }
        ]
      }
    ],
    "2024-01-24": [
      {
        "date": "2024-01-24",
        "filename": "revision_88561_2024-01-24_15-58-46.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Reach left",
              "Hold",
              "Reach right",
              "Leg lift",
              "Flutter",
              "Bikes",
              "Rest",
              "2 to 6 ladder",
              "Box jump sq",
              "Box push up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db floor press",
              "Kb sumos",
              "Db bent row",
              "Knee tuck"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db curl press",
              "Leg curl",
              "Db tricep ext"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band Drag curls",
              "Pull thru"
            ]
          }
        ]
      }
    ],
    "2024-02-09": [
      {
        "date": "2024-02-09",
        "filename": "revision_89172_2024-02-09_15-59-12.txt",
        "phases": [
          {
            "phase": "Spartan",
            "exercises": [
              "Band pulls",
              "Band press",
              "Hip thrust"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Db W- rows",
              "Band Drag curls",
              "Band Overhead ext"
            ]
          }
        ]
      }
    ],
    "2024-02-28": [
      {
        "date": "2024-02-28",
        "filename": "revision_90184_2024-02-28_16-03-59.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg circles L",
              "Leg circles R",
              "S. P. Clam L",
              "S. P. Clam R",
              "Ramp 3 min",
              "M.c. 20",
              "Half burpee 5",
              "Bridge 10"
            ]
          },
          {
            "phase": "Ladder 5 to 10",
            "exercises": [
              "Drop squat",
              "Push up"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Single rdl row",
              "Ss press",
              "Tricep Plank up"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Curtsy curl",
              "Band straight arm row"
            ]
          }
        ]
      }
    ],
    "2024-03-18": [
      {
        "date": "2024-03-18",
        "filename": "revision_91428_2024-03-18_15-41-45.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Rev lunge",
              "Lat. step L",
              "Lat. step R"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band chest press",
              "Knee tuck"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db bent row",
              "Single press bridge",
              "Leg curl",
              "Db side lateral",
              "21s",
              "Band curl",
              "Band kickback"
            ]
          }
        ]
      }
    ],
    "2024-04-19": [
      {
        "date": "2024-04-19",
        "filename": "revision_93087_2024-04-19_14-57-35.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank dip",
              "Runner clap",
              "Plank march",
              "Leg lift"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Drop squat",
              "M.c",
              "Runner lunge",
              "Sh tap",
              "Db complex"
            ]
          },
          {
            "phase": "4x6",
            "exercises": [
              "Rdl",
              "Row",
              "Sumo high pull",
              "Push press"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "Cat cow",
              "Thoracic mob",
              "Hip mob",
              "Db man maker 10",
              "Burpee",
              "Push up",
              "Row",
              "squat"
            ]
          }
        ]
      }
    ],
    "2024-05-08": [
      {
        "date": "2024-05-08",
        "filename": "revision_93869_2024-05-08_15-04-10.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Leg lift",
              "Toe touch",
              "Side plank pulse"
            ]
          },
          {
            "phase": "Tabata holds",
            "exercises": [
              "squat",
              "Split squat L",
              "Split squat R",
              "Wide outs",
              "Rest"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band plank jack",
              "Band bridge",
              "Seated row"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Db floor press",
              "Kb deadlift",
              "Db wide row",
              "Leg curl"
            ]
          },
          {
            "phase": "60/15x1",
            "exercises": [
              "Wall sit curl",
              "Plank up",
              "Lunge squat lunge"
            ]
          }
        ]
      }
    ],
    "2024-05-22": [
      {
        "date": "2024-05-22",
        "filename": "revision_94552_2024-05-22_15-23-36.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Cross mc 10",
              "Push up 5",
              "Drop squat 10"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Band chest flye",
              "Rear delt flye",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band preacher curls",
              "Band kickback"
            ]
          }
        ]
      }
    ],
    "2024-06-07": [
      {
        "date": "2024-06-07",
        "filename": "revision_95646_2024-06-07_15-00-21.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg up reach L",
              "Leg up reach R",
              "Bikes",
              "Hollow hold"
            ]
          },
          {
            "phase": "5 min",
            "exercises": [
              "Db thruster 10",
              "Db row 10",
              "Db drop squat 10"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Incline bench",
              "Thoracic mob",
              "Single leg hip thrust",
              "Hip mobility"
            ]
          },
          {
            "phase": "2 x 10",
            "exercises": [
              "One arm row"
            ]
          },
          {
            "phase": "Lat stretch",
            "exercises": [
              "Pistol",
              "Hip flexor mob"
            ]
          }
        ]
      }
    ],
    "2024-06-26": [
      {
        "date": "2024-06-26",
        "filename": "revision_96527_2024-06-26_14-52-31.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "3 way crunch",
              "Pointer"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Drop squat 10",
              "M.c. 10",
              "Butt kicker 20"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db one arm row",
              "Single leg thrust",
              "Db oh tricep"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db floor press",
              "Bulgarian",
              "Db bicep curl",
              "Man maker",
              "Burpee",
              "Sh tap",
              "Cross knee",
              "Dd toe touch"
            ]
          }
        ]
      }
    ],
    "2024-07-19": [
      {
        "date": "2024-07-19",
        "filename": "revision_97582_2024-07-19_14-49-39.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Dead bug",
              "Pointer",
              "Plank atw"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Runner lunge",
              "Sh. tap 10",
              "March bridge"
            ]
          },
          {
            "phase": "3x10",
            "exercises": [
              "Band bridge lat pull",
              "Db rdl",
              "All 4 thoracic mobility"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db floor press",
              "Kb heels elev squat",
              "Full hip mobility"
            ]
          }
        ]
      }
    ],
    "2024-08-14": [
      {
        "date": "2024-08-14",
        "filename": "revision_98462_2024-08-14_15-01-48.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Band hydrant",
              "Kickbacks l/r",
              "Ramp 3min",
              "Band seals 10",
              "Band f/b 10",
              "Band squat"
            ]
          },
          {
            "phase": "3x15",
            "exercises": [
              "Band chest flye",
              "Leg curl",
              "Rear delt flye",
              "Heels elev squat"
            ]
          },
          {
            "phase": "2 x 15",
            "exercises": [
              "Band facepull",
              "Band Drag curls",
              "Band Overhead ext",
              "Calf raise"
            ]
          }
        ]
      }
    ],
    "2024-08-19": [
      {
        "date": "2024-08-19",
        "filename": "revision_98733_2024-08-19_14-58-57.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Hard plank",
              "Reverse crunch",
              "Superman hold"
            ]
          },
          {
            "phase": "3 min ramp",
            "exercises": [
              "Wide outs 10",
              "M.c. 10",
              "Half burpee 5",
              "Pull aparts 10",
              "Rev. hyper 10"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band bridge pull 20",
              "Band punches 50",
              "Kb swing 25",
              "Plank jacks 50"
            ]
          },
          {
            "phase": "3 x 8",
            "exercises": [
              "Curl to arnold",
              "Bulgarian Split Squat",
              "Leg circles"
            ]
          }
        ]
      }
    ],
    "2024-08-23": [
      {
        "date": "2024-08-23",
        "filename": "revision_98735_2024-08-23_14-55-04.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Half burpee",
              "runner sit up",
              "Wide knee tuck",
              "Wall thoracic",
              "Wall sit lat mobility"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band flye",
              "Band pull thru",
              "Band facepull",
              "Hip Flexor",
              "Hands free hips",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      },
      {
        "date": "2024-08-23",
        "filename": "revision_98843_2024-08-23_15-20-58.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Half burpee",
              "runner sit up",
              "Wide knee tuck"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "5 to 10",
              "Dl high pull",
              "Push up",
              "Wall t spine mob 12"
            ]
          },
          {
            "phase": "Chipper 25/20/15/10",
            "exercises": [
              "Band flye",
              "Band pull thru",
              "Band facepull",
              "Hip flexor mob"
            ]
          },
          {
            "phase": "60 sec",
            "exercises": [
              "Wall sit hammer curl",
              "Alt band pressdowns",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-08-26": [
      {
        "date": "2024-08-26",
        "filename": "revision_99032_2024-08-26_14-55-42.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "One arm row",
              "Rdl",
              "Strict press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Floor press",
              "Heels elev squat",
              "Band drag curl",
              "Db lying tricep",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      },
      {
        "date": "2024-08-26",
        "filename": "revision_99034_2024-08-26_15-42-57.txt",
        "phases": [
          {
            "phase": "3 x 10",
            "exercises": [
              "One arm row",
              "Rdl",
              "Strict press"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Heels elev squat",
              "Band drag curl",
              "Db lying tricep",
              "Man maker",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-08-28": [
      {
        "date": "2024-08-28",
        "filename": "revision_99221_2024-08-28_14-56-37.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Basic crunch",
              "Leg lift",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata hold",
            "exercises": [
              "Ss right",
              "Ss left",
              "Runner lunge",
              "Bridge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db ren row 16",
              "Kb swing 20",
              "Db alt f. Press 20"
            ]
          },
          {
            "phase": "60 sec penguins",
            "exercises": [
              "Man maker",
              "Stretch"
            ]
          }
        ]
      },
      {
        "date": "2024-08-28",
        "filename": "revision_99254_2024-08-28_15-51-44.txt",
        "phases": [
          {
            "phase": "Tabata holds",
            "exercises": [
              "Basic crunch",
              "Leg lift",
              "Oblique L",
              "Oblique R"
            ]
          },
          {
            "phase": "Tabata hold",
            "exercises": [
              "Ss right",
              "Ss left",
              "Runner lunge",
              "Bridge"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db ren row 16",
              "Kb swing 20",
              "Db alt f. Press 20"
            ]
          },
          {
            "phase": "2 x 8",
            "exercises": [
              "Single curl press",
              "Single hip thrust",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-08-30": [
      {
        "date": "2024-08-30",
        "filename": "revision_99510_2024-08-30_14-57-15.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Reach crunch",
              "Reverse crunch",
              "Pointer"
            ]
          },
          {
            "phase": "5 min ladder",
            "exercises": [
              "5 up",
              "Push up",
              "Prisoner jump squat"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Db burpee 10",
              "Db r. Lunge press 20",
              "Db wide row 15",
              "60 Band plank jack 60 sec",
              "Thoracic mobility",
              "Stretch"
            ]
          }
        ]
      }
    ],
    "2024-09-04": [
      {
        "date": "2024-09-04",
        "filename": "revision_99675_2024-09-04_15-02-11.txt",
        "phases": [
          {
            "phase": "30/10x3",
            "exercises": [
              "Dead bug",
              "Pointer",
              "Plank"
            ]
          },
          {
            "phase": "30/10x3",
            "exercises": [
              "Band bridge",
              "Band clam L",
              "Band clam R"
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Bench thruster",
              "Piston row",
              "Slider m.c."
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Db side lateral",
              "Band drag curl",
              "Slider leg curl"
            ]
          }
        ]
      }
    ],
    "2024-09-06": [
      {
        "date": "2024-09-06",
        "filename": "revision_99678_2024-09-06_15-32-34.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Plank dip",
              "Side plank p. L",
              "Side plank p. R"
            ]
          },
          {
            "phase": "25/10x3",
            "exercises": [
              "Butterfly pump",
              "Single bridge l",
              "Single bridge r"
            ]
          },
          {
            "phase": "5 min 3/3",
            "exercises": [
              "Single clean press"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "S. sand bag row",
              "Sand bag box squat",
              "Butterfly sit up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Db floor press",
              "Kb sumo deadlift",
              "Leg lift"
            ]
          }
        ]
      }
    ],
    "2024-09-09": [
      {
        "date": "2024-09-09",
        "filename": "revision_99679_2024-09-09_15-00-13.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Plank reach",
              "SP Left",
              "Sp Right",
              "Hollow hold"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Step out lunge",
              "Reverse lunge",
              "Lateral lunge",
              "HB march"
            ]
          },
          {
            "phase": "EMOM x 3",
            "exercises": [
              "Db jacks 25",
              "Mod V ups 20",
              "Jump lunge 20",
              "Plank up 10"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Renegade row",
              "1 \u00bd RDL",
              "Db kick back",
              "Human maker",
              "Burpee",
              "Sh tap",
              "Dd toe touch",
              "Knee tuck",
              "lunge"
            ]
          }
        ]
      }
    ],
    "2024-09-11": [
      {
        "date": "2024-09-11",
        "filename": "revision_99683_2024-09-11_15-03-57.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg lift",
              "Mod v up",
              "Bikes",
              "Plank dip"
            ]
          },
          {
            "phase": "Ladder 5 up for 5 min",
            "exercises": [
              "Push up",
              "Pend kb swing",
              "Db s.s. press l 15",
              "Db s.sq press r 15",
              "P.u.p. Row l 15",
              "P.u.p row r 15"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band curl",
              "Db kickbacks",
              "Bag hip thrust"
            ]
          }
        ]
      },
      {
        "date": "2024-09-11",
        "filename": "revision_99725_2024-09-11_15-08-17.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Leg lift",
              "Mod v up",
              "Bikes",
              "Plank dip"
            ]
          },
          {
            "phase": "Ladder 5 up for 5 min",
            "exercises": [
              "Push up",
              "Pend kb swing"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "B. split squat",
              "One arm row",
              "Floor press"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band curl",
              "Db kickbacks",
              "Bag hip thrust"
            ]
          }
        ]
      }
    ],
    "2024-09-13": [
      {
        "date": "2024-09-13",
        "filename": "revision_99757_2024-09-13_15-32-12.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Slider knee tuck",
              "Obliques L",
              "Obliques R",
              "See saw"
            ]
          },
          {
            "phase": "Tabata",
            "exercises": [
              "Band 45 jack",
              "Band f/b jack",
              "Band hydrant",
              "Band bridge"
            ]
          },
          {
            "phase": "Ladder 2 to 6",
            "exercises": [
              "Db push up row",
              "Kb deadlift to high pull"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "Stag. rdl",
              "Band straight arm lat pull",
              "Band chest flye"
            ]
          },
          {
            "phase": "3 x 12",
            "exercises": [
              "Slider leg curl",
              "Band chest press",
              "Db kickbacks"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Drop squat",
              "Double crunch"
            ]
          }
        ]
      }
    ],
    "2024-09-16": [
      {
        "date": "2024-09-16",
        "filename": "revision_99918_2024-09-16_14-44-15.txt",
        "phases": [
          {
            "phase": "25/10x3",
            "exercises": [
              "Leg circle L",
              "Leg circle R",
              "Slider m.c."
            ]
          },
          {
            "phase": "Spartan",
            "exercises": [
              "Band press",
              "Band sup pull",
              "Db thruster"
            ]
          },
          {
            "phase": "3 x 10",
            "exercises": [
              "T flies",
              "Pull thru",
              "Bridge press ext"
            ]
          }
        ]
      }
    ],
    "2024-09-18": [
      {
        "date": "2024-09-18",
        "filename": "revision_99961_2024-09-18_15-36-01.txt",
        "phases": [
          {
            "phase": "25/5x3",
            "exercises": [
              "Plank",
              "Side plank L",
              "Side plank R"
            ]
          },
          {
            "phase": "25/5x3 band",
            "exercises": [
              "Lateral walk 3",
              "Pulse squat",
              "Kick back"
            ]
          },
          {
            "phase": "Ladder",
            "exercises": [
              "Kb swing",
              "Band swim",
              "V up"
            ]
          },
          {
            "phase": "3x12",
            "exercises": [
              "Pull down",
              "Db floor press",
              "Sumo deadlift",
              "10 man maker",
              "Burpee",
              "Push up",
              "Sh tap",
              "Dd knee tuck"
            ]
          }
        ]
      }
    ],
    "2024-09-20": [
      {
        "date": "2024-09-20",
        "filename": "revision_99974_2024-09-20_15-22-34.txt",
        "phases": [
          {
            "phase": "30/10x2",
            "exercises": [
              "Single leg drop",
              "Plank march",
              "Penguins",
              "T\u2019s, w\u2019s, l\u2019s",
              "Thoracic mobility",
              "12 reps per side"
            ]
          },
          {
            "phase": "Chipper 20/15/10",
            "exercises": [
              "Band squat row",
              "Punches",
              "Pull thru"
            ]
          },
          {
            "phase": "Lunge matrix 5 per side",
            "exercises": [
              "3 way push up 5 each"
            ]
          },
          {
            "phase": "Hip rotations",
            "exercises": [
              "90/90 rotations"
            ]
          },
          {
            "phase": "12 per side",
            "exercises": [
              "Ankle mobility 12 per"
            ]
          }
        ]
      }
    ],
    "2024-09-25": [
      {
        "date": "2024-09-25",
        "filename": "revision_99975_2024-09-25_15-00-08.txt",
        "phases": [
          {
            "phase": "Tabata",
            "exercises": [
              "Basic crunch",
              "Plank reach",
              "Reverse crunch",
              "Star crunch"
            ]
          },
          {
            "phase": "5 min get up",
            "exercises": [
              "L/R"
            ]
          },
          {
            "phase": "Emom",
            "exercises": [
              "Band skiers 30",
              "Kb pend swing 15",
              "Band punch 40",
              "Db twist thrust 20"
            ]
          },
          {
            "phase": "2x10",
            "exercises": [
              "Hold 10 sec",
              "Single hip thrust",
              "Kneeling push up",
              "Supinated pull"
            ]
          },
          {
            "phase": "3 x 15",
            "exercises": [
              "Band curl",
              "Band Overhead ext",
              "Travel lunge 8/8"
            ]
          }
        ]
      }
    ]
  },
  "all_workouts": [
    {
      "date": "2024-09-27",
      "filename": "revision_100171_2024-09-27_14-56-28.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat runner clap",
            "Coffin crunch",
            "Arrested superman"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "M.c. 10",
            "Drop squat 10",
            "Burpee 5"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db floor press",
            "heels elev kb squat",
            "Db bent row",
            "Rdl"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": [
            "Wall sit curl",
            "Lunge squat lunge",
            "Single leg drop"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2024-09-30",
      "filename": "revision_100391_2024-09-30_14-51-28.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up crunch L",
            "Leg up crunch r",
            "Flutter",
            "Hold leg lift"
          ]
        },
        {
          "phase": "Tabata band",
          "exercises": [
            "Bridge",
            "Kickback L",
            "Kick back r",
            "Plank tap"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Kb swing",
            "Drop squat",
            "Slider tucks"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band press",
            "Band s. Pull",
            "Box squat"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2024-10-02",
      "filename": "revision_100392_2024-10-02_14-42-17.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Ab mat",
            "Coffin",
            "Runner clap",
            "Butterfly"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band seal",
            "Band bridge",
            "Band f/b jack",
            "Band kickback"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db thruster 20",
            "Band skiers 30",
            "Kb swing 20",
            "Band punches 50"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band drag curl",
            "Band french press",
            "Band pull thru"
          ]
        }
      ]
    },
    {
      "date": "2024-10-02",
      "filename": "revision_100574_2024-10-02_14-54-21.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Superman"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Bridge",
            "Mod sp dip L",
            "Mod sp dir R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Box sl hip thrust",
            "Db alt floor press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Band drag curl",
            "Db tricep ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2024-10-04",
      "filename": "revision_100575_2024-10-04_14-58-03.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Plank march",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band full row",
            "Cross chest press",
            "Pull thru"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "R. Lunge Row",
            "Kick back"
          ]
        },
        {
          "phase": "Hip rotations",
          "exercises": [
            "90/90 rotations"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per"
          ]
        }
      ]
    },
    {
      "date": "2024-10-04",
      "filename": "revision_100576_2024-10-04_14-58-31.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "M.c",
            "Plank hip tap",
            "Heels to heaven",
            "Superman hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band kickback",
            "Band hip abd",
            "Band bridge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db renegade 20",
            "Kb hike swing 10",
            "Db floor press 20",
            "Leg curls 20",
            "21,s",
            "Band curl",
            "Db tricep"
          ]
        }
      ]
    },
    {
      "date": "2024-10-04",
      "filename": "revision_100616_2024-10-04_15-40-30.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "M.c",
            "Plank hip tap",
            "Heels to heaven",
            "Superman hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band kickback",
            "Band hip abd",
            "Band bridge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band s. Pulls 30",
            "Kb hike swing 10",
            "Db floor press 25",
            "Leg curls 20"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Db curl",
            "Db o.h. Tricep",
            "Stag. rdl"
          ]
        }
      ]
    },
    {
      "date": "2024-10-07",
      "filename": "revision_100837_2024-10-07_14-54-27.txt",
      "phases": [
        {
          "phase": "2 x 30",
          "exercises": [
            "Spider climbers",
            "Bw rus twist",
            "Bikes",
            "Leg lift"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "R. lunge",
            "Lateral lunge",
            "Wide outs"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band lat pull",
            "Db sumo d.l.",
            "Band chest cross",
            "Db \u00be curtsy"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Wall sit curl",
            "Band tricep pressdowns"
          ]
        }
      ]
    },
    {
      "date": "2024-10-09",
      "filename": "revision_100872_2024-10-09_15-28-48.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Dead bug",
            "Pointer",
            "Plank"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam L",
            "Band clam R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band pull thru",
            "Band row",
            "Band press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db side lateral",
            "Band drag curl",
            "Slider leg curl"
          ]
        }
      ]
    },
    {
      "date": "2024-10-11",
      "filename": "revision_101053_2024-10-11_14-54-14.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Single leg drop",
            "Oblique reach"
          ]
        },
        {
          "phase": "Ladder 6-2",
          "exercises": [
            "Kb clean",
            "Push up"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db alt thruster 20",
            "Renegade row 12",
            "Soccer tap 40",
            "Plank up 12"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db kickbacks",
            "Split squat curl L/R",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2024-10-14",
      "filename": "revision_101054_2024-10-14_14-58-07.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg lift",
            "Hold",
            "Reach left",
            "Reach right",
            "Basic crunch",
            "Rest"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Hydrants",
            "Kick backs L/R",
            "Arrested supers"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Bulgarian Split Squat",
            "One arm row",
            "Db o.h. Tricep"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Step up L/R",
            "Floor press",
            "Db full b. curl"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-10-16",
      "filename": "revision_101255_2024-10-16_14-54-57.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Weighted d.b.",
            "Db russian twist",
            "Alt leg drop"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Curtsy L",
            "Curtsy R",
            "Reverse lunge"
          ]
        },
        {
          "phase": "Ladder 5 to 1",
          "exercises": [
            "Kb clean press",
            "Burpee row"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db drop squat 25",
            "Band punches 50",
            "Lateral step 20",
            "Band piston row"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-10-16",
      "filename": "revision_101268_2024-10-16_15-30-50.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Weighted d.b.",
            "Db russian twist",
            "Alt leg drop"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Curtsy L",
            "Curtsy R",
            "Reverse lunge"
          ]
        },
        {
          "phase": "Ladder 5 to 1",
          "exercises": [
            "Kb clean press",
            "Burpee row"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db drop squat 25",
            "Band punches 50",
            "Lateral step 20",
            "Db s. Lateral 15"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-10-21",
      "filename": "revision_101539_2024-10-21_15-11-59.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank march",
            "Basic crunch",
            "Plank dip",
            "Bikes"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Drop squat 8",
            "Dd toe touch 8",
            "Plank jack 8"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Db 1 \u00bd rdl",
            "Db push press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Bridge press",
            "1 \u00bd wedge squat",
            "Band upper back pull"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2024-10-23",
      "filename": "revision_101540_2024-10-23_14-59-38.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank",
            "Basic crunch",
            "Reach r",
            "Reach l"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band bridge l",
            "Band bridge r",
            "squat"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band squat row",
            "Db floor press",
            "Band x jack"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band bridge lat pull",
            "Db arnold press",
            "Bag hip thrust"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit bus driver",
            "Plank up knee tuck",
            "21s bicep",
            "Tricep"
          ]
        }
      ]
    },
    {
      "date": "2024-10-28",
      "filename": "revision_101718_2024-10-28_14-47-01.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Alt leg drop",
            "Pointer"
          ]
        },
        {
          "phase": "5 min full get up",
          "exercises": [
            "L/R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Alt thruster 20",
            "Band skiers 25",
            "Push up tucks 10",
            "Kb swing 20"
          ]
        },
        {
          "phase": "3 x12",
          "exercises": [
            "Band drag curl",
            "Tricep press ext",
            "Travel lunge",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-10-30",
      "filename": "revision_101719_2024-10-30_14-57-12.txt",
      "phases": [
        {
          "phase": "5 min",
          "exercises": [
            "Full get up",
            "L/R"
          ]
        },
        {
          "phase": "40/15x2",
          "exercises": [
            "Band squat row",
            "Cross chest press",
            "Ab mat butterfly sit up"
          ]
        },
        {
          "phase": "30/15x2",
          "exercises": [
            "Band face pull",
            "Thoracic mob L",
            "Bridge chest press",
            "Thoraci mob R"
          ]
        },
        {
          "phase": "30x15x2",
          "exercises": [
            "1.5 hip thrust L",
            "Hip flexor mob L",
            "1.5 hip thrust R",
            "Hip flexor mob R",
            "Arm finisher"
          ]
        }
      ]
    },
    {
      "date": "2024-10-30",
      "filename": "revision_101720_2024-10-30_14-58-57.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Heels to heav",
            "Flutter",
            "Coffin",
            "Bikes"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band butterfly",
            "Band kickback",
            "Band march"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Kb feet overs 20",
            "Kb clean 10",
            "Kb sh. To sh. 20"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band bridge to lat pull",
            "Db side lateral"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": [
            "Wall sit sh glide",
            "Sh tap dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2024-11-01",
      "filename": "revision_101721_2024-11-01_14-59-52.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Leg lift",
            "Flutter",
            "Toe touch"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Band single bridge L",
            "Abduction",
            "Bridge R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band row",
            "Band press",
            "Pull through"
          ]
        },
        {
          "phase": "2 x 12",
          "exercises": [
            "Band curl",
            "Band kickbacks"
          ]
        }
      ]
    },
    {
      "date": "2024-11-01",
      "filename": "revision_101729_2024-11-01_15-13-05.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Leg lift",
            "Flutter",
            "Toe touch"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Band single bridge L",
            "Abduction",
            "Bridge R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band row",
            "Band press",
            "Pull through"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band curl",
            "Band kickbacks",
            "Slider curls"
          ]
        }
      ]
    },
    {
      "date": "2024-11-04",
      "filename": "revision_102022_2024-11-04_15-51-32.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Basic crunch",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "R. lunge",
            "Curtsy L",
            "Curtsy R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Band straight arm lat pull",
            "Sumo d.l.",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db tricep floor press",
            "Heels elev squat",
            "Db hammer curl"
          ]
        },
        {
          "phase": "60 sec x 1",
          "exercises": [
            "Wall sit shoulder glide",
            "Thoracic mobility L"
          ]
        }
      ]
    },
    {
      "date": "2024-11-08",
      "filename": "revision_102351_2024-11-08_15-46-20.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Dead bug L",
            "Dead bug R",
            "Bike crunch"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge L",
            "Step out lunge R",
            "R lunge L",
            "R lunge R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Single band row",
            "Ss curl L/R",
            "Slider leg curl"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Single press",
            "Bridge tricep extension",
            "Calf raise",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2024-11-08",
      "filename": "revision_102353_2024-11-08_16-41-22.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Dead bug L",
            "Dead bug R",
            "Bike crunch"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge L",
            "Step out lunge R",
            "R lunge L",
            "R lunge R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Single band row",
            "Ss curl L/R",
            "Slider leg curl"
          ]
        },
        {
          "phase": "2 x 12",
          "exercises": [
            "Single press",
            "Bridge tricep extension",
            "Calf raise",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2024-11-13",
      "filename": "revision_102863_2024-11-13_15-52-38.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Runner clap",
            "Superman"
          ]
        },
        {
          "phase": "Tabata holds",
          "exercises": [
            "Ss L",
            "Ss R",
            "Wide out drops",
            "Alt Curtsy",
            "Rest"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "Y, T, W"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Seated row",
            "Wall sit pull apart",
            "Single chest press",
            "Tricep pressdown"
          ]
        }
      ]
    },
    {
      "date": "2024-11-18",
      "filename": "revision_102864_2024-11-18_16-00-00.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank dip",
            "Side plank p. L",
            "Side plank p. R"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 1-5",
          "exercises": [
            "Single clean press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2024-11-18",
      "filename": "revision_102908_2024-11-18_16-47-51.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank dip",
            "Side plank p. L",
            "Side plank p. R"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 10-4",
          "exercises": [
            "Kb clean",
            "1 \u00bd band chest press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "2x12",
          "exercises": [
            "Db tricep press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2024-11-20",
      "filename": "revision_103161_2024-11-20_15-52-44.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Reverse crunch",
            "Bw russian twist",
            "Single reach l",
            "Single reach r"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band 45 jack",
            "Band squat",
            "Band f/b jack",
            "Band bridge",
            "Ramp 3 min",
            "Runner lunge 10",
            "Sh. tap 20",
            "Leg flutter 10"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Band lat pull",
            "Rdl",
            "Floor press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db curl",
            "Wall tricep ext",
            "Single calf raise"
          ]
        }
      ]
    },
    {
      "date": "2024-11-22",
      "filename": "revision_103384_2024-11-22_15-59-55.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat runner clap",
            "Arrested superman",
            "L sit over kb"
          ]
        },
        {
          "phase": "Ladder 2-12",
          "exercises": [
            "Band facepull",
            "Db drop squat"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "R lunge pass 16",
            "Db bent row 15",
            "Kb swing 20",
            "Basic crunch 60 seconds"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Band curl",
            "Db bridge tricep",
            "Leg curl"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2024-11-25",
      "filename": "revision_103620_2024-11-25_15-55-04.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Drop squat",
            "Slider m.c.",
            "Soccer tap"
          ]
        },
        {
          "phase": "Ladder 14-4",
          "exercises": [
            "Kb swing",
            "Band chest press"
          ]
        },
        {
          "phase": "45/15x3",
          "exercises": [
            "Lunge squat lunge",
            "Sh tap dd toe touch",
            "Db Rdl to row"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Single bridge to chest press",
            "Single leg db row",
            "Ab mat butterfly sit up"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2024-11-27",
      "filename": "revision_103675_2024-11-27_16-40-37.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Heels to heav",
            "Flutter",
            "Coffin",
            "Bikes"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band butterfly",
            "Band kickback",
            "Band march"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Kb feet overs 20",
            "Kb clean 10",
            "Kb sh. To sh. 20"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Wall sit curl",
            "Band kickback",
            "T flies"
          ]
        }
      ]
    },
    {
      "date": "2024-12-02",
      "filename": "revision_103676_2024-12-02_15-56-59.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db W- rows",
            "Band Drag curls",
            "Band Overhead ext"
          ]
        }
      ]
    },
    {
      "date": "2024-12-02",
      "filename": "revision_103710_2024-12-02_16-24-29.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Db squat curl",
            "Db overhead ext",
            "T flies"
          ]
        }
      ]
    },
    {
      "date": "2024-12-04",
      "filename": "revision_103711_2024-12-04_15-42-34.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Coffin crunch",
            "Reach obliques",
            "V crunch"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "R. lunge",
            "45 d lunge",
            "Lateral lunge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb hike swing 15",
            "Db ren row 16",
            "Db lat step 16",
            "Slider 3 way 8",
            "Side laterals 15",
            "Pistols  8/8",
            "Kick backs 8/8",
            "Pull thru 15"
          ]
        }
      ]
    },
    {
      "date": "2024-12-04",
      "filename": "revision_103831_2024-12-04_16-00-08.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Single leg drop",
            "Pointer"
          ]
        },
        {
          "phase": "5 min get up",
          "exercises": [
            "L/R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb hike swing 15",
            "Db ren row 16",
            "Db step up 16",
            "Slider 3 way 8",
            "Side laterals 15",
            "Pistols  8/8",
            "Band Kick backs 15",
            "Band curl"
          ]
        }
      ]
    },
    {
      "date": "2024-12-06",
      "filename": "revision_104132_2024-12-06_15-52-58.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Runner clap",
            "Plank dip",
            "Leg circles L",
            "Leg circles R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "F Lunge tt",
            "R Lunge tt",
            "Curtsy L",
            "Cursty R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Single hip thrust",
            "Side plank dip",
            "Thoracic mob l/r"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db tricep ext",
            "Db hammer curl",
            "Sit squat"
          ]
        }
      ]
    },
    {
      "date": "2024-12-20",
      "filename": "revision_104135_2024-12-20_15-48-57.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab walk outs",
            "Reverse crunch"
          ]
        },
        {
          "phase": "Ladder 2-12",
          "exercises": [
            "Db thruster",
            "Db bent row"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb clean 15",
            "Db R. lunge curl 16",
            "Kb sh. To sh. 12",
            "Reverse hyper 20",
            "Thoracic mob",
            "Hip Flexor",
            "Ankle",
            "21s",
            "Shoulders",
            "Hamstrings"
          ]
        }
      ]
    },
    {
      "date": "2024-12-23",
      "filename": "revision_104136_2024-12-23_15-40-08.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Band chest flye",
            "Leg curl",
            "Band facepull",
            "Heels elev squat"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band curl",
            "Band Overhead ext",
            "Travel lunge 8/8"
          ]
        }
      ]
    },
    {
      "date": "2024-12-30",
      "filename": "revision_104137_2024-12-30_15-53-46.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db t flies",
            "Band Drag curls",
            "Band Overhead ext"
          ]
        }
      ]
    },
    {
      "date": "2025-01-03",
      "filename": "revision_104138_2025-01-03_15-55-42.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg lift",
            "Bikes",
            "Reverse cr",
            "Plank dip"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "F lunge",
            "R. lunge",
            "Lateral L",
            "Lateral R"
          ]
        },
        {
          "phase": "Ladder 1 -6",
          "exercises": [
            "Kb clean",
            "Push up"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db piston row 40",
            "Kb swing",
            "Db piston press 40",
            "Kb fast drops 30"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Wall sit curl",
            "Db tricep ext",
            "Slider curls"
          ]
        }
      ]
    },
    {
      "date": "2025-01-03",
      "filename": "revision_104139_2025-01-03_15-56-42.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Plank march",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band full row",
            "Cross chest press",
            "Pull thru"
          ]
        },
        {
          "phase": "Lunge matrix 5 per side",
          "exercises": [
            "3 way push up 5 each"
          ]
        },
        {
          "phase": "Hip rotations",
          "exercises": [
            "90/90 rotations"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per"
          ]
        }
      ]
    },
    {
      "date": "2025-01-13",
      "filename": "revision_104156_2025-01-13_16-21-56.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Single reach l",
            "Single reach r",
            "Leg lift",
            "Criss cross flutters",
            "Rest"
          ]
        },
        {
          "phase": "Tabata holds",
          "exercises": [
            "squat",
            "Split squats l",
            "Split squats r",
            "Wide outs",
            "Rest"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db alt floor press 20",
            "Band lat pull bridge 20",
            "Step up and over 20",
            "Sand bag pull thru 20"
          ]
        },
        {
          "phase": "3x8",
          "exercises": [
            "1 \u00bd bulagarians",
            "Renegade row",
            "Wall sit 1 \u00bd bicep culs",
            "finisher"
          ]
        }
      ]
    },
    {
      "date": "2025-01-15",
      "filename": "revision_104157_2025-01-15_15-52-22.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "V crunch",
            "Ab circles L",
            "Ab circles R",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "M.c. 10",
            "Half burpee 5",
            "Wide outs 10"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Seated band row",
            "Db \u00be squats",
            "Toe grabs"
          ]
        },
        {
          "phase": "3x8",
          "exercises": [
            "1 \u00bd hip thrust",
            "Single bridge to chest press",
            "Db hammer curl",
            "finisher"
          ]
        }
      ]
    },
    {
      "date": "2025-01-24",
      "filename": "revision_104159_2025-01-24_15-54-42.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Bikes",
            "Side plank pulse",
            "Runner clap"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Reverse lunge",
            "Runner lunge",
            "Bridge march"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Push up 10",
            "Lateral step 20",
            "Lat pull bridge 30"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band drag curl",
            "Kick back",
            "Leg curl"
          ]
        }
      ]
    },
    {
      "date": "2025-01-27",
      "filename": "revision_104160_2025-01-27_15-56-31.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Alt leg drop",
            "Pointer",
            "Bridge march"
          ]
        },
        {
          "phase": "Ladder 5-10",
          "exercises": [
            "Pend swing",
            "Step yoga push up"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "Hip mob floor",
            "90 leg rotations",
            "Wall"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "1 \u00bd band press",
            "1 \u00bd band pull",
            "1 \u00bd bw thrust"
          ]
        }
      ]
    },
    {
      "date": "2025-01-29",
      "filename": "revision_104161_2025-01-29_15-58-50.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank march",
            "Side plank RT l",
            "Side plank RT r"
          ]
        },
        {
          "phase": "40/10x3",
          "exercises": [
            "Band deep squat",
            "Band kickback"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Db 1.5 floor press",
            "Single RDL 8/8",
            "Coffin 1.5 crunch"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db 1.5 pull over",
            "Bulgarians 10/10"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit curl",
            "Plank up, sh tap, dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2025-02-05",
      "filename": "revision_104420_2025-02-05_15-54-57.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Slider tucks",
            "Bikes",
            "Pointer"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Single bridge l",
            "Single bridge r",
            "Alt kickbacks"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Db floor press",
            "Bag thrust",
            "Bent row",
            "Slider curls"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db t flies",
            "Butterfly pump",
            "Butterfly situp",
            "Band curl",
            "Band pressdown"
          ]
        }
      ]
    },
    {
      "date": "2025-02-05",
      "filename": "revision_104465_2025-02-05_16-14-04.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Slider tucks",
            "Bikes",
            "Pointer"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Single bridge l",
            "Single bridge r",
            "Alt kickbacks"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Db floor press",
            "Db rdl",
            "Bent row",
            "Slider curls"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Db t flies",
            "Butterfly pump",
            "Ab mat coffin",
            "Calf raise"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-02-10",
      "filename": "revision_104995_2025-02-10_16-00-06.txt",
      "phases": [
        {
          "phase": "25/10x2",
          "exercises": [
            "Palloff press L",
            "Kneeling band chop L",
            "Repeat R"
          ]
        },
        {
          "phase": "3 min bands",
          "exercises": [
            "F. walk 6",
            "Plank jack 6",
            "R. walk 6",
            "Speed squat 6"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Band bridge pull",
            "Db one arm row",
            "Kb stag. rdl"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "One arm press w bridge",
            "Bulgarian Split Squat",
            "Band flye"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-02-19",
      "filename": "revision_105148_2025-02-19_15-57-47.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Core march"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Band bridge",
            "Clams L/R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band piston row 40",
            "Pull thru 25",
            "Band punches 40",
            "Heels elev squat 15"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Drag curl",
            "Kick back",
            "Single leg bridge pulse"
          ]
        }
      ]
    },
    {
      "date": "2025-02-21",
      "filename": "revision_105165_2025-02-21_16-00-14.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Superman"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat coffin",
            "Plank tap",
            "Pointers"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Bridge",
            "Mod sp dip L",
            "Mod sp dir R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Band drag curl",
            "Db tricep ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2025-02-24",
      "filename": "revision_105483_2025-02-24_16-47-32.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Basic crunch",
            "Reverse crunch",
            "Oblique reach"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Reverse lunge",
            "Lateral lunge",
            "Drop squat"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db alt thruster 20",
            "B. bridge lat pull 20",
            "Alt floor press 20",
            "Lat. band walk 60 sec."
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Alt curl press",
            "S.L. hip thrust",
            "Db alt kickback"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": []
        },
        {
          "phase": "45 sec",
          "exercises": [
            "Wall sit",
            "Sh. tap to dd tt"
          ]
        }
      ]
    },
    {
      "date": "2025-02-26",
      "filename": "revision_105503_2025-02-26_15-50-13.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band bridge l",
            "Band bridge r",
            "squat",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db t flies",
            "Band Drag curls",
            "Band Overhead ext"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit bus driver",
            "Plank up knee tuck",
            "21s bicep",
            "Tricep"
          ]
        }
      ]
    },
    {
      "date": "2025-02-28",
      "filename": "revision_105509_2025-02-28_15-53-53.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "One arm row",
            "Rdl",
            "Strict press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Heels elev squat",
            "Band drag curl",
            "Db lying tricep"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band drag curl",
            "Band french press",
            "Band pull thru",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2025-03-03",
      "filename": "revision_105616_2025-03-03_15-56-21.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank dip",
            "Side plank dip l",
            "Side plank dip r"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 1-5",
          "exercises": [
            "Single clean press"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db wide row",
            "Band pull thru",
            "Leg curl"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Band chest press",
            "Sand bag box squat",
            "Ab mat coffin"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db curl arnold press",
            "Band pressdown"
          ]
        }
      ]
    },
    {
      "date": "2025-03-05",
      "filename": "revision_105827_2025-03-05_15-58-39.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Toe touch",
            "Bikes",
            "Pointer"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Drop squat 10",
            "Slider m.c. 10",
            "Pull apart 5"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band punches 40",
            "Kb dl high pull 15",
            "Db floor press 20",
            "Band swims 40"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Kneeling curl press l/r",
            "Single kick back",
            "1 \u00bd RDL"
          ]
        }
      ]
    },
    {
      "date": "2025-03-12",
      "filename": "revision_105830_2025-03-12_14-59-21.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Tight bird dogL",
            "Tight bird dogR",
            "Db march L",
            "Db march R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "f/b lunge L",
            "f/b lunge r",
            "Curtsy L",
            "Cursty R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band skiers 20",
            "Band punches 40",
            "Db drop squat 20",
            "Dead bug 60 sec"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Ss hammer curl L",
            "Ss hammer curl R",
            "Bridge press tricep ext."
          ]
        },
        {
          "phase": "Finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-03-14",
      "filename": "revision_105883_2025-03-14_14-53-55.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Half burpee",
            "runner sit up",
            "Wide knee tuck",
            "Hip mobility"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "5 to 10",
            "Dl high pull",
            "Push up",
            "Wall t spine mob 12"
          ]
        },
        {
          "phase": "Chipper 25/20/15/10",
          "exercises": [
            "Band press",
            "Band pull thru",
            "Band seated row",
            "Hip flexor mob"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit hammer curl",
            "Alt band pressdowns"
          ]
        },
        {
          "phase": "Yoga Cooldown",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-03-17",
      "filename": "revision_105896_2025-03-17_14-55-46.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band swim V up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Pull down",
            "Db floor press",
            "Sumo deadlift",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck Up"
          ]
        }
      ]
    },
    {
      "date": "2025-03-17",
      "filename": "revision_105940_2025-03-17_15-31-03.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band swim V up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Pull down",
            "Db floor press",
            "Sumo deadlift"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db alt curl press",
            "Db tricep ext",
            "Leg curl"
          ]
        }
      ]
    },
    {
      "date": "2025-03-24",
      "filename": "revision_105942_2025-03-24_14-46-45.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Side plank dip l",
            "Side plank dip r",
            "Hollow hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Wide outs",
            "f/b lunge r",
            "f/b lunge L",
            "High knees",
            "Get ups"
          ]
        },
        {
          "phase": "10 per side",
          "exercises": []
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db jacks 30",
            "Renegade row 8/8",
            "Hip thrust 20",
            "Band punch 50",
            "Db curl",
            "Db tricep",
            "Jump squat"
          ]
        }
      ]
    },
    {
      "date": "2025-03-28",
      "filename": "revision_105943_2025-03-28_14-41-32.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up reach L",
            "Leg up reach R"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 1-5",
          "exercises": [
            "Single clean press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2025-03-28",
      "filename": "revision_106034_2025-03-28_15-25-33.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up reach L",
            "Leg up reach R",
            "Wide knee touch"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 1-5",
          "exercises": [
            "Single clean press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Sup sand bag row",
            "Sand bag box squat",
            "Band drag curl",
            "Db tricep ext"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Band face pull"
          ]
        }
      ]
    },
    {
      "date": "2025-03-31",
      "filename": "revision_106035_2025-03-31_14-47-30.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank",
            "Pointer",
            "Bridge",
            "Hollow hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Slow bikes",
            "Superman hold",
            "March",
            "Speed skater"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band press",
            "Band squat row",
            "Band x jack"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band curl",
            "Tricep extension",
            "Hip thrust"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-04-02",
      "filename": "revision_106058_2025-04-02_14-49-37.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Single reach l",
            "Single reach r",
            "Leg lift",
            "Criss cross flutters",
            "Rest"
          ]
        },
        {
          "phase": "Tabata holds",
          "exercises": [
            "squat",
            "Split squats l",
            "Split squats r",
            "Wide outs",
            "Rest"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db alt floor press 20",
            "Band lat pull bridge 20",
            "Step up and over 20",
            "Sand bag pull thru 20"
          ]
        },
        {
          "phase": "3x8",
          "exercises": [
            "1 \u00bd RDL",
            "One arm row",
            "Wall sit bicep curls"
          ]
        }
      ]
    },
    {
      "date": "2025-04-04",
      "filename": "revision_106331_2025-04-04_14-58-51.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "Criss cross leg lifts",
            "Side plank clams L/R",
            "Pointers"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Db drop squat",
            "Shoulder tap",
            "Dd toe touch"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Incline bench",
            "Db sumos",
            "Db one arm row",
            "Ss arnold press"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "Db compex",
            "8 reps x 4",
            "Db rdl",
            "Db s. Rows",
            "Db squat"
          ]
        }
      ]
    },
    {
      "date": "2025-04-07",
      "filename": "revision_106397_2025-04-07_14-51-26.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Db t flies",
            "Alt leg curl"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Band lateral walk",
            "Step up",
            "Single hip thrust",
            "60 finisher",
            "Squat curl",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2025-04-09",
      "filename": "revision_106563_2025-04-09_14-56-42.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Flutter",
            "Penguins",
            "Side plank dip"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "R. lunge",
            "Curtsy L",
            "Curtsy R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Bag squat 20",
            "Db floor press 15",
            "Wall sit front raise 15",
            "Skiers 60 sec."
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "R. lunge press",
            "Db tricep ext",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2025-04-11",
      "filename": "revision_106564_2025-04-11_14-39-29.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Plank march",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band full row",
            "Cross chest press",
            "Pull thru",
            "Hip Flexor"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per side",
            "21,s",
            "Bicep",
            "Tricep",
            "Glutes",
            "Shoulders"
          ]
        }
      ]
    },
    {
      "date": "2025-04-11",
      "filename": "revision_106566_2025-04-11_14-48-23.txt",
      "phases": [
        {
          "phase": "40/15x2",
          "exercises": [
            "Band squat row",
            "Cross chest press",
            "Ab mat butterfly sit up"
          ]
        },
        {
          "phase": "30/15x2",
          "exercises": [
            "Band face pull",
            "Thoracic mob L",
            "Bridge chest press",
            "Thoraci mob R"
          ]
        },
        {
          "phase": "30x15x2",
          "exercises": [
            "1.5 hip thrust L",
            "Hip flexor mob L",
            "1.5 hip thrust R",
            "Hip flexor mob R",
            "Arm finisher"
          ]
        }
      ]
    },
    {
      "date": "2025-04-14",
      "filename": "revision_106741_2025-04-14_14-56-25.txt",
      "phases": [
        {
          "phase": "3x8",
          "exercises": [
            "Rev. lunge to curtsy",
            "1 \u00bd floor press",
            "Db 1 \u00bd pullover"
          ]
        },
        {
          "phase": "2x15",
          "exercises": [
            "Wall sit curl",
            "Db kickbacks",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2025-04-23",
      "filename": "revision_106895_2025-04-23_14-28-26.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank",
            "Basic crunch",
            "Reach r",
            "Reach l"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band bridge l",
            "Band bridge r",
            "squat"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band squat row",
            "Db floor press",
            "Band x jack"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band bridge lat pull",
            "Db arnold press",
            "Bag hip thrust"
          ]
        }
      ]
    },
    {
      "date": "2025-04-23",
      "filename": "revision_106906_2025-04-23_15-00-35.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank",
            "Basic crunch",
            "Reach r",
            "Reach l"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band bridge l",
            "Band bridge r",
            "squat"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band squat row",
            "Db floor press",
            "Band pull thru"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band bridge lat pull",
            "Db arnold press",
            "Bag hip thrust"
          ]
        }
      ]
    },
    {
      "date": "2025-04-25",
      "filename": "revision_106959_2025-04-25_14-54-54.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb dl hp",
            "Bench push up",
            "Leg lift"
          ]
        },
        {
          "phase": "Spartan 10-/25",
          "exercises": [
            "Band row",
            "Hip thrust",
            "Db thruster",
            "10 man maker",
            "Burpee",
            "Plank up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2025-04-28",
      "filename": "revision_106960_2025-04-28_14-29-50.txt",
      "phases": [
        {
          "phase": "30/5x3",
          "exercises": [
            "Plank dip",
            "Dead bug"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "45 lunge",
            "Lateral",
            "Reverse",
            "10 reps x 1",
            "Crabs",
            "Quadr. Leg circles",
            "Judo push up"
          ]
        },
        {
          "phase": "3 x 6",
          "exercises": [
            "Rdl to row",
            "Curl press stand",
            "Long stetch"
          ]
        }
      ]
    },
    {
      "date": "2025-04-28",
      "filename": "revision_107138_2025-04-28_14-55-47.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat coffin",
            "Pointer"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Glute lat tap l",
            "Stag. pistol l",
            "Glute lat tap r",
            "Stag. pistol r"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band one arm pull",
            "Leg curl",
            "Band one arm press"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band facepull",
            "Heels elev squat",
            "Band chest flye"
          ]
        },
        {
          "phase": "60 sec finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-04-30",
      "filename": "revision_107318_2025-04-30_14-55-31.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Dead bug",
            "Penguins"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band hydrant"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db alt thruster 20",
            "Band swim 30",
            "Band punches 40",
            "Rdl row 15"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Curl to press",
            "Sumo dl",
            "Db kickbacks",
            "Yoga cool down"
          ]
        }
      ]
    },
    {
      "date": "2025-05-05",
      "filename": "revision_107528_2025-05-05_14-53-11.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Reach l",
            "Reach r",
            "Reverse crunch"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "R. lunge",
            "Curtsy L",
            "Curtsy R"
          ]
        },
        {
          "phase": "60/15 45/15",
          "exercises": [
            "Band pull thru",
            "Db floor press",
            "Squat row",
            "L sit over kb"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Drag curl",
            "O.h. tricep",
            "Calf raise 10 sec/10reps"
          ]
        }
      ]
    },
    {
      "date": "2025-05-09",
      "filename": "revision_107557_2025-05-09_15-00-50.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Side lying leg lifts L",
            "Cat cow",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band full row",
            "Cross chest press",
            "Pull thru",
            "Hip Flexor"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per side",
            "21,s",
            "Bicep",
            "Tricep",
            "Glutes",
            "Shoulders"
          ]
        }
      ]
    },
    {
      "date": "2025-05-12",
      "filename": "revision_107764_2025-05-12_14-58-02.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Rev lunge",
            "Clams L",
            "Clams R"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band chest flye",
            "Band bridge lat pull",
            "Split squats"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band seated row",
            "Pull thru",
            "Db o.h. Tricep"
          ]
        }
      ]
    },
    {
      "date": "2025-05-19",
      "filename": "revision_107986_2025-05-19_14-54-04.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Db ab march L",
            "Band stir the pot L"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Band bridge lat pull",
            "Rdl"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db side lateral"
          ]
        }
      ]
    },
    {
      "date": "2025-05-28",
      "filename": "revision_107988_2025-05-28_14-34-54.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Slider knee tuck",
            "Obliques L",
            "Obliques R",
            "See saw"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band 45 jack",
            "Band f/b jack",
            "Band hydrant",
            "Band bridge"
          ]
        },
        {
          "phase": "Ladder 2 to 6",
          "exercises": [
            "Db push up row",
            "Kb deadlift to high pull"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarians l/r",
            "Band straight arm lat pull",
            "Db bicep curl"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Slider leg curl",
            "Band chest press",
            "Db kickbacks"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Drop squat",
            "Double crunch"
          ]
        }
      ]
    },
    {
      "date": "2025-05-30",
      "filename": "revision_108427_2025-05-30_14-54-56.txt",
      "phases": [
        {
          "phase": "20/20x3",
          "exercises": [
            "Hold pointer L",
            "Pointer L",
            "Hold Pointer R",
            "Pointer R"
          ]
        },
        {
          "phase": "20/20x3",
          "exercises": [
            "Hold hip thrust L",
            "Hip thrust L",
            "Hold hip thrust R",
            "Hip thrust"
          ]
        },
        {
          "phase": "5 min ladder",
          "exercises": [
            "10 down",
            "Band squat row",
            "Db push press"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Staggered rdl",
            "Staggered push up",
            "Lateral lunge",
            "L sit over kb",
            "Yoga cool down"
          ]
        }
      ]
    },
    {
      "date": "2025-06-18",
      "filename": "revision_108432_2025-06-18_14-52-37.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Heels to heav",
            "Flutter",
            "Coffin",
            "Bikes"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band butterfly",
            "Band kickback",
            "Band march"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Kb feet overs 20",
            "Kb clean 10",
            "Kb sh. To sh. 20"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Press bridge",
            "Staggered Rdl to row"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": [
            "Wall sit sh glide",
            "Sh tap dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2025-06-23",
      "filename": "revision_108434_2025-06-23_14-45-18.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band swim",
            "V up"
          ]
        },
        {
          "phase": "Spartan 10-/25",
          "exercises": [
            "Band row",
            "Hip thrust",
            "Band chest press",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2025-06-25",
      "filename": "revision_108436_2025-06-25_14-53-51.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Core march"
          ]
        },
        {
          "phase": "25/10/3",
          "exercises": [
            "Butterfly pump",
            "Straight leg lift"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band piston row 50",
            "Pull thru 25",
            "Band punches 50",
            "Heels elev squat 15"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Drag curl",
            "Kick back",
            "Easy leg curls"
          ]
        }
      ]
    },
    {
      "date": "2025-06-27",
      "filename": "revision_108437_2025-06-27_14-57-34.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg flutters",
            "Basic crunch",
            "Shoulder tap",
            "Pointers",
            "Band bridge",
            "Band hydrant",
            "Band kickback"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Rdl row",
            "Bulgarian",
            "Band facepull",
            "Band chest flye"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Band drag curl",
            "Band kickback",
            "Slider leg curl"
          ]
        }
      ]
    },
    {
      "date": "2025-07-07",
      "filename": "revision_108668_2025-07-07_14-55-39.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Hold",
            "Plank march",
            "Single sh tap"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "R. lunge",
            "Curtsy L",
            "Curtsy R"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db floor press",
            "Rdl",
            "One arm row",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band curl",
            "Band oh tricep",
            "Calf raise",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2025-07-11",
      "filename": "revision_108836_2025-07-11_14-58-39.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band dead bug",
            "Side plank row"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Step up",
            "Bridge march"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band s. Row",
            "Rdl",
            "Band press",
            "Cat cow 5 x"
          ]
        },
        {
          "phase": "2x12",
          "exercises": [
            "Db hammers",
            "Wall tricep",
            "Calf raise x 20",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2025-07-23",
      "filename": "revision_108841_2025-07-23_14-18-34.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank reach",
            "Bikes",
            "Plank tap",
            "Reverse crunch"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band h. Bridge",
            "Band p. Squat",
            "Band hydrant"
          ]
        },
        {
          "phase": "Complex 5x5",
          "exercises": [
            "Rdl",
            "High pull",
            "1 \u00bd squat",
            "Hang clean"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Alt box ch press",
            "Single Hip thurst"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Kb curl",
            "Tricep plank",
            "Butterfly bridge"
          ]
        }
      ]
    },
    {
      "date": "2025-08-06",
      "filename": "revision_108848_2025-08-06_14-53-17.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Dead bug",
            "Penguins"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band hydrant"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "R lunge pass 16",
            "Db bent row 15",
            "Kb swing 20",
            "Basic crunch 60 seconds"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Curl to press",
            "Sumo dl",
            "Db kickbacks",
            "Yoga cool down"
          ]
        }
      ]
    },
    {
      "date": "2025-08-08",
      "filename": "revision_108849_2025-08-08_14-53-15.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat coffin",
            "Plank tap",
            "Pointers"
          ]
        },
        {
          "phase": "40/15x2",
          "exercises": [
            "Band squat row",
            "Cross chest press",
            "Ab mat butterfly sit up"
          ]
        },
        {
          "phase": "30/15x2",
          "exercises": [
            "Band face pull",
            "Thoracic mob L",
            "Bridge chest press",
            "Thoraci mob R"
          ]
        },
        {
          "phase": "30x15x2",
          "exercises": [
            "1.5 hip thrust L",
            "Hip flexor mob L",
            "1.5 hip thrust R",
            "Hip flexor mob R",
            "Arm finisher"
          ]
        }
      ]
    },
    {
      "date": "2025-08-13",
      "filename": "revision_108851_2025-08-13_14-27-12.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Bike crunch",
            "Feet over kb"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band f/b jack",
            "Band hydrant",
            "Band seal",
            "Band jump sq"
          ]
        },
        {
          "phase": "40/30/20 (15 off)",
          "exercises": [
            "Db goblet squat",
            "Band swim",
            "Db sumo dl",
            "Band Punch"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db 1.5 pull over",
            "Bulgarians 10/10"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit curl",
            "Plank up, sh tap, dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2025-08-18",
      "filename": "revision_108854_2025-08-18_14-56-24.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Band chest flye",
            "Leg curl",
            "Rear delt flye",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band Drag curls",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2025-08-20",
      "filename": "revision_108855_2025-08-20_14-43-50.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up crunch L",
            "Plank reach L"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "F lunge",
            "R. lunge",
            "Speed skater",
            "Bridge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band squat row 20",
            "Box push up 10",
            "Band pull thru 20",
            "Db alt sh press 20"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Band curl",
            "Bridge chest tricep"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-08-22",
      "filename": "revision_108856_2025-08-22_14-25-17.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Single bird dog",
            "Ab mat coffin crunch"
          ]
        },
        {
          "phase": "Ladder 2-12",
          "exercises": [
            "Band facepull",
            "Pause hip thrusts",
            "Cat cow",
            "Thoracic mob all fours",
            "Thoracic mob wall"
          ]
        },
        {
          "phase": "Ladder 2-12",
          "exercises": [
            "Band flye",
            "Db squat curl"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Back bridge",
            "Hip mob",
            "Ankle mob."
          ]
        }
      ]
    },
    {
      "date": "2025-08-25",
      "filename": "revision_108857_2025-08-25_14-56-11.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Rev lunge",
            "Lat. step L",
            "Lat. step R"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band chest press",
            "Knee tuck"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db bent row",
            "Single press bridge",
            "Leg curl",
            "21s",
            "Band curl",
            "Band kickback"
          ]
        }
      ]
    },
    {
      "date": "2025-08-27",
      "filename": "revision_108858_2025-08-27_14-51-58.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Drop squat",
            "Plank jack",
            "Bridge march",
            "Plank march"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Swings",
            "Db jack",
            "Sh tap",
            "Db complex",
            "1 \u00bd"
          ]
        },
        {
          "phase": "3 x 6",
          "exercises": [
            "Rdl",
            "Push press",
            "squat",
            "rows"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Straight arm pulls",
            "Bridge tricep extension"
          ]
        }
      ]
    },
    {
      "date": "2025-08-27",
      "filename": "revision_108873_2025-08-27_14-52-56.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Drop squat",
            "Plank jack",
            "Bridge march",
            "Plank march"
          ]
        },
        {
          "phase": "30/10x2",
          "exercises": [
            "Band kickback",
            "Band bridge",
            "Band plank tap"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Swings",
            "Db jack",
            "Sh tap",
            "Db complex"
          ]
        },
        {
          "phase": "1 \u00bd  3 x 6",
          "exercises": [
            "Rdl",
            "Push press",
            "squat",
            "rows"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Straight arm pulls",
            "Bridge tricep extension"
          ]
        }
      ]
    },
    {
      "date": "2025-08-29",
      "filename": "revision_108874_2025-08-29_14-23-32.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank reach",
            "SP Left",
            "Sp Right",
            "Hollow hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Reverse lunge",
            "Lateral lunge",
            "HB march"
          ]
        },
        {
          "phase": "EMOM x 3",
          "exercises": [
            "Db jacks 25",
            "Mod V ups 20",
            "Jump lunge 20",
            "Plank up 10"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Renegade row",
            "1 \u00bd RDL",
            "Db kick back",
            "Human maker",
            "Burpee",
            "Sh tap",
            "Dd toe touch",
            "Knee tuck",
            "lunge"
          ]
        }
      ]
    },
    {
      "date": "2025-08-29",
      "filename": "revision_108911_2025-08-29_14-31-29.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank reach",
            "SP Left",
            "Sp Right",
            "Hollow hold",
            "Band bridge",
            "Clams L",
            "Clams R"
          ]
        },
        {
          "phase": "30x15x2",
          "exercises": [
            "1.5 hip thrust L",
            "Hip flexor mob L",
            "1.5 hip thrust R",
            "Hip flexor mob R"
          ]
        },
        {
          "phase": "EMOM x 3",
          "exercises": [
            "Db bent row 15",
            "R lunge pass 16",
            "Kb swing 20",
            "Basic crunch 60 seconds"
          ]
        },
        {
          "phase": "30/15x2",
          "exercises": [
            "Band face pull",
            "Thoracic mob L",
            "Bridge chest press",
            "Thoraci mob R"
          ]
        }
      ]
    },
    {
      "date": "2025-09-03",
      "filename": "revision_108912_2025-09-03_14-31-08.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Cross body knees",
            "Star sit up",
            "Alt superman",
            "Half burpee sumo",
            "Band plank jack",
            "Band hip bridge",
            "Band hydrant"
          ]
        },
        {
          "phase": "Ladder 2-12",
          "exercises": [
            "Db squat curl press",
            "Db bent wide row"
          ]
        },
        {
          "phase": "Spartan 10-20",
          "exercises": [
            "Wall runners",
            "Pull through",
            "Heels to heaven"
          ]
        },
        {
          "phase": "Finisher or Stretch",
          "exercises": [
            "Burpee",
            "Plank up",
            "Reverse lunge"
          ]
        }
      ]
    },
    {
      "date": "2025-09-10",
      "filename": "revision_109021_2025-09-10_14-57-13.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Alt Supermans"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Butterfly pump",
            "Mod sp clam L",
            "Mod sp clam R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Box sl hip thrust",
            "Db 1 \u00bd chest press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Band drag curl",
            "Db tricep ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2025-09-12",
      "filename": "revision_109228_2025-09-12_14-54-36.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Slider cross tuck",
            "Pointer"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band seal jack",
            "Band kickback",
            "Band plank march"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band seated row",
            "Db rdl",
            "Db push press"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Wall sit Db hammer curl",
            "Band pressdown"
          ]
        }
      ]
    },
    {
      "date": "2025-09-17",
      "filename": "revision_109481_2025-09-17_14-51-56.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Single bridge l",
            "Single b. R",
            "Abduction L",
            "Abduction R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "B. squat row 20 Floor press 15",
            "Swings 20",
            "Alt curl press 60 seconds"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "B. pressdown",
            "Slider leg curl",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2025-09-19",
      "filename": "revision_109482_2025-09-19_14-41-14.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Single leg curl",
            "Single calf raise"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Band lateral walk",
            "Step up",
            "Single hip thrust",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2025-09-19",
      "filename": "revision_109590_2025-09-19_14-55-55.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Db side lateral",
            "Alt leg curl"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "T flies",
            "Band hip b. Lat pull",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2025-09-22",
      "filename": "revision_109591_2025-09-22_14-29-59.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Palloff press L",
            "Hold L",
            "Palloff press R",
            "Hold R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band bridge",
            "Band kick back",
            "Band clam L",
            "Band Clamshell Right"
          ]
        },
        {
          "phase": "5 min ladder",
          "exercises": [
            "5 up",
            "Kb clean",
            "Kb push press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Split squats",
            "Db one arm row",
            "Single hip thrust",
            "Db side lateral"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Slider leg curl",
            "Db floor press",
            "Single calf raise",
            "Yoga cooldown"
          ]
        }
      ]
    },
    {
      "date": "2025-09-24",
      "filename": "revision_109592_2025-09-24_14-27-12.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Bike crunch",
            "Feet over kb"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band f/b jack",
            "Band hydrant",
            "Band seal",
            "Band jump sq"
          ]
        },
        {
          "phase": "40/30/20 (15 off)",
          "exercises": [
            "Db goblet squat",
            "Band swim",
            "Db sumo dl",
            "Band Punch",
            "Step up"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band curl",
            "Band kickback"
          ]
        },
        {
          "phase": "Mobility stretches",
          "exercises": []
        }
      ]
    },
    {
      "date": "2025-09-24",
      "filename": "revision_109624_2025-09-24_14-46-23.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Feet over kb"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band f/b jack",
            "Band hydrant",
            "Band seal",
            "Band jump sq"
          ]
        },
        {
          "phase": "40/30/20 (15 off)",
          "exercises": [
            "Db goblet squat",
            "Band swim",
            "Db sumo dl",
            "Band Punch",
            "Dd toe touch"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band curl",
            "Band kickback",
            "Slider knee tuck"
          ]
        },
        {
          "phase": "Mobility stretches",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-01-09",
      "filename": "revision_110962_2026-01-09_16-02-57.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Ab mat coffin",
            "Butterfly sit up",
            "Runner"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Band bridge lat pull",
            "Rdl"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db side lateral",
            "Curstys",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-01-16",
      "filename": "revision_111099_2026-01-16_16-41-06.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "Leg lifts",
            "Side plank clams L/R",
            "Pointers"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Db drop squat",
            "Plank march",
            "Dd toe touch"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Wide outs 40",
            "Kb clean 15",
            "Kb sh. To sh. 20",
            "Bike crunch 60"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "Db compex",
            "6 reps x 4",
            "Db rdl",
            "Db s. Rows",
            "Db squat"
          ]
        }
      ]
    },
    {
      "date": "2026-01-21",
      "filename": "revision_111132_2026-01-21_16-03-29.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat coffin",
            "Pointer"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Curtsy L",
            "Stag. pistol l",
            "Curtsy R",
            "Stag. pistol r"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band one arm pull",
            "Leg curl",
            "Band one arm press"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band facepull",
            "Heels elev squat",
            "Band chest flye"
          ]
        },
        {
          "phase": "60 sec finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-01-30",
      "filename": "revision_111153_2026-01-30_06-32-00.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Plank march",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band full row",
            "Cross chest press",
            "Pull thru"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Press bridge",
            "Staggered Rdl to row",
            "Hip Flexor"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per side"
          ]
        }
      ]
    },
    {
      "date": "2026-02-01",
      "filename": "revision_111154_2026-02-01_23-20-31.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Oblique L",
            "Plank march",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Split squat R",
            "Split squat L",
            "SL bridge L",
            "SL bridge R",
            "Band chipper"
          ]
        },
        {
          "phase": "20/15/10",
          "exercises": [
            "X - Jacks",
            "squat",
            "Seated Rows"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db floor press",
            "Band pull thru",
            "Ab mat sit up"
          ]
        },
        {
          "phase": "2 x 12",
          "exercises": [
            "Band pressdown",
            "Leg curl",
            "Db curl to arnold press"
          ]
        }
      ]
    },
    {
      "date": "2026-02-04",
      "filename": "revision_111155_2026-02-04_15-55-36.txt",
      "phases": [
        {
          "phase": "25/5x2",
          "exercises": [
            "Kickbacks l/r",
            "Band bridge l",
            "Band bridge r",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat 10"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Pull thru"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band curls",
            "Band kick back",
            "Bw calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-02-06",
      "filename": "revision_111240_2026-02-06_16-02-05.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Plank march",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Db wide out drops",
            "Band Punch",
            "Slider knee tuck"
          ]
        },
        {
          "phase": "60/15x1",
          "exercises": [
            "Fb lunge L",
            "Fb lunge R"
          ]
        },
        {
          "phase": "Hip rotations",
          "exercises": [
            "90/90 rotations"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per"
          ]
        }
      ]
    },
    {
      "date": "2026-02-20",
      "filename": "revision_111247_2026-02-20_02-13-18.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab walk outs",
            "Reverse crunch",
            "Band bridge",
            "Band hydrant",
            "Band kickback"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Rdl row",
            "Bulgarian",
            "Band facepull",
            "Band chest flye"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Band drag curl",
            "Band kickback",
            "Slider leg curl",
            "Thoracic mob",
            "Hip Flexor",
            "Ankle"
          ]
        }
      ]
    },
    {
      "date": "2026-02-20",
      "filename": "revision_111310_2026-02-20_16-00-33.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab rev. crunch",
            "Bikes",
            "Pointers",
            "Band bridge march",
            "Band hydrant",
            "Band kickback"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Rdl row",
            "Bulgarian",
            "Band facepull",
            "Band chest flye"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Db curl",
            "Band kickback",
            "Slider leg curl",
            "Thoracic mob",
            "Hip Flexor",
            "Ankle"
          ]
        }
      ]
    },
    {
      "date": "2026-02-25",
      "filename": "revision_111318_2026-02-25_15-58-40.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Db ab march L",
            "Band stir the pot L"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Band bridge lat pull",
            "Rdl"
          ]
        },
        {
          "phase": "Spartan 10-20",
          "exercises": [
            "Wall runners",
            "Pull through",
            "Heels to heaven"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db side lateral"
          ]
        }
      ]
    },
    {
      "date": "2026-02-27",
      "filename": "revision_111497_2026-02-27_16-08-37.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Slider alt curls",
            "Clams L/R"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Stag rld to row",
            "Bridge to press",
            "Band facepull",
            "Single calf raise"
          ]
        },
        {
          "phase": "Mobility",
          "exercises": []
        },
        {
          "phase": "Hip rotations 10",
          "exercises": [
            "Wall thoracic",
            "Hip Flexor",
            "Ankle mob."
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db side lateral"
          ]
        }
      ]
    },
    {
      "date": "2026-03-02",
      "filename": "revision_111535_2026-03-02_16-00-46.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Slider alt curls",
            "Clams L/R"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Stag rld to row",
            "Bridge to press",
            "Band facepull",
            "Single calf raise"
          ]
        },
        {
          "phase": "2x15",
          "exercises": [
            "Band curl",
            "B. kickback",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "Mobility",
          "exercises": []
        },
        {
          "phase": "Hip rotations 10",
          "exercises": [
            "Wall thoracic",
            "Hip Flexor",
            "Ankle mob."
          ]
        }
      ]
    },
    {
      "date": "2026-03-11",
      "filename": "revision_111539_2026-03-11_14-30-20.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band squat",
            "Band lateral taps"
          ]
        },
        {
          "phase": "40/15x2",
          "exercises": [
            "Band bridge lat pull",
            "Alt floor press",
            "Ab mat butterfly sit up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Single leg curl",
            "Single calf raise"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db tricep ext",
            "Db curl",
            "Box jump squat"
          ]
        }
      ]
    },
    {
      "date": "2026-03-16",
      "filename": "revision_111541_2026-03-16_01-07-04.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Basic crunch",
            "Leg lift",
            "Star crunch L",
            "Star crunch R"
          ]
        },
        {
          "phase": "Tabata  hold",
          "exercises": [
            "Bridge",
            "Hydrant L",
            "Hydrant R",
            "squat"
          ]
        },
        {
          "phase": "Db complex 4x8",
          "exercises": [
            "Db squat",
            "Db clean",
            "Db push press",
            "Db rdl"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "B. bridge pulls",
            "B. chest press",
            "slider/ball curl",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "Finisher 10",
          "exercises": [
            "Plank up",
            "Sh tap",
            "Dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-03-18",
      "filename": "revision_111727_2026-03-18_15-00-56.txt",
      "phases": [
        {
          "phase": "3 min",
          "exercises": [
            "M.c. 20",
            "Dead bug 10",
            "Wide drops"
          ]
        },
        {
          "phase": "Ladder 6-2",
          "exercises": [
            "Box push up",
            "Box jump sq"
          ]
        },
        {
          "phase": "60/45/30",
          "exercises": [
            "Band swim",
            "Kb elev squat",
            "Band Punch",
            "L sits"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Db bicep curl",
            "Wall tricep",
            "Calf raise 2 sec"
          ]
        },
        {
          "phase": "Finisher 10",
          "exercises": [
            "Plank up",
            "Sh tap",
            "Dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-03-25",
      "filename": "revision_111772_2026-03-25_15-03-01.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank reach",
            "SP Left",
            "Sp Right",
            "Hollow hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Reverse lunge",
            "Lateral lunge",
            "Wide outs"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db ren row 16",
            "Kb swing 20",
            "Band press 30",
            "Penguins 60 sec"
          ]
        },
        {
          "phase": "2 x 8",
          "exercises": [
            "Single curl press",
            "Single hip thrust",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2026-03-27",
      "filename": "revision_111787_2026-03-27_07-34-00.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Single bridge l",
            "Single b. R",
            "Abduction L",
            "Abduction R"
          ]
        },
        {
          "phase": "EMOM x 3",
          "exercises": [
            "Db jacks 25",
            "Mod V ups 20",
            "Jump lunge 20",
            "Plank up 10"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Renegade row",
            "1 \u00bd RDL",
            "Db kick back",
            "Human maker",
            "Burpee",
            "Sh tap",
            "Dd toe touch",
            "Knee tuck",
            "lunge"
          ]
        }
      ]
    },
    {
      "date": "2026-03-30",
      "filename": "revision_111819_2026-03-30_15-01-09.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Single bridge l",
            "Single b. R",
            "Abduction L",
            "Abduction R"
          ]
        },
        {
          "phase": "EMOM x 3",
          "exercises": [
            "Db jacks 25",
            "Butterfly sit ups ups 20",
            "Jump or speed lunge 20",
            "Plank ups 60"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Renegade row",
            "1 \u00bd RDL",
            "Db kick back",
            "Human maker",
            "Burpee",
            "Sh tap",
            "Dd toe touch",
            "Knee tuck",
            "lunge"
          ]
        }
      ]
    },
    {
      "date": "2026-03-30",
      "filename": "revision_111840_2026-03-30_15-43-34.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Single bridge l",
            "Single b. R",
            "Abduction L",
            "Abduction R"
          ]
        },
        {
          "phase": "EMOM x 3",
          "exercises": [
            "Db jacks 25",
            "Butterfly sit ups ups 20",
            "Jump or speed lunge 20",
            "Plank ups 60"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db alt row",
            "1 \u00bd RDL",
            "Db kick back",
            "Human maker",
            "Burpee",
            "Sh tap",
            "Dd toe touch",
            "Knee tuck",
            "lunge"
          ]
        }
      ]
    },
    {
      "date": "2026-04-01",
      "filename": "revision_111841_2026-04-01_05-32-33.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat top",
            "Pulse sq. bottom"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Rdl to row",
            "Single press/br",
            "slider/ball tuck"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Arnold press",
            "Sp squat curl",
            "Tricep plank"
          ]
        },
        {
          "phase": "2 x 20",
          "exercises": [
            "Hip thrust",
            "Mod v up"
          ]
        }
      ]
    },
    {
      "date": "2026-04-03",
      "filename": "revision_111842_2026-04-03_08-17-08.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Toe touch",
            "Reverse",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant L",
            "Band bridge l",
            "Band hydrant R",
            "Bridge R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band alt row",
            "Band alt press",
            "Kb swing"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Alt curl to arnolds",
            "Single rdl"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-04-03",
      "filename": "revision_111843_2026-04-03_08-20-45.txt",
      "phases": [
        {
          "phase": "3x8",
          "exercises": [
            "Single rdl row",
            "Box push up"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "10 HM",
            "Burpee",
            "Sh tap",
            "Knee tuck",
            "lunge / lunge"
          ]
        }
      ]
    },
    {
      "date": "2026-04-03",
      "filename": "revision_111862_2026-04-03_15-02-36.txt",
      "phases": [
        {
          "phase": "3x8",
          "exercises": [
            "Single rdl row",
            "Box push up"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "10 HM",
            "Burpee",
            "Sh tap",
            "Knee tuck",
            "lunge / lunge"
          ]
        }
      ]
    },
    {
      "date": "2026-04-03",
      "filename": "revision_111909_2026-04-03_15-43-26.txt",
      "phases": [
        {
          "phase": "3x8",
          "exercises": [
            "Stag kb rdl",
            "Plank up l/r"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": [
            "10 HM",
            "Burpee",
            "Sh tap",
            "Knee tuck",
            "lunge / lunge"
          ]
        }
      ]
    },
    {
      "date": "2026-04-08",
      "filename": "revision_111915_2026-04-08_15-17-35.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Toe touch",
            "Reverse",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant L",
            "Band bridge l",
            "Band hydrant R",
            "Bridge R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band row",
            "Band press",
            "Kb swing"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Alt curl to arnolds",
            "Single rdl"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-04-10",
      "filename": "revision_111916_2026-04-10_08-19-09.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank march",
            "Side p ll RT l",
            "Side p ll RT r"
          ]
        },
        {
          "phase": "40/10x3",
          "exercises": [
            "Band deep squat",
            "Band kickback"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Db 1.5 floor press",
            "Single RDL 8/8",
            "Coffin 1.5 crunch"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db 1.5 pull over",
            "Bulgarians 10/10"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit curl",
            "Plank up, sh tap, dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-04-13",
      "filename": "revision_111927_2026-04-13_04-23-15.txt",
      "phases": [
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "5 to 10",
            "Dl high pull",
            "Push up"
          ]
        },
        {
          "phase": "Chipper 25/20/15/10",
          "exercises": [
            "Band flye",
            "Band pull thru",
            "Band facepull"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit hammer curl",
            "Alt band pressdowns",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2026-04-15",
      "filename": "revision_111985_2026-04-15_15-00-52.txt",
      "phases": [
        {
          "phase": "25/5x3 band",
          "exercises": [
            "f/b b. walk 3",
            "Pulse squat",
            "Plank jack"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "5 to 10",
            "Dl high pull",
            "Push up"
          ]
        },
        {
          "phase": "Chipper 25/20/15/10",
          "exercises": [
            "Band press",
            "Band pull thru",
            "Band s. Row"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit hammer curl",
            "Alt band pressdowns",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2026-04-17",
      "filename": "revision_112017_2026-04-17_15-00-09.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Leg lift",
            "Flutter",
            "Toe touch"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Band single bridge L",
            "Abduction",
            "Bridge R",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat",
            "Thoracic mobility"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust",
            "Hip Flexor"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per side",
            "21,s",
            "Bicep",
            "Tricep",
            "Glutes",
            "Shoulders"
          ]
        }
      ]
    },
    {
      "date": "2026-04-22",
      "filename": "revision_112067_2026-04-22_15-02-08.txt",
      "phases": [
        {
          "phase": "30/5x3",
          "exercises": [
            "Plank dip",
            "Dead bug"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "45 lunge",
            "Lateral",
            "Reverse"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Band press",
            "Rdl",
            "Band high pull",
            "Hip thrust"
          ]
        },
        {
          "phase": "3 x 6",
          "exercises": [
            "Rdl to row",
            "Curl press stand",
            "Long stetch"
          ]
        }
      ]
    },
    {
      "date": "2026-04-24",
      "filename": "revision_112069_2026-04-24_14-38-29.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Feet over kb"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band f/b jack",
            "Band hydrant",
            "Band seal",
            "Band jump sq"
          ]
        },
        {
          "phase": "30/15x2",
          "exercises": [
            "Band face pull",
            "Thoracic mob L",
            "Bridge chest press",
            "Thoraci mob R"
          ]
        },
        {
          "phase": "30x15x2",
          "exercises": [
            "1.5 hip thrust L",
            "Hip flexor mob L",
            "1.5 hip thrust R",
            "Hip flexor mob R",
            "Arm finisher"
          ]
        }
      ]
    },
    {
      "date": "2026-04-27",
      "filename": "revision_112071_2026-04-27_14-46-29.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band dead bug",
            "Side plank row"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band s. Row",
            "Rdl",
            "Band press",
            "Cat cow 5 x"
          ]
        },
        {
          "phase": "2x12",
          "exercises": [
            "Db hammers",
            "Wall tricep",
            "Calf raise x 20",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2026-05-01",
      "filename": "revision_112145_2026-05-01_15-27-10.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up reach L",
            "Leg up reach R",
            "Criss cross flut",
            "Leg lift hold"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 2-10",
          "exercises": [
            "Kb swing",
            "Kb push press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Sand bag pull thru"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2026-05-06",
      "filename": "revision_112161_2026-05-06_15-00-52.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "f/b jack"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band skier",
            "V up"
          ]
        },
        {
          "phase": "Spartan 10-/25",
          "exercises": [
            "Band row",
            "Hip thrust",
            "Band chest press",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2026-05-08",
      "filename": "revision_112236_2026-05-08_14-57-25.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Dead bug",
            "Pointer",
            "Plank atw"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Runner lunge",
            "Sh. tap 10",
            "March bridge",
            "60,45,30 sec.(20)",
            "Dd toe touch",
            "3 way squat",
            "Runner clap",
            "Plank up"
          ]
        },
        {
          "phase": "Hip rotations",
          "exercises": [
            "90/90 rotations"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per"
          ]
        }
      ]
    },
    {
      "date": "2026-06-01",
      "filename": "revision_112244_2026-06-01_03-49-01.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Russian twist",
            "Ab circles L",
            "Ab circles R",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "M.c. 10",
            "plan",
            "Wide outs 10"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Seated band row",
            "Db \u00be squats",
            "Toe grabs"
          ]
        },
        {
          "phase": "3x8",
          "exercises": [
            "1 \u00bd hip thrust",
            "Single bridge to chest press",
            "Db hammer curl",
            "finisher"
          ]
        }
      ]
    },
    {
      "date": "2026-06-01",
      "filename": "revision_112270_2026-06-01_15-03-56.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Russian twist",
            "Ab circles L",
            "Ab circles R",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "M.c. 10",
            "Dd toe touch 6",
            "Wide outs 10"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Seated band row",
            "Db \u00be squats",
            "Slider tucks"
          ]
        },
        {
          "phase": "3x8",
          "exercises": [
            "1 \u00bd hip thrust",
            "Single bridge to chest press",
            "Db hammer curl",
            "finisher"
          ]
        }
      ]
    },
    {
      "date": "2026-06-03",
      "filename": "revision_112278_2026-06-03_15-02-04.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Db t flies",
            "Band Drag curls",
            "Wall sh glide",
            "Band kickback"
          ]
        }
      ]
    },
    {
      "date": "2026-06-08",
      "filename": "revision_112317_2026-06-08_14-59-06.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank dip",
            "Side plank p. L",
            "Side plank p. R"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 10-2",
          "exercises": [
            "Kb clean",
            "Db thruster"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2026-06-10",
      "filename": "revision_112342_2026-06-10_14-58-04.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank reach",
            "Side reach t"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band swim",
            "V up"
          ]
        },
        {
          "phase": "Spartan 10-/25",
          "exercises": [
            "Band row",
            "Hip thrust",
            "Band chest press",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2026-06-10",
      "filename": "revision_112350_2026-06-10_15-31-18.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank reach",
            "Side reach t"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band swim",
            "V up"
          ]
        },
        {
          "phase": "Spartan 10-/25",
          "exercises": [
            "Band row",
            "Hip thrust",
            "Band chest press",
            "Superman alt",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2026-06-15",
      "filename": "revision_112374_2026-06-15_15-36-01.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Half burpee",
            "runner sit up",
            "Wide knee tuck"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "5 to 10",
            "Dl high pull",
            "Push up",
            "Wall t spine mob 12"
          ]
        },
        {
          "phase": "Chipper 25/20/15/10",
          "exercises": [
            "Band flye",
            "Band pull thru",
            "Band facepull",
            "Wide outs",
            "Hip flexor mob"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit hammer curl",
            "Alt band pressdowns",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2026-06-19",
      "filename": "revision_112376_2026-06-19_14-54-02.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Bikes",
            "Side plank pulse",
            "Runner clap"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Reverse lunge",
            "Runner lunge",
            "Bridge march"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Db floor press 15",
            "Lateral step 20",
            "Lat pull bridge 30"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band drag curl",
            "Kick back",
            "Leg curl"
          ]
        }
      ]
    },
    {
      "date": "2026-06-22",
      "filename": "revision_112448_2026-06-22_15-39-54.txt",
      "phases": [
        {
          "phase": "30/5x3",
          "exercises": [
            "Plank dip",
            "Dead bug"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "45 lunge",
            "Lateral",
            "Reverse",
            "10 reps x 4 ladder",
            "Mod push up",
            "Db drop squat",
            "Db wide row"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Single rdl",
            "Curl press",
            "Db alt kickback"
          ]
        },
        {
          "phase": "Long stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-06-26",
      "filename": "revision_112509_2026-06-26_15-02-07.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg circles L",
            "Leg circles R",
            "S. P. Clam L",
            "S. P. Clam R",
            "Ramp 3 min",
            "M.c. 20",
            "Half burpee 5",
            "Bridge 10"
          ]
        },
        {
          "phase": "Ladder 5 to 10",
          "exercises": [
            "Heels elev squat",
            "Face pull",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Single rdl row",
            "Ss press",
            "Tricep Plank up"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Curtsy curl",
            "Band straight arm row"
          ]
        }
      ]
    },
    {
      "date": "2026-06-29",
      "filename": "revision_112512_2026-06-29_14-59-41.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Ab mat coffin",
            "Pointer"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Curtsy L",
            "Stag. pistol l",
            "Curtsy R",
            "Stag. pistol r"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band one arm pull",
            "Leg curl",
            "Band one arm press"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band facepull",
            "Heels elev squat",
            "Band chest flye"
          ]
        },
        {
          "phase": "60 sec finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-07-01",
      "filename": "revision_112560_2026-07-01_15-01-03.txt",
      "phases": [
        {
          "phase": "2 x 30",
          "exercises": [
            "M.c",
            "Bw rus twist",
            "Bikes",
            "Leg lift"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "R. lunge",
            "Lateral lunge",
            "Wide outs"
          ]
        },
        {
          "phase": "3 x12",
          "exercises": [
            "Seated row",
            "Db sumo d.l.",
            "Band chest cross",
            "Db r lunge curtsy"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Wall sit curl",
            "Band tricep pressdowns"
          ]
        }
      ]
    },
    {
      "date": "2026-07-03",
      "filename": "revision_112584_2026-07-03_15-00-38.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Superman"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Bridge",
            "Mod sp dip L",
            "Mod sp dir R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Box sl hip thrust",
            "Db alt incline press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db inc. curls",
            "Db tricep ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-07-06",
      "filename": "revision_112585_2026-07-06_14-47-03.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Ab mat",
            "Coffin",
            "Runner clap",
            "Butterfly"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band seal",
            "Band bridge",
            "Band f/b jack",
            "Band kickback"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db thruster 20",
            "Band piston row 50",
            "Kb swing 20",
            "Band punches 50"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band drag curl",
            "Band french press",
            "Band pull thru"
          ]
        }
      ]
    },
    {
      "date": "2026-07-08",
      "filename": "revision_112607_2026-07-08_06-33-58.txt",
      "phases": [
        {
          "phase": "30/5x3",
          "exercises": [
            "Plank dip",
            "Dead bug"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "45 lunge",
            "Lateral",
            "Reverse"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Band bridge lat pull",
            "Rdl"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db side lateral"
          ]
        }
      ]
    },
    {
      "date": "2026-07-08",
      "filename": "revision_112631_2026-07-08_15-37-09.txt",
      "phases": [
        {
          "phase": "30/5x3",
          "exercises": [
            "Plank dip",
            "Dead bug"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "45 lunge",
            "Lateral",
            "Reverse"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Band bridge lat pull",
            "Rdl"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db curl press",
            "Wall tricep",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-07-10",
      "filename": "revision_112670_2026-07-10_15-11-12.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Oblique L",
            "Plank march",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Split squat R",
            "Split squat L",
            "SL bridge L",
            "SL bridge R",
            "Band chipper"
          ]
        },
        {
          "phase": "20/15/10",
          "exercises": [
            "X - Jacks",
            "squat",
            "Seated Rows"
          ]
        },
        {
          "phase": "3 x 8/8",
          "exercises": [
            "Db renegade row",
            "Kb single rdl",
            "Ab mat sit up (15)"
          ]
        },
        {
          "phase": "2 x 12",
          "exercises": [
            "Band pressdown",
            "Leg curl",
            "Db curl to arnold press"
          ]
        }
      ]
    },
    {
      "date": "2026-07-17",
      "filename": "revision_112803_2026-07-17_15-02-25.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank march",
            "Penguins",
            "Superman"
          ]
        },
        {
          "phase": "40/10x3",
          "exercises": [
            "Band deep squat",
            "Band kickback"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Bulgarian",
            "Dd push up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Band pressdown",
            "Slider leg curl",
            "Band facepull"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit curl",
            "Plank up, sh tap, dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-07-20",
      "filename": "revision_112804_2026-07-20_06-34-02.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Basic crunch",
            "Penguins",
            "Feet over kb"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band f/b jack",
            "Band hydrant",
            "Band seal",
            "Band jump sq"
          ]
        },
        {
          "phase": "40/30/20 (15 off)",
          "exercises": [
            "Db goblet squat",
            "Band swim",
            "Db sumo dl",
            "Band Punch",
            "Dd toe touch"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band curl",
            "Band kickback",
            "Slider knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2026-07-24",
      "filename": "revision_112898_2026-07-24_15-00-41.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Toe touch",
            "Reverse",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "M.c",
            "Wide outs",
            "Sh tap",
            "Flutter"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db piston row 30",
            "Db wide outs 25",
            "Kb thruster 20",
            "Ball push out 20"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Alt curl to arnolds",
            "Single rdl"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-07-27",
      "filename": "revision_112899_2026-07-27_14-31-37.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Star sit up",
            "atwp",
            "Ramp 3:30",
            "M.c. 20",
            "Speed skat 10",
            "Burpee 5"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db thruster 20",
            "Band b.row 30",
            "Kb swing 20",
            "V up sit up 10"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db curl press",
            "Hip thrust 20",
            "Slider 3 way 5",
            "8 half burpee",
            "8 push up",
            "8 jump squat",
            "8 pikes",
            "32 Birthday Reps :)"
          ]
        }
      ]
    },
    {
      "date": "2026-07-27",
      "filename": "revision_113015_2026-07-27_15-01-06.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Leg circles L",
            "Leg circles R",
            "atwp",
            "Ramp 3:30",
            "M.c. 20",
            "Speed skate 10",
            "Burpee 5"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db thruster 20",
            "Band row 30",
            "Kb swing 20",
            "Ab mat sit up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db tricep ext",
            "slider/ball leg curl",
            "Step up curl",
            "9 half burpee",
            "9 push up",
            "9 jump squat",
            "9 pikes",
            "36 Birthday Reps :)"
          ]
        }
      ]
    },
    {
      "date": "2026-08-07",
      "filename": "revision_113018_2026-08-07_14-56-21.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Wide outs 10",
            "Plank jacks 10",
            "Butterfly pump"
          ]
        },
        {
          "phase": "3x8 1 \u00bd",
          "exercises": [
            "Band chest flye",
            "Leg curl",
            "Rear delt flye",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band Drag curls",
            "Band Overhead ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-08-07",
      "filename": "revision_113025_2026-08-07_15-00-04.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Wide outs 10",
            "Plank jacks 10",
            "Butterfly pump"
          ]
        },
        {
          "phase": "3x8 1 \u00bd",
          "exercises": [
            "Band chest flye",
            "Leg curl",
            "Rear delt flye",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band Drag curls",
            "Band Overhead ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-08-10",
      "filename": "revision_113026_2026-08-10_14-38-50.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Heels to heav",
            "Flutter",
            "Coffin",
            "Bikes"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "R. lunge",
            "L. lunge L",
            "L. lunge R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Db  feet overs 20",
            "Kb clean 10",
            "Kb sh. To sh. 20"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Press bridge",
            "Staggered Rdl to row"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": [
            "Wall sit sh glide",
            "Sh tap dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-08-10",
      "filename": "revision_113039_2026-08-10_14-58-50.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Heels to heav",
            "Flutter",
            "Coffin",
            "Bikes"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Forward Lunge",
            "R. lunge",
            "L. lunge L",
            "L. lunge R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Db  feet overs 20",
            "Kb clean 10",
            "Kb sh. To sh. 60 sec"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Press bridge",
            "Staggered Rdl to row"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": [
            "Wall sit sh glide",
            "Sh tap dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-08-12",
      "filename": "revision_113075_2026-08-12_14-58-20.txt",
      "phases": [
        {
          "phase": "Tabata Holds",
          "exercises": [
            "Basic crunch",
            "Leg lift",
            "Side plank dip l",
            "Side plank dip r"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "5 to 10",
            "Dl high pull",
            "Push up",
            "Wall t spine mob 12"
          ]
        },
        {
          "phase": "Chipper 25/20/15/10",
          "exercises": [
            "Band flye",
            "Band pull thru",
            "Band facepull",
            "Hip flexor mob"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit hammer curl",
            "Alt band pressdowns",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2026-08-13",
      "filename": "revision_113165_2026-08-13_15-17-12.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Alt leg drop",
            "Alt superman",
            "Bridge march"
          ]
        },
        {
          "phase": "Ladder 5-10",
          "exercises": [
            "Pend swing",
            "Db thruster"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "Hip mob floor",
            "90 leg rotations",
            "Wall"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Incline bench",
            "Ball leg curls",
            "Ball sit ups"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "1 \u00bd band press",
            "1 \u00bd hip thrust",
            "1 \u00bd band row",
            "Paige 3 sets"
          ]
        }
      ]
    },
    {
      "date": "2026-08-17",
      "filename": "revision_113166_2026-08-17_17-28-05.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Leg up reach L",
            "Leg up reach R",
            "Leg lift",
            "Bikes"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 1-5",
          "exercises": [
            "Single clean press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2026-09-07",
      "filename": "revision_113214_2026-09-07_15-36-16.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Ab mat crunch",
            "Ab circles L",
            "Ab circles R",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "M.c. 10",
            "Half burpee 5",
            "Wide outs 10"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Seated band row",
            "Db \u00be squats",
            "Toe grabs"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "1 \u00bd hip thrust",
            "bridge to chest press",
            "Band bridge to lat pull",
            "finisher"
          ]
        }
      ]
    },
    {
      "date": "2026-09-11",
      "filename": "revision_113251_2026-09-11_15-03-39.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Toe touch",
            "Reverse",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant L",
            "Band bridge l",
            "Band hydrant R",
            "Bridge R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band squat row",
            "Sh tap",
            "Kb swing"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Alt curl to arnolds",
            "Single rdl"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-09-11",
      "filename": "revision_113303_2026-09-11_15-36-37.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Toe touch",
            "Reverse",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant L",
            "Band bridge l",
            "Band hydrant R",
            "Bridge R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band squat row",
            "Sh tap",
            "Kb swing"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Rev lunge curl l/r",
            "Wall tricep ext",
            "Wall thoracic mob"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": []
        }
      ]
    },
    {
      "date": "2026-09-14",
      "filename": "revision_113327_2026-09-14_15-00-15.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank tap",
            "Oblique L",
            "Plank march",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Split squat R",
            "Split squat L",
            "SL bridge L",
            "SL bridge R",
            "Band chipper"
          ]
        },
        {
          "phase": "20/15/10",
          "exercises": [
            "X - Jacks",
            "squat",
            "Seated Rows"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db floor press",
            "Band pull thru",
            "Db row",
            "Ab mat sit up"
          ]
        },
        {
          "phase": "2 x 12",
          "exercises": [
            "Band pressdown",
            "Leg curl",
            "Db curl to arnold press"
          ]
        }
      ]
    },
    {
      "date": "2026-09-16",
      "filename": "revision_113328_2026-09-16_14-58-45.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Mod v up",
            "Plank tap",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "F lunge",
            "R. lunge",
            "Lateral lunge",
            "Runner lunge"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db floor press",
            "Single leg hip thrust",
            "Db pull over",
            "Heels elev squat"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db side lateral",
            "Step up",
            "B. drag curls",
            "B. kick backs"
          ]
        }
      ]
    },
    {
      "date": "2026-09-16",
      "filename": "revision_113342_2026-09-16_14-59-47.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Single bridge l",
            "Single b. R",
            "Abduction L",
            "Abduction R"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db floor press",
            "Single leg hip thrust",
            "Db pull over",
            "Heels elev squat"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db side lateral",
            "Step up",
            "B. drag curls",
            "B. kick backs"
          ]
        }
      ]
    },
    {
      "date": "2026-09-18",
      "filename": "revision_113422_2026-09-18_15-01-44.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Rolling  plank 3 sec"
          ]
        },
        {
          "phase": "25/10/3",
          "exercises": [
            "Butterfly pump",
            "Pulse lunge R/L",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band piston row 50",
            "Pull thru 25",
            "Band punches 50",
            "Alt leg drops 60 sec"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Drag curl",
            "Kick back",
            "Easy leg curls"
          ]
        }
      ]
    },
    {
      "date": "2026-09-21",
      "filename": "revision_113428_2026-09-21_14-57-22.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band skier",
            "V up"
          ]
        },
        {
          "phase": "Spartan 10-/25",
          "exercises": [
            "Band row",
            "Hip thrust",
            "Band chest press",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2026-09-23",
      "filename": "revision_113464_2026-09-23_15-00-51.txt",
      "phases": [
        {
          "phase": "40/10x2",
          "exercises": [
            "Db ab march L",
            "Band chop L"
          ]
        },
        {
          "phase": "40/10x2",
          "exercises": [
            "Band bridge",
            "Band clam R"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Band bridge lat pull",
            "Rdl",
            "Ab mat butterfly"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db side lateral",
            "Curstys",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2026-09-30",
      "filename": "revision_113583_2026-09-30_15-01-47.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse s. squat l",
            "Pulse s. Squat r"
          ]
        },
        {
          "phase": "45/35/25",
          "exercises": [
            "Kb swing",
            "V up",
            "Band Skiers",
            "Leg lifts"
          ]
        },
        {
          "phase": "Ladder 12/2",
          "exercises": [
            "Band row",
            "Sumo dl",
            "Band chest press",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2026-10-02",
      "filename": "revision_113666_2026-10-02_15-00-59.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Toe touch",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 25/20/15",
          "exercises": [
            "Band squat row",
            "Drop squat",
            "Pull thru",
            "Shoulder tap"
          ]
        },
        {
          "phase": "40/15x2",
          "exercises": [
            "Lunge squat lunge",
            "Push up knee tuck",
            "atwp"
          ]
        },
        {
          "phase": "Hip rotations",
          "exercises": [
            "90/90 rotations"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per"
          ]
        }
      ]
    },
    {
      "date": "2026-10-14",
      "filename": "revision_113864_2026-10-14_15-01-43.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "V up",
            "Leg lift",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Wide drops",
            "M.c",
            "R. lunge",
            "Sh. taps"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band punch 60",
            "Kb dl hi pull 15",
            "Band s. Rows 40",
            "Arrested s.m."
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Db curl",
            "Db tricep ext",
            "Step out lunge",
            "finisher"
          ]
        }
      ]
    },
    {
      "date": "2026-10-16",
      "filename": "revision_113868_2026-10-16_15-00-04.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Heels to heav",
            "Flutter",
            "Coffin",
            "Bikes"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band hydrant",
            "Band butterfly",
            "Band kickback",
            "Band bridge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Kb swing 20",
            "Kb feet overs 20",
            "Kb clean 10",
            "Kb sh. To sh. 20"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Press bridge",
            "Staggered Rdl to row"
          ]
        },
        {
          "phase": "60 sec.",
          "exercises": [
            "Wall sit sh glide",
            "Sh tap dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2026-10-19",
      "filename": "revision_113956_2026-10-19_15-01-26.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up reach L",
            "Leg up reach R",
            "Criss cross flut",
            "Leg lift hold"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "Ladder 2-10",
          "exercises": [
            "Kb swing",
            "Kb push press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Mod push push ups"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Band pull-thu",
            "Db tricep ext",
            "Db curl"
          ]
        }
      ]
    },
    {
      "date": "2026-10-28",
      "filename": "revision_113987_2026-10-28_15-14-52.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "Bulgarian Split Squat",
            "Db side lateral",
            "Leg curl"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "T flies",
            "Knee tuck",
            "60 finisher",
            "L,S,L",
            "Sh tap to DD toe touch",
            "Coffin crunch"
          ]
        }
      ]
    },
    {
      "date": "2026-10-30",
      "filename": "revision_113988_2026-10-30_14-59-21.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "One arm row",
            "Stag. rdl",
            "Strict press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Heels elev squat",
            "Band flye",
            "Db t flies"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Band drag curl",
            "Band french press",
            "Band pull thru",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2023-07-31",
      "filename": "revision_81140_2023-07-31_14-57-52.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "See saw plank",
            "Mod v up",
            "Bike crunch"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band single bridge L",
            "Band jump",
            "squat"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band punch 50",
            "Slider m.c. 50",
            "Db alt thruster 20",
            "Db renegade r. 20"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Rdl to row",
            "Push up to h.b.",
            "Db hammer curl to press"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2023-07-31",
      "filename": "revision_81144_2023-07-31_15-43-46.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "See saw plank",
            "Mod v up",
            "Bike crunch"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band single bridge L",
            "Band jump",
            "squat"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band punch 50",
            "Slider m.c. 50",
            "Db alt thruster 20",
            "Db renegade r. 20"
          ]
        },
        {
          "phase": "2 x 12",
          "exercises": [
            "Rdl to row",
            "Push up to h.b.",
            "Db hammer curl to press"
          ]
        },
        {
          "phase": "Finisher",
          "exercises": []
        }
      ]
    },
    {
      "date": "2023-08-02",
      "filename": "revision_81145_2023-08-02_14-57-05.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Db W- rows",
            "Band Drag curls",
            "Wall sit sup pull apart"
          ]
        }
      ]
    },
    {
      "date": "2023-08-02",
      "filename": "revision_81219_2023-08-02_15-40-06.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Db t flies",
            "Band Drag curls",
            "Wall sh glide",
            "Band kickback"
          ]
        }
      ]
    },
    {
      "date": "2023-08-04",
      "filename": "revision_81393_2023-08-04_14-51-00.txt",
      "phases": [
        {
          "phase": "Ladder 1-5",
          "exercises": [
            "2 part get up"
          ]
        },
        {
          "phase": "Ladder 12-2",
          "exercises": [
            "Band squ. Row",
            "Pend kb swing",
            "Leg lift swipe"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Single bridge press",
            "Db 1.5 pull over"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Bulgarian o.h.",
            "Press",
            "Thoracic mob"
          ]
        },
        {
          "phase": "stretch",
          "exercises": []
        }
      ]
    },
    {
      "date": "2023-08-09",
      "filename": "revision_81394_2023-08-09_14-58-57.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Runner crunch",
            "Superman",
            "Leg lift swipe",
            "Wide knee tuck"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Single thrust l",
            "Single thrust r",
            "Bulgarian l",
            "Bulgarian r"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Sumo deadlift",
            "Shoulder press",
            "Rdl",
            "Face pull"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Heels up squat",
            "Bent sup row",
            "Pistols 5/5",
            "Plank up 5/5"
          ]
        }
      ]
    },
    {
      "date": "2023-09-20",
      "filename": "revision_83578_2023-09-20_14-57-51.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Band seal",
            "Band leg lift adb",
            "Band jump squat",
            "Band plank jack"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "High knees 20",
            "M.c. 20",
            "Burpee 5",
            "Bikes 20",
            "Db complex"
          ]
        },
        {
          "phase": "4 x 8",
          "exercises": [
            "Sumo dead",
            "Push press",
            "squat",
            "Rdl w row"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Floor press",
            "Leg curl",
            "Tucks"
          ]
        }
      ]
    },
    {
      "date": "2023-10-09",
      "filename": "revision_84564_2023-10-09_14-59-51.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "High knees",
            "Plank jack",
            "Speed skater",
            "Dd toe touch"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band seal jack",
            "Band alt row",
            "Band squat",
            "Band Punch"
          ]
        },
        {
          "phase": "4 x 8",
          "exercises": [
            "Db rdl",
            "Db push press",
            "Sumo to high pull",
            "Db crunch"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db curl",
            "Band pressdown"
          ]
        }
      ]
    },
    {
      "date": "2023-12-11",
      "filename": "revision_86594_2023-12-11_15-53-52.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Band chest flye",
            "Leg curl",
            "Rear delt flye",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band Drag curls",
            "Band Overhead ext"
          ]
        }
      ]
    },
    {
      "date": "2024-01-24",
      "filename": "revision_88561_2024-01-24_15-58-46.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Reach left",
            "Hold",
            "Reach right",
            "Leg lift",
            "Flutter",
            "Bikes",
            "Rest",
            "2 to 6 ladder",
            "Box jump sq",
            "Box push up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db floor press",
            "Kb sumos",
            "Db bent row",
            "Knee tuck"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db curl press",
            "Leg curl",
            "Db tricep ext"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band Drag curls",
            "Pull thru"
          ]
        }
      ]
    },
    {
      "date": "2024-02-09",
      "filename": "revision_89172_2024-02-09_15-59-12.txt",
      "phases": [
        {
          "phase": "Spartan",
          "exercises": [
            "Band pulls",
            "Band press",
            "Hip thrust"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Db W- rows",
            "Band Drag curls",
            "Band Overhead ext"
          ]
        }
      ]
    },
    {
      "date": "2024-02-28",
      "filename": "revision_90184_2024-02-28_16-03-59.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg circles L",
            "Leg circles R",
            "S. P. Clam L",
            "S. P. Clam R",
            "Ramp 3 min",
            "M.c. 20",
            "Half burpee 5",
            "Bridge 10"
          ]
        },
        {
          "phase": "Ladder 5 to 10",
          "exercises": [
            "Drop squat",
            "Push up"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Single rdl row",
            "Ss press",
            "Tricep Plank up"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Curtsy curl",
            "Band straight arm row"
          ]
        }
      ]
    },
    {
      "date": "2024-03-18",
      "filename": "revision_91428_2024-03-18_15-41-45.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Rev lunge",
            "Lat. step L",
            "Lat. step R"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band chest press",
            "Knee tuck"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db bent row",
            "Single press bridge",
            "Leg curl",
            "Db side lateral",
            "21s",
            "Band curl",
            "Band kickback"
          ]
        }
      ]
    },
    {
      "date": "2024-04-19",
      "filename": "revision_93087_2024-04-19_14-57-35.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank dip",
            "Runner clap",
            "Plank march",
            "Leg lift"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Drop squat",
            "M.c",
            "Runner lunge",
            "Sh tap",
            "Db complex"
          ]
        },
        {
          "phase": "4x6",
          "exercises": [
            "Rdl",
            "Row",
            "Sumo high pull",
            "Push press"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "Cat cow",
            "Thoracic mob",
            "Hip mob",
            "Db man maker 10",
            "Burpee",
            "Push up",
            "Row",
            "squat"
          ]
        }
      ]
    },
    {
      "date": "2024-05-08",
      "filename": "revision_93869_2024-05-08_15-04-10.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Leg lift",
            "Toe touch",
            "Side plank pulse"
          ]
        },
        {
          "phase": "Tabata holds",
          "exercises": [
            "squat",
            "Split squat L",
            "Split squat R",
            "Wide outs",
            "Rest"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band plank jack",
            "Band bridge",
            "Seated row"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Db floor press",
            "Kb deadlift",
            "Db wide row",
            "Leg curl"
          ]
        },
        {
          "phase": "60/15x1",
          "exercises": [
            "Wall sit curl",
            "Plank up",
            "Lunge squat lunge"
          ]
        }
      ]
    },
    {
      "date": "2024-05-22",
      "filename": "revision_94552_2024-05-22_15-23-36.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Cross mc 10",
            "Push up 5",
            "Drop squat 10"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Band chest flye",
            "Rear delt flye",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band preacher curls",
            "Band kickback"
          ]
        }
      ]
    },
    {
      "date": "2024-06-07",
      "filename": "revision_95646_2024-06-07_15-00-21.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg up reach L",
            "Leg up reach R",
            "Bikes",
            "Hollow hold"
          ]
        },
        {
          "phase": "5 min",
          "exercises": [
            "Db thruster 10",
            "Db row 10",
            "Db drop squat 10"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Incline bench",
            "Thoracic mob",
            "Single leg hip thrust",
            "Hip mobility"
          ]
        },
        {
          "phase": "2 x 10",
          "exercises": [
            "One arm row"
          ]
        },
        {
          "phase": "Lat stretch",
          "exercises": [
            "Pistol",
            "Hip flexor mob"
          ]
        }
      ]
    },
    {
      "date": "2024-06-26",
      "filename": "revision_96527_2024-06-26_14-52-31.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "3 way crunch",
            "Pointer"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Drop squat 10",
            "M.c. 10",
            "Butt kicker 20"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db one arm row",
            "Single leg thrust",
            "Db oh tricep"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db floor press",
            "Bulgarian",
            "Db bicep curl",
            "Man maker",
            "Burpee",
            "Sh tap",
            "Cross knee",
            "Dd toe touch"
          ]
        }
      ]
    },
    {
      "date": "2024-07-19",
      "filename": "revision_97582_2024-07-19_14-49-39.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Dead bug",
            "Pointer",
            "Plank atw"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Runner lunge",
            "Sh. tap 10",
            "March bridge"
          ]
        },
        {
          "phase": "3x10",
          "exercises": [
            "Band bridge lat pull",
            "Db rdl",
            "All 4 thoracic mobility"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db floor press",
            "Kb heels elev squat",
            "Full hip mobility"
          ]
        }
      ]
    },
    {
      "date": "2024-08-14",
      "filename": "revision_98462_2024-08-14_15-01-48.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Band hydrant",
            "Kickbacks l/r",
            "Ramp 3min",
            "Band seals 10",
            "Band f/b 10",
            "Band squat"
          ]
        },
        {
          "phase": "3x15",
          "exercises": [
            "Band chest flye",
            "Leg curl",
            "Rear delt flye",
            "Heels elev squat"
          ]
        },
        {
          "phase": "2 x 15",
          "exercises": [
            "Band facepull",
            "Band Drag curls",
            "Band Overhead ext",
            "Calf raise"
          ]
        }
      ]
    },
    {
      "date": "2024-08-19",
      "filename": "revision_98733_2024-08-19_14-58-57.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Hard plank",
            "Reverse crunch",
            "Superman hold"
          ]
        },
        {
          "phase": "3 min ramp",
          "exercises": [
            "Wide outs 10",
            "M.c. 10",
            "Half burpee 5",
            "Pull aparts 10",
            "Rev. hyper 10"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band bridge pull 20",
            "Band punches 50",
            "Kb swing 25",
            "Plank jacks 50"
          ]
        },
        {
          "phase": "3 x 8",
          "exercises": [
            "Curl to arnold",
            "Bulgarian Split Squat",
            "Leg circles"
          ]
        }
      ]
    },
    {
      "date": "2024-08-23",
      "filename": "revision_98735_2024-08-23_14-55-04.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Half burpee",
            "runner sit up",
            "Wide knee tuck",
            "Wall thoracic",
            "Wall sit lat mobility"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band flye",
            "Band pull thru",
            "Band facepull",
            "Hip Flexor",
            "Hands free hips",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-08-23",
      "filename": "revision_98843_2024-08-23_15-20-58.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Half burpee",
            "runner sit up",
            "Wide knee tuck"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "5 to 10",
            "Dl high pull",
            "Push up",
            "Wall t spine mob 12"
          ]
        },
        {
          "phase": "Chipper 25/20/15/10",
          "exercises": [
            "Band flye",
            "Band pull thru",
            "Band facepull",
            "Hip flexor mob"
          ]
        },
        {
          "phase": "60 sec",
          "exercises": [
            "Wall sit hammer curl",
            "Alt band pressdowns",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-08-26",
      "filename": "revision_99032_2024-08-26_14-55-42.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "One arm row",
            "Rdl",
            "Strict press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Floor press",
            "Heels elev squat",
            "Band drag curl",
            "Db lying tricep",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-08-26",
      "filename": "revision_99034_2024-08-26_15-42-57.txt",
      "phases": [
        {
          "phase": "3 x 10",
          "exercises": [
            "One arm row",
            "Rdl",
            "Strict press"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Heels elev squat",
            "Band drag curl",
            "Db lying tricep",
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-08-28",
      "filename": "revision_99221_2024-08-28_14-56-37.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Basic crunch",
            "Leg lift",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata hold",
          "exercises": [
            "Ss right",
            "Ss left",
            "Runner lunge",
            "Bridge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db ren row 16",
            "Kb swing 20",
            "Db alt f. Press 20"
          ]
        },
        {
          "phase": "60 sec penguins",
          "exercises": [
            "Man maker",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-08-28",
      "filename": "revision_99254_2024-08-28_15-51-44.txt",
      "phases": [
        {
          "phase": "Tabata holds",
          "exercises": [
            "Basic crunch",
            "Leg lift",
            "Oblique L",
            "Oblique R"
          ]
        },
        {
          "phase": "Tabata hold",
          "exercises": [
            "Ss right",
            "Ss left",
            "Runner lunge",
            "Bridge"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db ren row 16",
            "Kb swing 20",
            "Db alt f. Press 20"
          ]
        },
        {
          "phase": "2 x 8",
          "exercises": [
            "Single curl press",
            "Single hip thrust",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-08-30",
      "filename": "revision_99510_2024-08-30_14-57-15.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Reach crunch",
            "Reverse crunch",
            "Pointer"
          ]
        },
        {
          "phase": "5 min ladder",
          "exercises": [
            "5 up",
            "Push up",
            "Prisoner jump squat"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Db burpee 10",
            "Db r. Lunge press 20",
            "Db wide row 15",
            "60 Band plank jack 60 sec",
            "Thoracic mobility",
            "Stretch"
          ]
        }
      ]
    },
    {
      "date": "2024-09-04",
      "filename": "revision_99675_2024-09-04_15-02-11.txt",
      "phases": [
        {
          "phase": "30/10x3",
          "exercises": [
            "Dead bug",
            "Pointer",
            "Plank"
          ]
        },
        {
          "phase": "30/10x3",
          "exercises": [
            "Band bridge",
            "Band clam L",
            "Band clam R"
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Bench thruster",
            "Piston row",
            "Slider m.c."
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Db side lateral",
            "Band drag curl",
            "Slider leg curl"
          ]
        }
      ]
    },
    {
      "date": "2024-09-06",
      "filename": "revision_99678_2024-09-06_15-32-34.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Plank dip",
            "Side plank p. L",
            "Side plank p. R"
          ]
        },
        {
          "phase": "25/10x3",
          "exercises": [
            "Butterfly pump",
            "Single bridge l",
            "Single bridge r"
          ]
        },
        {
          "phase": "5 min 3/3",
          "exercises": [
            "Single clean press"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "S. sand bag row",
            "Sand bag box squat",
            "Butterfly sit up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Db floor press",
            "Kb sumo deadlift",
            "Leg lift"
          ]
        }
      ]
    },
    {
      "date": "2024-09-09",
      "filename": "revision_99679_2024-09-09_15-00-13.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Plank reach",
            "SP Left",
            "Sp Right",
            "Hollow hold"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Step out lunge",
            "Reverse lunge",
            "Lateral lunge",
            "HB march"
          ]
        },
        {
          "phase": "EMOM x 3",
          "exercises": [
            "Db jacks 25",
            "Mod V ups 20",
            "Jump lunge 20",
            "Plank up 10"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Renegade row",
            "1 \u00bd RDL",
            "Db kick back",
            "Human maker",
            "Burpee",
            "Sh tap",
            "Dd toe touch",
            "Knee tuck",
            "lunge"
          ]
        }
      ]
    },
    {
      "date": "2024-09-11",
      "filename": "revision_99683_2024-09-11_15-03-57.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg lift",
            "Mod v up",
            "Bikes",
            "Plank dip"
          ]
        },
        {
          "phase": "Ladder 5 up for 5 min",
          "exercises": [
            "Push up",
            "Pend kb swing",
            "Db s.s. press l 15",
            "Db s.sq press r 15",
            "P.u.p. Row l 15",
            "P.u.p row r 15"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band curl",
            "Db kickbacks",
            "Bag hip thrust"
          ]
        }
      ]
    },
    {
      "date": "2024-09-11",
      "filename": "revision_99725_2024-09-11_15-08-17.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Leg lift",
            "Mod v up",
            "Bikes",
            "Plank dip"
          ]
        },
        {
          "phase": "Ladder 5 up for 5 min",
          "exercises": [
            "Push up",
            "Pend kb swing"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "B. split squat",
            "One arm row",
            "Floor press"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band curl",
            "Db kickbacks",
            "Bag hip thrust"
          ]
        }
      ]
    },
    {
      "date": "2024-09-13",
      "filename": "revision_99757_2024-09-13_15-32-12.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Slider knee tuck",
            "Obliques L",
            "Obliques R",
            "See saw"
          ]
        },
        {
          "phase": "Tabata",
          "exercises": [
            "Band 45 jack",
            "Band f/b jack",
            "Band hydrant",
            "Band bridge"
          ]
        },
        {
          "phase": "Ladder 2 to 6",
          "exercises": [
            "Db push up row",
            "Kb deadlift to high pull"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "Stag. rdl",
            "Band straight arm lat pull",
            "Band chest flye"
          ]
        },
        {
          "phase": "3 x 12",
          "exercises": [
            "Slider leg curl",
            "Band chest press",
            "Db kickbacks"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Drop squat",
            "Double crunch"
          ]
        }
      ]
    },
    {
      "date": "2024-09-16",
      "filename": "revision_99918_2024-09-16_14-44-15.txt",
      "phases": [
        {
          "phase": "25/10x3",
          "exercises": [
            "Leg circle L",
            "Leg circle R",
            "Slider m.c."
          ]
        },
        {
          "phase": "Spartan",
          "exercises": [
            "Band press",
            "Band sup pull",
            "Db thruster"
          ]
        },
        {
          "phase": "3 x 10",
          "exercises": [
            "T flies",
            "Pull thru",
            "Bridge press ext"
          ]
        }
      ]
    },
    {
      "date": "2024-09-18",
      "filename": "revision_99961_2024-09-18_15-36-01.txt",
      "phases": [
        {
          "phase": "25/5x3",
          "exercises": [
            "Plank",
            "Side plank L",
            "Side plank R"
          ]
        },
        {
          "phase": "25/5x3 band",
          "exercises": [
            "Lateral walk 3",
            "Pulse squat",
            "Kick back"
          ]
        },
        {
          "phase": "Ladder",
          "exercises": [
            "Kb swing",
            "Band swim",
            "V up"
          ]
        },
        {
          "phase": "3x12",
          "exercises": [
            "Pull down",
            "Db floor press",
            "Sumo deadlift",
            "10 man maker",
            "Burpee",
            "Push up",
            "Sh tap",
            "Dd knee tuck"
          ]
        }
      ]
    },
    {
      "date": "2024-09-20",
      "filename": "revision_99974_2024-09-20_15-22-34.txt",
      "phases": [
        {
          "phase": "30/10x2",
          "exercises": [
            "Single leg drop",
            "Plank march",
            "Penguins",
            "T\u2019s, w\u2019s, l\u2019s",
            "Thoracic mobility",
            "12 reps per side"
          ]
        },
        {
          "phase": "Chipper 20/15/10",
          "exercises": [
            "Band squat row",
            "Punches",
            "Pull thru"
          ]
        },
        {
          "phase": "Lunge matrix 5 per side",
          "exercises": [
            "3 way push up 5 each"
          ]
        },
        {
          "phase": "Hip rotations",
          "exercises": [
            "90/90 rotations"
          ]
        },
        {
          "phase": "12 per side",
          "exercises": [
            "Ankle mobility 12 per"
          ]
        }
      ]
    },
    {
      "date": "2024-09-25",
      "filename": "revision_99975_2024-09-25_15-00-08.txt",
      "phases": [
        {
          "phase": "Tabata",
          "exercises": [
            "Basic crunch",
            "Plank reach",
            "Reverse crunch",
            "Star crunch"
          ]
        },
        {
          "phase": "5 min get up",
          "exercises": [
            "L/R"
          ]
        },
        {
          "phase": "Emom",
          "exercises": [
            "Band skiers 30",
            "Kb pend swing 15",
            "Band punch 40",
            "Db twist thrust 20"
          ]
        },
        {
          "phase": "2x10",
          "exercises": [
            "Hold 10 sec",
            "Single hip thrust",
            "Kneeling push up",
            "Supinated pull"
          ]
        },
        {
          "phase": "3 x 15",
          "exercises": [
            "Band curl",
            "Band Overhead ext",
            "Travel lunge 8/8"
          ]
        }
      ]
    }
  ]
};

// Make data available globally
window.EXERCISE_DATA = exerciseData;
