#!/usr/bin/env python3
"""
Regenerate structured workout data from raw revision files
- Fix typos and standardize exercise names
- Group exercises by categories properly
- Track total workouts per day
- Create clean, organized data structure
"""

import os
import json
import re
from collections import defaultdict, Counter
from pathlib import Path
from datetime import datetime

def standardize_exercise_name(exercise):
    """Standardize exercise names and fix common typos"""
    if not exercise or exercise.strip() == '':
        return None
    
    exercise = exercise.strip()
    
    # Common typos and standardizations
    replacements = {
        # Common typos
        'bulagarians': 'bulgarians',
        'bicep culs': 'bicep curls',
        'm.c.': 'mountain climbers',
        'r.': 'rows',
        'l.': 'left',
        
        # Standardize abbreviations
        'db': 'dumbbell',
        'kb': 'kettlebell',
        'h.b.': 'high plank',
        'alt': 'alternating',
        'thruster': 'thrusters',
        'renegade': 'renegade rows',
        'rdl': 'romanian deadlift',
        'bike crunch': 'bicycle crunches',
        'v ups': 'v-ups',
        'mod v ups': 'modified v-ups',
        'see saw plank': 'seesaw plank',
        'arrested superman': 'superman holds',
        'coffin crunch': 'dead bug crunches',
        'ab mat runner clap': 'ab mat sit-ups',
        'drop squat': 'jump squats',
        'heels elev kb squat': 'heel elevated kb squats',
        'single leg drops': 'single leg glute bridges',
        'wall sit curl': 'wall sit bicep curls',
        'lunge squat lunge': 'lunge to squat to lunge',
        'band single bridge': 'single leg glute bridge',
        'band jump squat': 'band jump squats',
        'band punch': 'band punches',
        'slider m.c.': 'slider mountain climbers',
        'db alt thruster': 'dumbbell alternating thrusters',
        'db renegade r.': 'dumbbell renegade rows',
        'db hammer curl to press': 'dumbbell hammer curl to press',
        'band lat pull bridge': 'band lat pulldown bridge',
        'step up and over': 'step-ups',
        'sand bag pull thru': 'sandbag pull-through',
        '1 ½ bulagarians': '1.5 bulgarians',
        'wall sit 1 ½ bicep culs': 'wall sit 1.5 bicep curls',
        'band hydrant': 'band clamshells',
        'band f/b jack': 'band front/back jacks',
        'curtsy l': 'curtsy lunges left',
        'curtsy r': 'curtsy lunges right',
        ' split squats l': ' split squats left',
        ' split squats r': ' split squats right',
        ' single reach l': ' single reach left',
        ' single reach r': ' single reach right',
        ' band single bridge l': ' band single bridge left',
        ' band single bridge r': ' band single bridge right',
        'step out lunge': 'step-out lunges',
        'band drag curl': 'band drag curls',
        'band Drag curls': 'band drag curls',
        'band bridge': 'glute bridges',
        'band kickback': 'band kickbacks',
        'band kickettlebellack': 'band kickbacks',
        'band curls': 'band bicep curls',
        'band facepull': 'band face pulls',
        'db tricep ext': 'dumbbell tricep extensions',
        'slider leg curl': 'slider leg curls',
        'band bus driver': 'band bus drivers',
        'plank up knee tuck': 'plank to knee tucks',
        '21s bicep': '21s bicep curls',
        'wide outs': 'lateral raises',
        'single reach': 'single arm reaches',
        'leg lifts': 'lying leg lifts',
        'criss cross flutters': 'scissor kicks',
        'split squats': 'split squats',
        'db alt floor press': 'dumbbell alternating floor press',
        'band lat pull bridge': 'band lat pulldown bridge',
        'db bent row': 'dumbbell bent-over rows',
        'wall sit curl': 'wall sit bicep curls',
        'single leg drops': 'single leg glute bridges',
        'lunge squat lunge': 'lunge to squat to lunge',
        'half burpee': 'half burpees',
        'burpee': 'burpees',
        'wide outs': 'lateral raises',
        'm.c.': 'mountain climbers',
        'drop squat': 'jump squats',
        'heels elev kb squat': 'heel elevated kb squats',
        'db floor press': 'dumbbell floor press',
        'db bent row': 'dumbbell bent-over rows',
        'rdl': 'romanian deadlift',
        'wall sit curl': 'wall sit bicep curls',
        'single leg drops': 'single leg glute bridges',
        'lunge squat lunge': 'lunge to squat to lunge',
        'stretch': 'stretching',
        'finisher': 'finisher exercises',
        'rest': 'rest period',
        'tabata': 'tabata intervals',
        'emom': 'every minute on the minute',
        'amrap': 'as many rounds as possible',
        'spartan': 'spartan workout',
        'or': 'or',
    }
    
    # Apply replacements
    for old, new in replacements.items():
        if old.lower() in exercise.lower():
            exercise = re.sub(re.escape(old), new, exercise, flags=re.IGNORECASE)
    
    # Clean up extra spaces and standardize formatting
    exercise = re.sub(r'\s+', ' ', exercise).strip()
    exercise = exercise.title()  # Title case for consistency
    
    return exercise

