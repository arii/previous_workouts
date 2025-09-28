#!/usr/bin/env python3
"""
Verify that every revision file is properly represented in workout_history_data.json
"""

import json
import os
import re
from pathlib import Path

def parse_workout_file_simple(file_path):
    """Parse a workout file to extract basic info"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return None, f"Error reading file: {e}"
    
    # Extract date from filename
    filename = os.path.basename(file_path)
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', filename)
    if not date_match:
        return None, "No date found in filename"
    
    date = date_match.group(1)
    
    # Count non-empty lines (excluding URLs and headers)
    lines = [line.strip() for line in content.split('\n') if line.strip()]
    filtered_lines = [line for line in lines if not line.startswith('http') and not line.startswith('Previous workouts')]
    
    return {
        'filename': filename,
        'date': date,
        'total_lines': len(filtered_lines),
        'content_preview': filtered_lines[:10]  # First 10 lines for verification
    }, None

def verify_data_completeness():
    """Verify all revision files are represented in the JSON data"""
    
    # Load the JSON data
    try:
        with open('workout_history_data_categorized.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error loading JSON data: {e}")
        return
    
    # Get all revision files
    revisions_dir = Path('revisions')
    if not revisions_dir.exists():
        print("Revisions directory not found")
        return
    
    revision_files = list(revisions_dir.glob('*.txt'))
    print(f"Found {len(revision_files)} revision files")
    
    # Parse all revision files
    revision_data = {}
    for file_path in sorted(revision_files):
        file_info, error = parse_workout_file_simple(file_path)
        if error:
            print(f"❌ {file_path.name}: {error}")
            continue
        
        revision_data[file_info['filename']] = file_info
    
    print(f"Successfully parsed {len(revision_data)} revision files")
    
    # Check daily_workouts
    daily_workouts = data.get('daily_workouts', {})
    print(f"\nChecking daily_workouts section...")
    
    missing_files = []
    incomplete_files = []
    
    for filename, file_info in revision_data.items():
        date = file_info['date']
        
        # Check if this date exists in daily_workouts
        if date not in daily_workouts:
            missing_files.append((filename, f"Date {date} not found in daily_workouts"))
            continue
        
        # Check if this specific file exists in daily_workouts
        found_file = False
        for workout in daily_workouts[date]:
            if workout.get('filename') == filename:
                found_file = True
                
                # Check if phases are present
                phases = workout.get('phases', [])
                if not phases:
                    incomplete_files.append((filename, "No phases found in JSON data"))
                else:
                    # Count total exercises
                    total_exercises = sum(len(phase.get('exercises', [])) for phase in phases)
                    if total_exercises == 0:
                        incomplete_files.append((filename, "No exercises found in any phase"))
                    else:
                        print(f"✅ {filename}: {len(phases)} phases, {total_exercises} exercises")
                break
        
        if not found_file:
            missing_files.append((filename, f"File not found in daily_workouts for date {date}"))
    
    # Check all_workouts section
    print(f"\nChecking all_workouts section...")
    all_workouts = data.get('all_workouts', [])
    all_workout_filenames = {workout.get('filename') for workout in all_workouts}
    
    missing_in_all_workouts = []
    for filename in revision_data.keys():
        if filename not in all_workout_filenames:
            missing_in_all_workouts.append(filename)
    
    # Summary
    print(f"\n" + "="*60)
    print(f"VERIFICATION SUMMARY")
    print(f"="*60)
    print(f"Total revision files: {len(revision_files)}")
    print(f"Successfully parsed: {len(revision_data)}")
    print(f"Missing from daily_workouts: {len(missing_files)}")
    print(f"Missing from all_workouts: {len(missing_in_all_workouts)}")
    print(f"Incomplete data: {len(incomplete_files)}")
    
    if missing_files:
        print(f"\n❌ MISSING FILES FROM DAILY_WORKOUTS:")
        for filename, reason in missing_files:
            print(f"  - {filename}: {reason}")
    
    if missing_in_all_workouts:
        print(f"\n❌ MISSING FILES FROM ALL_WORKOUTS:")
        for filename in missing_in_all_workouts:
            print(f"  - {filename}")
    
    if incomplete_files:
        print(f"\n⚠️  INCOMPLETE DATA:")
        for filename, reason in incomplete_files:
            print(f"  - {filename}: {reason}")
    
    # Show some examples of what's in the data
    print(f"\n📊 DATA EXAMPLES:")
    if daily_workouts:
        # Show a few recent dates
        recent_dates = sorted(daily_workouts.keys(), reverse=True)[:3]
        for date in recent_dates:
            workouts = daily_workouts[date]
            print(f"\nDate {date}:")
            for i, workout in enumerate(workouts):
                phases = workout.get('phases', [])
                total_exercises = sum(len(phase.get('exercises', [])) for phase in phases)
                print(f"  Workout {i+1}: {len(phases)} phases, {total_exercises} exercises")
                for phase in phases:
                    exercises = phase.get('exercises', [])
                    print(f"    - {phase.get('phase', 'Unknown')}: {len(exercises)} exercises")
                    if exercises:
                        print(f"      Examples: {', '.join(exercises[:3])}{'...' if len(exercises) > 3 else ''}")
    
    # Check for specific problematic files
    print(f"\n🔍 CHECKING SPECIFIC FILES:")
    problematic_files = [
        'revision_106035_2025-03-31_14-47-30.txt',
        'revision_104139_2025-01-03_15-56-42.txt',
        'revision_106564_2025-04-11_14-39-29.txt'
    ]
    
    for filename in problematic_files:
        if filename in revision_data:
            file_info = revision_data[filename]
            print(f"\n{filename}:")
            print(f"  Date: {file_info['date']}")
            print(f"  Total lines: {file_info['total_lines']}")
            print(f"  Content preview: {file_info['content_preview'][:5]}")
            
            # Check if it's in the data
            date = file_info['date']
            if date in daily_workouts:
                found = False
                for workout in daily_workouts[date]:
                    if workout.get('filename') == filename:
                        found = True
                        phases = workout.get('phases', [])
                        total_exercises = sum(len(phase.get('exercises', [])) for phase in phases)
                        print(f"  ✅ Found in JSON: {len(phases)} phases, {total_exercises} exercises")
                        break
                if not found:
                    print(f"  ❌ Not found in daily_workouts for date {date}")
            else:
                print(f"  ❌ Date {date} not found in daily_workouts")

if __name__ == '__main__':
    verify_data_completeness()
