#!/usr/bin/env python3
"""
Fix the duplicate September 18th entries in the all_workouts section
"""

import json
import sys

def fix_sept18_all_workouts():
    # Load the data
    with open('exercise_data/workout_history_data_categorized.json', 'r') as f:
        data = json.load(f)
    
    # Find the duplicate entries for 2024-09-18 in all_workouts
    all_workouts = data.get('all_workouts', [])
    
    sept18_entries = []
    other_entries = []
    
    for workout in all_workouts:
        if workout.get('date') == '2024-09-18':
            sept18_entries.append(workout)
        else:
            other_entries.append(workout)
    
    if len(sept18_entries) > 1:
        print(f"Found {len(sept18_entries)} entries for 2024-09-18 in all_workouts")
        
        # Merge the phases from all entries
        all_phases = []
        for workout in sept18_entries:
            if 'phases' in workout:
                all_phases.extend(workout['phases'])
        
        # Create a single merged workout
        merged_workout = {
            'date': '2024-09-18',
            'filename': 'revision_99961_2024-09-18_15-36-01.txt',
            'phases': all_phases
        }
        
        # Rebuild the all_workouts array with the merged entry
        new_all_workouts = other_entries + [merged_workout]
        
        # Sort by date
        new_all_workouts.sort(key=lambda x: x['date'], reverse=True)
        
        data['all_workouts'] = new_all_workouts
        
        print(f"Merged {len(sept18_entries)} entries into 1 entry with {len(all_phases)} phases")
        
        # Save the fixed data
        with open('exercise_data/workout_history_data_categorized.json', 'w') as f:
            json.dump(data, f, indent=2)
        
        print("Fixed September 18th duplicate entries in all_workouts")
    else:
        print("No duplicate entries found for 2024-09-18 in all_workouts")

if __name__ == '__main__':
    fix_sept18_all_workouts()
