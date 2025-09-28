#!/usr/bin/env python3
"""
Comprehensive exercise data sanitization script
Fixes typos, removes invalid exercises, and standardizes names
"""

import json
import re
from typing import Dict, List, Any

def load_exercise_data():
    """Load the exercise data from the JavaScript file"""
    with open('public/js/exercise-data.js', 'r') as f:
        content = f.read()
        # Extract the JSON data from the JavaScript file
        start = content.find('window.EXERCISE_DATA = ')
        if start == -1:
            raise ValueError("Could not find EXERCISE_DATA in file")
        
        # Find the opening brace
        start = content.find('{', start)
        if start == -1:
            raise ValueError("Could not find opening brace")
        
        # Find the matching closing brace
        brace_count = 0
        end = start
        for i, char in enumerate(content[start:], start):
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end = i + 1
                    break
        
        json_str = content[start:end]
        return json.loads(json_str)

def save_exercise_data(data):
    """Save the sanitized data back to the JavaScript file"""
    with open('public/js/exercise-data.js', 'w') as f:
        f.write('window.EXERCISE_DATA = ')
        json.dump(data, f, indent=2)
        f.write(';')

def get_invalid_exercises():
    """Get list of invalid exercises to filter out"""
    return [
        # Timing protocols incorrectly categorized as exercises
        '40/30/20 (15 Off)', '2 Rounds', '3 Rounds', '5 Rounds', '10 Rounds',
        '15 Rounds', '20 Rounds', '30 Rounds', '40 Rounds', '50 Rounds', '60 Rounds',
        
        # Single letters and directions
        'OR', 'R', 'L', 'Left', 'Right', 'S', 'Left, S, Left',
        
        # Number sequences and patterns
        '10 Down', '5 Up', '2-12', '1-10', '1-5', '1-3', '1-2', '1-1', '2-2', '3-3',
        '4-4', '5-5', '10-10', '15-15', '20-20', '25-25', '30-30', '40-40', '50-50',
        '60-60', '100-100', '1-2-3', '2-4-6', '3-6-9', '4-8-12', '5-10-15',
        
        # Time periods
        '1 min', '2 min', '3 min', '4 min', '5 min', '10 min', '15 min', '20 min',
        '30 min', '45 min', '60 min', '90 min', '120 min',
        '1 sec', '2 sec', '3 sec', '4 sec', '5 sec', '10 sec', '15 sec', '20 sec',
        '30 sec', '45 sec', '60 sec', '90 sec', '120 sec',
        
        # Rep/set counts
        '1 rep', '2 rep', '3 rep', '4 rep', '5 rep', '10 rep', '15 rep', '20 rep',
        '25 rep', '30 rep', '40 rep', '50 rep', '60 rep', '100 rep',
        '1 set', '2 set', '3 set', '4 set', '5 set', '10 set', '15 set', '20 set',
        '25 set', '30 set', '40 set', '50 set', '60 set', '100 set',
        
        # Round counts
        '1 round', '2 round', '3 round', '4 round', '5 round', '10 round', '15 round',
        '20 round', '25 round', '30 round', '40 round', '50 round', '60 round', '100 round',
        
        # Category headers
        '60 Finisher Exercises', 'Finisher Exercises', 'Warmup Exercises', 'Cardio Exercises',
        'Strength Exercises', 'Recovery Exercises',
        
        # Very short entries
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]

def get_exercise_replacements():
    """Get dictionary of exercise name replacements"""
    return {
        # Fix typos
        'Band Puncheses': 'Band Punches',
        'Mobility Stretchinges': 'Mobility Stretches',
        'Dd Toe Touch': 'Dumbbell Toe Touch',
        'Band Clam Left': 'Band Clamshell Left',
        'Clam Right': 'Band Clamshell Right',
        'Band Clam L': 'Band Clamshell Left',
        'Clam R': 'Band Clamshell Right',
        
        # Expand abbreviations
        'F. lunge': 'Forward Lunge',
        'F Lunge': 'Forward Lunge',
        'Ch.': 'Chest',
        'Ch': 'Chest',
        'Sh.': 'Shoulder',
        'Sh': 'Shoulder',
        'Db': 'Dumbbell',
        'Kb': 'Kettlebell',
        'B.': 'Bulgarian',
        'B': 'Bulgarian',
        'R.': 'Right',
        'R': 'Right',
        'L.': 'Left',
        'L': 'Left',
        
        # Standardize common variations
        'Band Kick Back': 'Band Kickback',
        'Band Clamshells': 'Band Clamshell',
        'Band Seal': 'Band Seal Jack',
        'Band Jump Sq': 'Band Jump Squat',
        'Dumbbell Sumo Dl': 'Dumbbell Sumo Deadlift',
        'Band Swims': 'Band Swim',
        'Band Punches': 'Band Punch',
        'Band Bicep Curls': 'Band Bicep Curl',
        'Band Kickbacks': 'Band Kickback',
        'Slider Knee Tucks': 'Slider Knee Tuck',
        'Dumbbell Goblet Squat': 'Dumbbell Goblet Squat',
        'Dumbbell Bent Row 15': 'Dumbbell Bent Row',
        'Kettlebell Clean': 'Kettlebell Clean',
        'Kettlebell Push Press': 'Kettlebell Push Press',
        'Split Squats': 'Split Squat',
        'Dumbbell One Arm Row': 'Dumbbell One Arm Row',
        'Single Hip Thrust': 'Single Hip Thrust',
        'Dumbbell Side Lateral': 'Dumbbell Side Lateral',
        'Slider Leg Curls': 'Slider Leg Curl',
        'Dumbbell Floor Press': 'Dumbbell Floor Press',
        'Single Calf Raise': 'Single Calf Raise',
        'Yoga Cooldown': 'Yoga Cooldown',
        'Bulgarians': 'Bulgarian Split Squat',
        'Single Leg Curl': 'Single Leg Curl',
        'Band Lateral Walk': 'Band Lateral Walk',
        'Step Up': 'Step Up',
        'Dumbbell Side Laterals': 'Dumbbell Side Lateral',
        'Alternating Leg Curls': 'Alternating Leg Curl',
        'T Flies': 'T Fly',
        'Band Hip B. Latissimus Pull': 'Band Hip Latissimus Pull',
        'Shoulder Tap To Dumbbell Toe Touch': 'Shoulder Tap to Dumbbell Toe Touch',
        'Dead Bug Crunches': 'Dead Bug Crunch'
    }

