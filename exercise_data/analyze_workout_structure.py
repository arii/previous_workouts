#!/usr/bin/env python3
"""
Analyze workout structure and extract categories from all revision files
"""

import os
import re
from collections import defaultdict, Counter
from pathlib import Path

def extract_workout_phases(content):
    """Extract workout phases and exercises from content"""
    lines = content.strip().split('\n')
    
    phases = []
    current_phase = None
    current_exercises = []
    
    for line in lines:
        line = line.strip()
        if not line or line.startswith('Previous workouts') or line.startswith('https://'):
            continue
            
        # Check if this is a phase header (contains timing info like "30/10x3", "Emom", "3x8", etc.)
        if re.match(r'^\d+/\d+x\d+', line) or \
           re.match(r'^\d+\s*x\s*\d+', line) or \
           re.match(r'^\d+\s*min', line) or \
           re.match(r'^\d+\s*sec', line) or \
           line.lower() in ['emom', 'tabata', 'finisher', 'stretch', 'rest']:
            
            # Save previous phase if exists
            if current_phase:
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
                current_exercises.append(line)
    
    # Add the last phase
    if current_phase:
        phases.append({
            'phase': current_phase,
            'exercises': current_exercises
        })
    
    return phases

def categorize_phase(phase_name, exercises):
    """Categorize a phase based on its name and exercises"""
    phase_lower = phase_name.lower()
    
    # Warmup indicators
    if any(word in phase_lower for word in ['warmup', 'ramp', 'activation']):
        return 'Warmup'
    
    # Cardio indicators
    if any(word in phase_lower for word in ['emom', 'tabata', 'amrap', 'cardio', 'burpee', 'jump', 'squat']):
        return 'Cardio'
    
    # Strength indicators
    if any(word in phase_lower for word in ['x', 'sets', 'reps', 'press', 'row', 'squat', 'deadlift', 'bench']):
        return 'Strength'
    
    # Recovery indicators
    if any(word in phase_lower for word in ['stretch', 'recovery', 'rest', 'cool down']):
        return 'Recovery'
    
    # Accessory indicators (everything else)
    return 'Accessory'

def analyze_all_workouts():
    """Analyze all workout files"""
    revisions_dir = Path("revisions")
    
    if not revisions_dir.exists():
        print("❌ Revisions directory not found!")
        return
    
    all_phases = []
    all_exercises = []
    phase_categories = defaultdict(list)
    exercise_categories = defaultdict(list)
    date_ranges = []
    
    print("🔍 Analyzing workout structure...")
    
    for filepath in revisions_dir.glob("*.txt"):
        # Extract date from filename
        match = re.search(r'revision_\d+_(\d{4}-\d{2}-\d{2})', filepath.name)
        if match:
            date_ranges.append(match.group(1))
        
        # Read and analyze content
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        phases = extract_workout_phases(content)
        
        for phase_data in phases:
            phase_name = phase_data['phase']
            exercises = phase_data['exercises']
            
            all_phases.append(phase_name)
            all_exercises.extend(exercises)
            
            # Categorize the phase
            category = categorize_phase(phase_name, exercises)
            phase_categories[category].append(phase_name)
            exercise_categories[category].extend(exercises)
    
    # Analysis results
    print(f"\n📊 Analysis Results:")
    print(f"  📁 Total files analyzed: {len(list(revisions_dir.glob('*.txt')))}")
    print(f"  📅 Date range: {min(date_ranges)} to {max(date_ranges)}")
    print(f"  🏃 Total phases: {len(all_phases)}")
    print(f"  💪 Total exercises: {len(all_exercises)}")
    
    print(f"\n🏷️  Phase Categories:")
    for category, phases in phase_categories.items():
        print(f"  {category}: {len(phases)} phases")
        # Show most common phase types in this category
        phase_counts = Counter(phases)
        for phase, count in phase_counts.most_common(3):
            print(f"    - {phase} ({count} times)")
    
    print(f"\n💪 Exercise Categories:")
    for category, exercises in exercise_categories.items():
        print(f"  {category}: {len(exercises)} exercises")
        # Show most common exercises in this category
        exercise_counts = Counter(exercises)
        for exercise, count in exercise_counts.most_common(5):
            print(f"    - {exercise} ({count} times)")
    
    print(f"\n📈 Most Common Phase Types:")
    phase_counts = Counter(all_phases)
    for phase, count in phase_counts.most_common(10):
        print(f"  {phase}: {count} times")
    
    print(f"\n💪 Most Common Exercises:")
    exercise_counts = Counter(all_exercises)
    for exercise, count in exercise_counts.most_common(15):
        print(f"  {exercise}: {count} times")
    
    # Save detailed analysis
    analysis_data = {
        'total_files': len(list(revisions_dir.glob('*.txt'))),
        'date_range': {'start': min(date_ranges), 'end': max(date_ranges)},
        'total_phases': len(all_phases),
        'total_exercises': len(all_exercises),
        'phase_categories': dict(phase_categories),
        'exercise_categories': dict(exercise_categories),
        'most_common_phases': dict(phase_counts.most_common(20)),
        'most_common_exercises': dict(exercise_counts.most_common(30))
    }
    
    import json
    with open('workout_analysis.json', 'w') as f:
        json.dump(analysis_data, f, indent=2)
    
    print(f"\n💾 Detailed analysis saved to: workout_analysis.json")

if __name__ == "__main__":
    analyze_all_workouts()
