// Static version of the workout generator - no API calls needed

// DOM elements
const generateWorkoutBtn = document.getElementById('generateWorkoutBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const generatedWorkout = document.getElementById('generatedWorkout');
const workoutInfo = document.getElementById('workoutInfo');
const workoutStructure = document.getElementById('workoutStructure');
const loadingOverlay = document.getElementById('loadingOverlay');
const successToast = document.getElementById('successToast');
const copyTableBtn = document.getElementById('copyTableBtn');
const copyTable = document.getElementById('copyTable');

// Global variable to store current workout
let currentWorkout = null;

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    generateWorkoutBtn.addEventListener('click', generateWorkout);
    regenerateBtn.addEventListener('click', generateWorkout);
    copyTableBtn.addEventListener('click', copyTableToClipboard);
}

// Workout Generation
function generateWorkout() {
    showLoading();
    
    try {
        const intensity = document.querySelector('input[name="intensity"]:checked').value;
        const workoutType = document.querySelector('input[name="workoutType"]:checked').value;
        
        // Generate workout using static data
        const workout = generateWorkoutStatic(intensity, workoutType);
        
        // Display the workout
        displayGeneratedWorkout(workout);
        
        // Generate and display the copy-friendly table automatically
        generateAndDisplayTable(workout);
        
        // Update workout info
        updateWorkoutInfo(workout, intensity, workoutType);
        
        // Show the generated workout section
        generatedWorkout.classList.remove('hidden');
        generatedWorkout.scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('Error generating workout:', error);
        showError('Failed to generate workout. Please try again.');
    } finally {
        hideLoading();
    }
}

// Static workout generation (no API calls)
function generateWorkoutStatic(intensity, workoutType) {
    const exerciseData = window.EXERCISE_DATA;
    const categories = {};
    
    // Extract unique exercises from each category
    Object.keys(exerciseData.categorized_exercises).forEach(category => {
        const exercises = exerciseData.categorized_exercises[category];
        const uniqueExercises = [...new Set(exercises.map(item => item.exercise))];
        categories[category] = uniqueExercises;
    });
    
    let phases = [];
    
    // Handle "any" option by randomly selecting a workout type
    let actualWorkoutType = workoutType;
    if (workoutType === 'any') {
        const workoutTypes = ['mixed', 'emom', 'spartan'];
        actualWorkoutType = workoutTypes[Math.floor(Math.random() * workoutTypes.length)];
    }
    
    switch (actualWorkoutType) {
        case 'mixed':
            phases = generateMixedWorkout(categories, intensity);
            break;
        case 'emom':
            phases = generateEMOMWorkout(categories, intensity);
            break;
        case 'spartan':
            phases = generateSpartanWorkout(categories, intensity);
            break;
        default:
            phases = generateMixedWorkout(categories, intensity);
    }
    
    const totalExercises = phases.reduce((total, phase) => total + phase.exercises.length, 0);
    
    return {
        type: actualWorkoutType, // Use the actual workout type that was generated
        intensity: intensity,
        duration: '40 minutes',
        totalExercises: totalExercises,
        phases: phases,
        generatedAt: new Date().toISOString()
    };
}

// Workout generation functions (copied from server logic)
function generateMixedWorkout(categories, intensity) {
    const distribution = {
        'Warmup': 2,
        'Cardio': 3,
        'Strength': 3,
        'Finisher': 2
    };
    
    const phases = [];
    
    Object.entries(distribution).forEach(([phaseName, count]) => {
        if (count > 0) {
            let phaseExercises = categories[phaseName] || [];
            
            if (phaseName === 'Warmup') {
                phaseExercises = getProperWarmupExercises();
            } else {
                phaseExercises = filterAndCleanExercises(phaseExercises);
            }
            
            const selectedExercises = getRandomExercises(phaseExercises, count);
            
            phases.push({
                name: phaseName,
                exercises: selectedExercises.map(exercise => ({
                    name: standardizeExerciseName(exercise),
                    sets: getSetsForPhase(phaseName, intensity),
                    reps: getRepsForPhase(phaseName, intensity),
                    duration: getDurationForPhase(phaseName, intensity),
                    rest: getRestForPhase(phaseName, intensity)
                })),
                timing: getTimingForPhase(phaseName)
            });
        }
    });
    
    return phases;
}

