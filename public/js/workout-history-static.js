// Static version of workout history - no API calls needed

// DOM elements
const viewAllBtn = document.getElementById('viewAllBtn');
const viewRecentBtn = document.getElementById('viewRecentBtn');
const historyContent = document.getElementById('historyContent');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const successToast = document.getElementById('successToast');
const errorToast = document.getElementById('errorToast');
const errorMessage = document.getElementById('errorMessage');

// Global variable to store all workouts
let allWorkouts = [];

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadWorkoutHistory();
});

function setupEventListeners() {
    viewAllBtn.addEventListener('click', () => showHistory('all'));
    viewRecentBtn.addEventListener('click', () => showHistory('recent'));
}

// Load workout history from static data
function loadWorkoutHistory() {
    try {
        showLoading();
        
        // Generate historical workouts from static data
        const historicalWorkouts = generateHistoricalWorkouts();
        
        // Store for use in showHistory
        allWorkouts = historicalWorkouts;
        
        // Show all history by default
        showHistory('all');
        
        showSuccessToast('Historical data loaded successfully!');
        
    } catch (error) {
        console.error('Error loading workout history:', error);
        showError('Failed to load workout history');
    } finally {
        hideLoading();
    }
}

// Generate historical workouts from static data
function generateHistoricalWorkouts() {
    const exerciseData = window.EXERCISE_DATA;
    const dailyCounts = exerciseData.metadata.summary.daily_workout_counts || {};
    const categorizedExercises = exerciseData.categorized_exercises || {};
    
    // Convert daily counts to workout objects
    const historicalWorkouts = Object.entries(dailyCounts).map(([date, count]) => {
        // Get exercises for this date from the categorized data
        const dayExercises = [];
        Object.keys(categorizedExercises).forEach(category => {
            const categoryExercises = categorizedExercises[category] || [];
            const dayCategoryExercises = categoryExercises.filter(exercise => 
                exercise.date === date
            );
            dayExercises.push(...dayCategoryExercises);
        });
        
        // Group exercises by phase/filename to create workout phases
        const workoutPhases = {};
        dayExercises.forEach(exercise => {
            const phase = exercise.phase || 'General';
            const filename = exercise.filename || 'unknown';
            const key = `${phase}-${filename}`;
            
            if (!workoutPhases[key]) {
                workoutPhases[key] = {
                    name: phase,
                    exercises: [],
                    timing: getTimingForPhase(phase)
                };
            }
            
            workoutPhases[key].exercises.push({
                name: standardizeExerciseName(exercise.exercise),
                sets: getSetsForPhase(phase, 'medium'),
                reps: getRepsForPhase(phase, 'medium'),
                duration: getDurationForPhase(phase, 'medium'),
                rest: getRestForPhase(phase, 'medium')
            });
        });
        
        return {
            id: `historical-${date}`,
            name: count > 1 ? `${count} Workouts` : 'Workout',
            date: date,
            duration: '40 min',
            notes: `Historical workout${count > 1 ? 's' : ''} from ${date}`,
            created_at: date,
            exercise_count: dayExercises.length,
            phases: Object.values(workoutPhases),
            is_historical: true,
            workout_count: count
        };
    }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
    
    return historicalWorkouts;
}

// Show history based on filter
function showHistory(filter) {
    if (!allWorkouts || allWorkouts.length === 0) {
        showEmpty();
        return;
    }
    
    let filteredWorkouts = allWorkouts;
    
    if (filter === 'recent') {
        // Show only last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        filteredWorkouts = allWorkouts.filter(workout => 
            new Date(workout.date) >= thirtyDaysAgo
        );
    }
    
    if (filteredWorkouts.length === 0) {
        showEmpty();
        return;
    }
    
    displayWorkouts(filteredWorkouts, filter);
}