def is_valid_exercise(exercise_name):
    """Check if an exercise name is valid"""
    if not exercise_name or not isinstance(exercise_name, str):
        return False
    
    # Check against invalid list
    invalid_exercises = get_invalid_exercises()
    if exercise_name in invalid_exercises:
        return False
    
    # Filter out very short names
    if len(exercise_name.strip()) < 3:
        return False
    
    # Filter out pure numbers
    if re.match(r'^\d+$', exercise_name.strip()):
        return False
    
    # Filter out common patterns
    if re.match(r'^\d+-\d+(-\d+)*$', exercise_name.strip()):
        return False
    
    return True

def standardize_exercise_name(exercise_name):
    """Standardize exercise name using replacements"""
    if not exercise_name:
        return exercise_name
    
    replacements = get_exercise_replacements()
    standardized = exercise_name
    
    # Apply replacements
    for old_name, new_name in replacements.items():
        if standardized == old_name:
            standardized = new_name
            break
    
    return standardized

def sanitize_daily_workouts(daily_workouts):
    """Sanitize the daily workouts data"""
    sanitized = {}
    
    for date, workouts in daily_workouts.items():
        sanitized_workouts = []
        
        for workout in workouts:
            sanitized_phases = []
            
            for phase in workout.get('phases', []):
                # Filter and standardize exercises
                valid_exercises = []
                for exercise in phase.get('exercises', []):
                    if is_valid_exercise(exercise):
                        standardized = standardize_exercise_name(exercise)
                        if standardized not in valid_exercises:  # Remove duplicates
                            valid_exercises.append(standardized)
                
                # Only keep phases with valid exercises
                if valid_exercises:
                    sanitized_phases.append({
                        'phase': phase['phase'],
                        'exercises': valid_exercises
                    })
            
            # Only keep workouts with valid phases
            if sanitized_phases:
                sanitized_workout = {
                    'date': workout['date'],
                    'filename': workout['filename'],
                    'phases': sanitized_phases
                }
                sanitized_workouts.append(sanitized_workout)
        
        if sanitized_workouts:
            sanitized[date] = sanitized_workouts
    
    return sanitized

def sanitize_categorized_exercises(categorized_exercises):
    """Sanitize the categorized exercises data"""
    sanitized = {}
    
    for category, exercises in categorized_exercises.items():
        valid_exercises = []
        
        for exercise in exercises:
            if is_valid_exercise(exercise.get('exercise')):
                standardized = standardize_exercise_name(exercise['exercise'])
                valid_exercises.append({
                    'exercise': standardized,
                    'phase': exercise.get('phase'),
                    'date': exercise.get('date'),
                    'filename': exercise.get('filename')
                })
        
        if valid_exercises:
            sanitized[category] = valid_exercises
    
    return sanitized

def main():
    """Main sanitization function"""
    print("Loading exercise data...")
    data = load_exercise_data()
    
    print("Sanitizing daily workouts...")
    data['daily_workouts'] = sanitize_daily_workouts(data.get('daily_workouts', {}))
    
    print("Sanitizing categorized exercises...")
    data['categorized_exercises'] = sanitize_categorized_exercises(data.get('categorized_exercises', {}))
    
    print("Saving sanitized data...")
    save_exercise_data(data)
    
    print("✅ Exercise data sanitization complete!")
    print(f"Daily workouts: {len(data['daily_workouts'])} dates")
    print(f"Categorized exercises: {len(data['categorized_exercises'])} categories")

if __name__ == "__main__":
    main()