function generateEMOMWorkout(categories, intensity) {
    const phases = [];
    
    // Warmup
    const warmupExercises = getRandomExercises(getProperWarmupExercises(), 2);
    phases.push({
        name: 'Warmup',
        exercises: warmupExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: '4',
            reps: '10-15',
            duration: null,
            rest: '30 sec'
        })),
        timing: '2-3 rounds'
    });
    
    // Cardio
    const cardioExercises = getRandomExercises(categories.Cardio || [], 3);
    phases.push({
        name: 'Cardio',
        exercises: cardioExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: getSetsForPhase('Cardio', intensity),
            reps: getRepsForPhase('Cardio', intensity),
            duration: getDurationForPhase('Cardio', intensity),
            rest: getRestForPhase('Cardio', intensity)
        })),
        timing: getTimingForPhase('Cardio')
    });
    
    // EMOM Main
    const mainExercises = getRandomExercises(filterAndCleanExercises([
        ...(categories.Strength || [])
    ]), 4);
    
    phases.push({
        name: 'EMOM',
        exercises: mainExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: '3',
            reps: getRepsForPhase('EMOM', intensity),
            duration: null,
            rest: 'Remaining minute'
        })),
        timing: '3 rounds, 1 min per exercise'
    });
    
    // Finisher
    const finisherExercises = getRandomExercises(categories.Finisher || [], 2);
    phases.push({
        name: 'Finisher',
        exercises: finisherExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: getSetsForPhase('Finisher', intensity),
            reps: getRepsForPhase('Finisher', intensity),
            duration: getDurationForPhase('Finisher', intensity),
            rest: getRestForPhase('Finisher', intensity)
        })),
        timing: getTimingForPhase('Finisher')
    });
    
    return phases;
}

function generateSpartanWorkout(categories, intensity) {
    const phases = [];
    
    // Warmup
    const warmupExercises = getRandomExercises(getProperWarmupExercises(), 2);
    phases.push({
        name: 'Warmup',
        exercises: warmupExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: '4',
            reps: '10-15',
            duration: null,
            rest: '30 sec'
        })),
        timing: '2-3 rounds'
    });
    
    // Cardio
    const cardioExercises = getRandomExercises(categories.Cardio || [], 3);
    phases.push({
        name: 'Cardio',
        exercises: cardioExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: getSetsForPhase('Cardio', intensity),
            reps: getRepsForPhase('Cardio', intensity),
            duration: getDurationForPhase('Cardio', intensity),
            rest: getRestForPhase('Cardio', intensity)
        })),
        timing: getTimingForPhase('Cardio')
    });
    
    // Spartan Circuit - Special format: 5 sets of 25, 20, 18, 15, 12 reps
    const circuitExercises = getRandomExercises(filterAndCleanExercises([
        ...(categories.Strength || [])
    ]), 4); // Reduced to 4 exercises for Spartan format
    
    phases.push({
        name: 'Spartan Circuit',
        exercises: circuitExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: '5',
            reps: '25, 20, 18, 15, 12',
            duration: null,
            rest: '60 sec'
        })),
        timing: '5 sets: 25, 20, 18, 15, 12 reps'
    });
    
    // Finisher
    const finisherExercises = getRandomExercises(categories.Finisher || [], 2);
    phases.push({
        name: 'Finisher',
        exercises: finisherExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: getSetsForPhase('Finisher', intensity),
            reps: getRepsForPhase('Finisher', intensity),
            duration: getDurationForPhase('Finisher', intensity),
            rest: getRestForPhase('Finisher', intensity)
        })),
        timing: getTimingForPhase('Finisher')
    });
    
    return phases;
}

function generateTabataWorkout(categories, intensity) {
    const phases = [];
    
    // Warmup
    const warmupExercises = getRandomExercises(getProperWarmupExercises(), 2);
    phases.push({
        name: 'Warmup',
        exercises: warmupExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: '4',
            reps: '10-15',
            duration: null,
            rest: '30 sec'
        })),
        timing: '2-3 rounds'
    });
    
    // Tabata
    const tabataExercises = getRandomExercises(filterAndCleanExercises([
        ...(categories.Cardio || []),
        ...(categories.Strength || [])
    ]), 4);
    
    phases.push({
        name: 'Tabata',
        exercises: tabataExercises.map(exercise => ({
            name: standardizeExerciseName(exercise),
            sets: '8',
            reps: 'Max effort',
            duration: '20 sec',
            rest: '10 sec'
        })),
        timing: '8 rounds, 20 sec work, 10 sec rest'
    });
    
    return phases;
}

// Helper functions (copied from server logic)
function getProperWarmupExercises() {
    return [
        'Arm Circles', 'Leg Swings', 'Hip Circles', 'Shoulder Rolls', 'Neck Rolls',
        'Ankle Circles', 'Wrist Circles', 'Bodyweight Squats', 'Lunges', 'Push-ups',
        'Jumping Jacks', 'High Knees', 'Butt Kicks', 'Side Steps', 'Light Jogging',
        'Dynamic Stretching', 'Cat-Cow Stretch', 'World\'s Greatest Stretch'
    ];
}