// Display workouts in the UI
function displayWorkouts(workouts, filter) {
    historyContent.innerHTML = '';
    
    // Add filter indicator
    const filterIndicator = document.createElement('div');
    filterIndicator.className = 'bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6';
    filterIndicator.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-filter text-blue-600 mr-2"></i>
            <span class="text-blue-800 font-medium">
                ${filter === 'all' ? 'All Historical Workouts' : 'Recent Workouts (Last 30 Days)'} 
                (${workouts.length} total)
            </span>
        </div>
    `;
    historyContent.appendChild(filterIndicator);
    
    // Create table
    const tableContainer = document.createElement('div');
    tableContainer.className = 'bg-white rounded-xl shadow-lg overflow-hidden';
    
    const table = document.createElement('table');
    table.className = 'w-full';
    
    // Table header
    const thead = document.createElement('thead');
    thead.className = 'bg-gray-50';
    thead.innerHTML = `
        <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workout</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phases</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercises</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Table body
    const tbody = document.createElement('tbody');
    tbody.className = 'bg-white divide-y divide-gray-200';
    
    // Sort workouts by date (newest first)
    const sortedWorkouts = workouts.sort((a, b) => new Date(b.date || b.created_at) - new Date(a.date || a.created_at));
    
    sortedWorkouts.forEach(workout => {
        const row = createWorkoutTableRow(workout);
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    historyContent.appendChild(tableContainer);
}

// Create a table row for a workout
function createWorkoutTableRow(workout) {
    const row = document.createElement('tr');
    
    // Get intensity and set appropriate background color
    const intensity = workout.intensity || 'normal';
    const intensityColors = {
        'lower': 'bg-green-50 hover:bg-green-100',
        'normal': 'bg-blue-50 hover:bg-blue-100', 
        'higher': 'bg-red-50 hover:bg-red-100'
    };
    
    row.className = `${intensityColors[intensity.toLowerCase()] || intensityColors.normal} transition-colors`;
    
    const date = new Date(workout.date || workout.created_at);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    
    const workoutTitle = generateWorkoutTitle(workout);
    const phaseCount = workout.phases ? workout.phases.length : 0;
    const exerciseCount = workout.phases ? 
        workout.phases.reduce((total, phase) => total + (phase.exercises ? phase.exercises.length : 0), 0) : 0;
    
    // Get intensity badge color
    const intensityBadgeColors = {
        'lower': 'bg-green-100 text-green-800',
        'normal': 'bg-blue-100 text-blue-800',
        'higher': 'bg-red-100 text-red-800'
    };
    
    const intensityBadge = intensityBadgeColors[intensity.toLowerCase()] || intensityBadgeColors.normal;
    
    row.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            ${formattedDate}
        </td>
        <td class="px-6 py-4 text-sm text-gray-900">
            <div class="font-medium">${workoutTitle}</div>
            <div class="flex items-center mt-1">
                <span class="text-gray-500 text-xs mr-2">${workout.type || 'Mixed'}</span>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${intensityBadge}">
                    ${intensity.charAt(0).toUpperCase() + intensity.slice(1)} intensity
                </span>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${phaseCount} phases
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${exerciseCount} exercises
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button onclick="viewWorkoutDetails('${workout.id || workout.date}')" 
                    class="text-blue-600 hover:text-blue-900 transition-colors">
                <i class="fas fa-eye mr-1"></i>
                View Details
            </button>
        </td>
    `;
    
    return row;
}

// Generate a summarized title for a workout
function generateWorkoutTitle(workout) {
    if (!workout.phases || workout.phases.length === 0) {
        return 'Empty Workout';
    }
    
    // Get the main phase (usually the largest or most important)
    const mainPhase = workout.phases.find(phase => 
        phase.name && ['Strength', 'EMOM', 'Spartan', 'Cardio'].includes(phase.name)
    ) || workout.phases[0];
    
    if (!mainPhase || !mainPhase.exercises || mainPhase.exercises.length === 0) {
        return 'Basic Workout';
    }
    
    // Get the first few exercises from the main phase
    const exercises = mainPhase.exercises.slice(0, 3);
    const exerciseNames = exercises.map(ex => {
        if (typeof ex === 'string') return ex;
        return ex.name || ex;
    });
    
    // Create a title based on the exercises
    if (exerciseNames.length === 1) {
        return `${exerciseNames[0]} Focus`;
    } else if (exerciseNames.length === 2) {
        return `${exerciseNames[0]} & ${exerciseNames[1]}`;
    } else {
        return `${exerciseNames[0]}, ${exerciseNames[1]} & More`;
    }
}

// Group workouts by date
function groupWorkoutsByDate(workouts) {
    return workouts.reduce((groups, workout) => {
        const date = workout.date || workout.created_at;
        const dateKey = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        if (!groups[dateKey]) {
            groups[dateKey] = [];
        }
        groups[dateKey].push(workout);
        return groups;
    }, {});
}

// Create a date section with workouts
function createDateSection(dateString, workouts) {
    const section = document.createElement('div');
    section.className = 'mb-8 fade-in';
    
    section.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                <h2 class="text-xl font-semibold flex items-center">
                    <i class="fas fa-calendar-day mr-2"></i>
                    ${dateString}
                </h2>
                <p class="text-blue-100 text-sm mt-1">${workouts.length} workout${workouts.length !== 1 ? 's' : ''}</p>
            </div>
            <div class="p-6 space-y-4">
                ${workouts.map(workout => createWorkoutCard(workout)).join('')}
            </div>
        </div>
    `;
    
    return section;
}

// Create individual workout card
function createWorkoutCard(workout) {
    const isHistorical = workout.is_historical;
    
    let cardClass = 'border rounded-lg p-4 transition-all duration-200 hover:shadow-md';
    let badgeClass = '';
    let badgeText = '';
    
    if (isHistorical) {
        cardClass += ' border-orange-200 bg-orange-50';
        badgeClass = 'bg-orange-100 text-orange-800';
        badgeText = 'Historical';
    } else {
        cardClass += ' border-gray-200 bg-gray-50';
        badgeClass = 'bg-gray-100 text-gray-800';
        badgeText = 'Generated';
    }
    
    const exerciseCount = workout.exercise_count || (workout.phases ? 
        workout.phases.reduce((total, phase) => total + (phase.exercises ? phase.exercises.length : 0), 0) : 0);
    
    return `
        <div class="${cardClass}">
            <div class="flex justify-between items-start mb-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                        <h3 class="text-lg font-semibold text-gray-800">${workout.name}</h3>
                        <span class="px-2 py-1 text-xs font-medium rounded-full ${badgeClass}">
                            ${badgeText}
                        </span>
                    </div>
                    <div class="flex items-center text-sm text-gray-600 space-x-4">
                        <span><i class="fas fa-clock mr-1"></i>${workout.duration || '40 min'}</span>
                        <span><i class="fas fa-dumbbell mr-1"></i>${exerciseCount} exercises</span>
                        ${workout.workout_count ? `<span><i class="fas fa-list mr-1"></i>${workout.workout_count} workouts</span>` : ''}
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="viewWorkoutDetails('${workout.id}')" class="text-blue-500 hover:text-blue-700 transition-colors">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            
            ${workout.notes ? `
                <div class="text-sm text-gray-600 mb-3">
                    <i class="fas fa-sticky-note mr-1"></i>
                    ${workout.notes}
                </div>
            ` : ''}
            
            ${workout.phases && workout.phases.length > 0 ? `
                <div class="space-y-2">
                    ${workout.phases.slice(0, 2).map(phase => `
                        <div class="text-sm">
                            <span class="font-medium text-gray-700">${phase.name}:</span>
                            <span class="text-gray-600 ml-2">
                                ${phase.exercises ? phase.exercises.slice(0, 3).map(ex => ex.name).join(', ') : ''}
                                ${phase.exercises && phase.exercises.length > 3 ? '...' : ''}
                            </span>
                        </div>
                    `).join('')}
                    ${workout.phases.length > 2 ? `
                        <div class="text-sm text-gray-500">
                            +${workout.phases.length - 2} more phase${workout.phases.length - 2 !== 1 ? 's' : ''}
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `;
}

// View workout details
function viewWorkoutDetails(workoutId) {
    const workout = allWorkouts.find(w => w.id === workoutId);
    if (workout) {
        showWorkoutDetailsModal(workout);
    }
}

// Show workout details modal
function showWorkoutDetailsModal(workout) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-800">${workout.name}</h2>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-700 mb-2">Workout Info</h4>
                    <p class="text-sm text-gray-600"><strong>Date:</strong> ${formatDate(workout.date)}</p>
                    <p class="text-sm text-gray-600"><strong>Duration:</strong> ${workout.duration}</p>
                    ${workout.notes ? `<p class="text-sm text-gray-600"><strong>Notes:</strong> ${workout.notes}</p>` : ''}
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-700 mb-2">Statistics</h4>
                    <p class="text-sm text-gray-600"><strong>Total Exercises:</strong> ${workout.exercise_count}</p>
                    <p class="text-sm text-gray-600"><strong>Phases:</strong> ${workout.phases ? workout.phases.length : 0}</p>
                </div>
            </div>
            
            ${workout.phases && workout.phases.length > 0 ? `
                <div>
                    <h4 class="font-semibold text-gray-700 mb-3">Workout Phases</h4>
                    <div class="space-y-4">
                        ${workout.phases.map(phase => `
                            <div class="bg-gray-50 rounded-lg p-4">
                                <h5 class="font-semibold text-gray-800 mb-2">${phase.name}</h5>
                                <p class="text-sm text-gray-600 mb-3">${phase.timing}</p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    ${phase.exercises.map(exercise => `
                                        <div class="bg-white border border-gray-200 p-3 rounded">
                                            <h6 class="font-medium text-gray-800">${exercise.name}</h6>
                                            <div class="text-sm text-gray-600">
                                                ${exercise.sets ? `Sets: ${exercise.sets}` : ''}
                                                ${exercise.reps ? ` | Reps: ${exercise.reps}` : ''}
                                                ${exercise.duration ? ` | Duration: ${exercise.duration}` : ''}
                                                ${exercise.rest ? ` | Rest: ${exercise.rest}` : ''}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : '<p class="text-gray-500 text-center py-4">No exercises found for this workout.</p>'}
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Helper functions (copied from app-static.js)
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

function getSetsForPhase(phase, intensity) {
    const setsMap = {
        'Warmup': { lower: '3', normal: '4', higher: '4' },
        'Cardio': { lower: '2', normal: '3', higher: '4' },
        'Strength': { lower: '3', normal: '4', higher: '5' },
        'Accessory': { lower: '2', normal: '3', higher: '4' },
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
        'Accessory': { lower: '10-12', normal: '12-15', higher: '15-20' },
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
        'Accessory': { lower: null, normal: null, higher: null },
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
        'Accessory': { lower: '30 sec', normal: '45 sec', higher: '60 sec' },
        'EMOM': { lower: 'Remaining minute', normal: 'Remaining minute', higher: 'Remaining minute' },
        'Spartan': { lower: '20 sec', normal: '20 sec', higher: '20 sec' },
        'Tabata': { lower: '10 sec', normal: '10 sec', higher: '10 sec' }
    };
    
    return restMap[phase]?.[intensity] || '30 sec';
}

function getTimingForPhase(phase) {
    const timingMap = {
        'Warmup': '2-3 rounds, 30 sec rest',
        'Cardio': '3-4 rounds, 30 sec rest',
        'Strength': '3-4 rounds, 60 sec rest',
        'Accessory': '2-3 rounds, 45 sec rest',
        'EMOM': '4 rounds, 1 min per exercise',
        'Spartan': '3-4 rounds, 40 sec work, 20 sec rest',
        'Tabata': '8 rounds, 20 sec work, 10 sec rest'
    };
    
    return timingMap[phase] || '3 rounds, 30 sec rest';
}

function formatDate(dateString) {
    if (!dateString) return 'Invalid Date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Utility functions
function showLoading() {
    loadingState.classList.remove('hidden');
    historyContent.classList.add('hidden');
    emptyState.classList.add('hidden');
}

function hideLoading() {
    loadingState.classList.add('hidden');
    historyContent.classList.remove('hidden');
}

function showEmpty() {
    emptyState.classList.remove('hidden');
    historyContent.classList.add('hidden');
    loadingState.classList.add('hidden');
}

function showSuccessToast() {
    successToast.classList.remove('hidden');
    setTimeout(() => {
        successToast.classList.add('hidden');
    }, 3000);
}

function showError(message) {
    errorMessage.textContent = message;
    errorToast.classList.remove('hidden');
    
    setTimeout(() => {
        errorToast.classList.add('hidden');
    }, 5000);
}
