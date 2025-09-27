const fs = require('fs');

// Read the exercise data
const exerciseData = JSON.parse(fs.readFileSync('public/js/exercise-data.js', 'utf8').replace('window.EXERCISE_DATA = ', '').replace(/;$/, ''));

// Function to standardize Renegade Rows names
function standardizeRenegadeRows(exerciseName) {
    // Remove "Row" from the end and clean up the format
    let cleaned = exerciseName.replace(/Row\s*$/, '').trim();
    
    // Handle different formats
    if (cleaned.includes('Renegade Rows')) {
        // Extract the number if present
        const match = cleaned.match(/Renegade Rows\s*(\d+(?:\/\d+)?)?/);
        if (match) {
            const number = match[1] || '';
            return `Renegade Rows ${number}`.trim();
        }
    }
    
    return cleaned;
}

// Function to determine if an exercise should be Strength
function isStrengthExercise(exerciseName) {
    const strengthKeywords = [
        'renegade rows',
        'deadlift',
        'squat',
        'press',
        'row',
        'pull',
        'push',
        'curl',
        'extension',
        'fly',
        'raise',
        'lift'
    ];
    
    const lowerName = exerciseName.toLowerCase();
    return strengthKeywords.some(keyword => lowerName.includes(keyword));
}

let changes = 0;

// Process daily workouts
Object.keys(exerciseData.daily_workouts).forEach(date => {
    const dayWorkouts = exerciseData.daily_workouts[date];
    dayWorkouts.forEach(workout => {
        if (workout.phases) {
            workout.phases.forEach(phase => {
                if (phase.exercises) {
                    phase.exercises = phase.exercises.map(exercise => {
                        const original = exercise;
                        let updated = exercise;
                        
                        // Standardize Renegade Rows
                        if (exercise.toLowerCase().includes('renegade rows')) {
                            updated = standardizeRenegadeRows(exercise);
                            if (updated !== original) {
                                console.log(`Standardized: "${original}" → "${updated}"`);
                                changes++;
                            }
                        }
                        
                        return updated;
                    });
                }
            });
        }
    });
});

// Process categorized exercises
Object.keys(exerciseData.categorized_exercises).forEach(category => {
    const exercises = exerciseData.categorized_exercises[category];
    
    // Check if Renegade Rows is in Cardio and should be moved to Strength
    const renegadeRowsInCardio = exercises.filter(ex => 
        ex.toLowerCase().includes('renegade rows')
    );
    
    if (renegadeRowsInCardio.length > 0 && category === 'Cardio') {
        console.log(`Found Renegade Rows in Cardio: ${renegadeRowsInCardio.join(', ')}`);
        
        // Remove from Cardio
        exerciseData.categorized_exercises[category] = exercises.filter(ex => 
            !ex.toLowerCase().includes('renegade rows')
        );
        
        // Add to Strength
        if (!exerciseData.categorized_exercises['Strength']) {
            exerciseData.categorized_exercises['Strength'] = [];
        }
        
        renegadeRowsInCardio.forEach(exercise => {
            const standardized = standardizeRenegadeRows(exercise);
            if (!exerciseData.categorized_exercises['Strength'].includes(standardized)) {
                exerciseData.categorized_exercises['Strength'].push(standardized);
                console.log(`Moved to Strength: "${exercise}" → "${standardized}"`);
                changes++;
            }
        });
    }
});

// Update the exercise data file
const updatedContent = `window.EXERCISE_DATA = ${JSON.stringify(exerciseData, null, 2)};`;
fs.writeFileSync('public/js/exercise-data.js', updatedContent);

console.log(`\nTotal changes made: ${changes}`);
console.log('Exercise data updated successfully!');
