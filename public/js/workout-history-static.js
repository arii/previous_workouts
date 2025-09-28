// Static version of workout history - no API calls needed

// DOM elements
const intensityFilter = document.getElementById('intensityFilter');
const typeFilter = document.getElementById('typeFilter');
const dateRangeFilter = document.getElementById('dateRangeFilter');
const exerciseCountFilter = document.getElementById('exerciseCountFilter');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const filterResults = document.getElementById('filterResults');
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
    applyFiltersBtn.addEventListener('click', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Auto-apply filters when selections change
    intensityFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    dateRangeFilter.addEventListener('change', applyFilters);
    exerciseCountFilter.addEventListener('change', applyFilters);
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
        applyFilters();
        
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
    
    if (!exerciseData) {
        console.error('EXERCISE_DATA not found in window object');
        return [];
    }
    
    console.log('Exercise data loaded:', exerciseData);
    
    const dailyWorkouts = exerciseData.daily_workouts || {};
    
    console.log('Daily workouts:', dailyWorkouts);
    
    // Convert daily workouts to workout objects
    const historicalWorkouts = [];
    
    Object.entries(dailyWorkouts).forEach(([date, workouts]) => {
        if (!Array.isArray(workouts)) {
            console.warn('Workouts is not an array for date:', date, workouts);
            return;
        }
        
        workouts.forEach((workout, index) => {
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
                }).filter(phase => phase.exercises.length > 0); // Only keep phases with exercises
                
                if (cleanedPhases.length === 0) {
                    console.warn('No valid phases found for workout:', workout);
                    return;
                }
                
                historicalWorkouts.push({
                    id: `${date}-${index}`,
                    date: date,
                    type: 'Mixed', // Default type
                    intensity: 'Normal', // Default intensity
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
    
    console.log('Generated historical workouts:', historicalWorkouts.length);
    return historicalWorkouts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper functions for workout generation
function isValidExercise(exerciseName) {
    if (!exerciseName || typeof exerciseName !== 'string') return false;
    
    // Filter out timing protocols that were incorrectly categorized as exercises
    const invalidExercises = [
        '40/30/20 (15 Off)',
        '2 Rounds',
        '3 Rounds',
        '5 Rounds',
        '10 Rounds',
        '15 Rounds',
        '20 Rounds',
        '30 Rounds',
        '40 Rounds',
        '50 Rounds',
        '60 Rounds',
        'OR',
        'R',
        'L',
        'Left',
        'Right',
        '10 Down',
        '5 Up',
        '2-12',
        '1-10',
        '1-5',
        '1-3',
        '1-2',
        '1-1',
        '2-2',
        '3-3',
        '4-4',
        '5-5',
        '10-10',
        '15-15',
        '20-20',
        '25-25',
        '30-30',
        '40-40',
        '50-50',
        '60-60',
        '1 min',
        '2 min',
        '3 min',
        '4 min',
        '5 min',
        '10 min',
        '15 min',
        '20 min',
        '30 min',
        '45 min',
        '60 min',
        '90 min',
        '120 min',
        '1 sec',
        '2 sec',
        '3 sec',
        '4 sec',
        '5 sec',
        '10 sec',
        '15 sec',
        '20 sec',
        '30 sec',
        '45 sec',
        '60 sec',
        '90 sec',
        '120 sec',
        '1 rep',
        '2 rep',
        '3 rep',
        '4 rep',
        '5 rep',
        '10 rep',
        '15 rep',
        '20 rep',
        '25 rep',
        '30 rep',
        '40 rep',
        '50 rep',
        '60 rep',
        '100 rep',
        '1 set',
        '2 set',
        '3 set',
        '4 set',
        '5 set',
        '10 set',
        '15 set',
        '20 set',
        '25 set',
        '30 set',
        '40 set',
        '50 set',
        '60 set',
        '100 set',
        '1 round',
        '2 round',
        '3 round',
        '4 round',
        '5 round',
        '10 round',
        '15 round',
        '20 round',
        '25 round',
        '30 round',
        '40 round',
        '50 round',
        '60 round',
        '100 round',
        '1 time',
        '2 time',
        '3 time',
        '4 time',
        '5 time',
        '10 time',
        '15 time',
        '20 time',
        '25 time',
        '30 time',
        '40 time',
        '50 time',
        '60 time',
        '100 time',
        '1 x',
        '2 x',
        '3 x',
        '4 x',
        '5 x',
        '10 x',
        '15 x',
        '20 x',
        '25 x',
        '30 x',
        '40 x',
        '50 x',
        '60 x',
        '100 x',
        'x 1',
        'x 2',
        'x 3',
        'x 4',
        'x 5',
        'x 10',
        'x 15',
        'x 20',
        'x 25',
        'x 30',
        'x 40',
        'x 50',
        'x 60',
        'x 100',
        '1-1-1',
        '2-2-2',
        '3-3-3',
        '4-4-4',
        '5-5-5',
        '10-10-10',
        '15-15-15',
        '20-20-20',
        '25-25-25',
        '30-30-30',
        '40-40-40',
        '50-50-50',
        '60-60-60',
        '100-100-100',
        '1-2-3',
        '2-4-6',
        '3-6-9',
        '4-8-12',
        '5-10-15',
        '10-20-30',
        '15-30-45',
        '20-40-60',
        '25-50-75',
        '30-60-90',
        '40-80-120',
        '50-100-150',
        '60-120-180',
        '100-200-300',
        '1-2-3-4',
        '2-4-6-8',
        '3-6-9-12',
        '4-8-12-16',
        '5-10-15-20',
        '10-20-30-40',
        '15-30-45-60',
        '20-40-60-80',
        '25-50-75-100',
        '30-60-90-120',
        '40-80-120-160',
        '50-100-150-200',
        '60-120-180-240',
        '100-200-300-400',
        '1-2-3-4-5',
        '2-4-6-8-10',
        '3-6-9-12-15',
        '4-8-12-16-20',
        '5-10-15-20-25',
        '10-20-30-40-50',
        '15-30-45-60-75',
        '20-40-60-80-100',
        '25-50-75-100-125',
        '30-60-90-120-150',
        '40-80-120-160-200',
        '50-100-150-200-250',
        '60-120-180-240-300',
        '100-200-300-400-500',
        '1-2-3-4-5-6',
        '2-4-6-8-10-12',
        '3-6-9-12-15-18',
        '4-8-12-16-20-24',
        '5-10-15-20-25-30',
        '10-20-30-40-50-60',
        '15-30-45-60-75-90',
        '20-40-60-80-100-120',
        '25-50-75-100-125-150',
        '30-60-90-120-150-180',
        '40-80-120-160-200-240',
        '50-100-150-200-250-300',
        '60-120-180-240-300-360',
        '100-200-300-400-500-600',
        '1-2-3-4-5-6-7',
        '2-4-6-8-10-12-14',
        '3-6-9-12-15-18-21',
        '4-8-12-16-20-24-28',
        '5-10-15-20-25-30-35',
        '10-20-30-40-50-60-70',
        '15-30-45-60-75-90-105',
        '20-40-60-80-100-120-140',
        '25-50-75-100-125-150-175',
        '30-60-90-120-150-180-210',
        '40-80-120-160-200-240-280',
        '50-100-150-200-250-300-350',
        '60-120-180-240-300-360-420',
        '100-200-300-400-500-600-700',
        '1-2-3-4-5-6-7-8',
        '2-4-6-8-10-12-14-16',
        '3-6-9-12-15-18-21-24',
        '4-8-12-16-20-24-28-32',
        '5-10-15-20-25-30-35-40',
        '10-20-30-40-50-60-70-80',
        '15-30-45-60-75-90-105-120',
        '20-40-60-80-100-120-140-160',
        '25-50-75-100-125-150-175-200',
        '30-60-90-120-150-180-210-240',
        '40-80-120-160-200-240-280-320',
        '50-100-150-200-250-300-350-400',
        '60-120-180-240-300-360-420-480',
        '100-200-300-400-500-600-700-800',
        '1-2-3-4-5-6-7-8-9',
        '2-4-6-8-10-12-14-16-18',
        '3-6-9-12-15-18-21-24-27',
        '4-8-12-16-20-24-28-32-36',
        '5-10-15-20-25-30-35-40-45',
        '10-20-30-40-50-60-70-80-90',
        '15-30-45-60-75-90-105-120-135',
        '20-40-60-80-100-120-140-160-180',
        '25-50-75-100-125-150-175-200-225',
        '30-60-90-120-150-180-210-240-270',
        '40-80-120-160-200-240-280-320-360',
        '50-100-150-200-250-300-350-400-450',
        '60-120-180-240-300-360-420-480-540',
        '100-200-300-400-500-600-700-800-900',
        '1-2-3-4-5-6-7-8-9-10',
        '2-4-6-8-10-12-14-16-18-20',
        '3-6-9-12-15-18-21-24-27-30',
        '4-8-12-16-20-24-28-32-36-40',
        '5-10-15-20-25-30-35-40-45-50',
        '10-20-30-40-50-60-70-80-90-100',
        '15-30-45-60-75-90-105-120-135-150',
        '20-40-60-80-100-120-140-160-180-200',
        '25-50-75-100-125-150-175-200-225-250',
        '30-60-90-120-150-180-210-240-270-300',
        '40-80-120-160-200-240-280-320-360-400',
        '50-100-150-200-250-300-350-400-450-500',
        '60-120-180-240-300-360-420-480-540-600',
        '100-200-300-400-500-600-700-800-900-1000'
    ];
    
    if (invalidExercises.includes(exerciseName)) return false;
    
    // Filter out exercises that are just numbers or very short
    if (exerciseName.length < 3) return false;
    if (/^\d+$/.test(exerciseName)) return false;
    
    return true;
}

function standardizeExerciseName(exerciseName) {
    if (!exerciseName) return exerciseName;
    
    // Fix common typos and abbreviations
    const replacements = {
        'Band Puncheses': 'Band Punches',
        'Mobility Stretchinges': 'Mobility Stretches',
        'Dd Toe Touch': 'Dumbbell Toe Touch',
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
        'L': 'Left'
    };
    
    let standardized = exerciseName;
    Object.entries(replacements).forEach(([old, newVal]) => {
        standardized = standardized.replace(new RegExp(`\\b${old}\\b`, 'g'), newVal);
    });
    
    return standardized;
}

function getSetsForPhase(phase, intensity) {
    if (phase.includes('Tabata') || phase.includes('20/10')) return '8';
    if (phase.includes('3 x')) return '3';
    if (phase.includes('2 x')) return '2';
    if (phase.includes('4 x')) return '4';
    if (phase.includes('5 x')) return '5';
    if (phase.includes('Emom') || phase.includes('EMOM')) return '3';
    if (phase.includes('Spartan')) return '5';
    return '3';
}

function getRepsForPhase(phase, intensity) {
    if (phase.includes('Tabata') || phase.includes('20/10')) return '20 sec work';
    if (phase.includes('3 x 10')) return '10';
    if (phase.includes('3 x 15')) return '15';
    if (phase.includes('3 x 20')) return '20';
    if (phase.includes('2 x 15')) return '15';
    if (phase.includes('2 x 10')) return '10';
    if (phase.includes('4 x 10')) return '10';
    if (phase.includes('4 x 15')) return '15';
    if (phase.includes('5 x 10')) return '10';
    if (phase.includes('5 x 15')) return '15';
    if (phase.includes('Emom') || phase.includes('EMOM')) return '12-15';
    if (phase.includes('Spartan')) return '25, 20, 18, 15, 12';
    return '10-15';
}

function getDurationForPhase(phase, intensity) {
    if (phase.includes('Tabata') || phase.includes('20/10')) return '20 sec';
    if (phase.includes('Emom') || phase.includes('EMOM')) return '1 min';
    if (phase.includes('Spartan')) return null;
    return null;
}

function getRestForPhase(phase, intensity) {
    if (phase.includes('Tabata') || phase.includes('20/10')) return '10 sec rest';
    if (phase.includes('Emom') || phase.includes('EMOM')) return 'Remaining minute';
    if (phase.includes('Spartan')) return '60 sec';
    if (phase.includes('3 x')) return '30 sec';
    if (phase.includes('2 x')) return '30 sec';
    if (phase.includes('4 x')) return '30 sec';
    if (phase.includes('5 x')) return '30 sec';
    return '30 sec';
}

// Apply filters to workouts
function applyFilters() {
    if (!allWorkouts || allWorkouts.length === 0) {
        showEmpty();
        return;
    }
    
    let filteredWorkouts = [...allWorkouts];
    
    // Intensity filter
    const intensity = intensityFilter.value;
    if (intensity) {
        filteredWorkouts = filteredWorkouts.filter(workout => 
            (workout.intensity || 'normal').toLowerCase() === intensity.toLowerCase()
        );
    }
    
    // Type filter
    const type = typeFilter.value;
    if (type) {
        filteredWorkouts = filteredWorkouts.filter(workout => 
            (workout.type || 'mixed').toLowerCase() === type.toLowerCase()
        );
    }
    
    // Date range filter
    const dateRange = dateRangeFilter.value;
    if (dateRange && dateRange !== 'all') {
        const now = new Date();
        let cutoffDate;
        
        switch (dateRange) {
            case 'week':
                cutoffDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'recent':
                cutoffDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                break;
            case 'month':
                cutoffDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
                break;
            case 'year':
                cutoffDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
                break;
        }
        
        if (cutoffDate) {
            filteredWorkouts = filteredWorkouts.filter(workout => 
                new Date(workout.date || workout.created_at) >= cutoffDate
            );
        }
    }
    
    // Exercise count filter
    const exerciseCount = exerciseCountFilter.value;
    if (exerciseCount) {
        filteredWorkouts = filteredWorkouts.filter(workout => {
            const totalExercises = workout.phases ? 
                workout.phases.reduce((total, phase) => total + (phase.exercises ? phase.exercises.length : 0), 0) : 0;
            
            switch (exerciseCount) {
                case '1-5':
                    return totalExercises >= 1 && totalExercises <= 5;
                case '6-10':
                    return totalExercises >= 6 && totalExercises <= 10;
                case '11-15':
                    return totalExercises >= 11 && totalExercises <= 15;
                case '16+':
                    return totalExercises >= 16;
                default:
                    return true;
            }
        });
    }
    
    // Update filter results display
    updateFilterResults(filteredWorkouts.length, allWorkouts.length);
    
    if (filteredWorkouts.length === 0) {
        showEmpty();
        return;
    }
    
    displayWorkouts(filteredWorkouts, 'filtered');
}

// Clear all filters
function clearFilters() {
    intensityFilter.value = '';
    typeFilter.value = '';
    dateRangeFilter.value = 'all';
    exerciseCountFilter.value = '';
    applyFilters();
}

// Update filter results display
function updateFilterResults(filteredCount, totalCount) {
    if (filteredCount === totalCount) {
        filterResults.textContent = `Showing all ${totalCount} workouts`;
    } else {
        filterResults.textContent = `Showing ${filteredCount} of ${totalCount} workouts`;
    }
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
    tableContainer.className = 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden';
    
    const table = document.createElement('table');
    table.className = 'w-full text-sm';
    
    // Table header
    const thead = document.createElement('thead');
    thead.className = 'bg-gray-50 border-b border-gray-200';
    thead.innerHTML = `
        <tr>
            <th class="px-2 sm:px-3 py-2 sm:py-3 text-left font-semibold text-gray-700 text-xs uppercase tracking-wide">Date</th>
            <th class="px-2 sm:px-3 py-2 sm:py-3 text-left font-semibold text-gray-700 text-xs uppercase tracking-wide hidden sm:table-cell">Workout Summary</th>
            <th class="px-2 sm:px-3 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs uppercase tracking-wide">View</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Table body
    const tbody = document.createElement('tbody');
    tbody.className = 'bg-white divide-y divide-gray-200';
    
    // Sort workouts by date (newest first)
    const sortedWorkouts = workouts.sort((a, b) => new Date(b.date || b.created_at) - new Date(a.date || a.created_at));
    
    sortedWorkouts.forEach(workout => {
        try {
            const row = createWorkoutTableRow(workout);
            tbody.appendChild(row);
        } catch (error) {
            console.error('Error creating workout row:', error, workout);
        }
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    historyContent.appendChild(tableContainer);
}

// Create a table row for a workout
function createWorkoutTableRow(workout) {
    console.log('Creating workout table row:', workout);
    
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
    // Ensure we're using the correct date by adding timezone offset
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const formattedDate = adjustedDate.toLocaleDateString('en-US', {
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
    
    // Create copy-friendly table format for each row
    const phases = workout.phases || [];
    const phaseColumns = phases.map(phase => {
        const exercises = phase.exercises ? phase.exercises.map(ex => typeof ex === 'string' ? ex : ex.name || ex) : [];
        const timing = phase.timing || phase.name;
        return {
            timing: timing,
            exercises: exercises
        };
    });
    
    // Create simple, useful summary
    const totalExercises = phases.reduce((sum, phase) => sum + (phase.exercises ? phase.exercises.length : 0), 0);
    const phaseSummary = phases.map(phase => `${phase.name} (${phase.exercises ? phase.exercises.length : 0})`).join(', ');
    
    // Helper function to extract exercise names
    const getExerciseNames = (exercises) => {
        if (!exercises) return [];
        return exercises.map(ex => {
            if (typeof ex === 'string') return ex;
            if (ex && typeof ex === 'object') return ex.name || ex.exercise || String(ex);
            return String(ex);
        });
    };
    
    const tableHTML = `
        <div class="text-xs">
            <div class="font-medium text-gray-800 mb-1">${totalExercises} exercises</div>
            <div class="text-gray-600 mb-2">${phaseSummary}</div>
            <div class="text-gray-500">
                ${phases.slice(0, 2).map(phase => {
                    const exerciseNames = getExerciseNames(phase.exercises);
                    return `${phase.name}: ${exerciseNames.slice(0, 3).join(', ')}${exerciseNames.length > 3 ? '...' : ''}`;
                }).join(' | ')}
            </div>
        </div>
    `;
    
    // Create a useful workout summary
    const workoutSummary = createWorkoutSummary(phases, intensity, workout.type);
    
    row.innerHTML = `
        <td class="px-2 sm:px-3 py-2 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
            <div class="flex flex-col sm:block">
                <span class="font-medium">${formattedDate}</span>
                <span class="text-gray-500 text-xs sm:hidden">${workoutSummary}</span>
            </div>
        </td>
        <td class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 hidden sm:table-cell">
            ${workoutSummary}
        </td>
        <td class="px-2 sm:px-3 py-2 text-center">
            <i class="fas fa-eye text-sm sm:text-base text-blue-600"></i>
        </td>
    `;
    
    // Make the entire row clickable
    row.style.cursor = 'pointer';
    row.addEventListener('click', function(e) {
        // Don't trigger if clicking on a button or link
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
            return;
        }
        viewWorkoutDetails(workout.id || workout.date);
    });
    
    return row;
}

// Create a useful workout summary for the table
function createWorkoutSummary(phases, intensity, workoutType) {
    console.log('Creating workout summary:', { phases, intensity, workoutType });
    
    if (!phases || phases.length === 0) {
        return '<span class="text-gray-500">No workout data</span>';
    }
    
    try {
        const totalExercises = phases.reduce((sum, phase) => {
            if (phase.exercises && Array.isArray(phase.exercises)) {
                return sum + phase.exercises.length;
            }
            return sum;
        }, 0);
        
        const phaseNames = phases.map(phase => {
            const name = phase.name || phase.phase || 'Unknown';
            return getSimplifiedTiming(phase);
        }).join(', ');
        
        // Get first few exercises from each phase
        const exercisePreview = phases.slice(0, 2).map(phase => {
            if (phase.exercises && Array.isArray(phase.exercises)) {
                return phase.exercises.slice(0, 2).join(', ');
            }
            return '';
        }).filter(preview => preview.length > 0).join(' | ');
        
        const intensityBadgeColors = {
            'lower': 'bg-green-100 text-green-800',
            'normal': 'bg-blue-100 text-blue-800',
            'higher': 'bg-red-100 text-red-800'
        };
        
        const safeIntensity = intensity || 'normal';
        const intensityBadge = intensityBadgeColors[safeIntensity.toLowerCase()] || intensityBadgeColors.normal;
        
        return `
            <div class="space-y-1">
                <div class="flex items-center space-x-2">
                    <span class="font-medium text-gray-800">${totalExercises} exercises</span>
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${intensityBadge}">
                        ${safeIntensity.charAt(0).toUpperCase() + safeIntensity.slice(1)}
                    </span>
                    <span class="text-gray-500 text-xs">${workoutType || 'Mixed'}</span>
                </div>
                <div class="text-gray-600 text-xs">${phaseNames}</div>
                <div class="text-gray-500 text-xs">${exercisePreview}</div>
            </div>
        `;
    } catch (error) {
        console.error('Error creating workout summary:', error, { phases, intensity, workoutType });
        return '<span class="text-red-500">Error loading workout</span>';
    }
}

// Create Google Docs style table with timing as headers and exercises vertically
function createGoogleDocsStyleTable(phases) {
    console.log('Creating Google Docs table for phases:', phases);
    
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
            th.textContent = getSimplifiedTiming(phase);
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
        
        // Find the maximum number of exercises in any phase
        const maxExercises = Math.max(...phases.map(phase => {
            if (phase.exercises && Array.isArray(phase.exercises)) {
                return phase.exercises.length;
            }
            return 0;
        }));
        
        console.log('Max exercises:', maxExercises);
        
        // Create rows for exercises
        for (let i = 0; i < maxExercises; i++) {
            const row = document.createElement('tr');
            phases.forEach(phase => {
                const td = document.createElement('td');
                td.className = 'border border-gray-300 p-2 text-center';
                
                if (phase.exercises && Array.isArray(phase.exercises) && i < phase.exercises.length) {
                    td.textContent = phase.exercises[i]; // Now exercises are simple strings
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

// Get simplified timing protocol for headers
function getSimplifiedTiming(phase) {
    const phaseName = phase.name || phase.phase || '';
    
    // Map common phase names to simplified timing
    const timingMap = {
        'Warmup Set 1': '20/10',
        'Warmup Set 2': '40/30/20/15',
        'Cardio': 'Cardio',
        'Strength': 'Strength',
        'Finisher': 'Finisher',
        'Recovery': 'Recovery',
        'EMOM': 'EMOM',
        'Spartan': 'Spartan'
    };
    
    // If it's a common phase name, use the simplified version
    if (timingMap[phaseName]) {
        return timingMap[phaseName];
    }
    
    // For timing protocols, extract the key parts
    if (phaseName.includes('rounds') && phaseName.includes('sec')) {
        // Extract timing like "8 rounds, 20 sec work, 10 sec rest" -> "20/10"
        const workMatch = phaseName.match(/(\d+)\s*sec\s*work/);
        const restMatch = phaseName.match(/(\d+)\s*sec\s*rest/);
        if (workMatch && restMatch) {
            return `${workMatch[1]}/${restMatch[1]}`;
        }
    }
    
    if (phaseName.includes('x')) {
        // Extract sets/reps like "3 x 10" -> "3 x 10"
        const match = phaseName.match(/(\d+)\s*x\s*(\d+)/);
        if (match) {
            return `${match[1]} x ${match[2]}`;
        }
    }
    
    // Default to the original phase name if no simplification found
    return phaseName;
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
        const date = new Date(workout.date || workout.created_at);
        // Ensure we're using the correct date by adding timezone offset
        const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
        const dateKey = adjustedDate.toLocaleDateString('en-US', {
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
    const workout = allWorkouts.find(w => w.id === workoutId || w.date === workoutId);
    if (workout) {
        showWorkoutDetailsModal(workout);
    } else {
        console.error('Workout not found:', workoutId);
        alert('Workout not found');
    }
}

// Show workout details modal
function showWorkoutDetailsModal(workout) {
    console.log('Showing workout details modal for:', workout);
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    const workoutTable = createGoogleDocsStyleTable(workout.phases || []);
    const formattedDate = new Date(workout.date || workout.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Workout from ${formattedDate}</h2>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="mb-4">
                <div class="flex items-center space-x-4 text-sm text-gray-600">
                    <span><strong>Intensity:</strong> ${workout.intensity || 'Normal'}</span>
                    <span><strong>Type:</strong> ${workout.type || 'Mixed'}</span>
                    <span><strong>Duration:</strong> ${workout.duration || 'N/A'}</span>
                </div>
            </div>
            
            <div class="overflow-x-auto">
                ${workoutTable}
            </div>
        </div>
    `;
    
    // Add click-outside-to-close functionality
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Add escape key to close
    const handleEscape = function(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
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