function filterAndCleanExercises(exercises) {
    return exercises.filter(exercise => isValidExercise(exercise));
}

function isValidExercise(exerciseName) {
    if (!exerciseName || typeof exerciseName !== 'string') return false;
    
    const invalidExercises = [
        '10 Down', '10 Reps', 'Reps', 'Seconds', 'Minutes', 'Hold', 'Rest', 'Break', 'Pause', 'Stop', 'Start',
        'Begin', 'End', 'Finish', 'Complete', 'Done', 'Next', 'Previous', 'Continue', 'Skip', 'OR', 'R', 'L',
        'Up', 'Down', 'Left', 'Right', 'Tap', 'Taps', 'Glide', 'Bridge', 'Plank', 'Deadlift', 'Squat', 'Lunge',
        'Push', 'Pull', 'Press', 'Row', 'Curl', 'Raise', 'Lift', 'Squeeze', 'Clench', 'Crunch', 'Twist', 'Rotate',
        'Flex', 'Extend', 'Abduct', 'Adduct', 'Circumduct', 'Pronate', 'Supinate', 'Invert', 'Evert', 'Dorsiflex', 'Plantarflex'
    ];
    
    if (exerciseName.length < 3) return false;
    if (/^\d+$/.test(exerciseName)) return false;
    
    // Check if it's in the invalid list
    if (invalidExercises.includes(exerciseName)) return false;
    
    // Check for problematic patterns
    if (/^\d+-\d+$/.test(exerciseName)) return false; // "2-12"
    if (/^\d+\s+Up$/.test(exerciseName)) return false; // "5 Up"
    if (/^\d+\s+Down$/.test(exerciseName)) return false; // "10 Down"
    if (/^[A-Z]$/.test(exerciseName)) return false; // Single letters like "R", "L"
    if (/^OR$/.test(exerciseName)) return false; // "OR"
    
    // Allow legitimate exercise patterns
    if (/^[A-Z],[A-Z],[A-Z]$/.test(exerciseName)) return true; // "Y,T,W" - shoulder exercise
    if (/^[A-Z]-[A-Z]-[A-Z]$/.test(exerciseName)) return true; // "Y-T-W" - shoulder exercise
    
    // Check if it's just a number followed by a word (but allow longer ones)
    if (/^\d+\s+\w+$/.test(exerciseName) && exerciseName.length < 10) return false;
    
    return true;
}

function standardizeExerciseName(exerciseName) {
    if (!exerciseName) return '';
    
    let standardized = exerciseName;
    
    const abbreviations = {
        'Ch': 'Chest',
        'Sh': 'Shoulder',
        'Sh.': 'Shoulder',
        'Db': 'Dumbbell',
        'Dd': 'Dumbbell',
        'Kb': 'Kettlebell',
        'Bw': 'Bodyweight',
        'Bw.': 'Bodyweight',
        'Reps': 'Repetitions',
        'Sec': 'Seconds',
        'Min': 'Minutes',
        'L': 'Left',
        'R': 'Right',
        'Alt': 'Alternating',
        'Rev': 'Reverse',
        'Fwd': 'Forward',
        'F.': 'Forward',
        'Bwd': 'Backward',
        'Ext': 'Extension',
        'Flex': 'Flexion',
        'Ab': 'Abdominal',
        'Glut': 'Glute',
        'Quad': 'Quadricep',
        'Ham': 'Hamstring',
        'Calv': 'Calf',
        'Trap': 'Trapezius',
        'Lat': 'Latissimus',
        'Del': 'Deltoid',
        'Pec': 'Pectoral',
        'Bic': 'Bicep',
        'Tric': 'Tricep'
    };
    
    Object.entries(abbreviations).forEach(([abbrev, full]) => {
        const regex = new RegExp(`\\b${abbrev}\\b`, 'gi');
        standardized = standardized.replace(regex, full);
    });
    
    standardized = standardized
        .replace(/\s+/g, ' ')
        .replace(/\s*,\s*/g, ', ')
        .replace(/\s*-\s*/g, ' - ')
        .trim();
    
    return standardized;
}

