#!/usr/bin/env python3
"""
Fix the duplicate September 18th entries in the workout data
"""

import json
import sys

def fix_sept18_duplicate():
    # Load the data
    with open('exercise_data/workout_history_data_categorized.json', 'r') as f:
        data = json.load(f)
    
    # Find the duplicate entries for 2024-09-18
    daily_workouts = data.get('daily_workouts', {})
    
    if '2024-09-18' in daily_workouts:
        sept18_workouts = daily_workouts['2024-09-18']
        
        if len(sept18_workouts) > 1:
            print(f"Found {len(sept18_workouts)} entries for 2024-09-18")
            
            # Merge the phases from both entries
            all_phases = []
            for workout in sept18_workouts:
                if 'phases' in workout:
                    all_phases.extend(workout['phases'])
            
            # Create a single merged workout
            merged_workout = {
                'date': '2024-09-18',
                'filename': 'revision_99961_2024-09-18_15-36-01.txt',
                'phases': all_phases
            }
            
            # Replace the array with a single entry
            daily_workouts['2024-09-18'] = [merged_workout]
            
            print(f"Merged {len(sept18_workouts)} entries into 1 entry with {len(all_phases)} phases")
            
            # Save the fixed data
            with open('exercise_data/workout_history_data_categorized.json', 'w') as f:
                json.dump(data, f, indent=2)
            
            print("Fixed September 18th duplicate entries")
        else:
            print("No duplicate entries found for 2024-09-18")
    else:
        print("No entries found for 2024-09-18")

if __name__ == '__main__':
    fix_sept18_duplicate()