def categorize_exercise(exercise, phase_name):
    """Categorize exercise based on name and phase context"""
    if not exercise:
        return 'Unknown'
    
    exercise_lower = exercise.lower()
    phase_lower = phase_name.lower()
    
    # Check phase context first
    if 'warmup' in phase_lower or 'ramp' in phase_lower:
        return 'Warmup'
    elif 'emom' in phase_lower or 'tabata' in phase_lower or 'amrap' in phase_lower:
        return 'Cardio'
    elif 'stretch' in phase_lower or 'recovery' in phase_lower:
        return 'Recovery'
    elif 'finisher' in phase_lower:
        return 'Accessory'
    
    # Then check exercise names
    # Warmup indicators
    if any(word in exercise_lower for word in ['mountain climbers', 'jump squats', 'burpees', 'lateral raises', 'arm circles', 'leg swings', 'hip circles', 'wide outs']):
        return 'Warmup'
    
    # Cardio indicators
    if any(word in exercise_lower for word in ['burpees', 'jump squats', 'mountain climbers', 'jumping jacks', 'high knees', 'butt kicks', 'lateral raises', 'step-ups', 'thrusters', 'kettlebell swings', 'wide outs']):
        return 'Cardio'
    
    # Strength indicators
    if any(word in exercise_lower for word in ['press', 'row', 'squat', 'deadlift', 'bench', 'curl', 'extension', 'thruster', 'bulgarians', 'lunge', 'bridge', 'plank']):
        return 'Strength'
    
    # Recovery indicators
    if any(word in exercise_lower for word in ['stretch', 'stretching', 'rest', 'recovery', 'hold', 'breathe']):
        return 'Recovery'
    
    # Accessory indicators (everything else)
    return 'Accessory'

def extract_workout_data(content, filename):
    """Extract structured workout data from raw content"""
    lines = content.strip().split('\n')
    
    # Extract date from filename
    date_match = re.search(r'revision_\d+_(\d{4}-\d{2}-\d{2})', filename)
    date = date_match.group(1) if date_match else 'unknown'
    
    phases = []
    current_phase = None
    current_exercises = []
    
    for line in lines:
        line = line.strip()
        if not line or line.startswith('Previous workouts') or line.startswith('https://'):
            continue
            
        # Check if this is a phase header
        if re.match(r'^\d+/\d+x\d+', line) or \
           re.match(r'^\d+\s*x\s*\d+', line) or \
           re.match(r'^\d+\s*min', line) or \
           re.match(r'^\d+\s*sec', line) or \
           line.lower() in ['emom', 'tabata', 'finisher', 'stretch', 'rest', 'amrap', 'spartan']:
            
            # Save previous phase if exists
            if current_phase and current_exercises:
                phases.append({
                    'phase': current_phase,
                    'exercises': current_exercises
                })
            
            # Start new phase
            current_phase = line
            current_exercises = []
        else:
            # This is an exercise
            if current_phase and line:
                standardized_exercise = standardize_exercise_name(line)
                if standardized_exercise:
                    current_exercises.append(standardized_exercise)
    
    # Add the last phase
    if current_phase and current_exercises:
        phases.append({
            'phase': current_phase,
            'exercises': current_exercises
        })
    
    return {
        'date': date,
        'filename': filename,
        'phases': phases
    }

