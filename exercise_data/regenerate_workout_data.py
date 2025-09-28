#!/usr/bin/env python3
"""
Regenerate workout data with better parsing to capture all phases
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path

def parse_workout_file(file_path):
    """Parse a workout file and extract all phases and exercises"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None
    
    # Extract date from filename
    filename = os.path.basename(file_path)
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', filename)
    if not date_match:
        print(f"No date found in filename: {filename}")
        return None
    
    date = date_match.group(1)
    
    # Split content into lines and clean up
    lines = [line.strip() for line in content.split('\n') if line.strip()]
    
    phases = []
    current_phase = None
    current_exercises = []
    
    for line in lines:
        # Skip empty lines and URLs
        if not line or line.startswith('http') or line.startswith('Previous workouts'):
            continue
            
        # Check if this line is a phase header
        phase_indicators = ['Tabata', 'Spartan', 'Emom', 'EMOM', '3 x', '3x', '2 x', '2x', '4 x', '4x', '5 x', '5x', 'Chipper', 'Lunge matrix', 'Hip rotations', 'Ladder']
        is_phase_header = any(indicator in line for indicator in phase_indicators)
        
        # Also check for timing patterns like "30/10x3", "25/5x3", "20/15/10", "Ladder 2-12", etc.
        timing_pattern = re.match(r'^(\d+/\d+x\d+|\d+/\d+/\d+|\d+\s*min|\d+\s*per\s*side|Ladder\s+\d+-\d+|\d+\s*sec)', line)
        
        if is_phase_header or timing_pattern:
            # Save previous phase if it exists
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
            if current_phase:
                # Clean up exercise name
                exercise = line.strip()
                # Filter out very short entries and common non-exercise terms
                if (exercise and len(exercise) > 2 and 
                    not exercise.lower() in ['reps', 'rep', 'seconds', 'sec', 'minutes', 'min'] and
                    not re.match(r'^\d+\s*(reps?|sec|min)$', exercise.lower())):
                    current_exercises.append(exercise)
    
    # Don't forget the last phase
    if current_phase and current_exercises:
        phases.append({
            'phase': current_phase,
            'exercises': current_exercises
        })
    
    if not phases:
        print(f"No phases found in {filename}")
        return None
    
    return {
        'date': date,
        'filename': filename,
        'phases': phases
    }

def regenerate_workout_data():
    """Regenerate the workout data from all revision files"""
    revisions_dir = Path('revisions')
    if not revisions_dir.exists():
        print("Revisions directory not found")
        return
    
    daily_workouts = {}
    all_workouts = []
    categorized_exercises = {
        'Warmup': [],
        'Cardio': [],
        'Strength': [],
        'Accessory': [],
        'Recovery': []
    }
    
    # Process all revision files
    for file_path in sorted(revisions_dir.glob('*.txt')):
        print(f"Processing {file_path.name}...")
        workout_data = parse_workout_file(file_path)
        
        if workout_data:
            date = workout_data['date']
            
            # Add to daily workouts
            if date not in daily_workouts:
                daily_workouts[date] = []
            daily_workouts[date].append(workout_data)
            
            # Add to all workouts
            all_workouts.append(workout_data)
            
            # Categorize exercises
            for phase in workout_data['phases']:
                phase_name = phase['phase']
                for exercise in phase['exercises']:
                    # Simple categorization based on phase name
                    if 'tabata' in phase_name.lower() or 'warmup' in phase_name.lower():
                        category = 'Warmup'
                    elif 'cardio' in phase_name.lower() or 'bike' in phase_name.lower():
                        category = 'Cardio'
                    elif 'spartan' in phase_name.lower() or 'emom' in phase_name.lower():
                        category = 'Strength'
                    elif '3 x' in phase_name or '2 x' in phase_name or '4 x' in phase_name:
                        category = 'Accessory'
                    else:
                        category = 'Accessory'  # Default
                    
                    categorized_exercises[category].append({
                        'exercise': exercise,
                        'phase': phase_name,
                        'date': date,
                        'filename': workout_data['filename']
                    })
    
    # Calculate statistics
    total_workouts = len(all_workouts)
    total_days = len(daily_workouts)
    
    # Get date range
    dates = sorted(daily_workouts.keys())
    date_range = {
        'start': dates[0] if dates else None,
        'end': dates[-1] if dates else None
    }
    
    # Count exercises per category
    exercise_counts = {category: len(exercises) for category, exercises in categorized_exercises.items()}
    
    # Find most common exercises
    exercise_frequency = {}
    for category_exercises in categorized_exercises.values():
        for exercise_data in category_exercises:
            exercise = exercise_data['exercise']
            exercise_frequency[exercise] = exercise_frequency.get(exercise, 0) + 1
    
    most_common = sorted(exercise_frequency.items(), key=lambda x: x[1], reverse=True)[:15]
    
    # Create the complete data structure
    workout_data = {
        'metadata': {
            'generated_at': datetime.now().isoformat(),
            'source': 'raw revision files (regenerated)',
            'total_files_processed': len(list(revisions_dir.glob('*.txt'))),
            'summary': {
                'total_workouts': total_workouts,
                'total_days': total_days,
                'date_range': date_range,
                'daily_workout_counts': {date: len(workouts) for date, workouts in daily_workouts.items()},
                'exercise_counts_by_category': exercise_counts,
                'most_common_exercises': dict(most_common)
            }
        },
        'categorized_exercises': categorized_exercises,
        'daily_workouts': daily_workouts,
        'all_workouts': all_workouts
    }
    
    # Save to file
    output_file = 'workout_history_data_categorized.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(workout_data, f, indent=2, ensure_ascii=False)
    
    print(f"\nRegenerated workout data:")
    print(f"- Total workouts: {total_workouts}")
    print(f"- Total days: {total_days}")
    print(f"- Date range: {date_range['start']} to {date_range['end']}")
    print(f"- Saved to: {output_file}")
    
    # Show some examples
    print(f"\nExample workout from {dates[-1] if dates else 'N/A'}:")
    if dates and dates[-1] in daily_workouts:
        example_workout = daily_workouts[dates[-1]][0]
        for phase in example_workout['phases']:
            print(f"  {phase['phase']}: {', '.join(phase['exercises'][:3])}{'...' if len(phase['exercises']) > 3 else ''}")

if __name__ == '__main__':
    regenerate_workout_data()