function getRandomExercises(exercises, count) {
    const shuffled = [...exercises].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getSetsForPhase(phase, intensity) {
    const setsMap = {
        'Warmup': { lower: '3', normal: '4', higher: '4' },
        'Cardio': { lower: '2', normal: '3', higher: '4' },
        'Strength': { lower: '3', normal: '4', higher: '5' },
        'Finisher': { lower: '2', normal: '3', higher: '4' },
        'EMOM': { lower: '3', normal: '4', higher: '5' },
        'Spartan': { lower: '2', normal: '3', higher: '4' },
        'Tabata': { lower: '6', normal: '8', higher: '10' }
    };
    
    return setsMap[phase]?.[intensity] || '3';
}

function getRepsForPhase(phase, intensity) {
    const repsMap = {
        'Warmup': { lower: '8-12', normal: '10-15', higher: '12-18' },
        'Cardio': { lower: '12-15', normal: '15-20', higher: '20-25' },
        'Strength': { lower: '6-10', normal: '8-12', higher: '10-15' },
        'Finisher': { lower: '10-12', normal: '12-15', higher: '15-20' },
        'EMOM': { lower: '8-12', normal: '12-15', higher: '15-20' },
        'Spartan': { lower: '10-15', normal: '15-20', higher: '20-25' },
        'Tabata': { lower: 'Max effort', normal: 'Max effort', higher: 'Max effort' }
    };
    
    return repsMap[phase]?.[intensity] || '10-15';
}

function getDurationForPhase(phase, intensity) {
    const durationMap = {
        'Warmup': { lower: null, normal: null, higher: null },
        'Cardio': { lower: '30 sec', normal: '40 sec', higher: '50 sec' },
        'Strength': { lower: null, normal: null, higher: null },
        'Finisher': { lower: null, normal: null, higher: null },
        'EMOM': { lower: null, normal: null, higher: null },
        'Spartan': { lower: '30 sec', normal: '40 sec', higher: '50 sec' },
        'Tabata': { lower: '20 sec', normal: '20 sec', higher: '20 sec' }
    };
    
    return durationMap[phase]?.[intensity] || null;
}

function getRestForPhase(phase, intensity) {
    const restMap = {
        'Warmup': { lower: '30 sec', normal: '30 sec', higher: '30 sec' },
        'Cardio': { lower: '30 sec', normal: '30 sec', higher: '30 sec' },
        'Strength': { lower: '45 sec', normal: '60 sec', higher: '75 sec' },
        'Finisher': { lower: '30 sec', normal: '45 sec', higher: '60 sec' },
        'EMOM': { lower: 'Remaining minute', normal: 'Remaining minute', higher: 'Remaining minute' },
        'Spartan': { lower: '20 sec', normal: '20 sec', higher: '20 sec' },
        'Tabata': { lower: '10 sec', normal: '10 sec', higher: '10 sec' }
    };
    
    return restMap[phase]?.[intensity] || '30 sec';
}

function getTimingForPhase(phase) {
    const timingMap = {
        'Warmup': '2-3 rounds',
        'Cardio': '3-4 rounds, 30 sec rest',
        'Strength': '3-4 rounds',
        'Finisher': '2-3 rounds, 45 sec rest',
        'EMOM': '3 rounds, 1 min per exercise',
        'Spartan': '5 sets: 25, 20, 18, 15, 12 reps',
        'Tabata': '8 rounds, 20 sec work, 10 sec rest'
    };
    
    return timingMap[phase] || '3 rounds, 30 sec rest';
}

// Display functions
function displayGeneratedWorkout(workout) {
    currentWorkout = workout;
    
    workoutStructure.innerHTML = workout.phases.map(phase => `
        <div class="mb-4">
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-t-lg">
                <h3 class="text-sm font-semibold">${phase.name}</h3>
                <p class="text-blue-100 text-xs">${phase.timing}</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-b-lg p-3">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    ${phase.exercises.map(exercise => `
                        <div class="bg-gray-50 rounded-lg p-3 hover:shadow-md transition-shadow">
                            <h4 class="font-semibold text-gray-800 mb-1 text-sm">${exercise.name}</h4>
                            <div class="space-y-1 text-xs text-gray-600">
                                <div><i class="fas fa-layer-group mr-1"></i>Sets: ${exercise.sets}</div>
                                <div><i class="fas fa-repeat mr-1"></i>Reps: ${exercise.reps}</div>
                                ${exercise.duration ? `<div><i class="fas fa-clock mr-1"></i>Duration: ${exercise.duration}</div>` : ''}
                                <div><i class="fas fa-pause mr-1"></i>Rest: ${exercise.rest}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function updateWorkoutInfo(workout, intensity, workoutType) {
    document.getElementById('workoutType').textContent = workoutType.charAt(0).toUpperCase() + workoutType.slice(1);
    document.getElementById('workoutIntensity').textContent = intensity.charAt(0).toUpperCase() + intensity.slice(1);
    document.getElementById('totalExercises').textContent = workout.totalExercises;
}

// Generate and display table automatically
function generateAndDisplayTable(workout) {
    const table = generateCopyFriendlyTable(workout);
    copyTable.innerHTML = table;
    
    // Remove existing table section if it exists
    const existingTableSection = document.querySelector('.copy-table-section');
    if (existingTableSection) {
        existingTableSection.remove();
    }
    
    // Show the table section
    const tableSection = document.createElement('div');
    tableSection.className = 'copy-table-section mb-4 bg-white rounded-lg shadow-sm p-4';
    tableSection.innerHTML = `
        <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-semibold text-gray-800">
                <i class="fas fa-table mr-2 text-green-600"></i>
                Copy-Friendly Table
            </h3>
            <div class="flex gap-2">
                <button onclick="copyTableToClipboard()" class="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg transition-colors text-sm">
                    <i class="fas fa-copy mr-1"></i>
                    Copy Table
                </button>
                <button onclick="copyServerFormat()" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors text-sm">
                    <i class="fas fa-server mr-1"></i>
                    Server Format
                </button>
            </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 overflow-x-auto">
            ${table}
        </div>
        <p class="text-xs text-gray-600 mt-2">
            <i class="fas fa-info-circle mr-1"></i>
            Click "Copy" to copy this table and paste it into Google Docs.
        </p>
    `;
    
    // Insert the table section right after the workout info (at the top)
    const workoutInfo = document.getElementById('workoutInfo');
    workoutInfo.parentNode.insertBefore(tableSection, workoutInfo.nextSibling);
}

// Copy table functionality
function copyTableToClipboard() {
    if (!currentWorkout) return;
    
    const table = generateCopyFriendlyTable(currentWorkout);
    copyTable.innerHTML = table;
    
    // Copy to clipboard
    if (navigator.clipboard && window.ClipboardItem) {
        const clipboardItem = new ClipboardItem({
            'text/html': new Blob([table], { type: 'text/html' }),
            'text/plain': new Blob([table.replace(/<[^>]*>/g, '')], { type: 'text/plain' })
        });
        
        navigator.clipboard.write([clipboardItem]).then(() => {
            showSuccessToast();
        }).catch(() => {
            // Fallback to text only
            navigator.clipboard.writeText(table.replace(/<[^>]*>/g, '')).then(() => {
                showSuccessToast();
            });
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = table.replace(/<[^>]*>/g, '');
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showSuccessToast();
    }
}

function generateCopyFriendlyTable(workout) {
    const phases = workout.phases;
    
    // Create table headers (timing protocols)
    const headers = phases.map(phase => phase.timing || phase.name).join('</th><th>');
    
    // Create table rows (exercises)
    const maxExercises = Math.max(...phases.map(phase => phase.exercises.length));
    let rows = '';
    
    for (let i = 0; i < maxExercises; i++) {
        const cells = phases.map(phase => {
            const exercise = phase.exercises[i];
            return exercise ? exercise.name : '';
        }).join('</td><td>');
        
        rows += `<tr><td>${cells}</td></tr>`;
    }
    
    return `
        <table border="1" style="border-collapse: collapse; width: 100%; font-family: monospace; font-size: 12px;">
            <thead>
                <tr>
                    <th style="padding: 4px; background-color: #f5f5f5; text-align: center;">${headers}</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

// Server-friendly export functions
function generateServerFriendlyFormat(workout) {
    const phases = workout.phases;
    
    // Create clean text format for server integration
    let output = '';
    
    phases.forEach(phase => {
        output += `${phase.timing || phase.name}:\n`;
        phase.exercises.forEach(exercise => {
            output += `  - ${exercise.name}\n`;
        });
        output += '\n';
    });
    
    return output.trim();
}

function copyServerFormat() {
    if (!currentWorkout) return;
    
    const serverFormat = generateServerFriendlyFormat(currentWorkout);
    
    navigator.clipboard.writeText(serverFormat).then(() => {
        showSuccessToast('Server format copied!');
    }).catch(() => {
        showError('Failed to copy server format');
    });
}

// Utility functions
function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

function showSuccessToast() {
    successToast.classList.remove('hidden');
    setTimeout(() => {
        successToast.classList.add('hidden');
    }, 3000);
}

function showError(message) {
    // Create error toast
    const errorToast = document.createElement('div');
    errorToast.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorToast.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-exclamation-triangle mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(errorToast);
    
    setTimeout(() => {
        errorToast.remove();
    }, 5000);
}
