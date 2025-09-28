// All Workouts Page JavaScript
let allWorkouts = [];
let filteredWorkouts = [];

document.addEventListener('DOMContentLoaded', function() {
    loadAllWorkouts();
    setupEventListeners();
});

function loadAllWorkouts() {
    try {
        const exerciseData = window.EXERCISE_DATA;
        if (!exerciseData) {
            console.error('EXERCISE_DATA not found');
            showError('Failed to load workout data');
            return;
        }

        allWorkouts = generateAllWorkoutsFromData(exerciseData);
        filteredWorkouts = [...allWorkouts];
        
        displayWorkouts(filteredWorkouts);
        hideLoading();
        
        console.log(`Loaded ${allWorkouts.length} workouts`);
    } catch (error) {
        console.error('Error loading workouts:', error);
        showError('Failed to load workouts');
        hideLoading();
    }
}

function generateAllWorkoutsFromData(exerciseData) {
    const dailyWorkouts = exerciseData.daily_workouts || {};
    const workouts = [];
    
    Object.entries(dailyWorkouts).forEach(([date, dayWorkouts]) => {
        if (!Array.isArray(dayWorkouts)) {
            console.warn('Workouts is not an array for date:', date, dayWorkouts);
            return;
        }
        
        dayWorkouts.forEach((workout, index) => {
            try {
                if (!workout.phases || !Array.isArray(workout.phases)) {
                    console.warn('Workout has no phases or phases is not an array:', workout);
                    return;
                }
                
                // Clean up exercise names and filter out invalid exercises
                const cleanedPhases = workout.phases.map(phase => {
                    if (!phase.exercises || !Array.isArray(phase.exercises)) {
                        console.warn('Phase has no exercises or exercises is not an array:', phase);
                        return {
                            ...phase,
                            exercises: []
                        };
                    }
                    
                    return {
                        ...phase,
                        exercises: phase.exercises
                            .filter(exercise => isValidExercise(exercise))
                            .map(exercise => standardizeExerciseName(exercise))
                    };
                }).filter(phase => phase.exercises.length > 0);
                
                if (cleanedPhases.length === 0) {
                    console.warn('No valid phases found for workout:', workout);
                    return;
                }
                
                workouts.push({
                    id: `${date}-${index}`,
                    date: date,
                    filename: workout.filename,
                    type: determineWorkoutType(cleanedPhases),
                    intensity: determineWorkoutIntensity(cleanedPhases),
                    phases: cleanedPhases.map(phase => ({
                        name: phase.phase || 'Unknown Phase',
                        phase: phase.phase || 'Unknown Phase',
                        timing: phase.phase || 'Unknown Phase',
                        exercises: phase.exercises || []
                    }))
                });
            } catch (error) {
                console.error('Error processing workout:', error, workout);
            }
        });
    });
    
    return workouts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function determineWorkoutType(phases) {
    const phaseNames = phases.map(p => p.phase || '').join(' ').toLowerCase();
    
    if (phaseNames.includes('emom')) return 'EMOM';
    if (phaseNames.includes('spartan')) return 'Spartan';
    if (phaseNames.includes('tabata')) return 'Tabata';
    if (phaseNames.includes('3 x') || phaseNames.includes('3x')) return 'Mixed';
    
    return 'Mixed';
}

function determineWorkoutIntensity(phases) {
    const totalExercises = phases.reduce((sum, phase) => sum + (phase.exercises?.length || 0), 0);
    const totalPhases = phases.length;
    
    // Simple heuristic based on exercise count and phases
    if (totalExercises > 15 || totalPhases > 3) return 'higher';
    if (totalExercises < 8 || totalPhases < 2) return 'lower';
    
    return 'normal';
}

function displayWorkouts(workouts) {
    const container = document.getElementById('workoutsContainer');
    const loadingState = document.getElementById('loadingState');
    const noResults = document.getElementById('noResults');
    
    if (workouts.length === 0) {
        container.innerHTML = '';
        loadingState.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    loadingState.classList.add('hidden');
    
    const workoutsHTML = workouts.map(workout => createWorkoutCard(workout)).join('');
    container.innerHTML = workoutsHTML;
}

function createWorkoutCard(workout) {
    const date = new Date(workout.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const totalExercises = workout.phases.reduce((sum, phase) => 
        sum + (phase.exercises ? phase.exercises.length : 0), 0
    );
    
    const intensityColors = {
        'lower': 'bg-green-100 text-green-800 border-green-200',
        'normal': 'bg-blue-100 text-blue-800 border-blue-200',
        'higher': 'bg-red-100 text-red-800 border-red-200'
    };
    
    const intensityClass = intensityColors[workout.intensity] || intensityColors.normal;
    
    const phaseSummary = workout.phases.map(phase => {
        const exerciseCount = phase.exercises ? phase.exercises.length : 0;
        return `${phase.phase} (${exerciseCount})`;
    }).join(', ');
    
    // Get first few exercises for preview
    const previewExercises = [];
    workout.phases.slice(0, 2).forEach(phase => {
        if (phase.exercises && phase.exercises.length > 0) {
            previewExercises.push(...phase.exercises.slice(0, 2));
        }
    });
    
    const exercisePreview = previewExercises.slice(0, 4).join(', ');
    const moreCount = totalExercises - previewExercises.length;
    
    return `
        <div class="workout-card bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 ${intensityClass}">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-1">${formattedDate}</h3>
                    <div class="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${intensityClass}">
                            ${workout.intensity.charAt(0).toUpperCase() + workout.intensity.slice(1)}
                        </span>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            ${workout.type}
                        </span>
                        <span class="text-gray-500">•</span>
                        <span>${totalExercises} exercises</span>
                        <span class="text-gray-500">•</span>
                        <span>${workout.phases.length} phases</span>
                    </div>
                </div>
                <button onclick="viewWorkoutDetails('${workout.id}')" 
                        class="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <i class="fas fa-eye mr-2"></i>
                    View Details
                </button>
            </div>
            
            <div class="space-y-2">
                <div class="text-sm text-gray-700">
                    <strong>Phases:</strong> ${phaseSummary}
                </div>
                <div class="text-sm text-gray-600">
                    <strong>Exercises:</strong> ${exercisePreview}${moreCount > 0 ? ` + ${moreCount} more` : ''}
                </div>
            </div>
        </div>
    `;
}

function viewWorkoutDetails(workoutId) {
    const workout = allWorkouts.find(w => w.id === workoutId);
    if (!workout) {
        console.error('Workout not found:', workoutId);
        return;
    }
    
    const modal = document.getElementById('workoutModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const date = new Date(workout.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modalTitle.textContent = `Workout from ${formattedDate}`;
    
    const workoutTable = createGoogleDocsStyleTable(workout.phases || []);
    
    modalContent.innerHTML = `
        <div class="mb-4">
            <div class="flex items-center space-x-4 text-sm text-gray-600">
                <span><strong>Intensity:</strong> ${workout.intensity || 'Normal'}</span>
                <span><strong>Type:</strong> ${workout.type || 'Mixed'}</span>
                <span><strong>Phases:</strong> ${workout.phases ? workout.phases.length : 0}</span>
            </div>
            <div class="text-xs text-gray-500 mt-1">
                <i class="fas fa-info-circle mr-1"></i>
                Historical workout showing actual structure used on that date
            </div>
        </div>
        
        <div class="overflow-x-auto">
            ${workoutTable}
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function createGoogleDocsStyleTable(phases) {
    if (!phases || phases.length === 0) {
        return '<p class="text-gray-500 text-sm">No workout data available</p>';
    }
    
    try {
        // Create table with timing protocols as headers
        const table = document.createElement('table');
        table.className = 'w-full border-collapse border border-gray-300 text-sm';
        
        // Create header row with timing protocols
        const headerRow = document.createElement('tr');
        phases.forEach(phase => {
            const th = document.createElement('th');
            th.className = 'border border-gray-300 bg-gray-100 p-2 font-semibold text-center';
            th.textContent = phase.phase || phase.name || 'Unknown';
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
        
        // Find the maximum number of exercises in any phase
        const maxExercises = Math.max(...phases.map(phase => 
            phase.exercises ? phase.exercises.length : 0
        ));
        
        // Create rows for exercises
        for (let i = 0; i < maxExercises; i++) {
            const row = document.createElement('tr');
            phases.forEach(phase => {
                const td = document.createElement('td');
                td.className = 'border border-gray-300 p-2 text-center';
                
                if (i < (phase.exercises ? phase.exercises.length : 0)) {
                    const exercise = phase.exercises[i];
                    td.textContent = typeof exercise === 'string' ? exercise : (exercise.name || exercise.exercise || String(exercise));
                } else {
                    td.innerHTML = '&nbsp;'; // Empty cell
                }
                
                row.appendChild(td);
            });
            table.appendChild(row);
        }
        
        return table.outerHTML;
    } catch (error) {
        console.error('Error creating Google Docs style table:', error, phases);
        return '<p class="text-red-500 text-sm">Error displaying workout data</p>';
    }
}

function setupEventListeners() {
    // Filter controls
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Modal controls
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('workoutModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function applyFilters() {
    const intensity = document.getElementById('intensityFilter').value;
    const type = document.getElementById('typeFilter').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    
    filteredWorkouts = allWorkouts.filter(workout => {
        if (intensity && workout.intensity !== intensity) return false;
        if (type && workout.type !== type) return false;
        
        if (fromDate) {
            const workoutDate = new Date(workout.date);
            const filterFromDate = new Date(fromDate);
            if (workoutDate < filterFromDate) return false;
        }
        
        if (toDate) {
            const workoutDate = new Date(workout.date);
            const filterToDate = new Date(toDate);
            if (workoutDate > filterToDate) return false;
        }
        
        return true;
    });
    
    displayWorkouts(filteredWorkouts);
}

function clearFilters() {
    document.getElementById('intensityFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('fromDate').value = '';
    document.getElementById('toDate').value = '';
    
    filteredWorkouts = [...allWorkouts];
    displayWorkouts(filteredWorkouts);
}

function closeModal() {
    document.getElementById('workoutModal').classList.add('hidden');
}

function hideLoading() {
    document.getElementById('loadingState').classList.add('hidden');
}

function showError(message) {
    const container = document.getElementById('workoutsContainer');
    container.innerHTML = `
        <div class="text-center py-8">
            <i class="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
            <p class="text-red-600">${message}</p>
        </div>
    `;
}

// Helper functions (copied from other files)
function isValidExercise(exerciseName) {
    if (!exerciseName || typeof exerciseName !== 'string') return false;
    
    const invalidExercises = [
        '10 Down', '10 Reps', 'Reps', 'Seconds', 'Minutes', 'Hold', 'Rest', 'Break', 'Pause', 'Stop', 'Start',
        'Begin', 'End', 'Finish', 'Complete', 'Done', 'Next', 'Previous', 'Continue', 'Skip', 'OR', 'R', 'L',
        'Up', 'Down', 'Left', 'Right', 'Tap', 'Taps', 'Glide', 'Bridge', 'Plank', 'Deadlift', 'Squat', 'Lunge',
        'Push', 'Pull', 'Press', 'Row', 'Curl', 'Raise', 'Lift', 'Squeeze', 'Clench', 'Crunch', 'Twist', 'Rotate',
        '5 Up', '2-12', '60 Finisher Exercises', 'Left, S, Left', 'L,S,L', 'Sh Tap To Dd Toe Touch'
    ];
    
    if (invalidExercises.includes(exerciseName)) return false;
    if (exerciseName.length < 3) return false;
    if (/^\d+$/.test(exerciseName)) return false;
    
    return true;
}

function standardizeExerciseName(exerciseName) {
    if (!exerciseName || typeof exerciseName !== 'string') return exerciseName;
    
    let standardized = exerciseName.trim();
    
    // Fix common abbreviations and typos
    const replacements = {
        'Ch ': 'Chest ',
        'Sh.': 'Shoulder',
        'Sh ': 'Shoulder ',
        'F. ': 'Forward ',
        'B. ': 'Back ',
        'L. ': 'Left ',
        'R. ': 'Right ',
        'Dd ': 'Dumbbell ',
        'Db ': 'Dumbbell ',
        'Kb ': 'Kettlebell ',
        'Band ': 'Band ',
        'Puncheses': 'Punches',
        'Stretchinges': 'Stretching',
        'Burpeess': 'Burpees',
        'Curlss': 'Curls',
        'Drag Curlss': 'Drag Curls'
    };
    
    Object.entries(replacements).forEach(([old, newVal]) => {
        standardized = standardized.replace(new RegExp(old, 'g'), newVal);
    });
    
    return standardized;
}