def regenerate_structured_data():
    """Regenerate structured workout data from raw files"""
    revisions_dir = Path("revisions")
    
    if not revisions_dir.exists():
        print("❌ Revisions directory not found!")
        return
    
    print("🔄 Regenerating structured workout data...")
    
    # Collect all workout data
    all_workouts = []
    daily_workouts = defaultdict(list)
    
    for filepath in revisions_dir.glob("*.txt"):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        workout_data = extract_workout_data(content, filepath.name)
        if workout_data['phases']:  # Only include workouts with actual phases
            all_workouts.append(workout_data)
            daily_workouts[workout_data['date']].append(workout_data)
    
    print(f"📊 Found {len(all_workouts)} workouts across {len(daily_workouts)} days")
    
    # Organize by categories
    categorized_data = {
        'Warmup': [],
        'Cardio': [],
        'Strength': [],
        'Accessory': [],
        'Recovery': []
    }
    
    # Track all exercises and their frequencies
    all_exercises = []
    exercise_frequencies = Counter()
    
    for workout in all_workouts:
        for phase in workout['phases']:
            phase_name = phase['phase']
            exercises = phase['exercises']
            
            for exercise in exercises:
                category = categorize_exercise(exercise, phase_name)
                categorized_data[category].append({
                    'exercise': exercise,
                    'phase': phase_name,
                    'date': workout['date'],
                    'filename': workout['filename']
                })
                
                all_exercises.append(exercise)
                exercise_frequencies[exercise] += 1
    
    # Create summary statistics
    summary = {
        'total_workouts': len(all_workouts),
        'total_days': len(daily_workouts),
        'date_range': {
            'start': min(daily_workouts.keys()) if daily_workouts else 'unknown',
            'end': max(daily_workouts.keys()) if daily_workouts else 'unknown'
        },
        'daily_workout_counts': {date: len(workouts) for date, workouts in daily_workouts.items()},
        'category_counts': {category: len(exercises) for category, exercises in categorized_data.items()},
        'most_common_exercises': dict(exercise_frequencies.most_common(20)),
        'total_unique_exercises': len(exercise_frequencies)
    }
    
    # Create the final structured data
    structured_data = {
        'metadata': {
            'generated_at': datetime.now().isoformat(),
            'source': 'raw revision files',
            'total_files_processed': len(list(revisions_dir.glob('*.txt'))),
            'summary': summary
        },
        'categorized_exercises': categorized_data,
        'daily_workouts': dict(daily_workouts),
        'all_workouts': all_workouts,
        'exercise_frequencies': dict(exercise_frequencies)
    }
    
    # Save the structured data
    output_file = 'workout_history_data_categorized.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(structured_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Structured data saved to: {output_file}")
    print(f"📊 Summary:")
    print(f"  🏃 Total workouts: {summary['total_workouts']}")
    print(f"  📅 Total days: {summary['total_days']}")
    print(f"  📈 Date range: {summary['date_range']['start']} to {summary['date_range']['end']}")
    print(f"  💪 Total unique exercises: {summary['total_unique_exercises']}")
    print(f"  🏷️  Category breakdown:")
    for category, count in summary['category_counts'].items():
        print(f"    {category}: {count} exercises")
    
    print(f"\n🔥 Most common exercises:")
    for exercise, count in list(summary['most_common_exercises'].items())[:10]:
        print(f"  {exercise}: {count} times")
    
    # Show days with multiple workouts
    multi_workout_days = {date: count for date, count in summary['daily_workout_counts'].items() if count > 1}
    if multi_workout_days:
        print(f"\n📅 Days with multiple workouts:")
        for date, count in sorted(multi_workout_days.items()):
            print(f"  {date}: {count} workouts")
    
    return structured_data

if __name__ == "__main__":
    regenerate_structured_data()
