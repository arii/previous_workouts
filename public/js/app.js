// Global variables
let currentWorkout = null;
let workoutHistory = [];

// DOM elements
const generateWorkoutBtn = document.getElementById('generateWorkoutBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const saveWorkoutBtn = document.getElementById('saveWorkoutBtn');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const viewGeneratedBtn = document.getElementById('viewGeneratedBtn');
const generatedWorkout = document.getElementById('generatedWorkout');
const workoutInfo = document.getElementById('workoutInfo');
const workoutStructure = document.getElementById('workoutStructure');
const historyContent = document.getElementById('historyContent');
const loadingOverlay = document.getElementById('loadingOverlay');
const successToast = document.getElementById('successToast');
const copyTableBtn = document.getElementById('copyTableBtn');
const copyTable = document.getElementById('copyTable');
const customExerciseSection = document.getElementById('customExerciseSection');
const addCustomExerciseBtn = document.getElementById('addCustomExerciseBtn');
const addNewPhaseBtn = document.getElementById('addNewPhaseBtn');
const showInsightsBtn = document.getElementById('showInsightsBtn');
const hideInsightsBtn = document.getElementById('hideInsightsBtn');
const dataInsights = document.getElementById('dataInsights');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadWorkoutHistory();
});

function setupEventListeners() {
    generateWorkoutBtn.addEventListener('click', generateWorkout);
    regenerateBtn.addEventListener('click', generateWorkout);
    saveWorkoutBtn.addEventListener('click', saveWorkout);
    viewHistoryBtn.addEventListener('click', () => showHistory('all'));
    viewGeneratedBtn.addEventListener('click', () => showHistory('generated'));
    copyTableBtn.addEventListener('click', copyTableToClipboard);
    addCustomExerciseBtn.addEventListener('click', addCustomExercise);
    addNewPhaseBtn.addEventListener('click', addNewPhase);
    showInsightsBtn.addEventListener('click', showDataInsights);
    hideInsightsBtn.addEventListener('click', hideDataInsights);
}

// Workout Generation
async function generateWorkout() {
    showLoading();
    
    try {
        const intensity = document.querySelector('input[name="intensity"]:checked').value;
        const workoutType = document.querySelector('input[name="workoutType"]:checked').value;
        
        const response = await fetch('/api/generate-workout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                intensity,
                workoutType
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate workout');
        }
        
        currentWorkout = await response.json();
        displayGeneratedWorkout(currentWorkout);
        hideLoading();
        
    } catch (error) {
        hideLoading();
        console.error('Error generating workout:', error);
        showError('Failed to generate workout. Please try again.');
    }
}

function displayGeneratedWorkout(workout) {
    // Store the current workout globally
    currentWorkout = workout;
    
    // Show the workout container
    generatedWorkout.classList.remove('hidden');
    
    // Populate workout info
    workoutInfo.innerHTML = `
        <div class="bg-blue-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-blue-600">${workout.duration}</div>
            <div class="text-sm text-gray-600">Duration</div>
        </div>
        <div class="bg-green-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-green-600">${workout.intensity}</div>
            <div class="text-sm text-gray-600">Intensity</div>
        </div>
        <div class="bg-purple-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-600">${workout.type}</div>
            <div class="text-sm text-gray-600">Type</div>
        </div>
        <div class="bg-orange-50 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-600">${workout.totalExercises}</div>
            <div class="text-sm text-gray-600">Exercises</div>
        </div>
    `;
    
    // Populate workout structure
    workoutStructure.innerHTML = workout.phases.map((phase, phaseIndex) => `
        <div class="border border-gray-200 rounded-xl p-6">
            <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full ${getPhaseColor(phase.name)} flex items-center justify-center text-white font-bold mr-3">
                    ${phase.name.charAt(0)}
                </div>
                <h3 class="text-xl font-semibold text-gray-800">${phase.name}</h3>
                <span class="ml-auto bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    ${phase.exercises.length} exercises
                </span>
                <div class="ml-3 flex gap-2">
                    <button onclick="regeneratePhase(${phaseIndex})" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        <i class="fas fa-sync-alt mr-1"></i>
                        Regenerate
                    </button>
                    <button onclick="removePhase(${phaseIndex})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        <i class="fas fa-trash mr-1"></i>
                        Remove
                    </button>
                </div>
            </div>
            
            ${phase.timing ? `
                <div class="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center text-sm text-gray-600">
                        <i class="fas fa-clock mr-2"></i>
                        <span class="font-medium">Timing:</span>
                        <span class="ml-2">${phase.timing}</span>
                    </div>
                </div>
            ` : ''}
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                ${phase.exercises.map((exercise, exerciseIndex) => `
                    <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow relative">
                        <button onclick="removeExercise(${phaseIndex}, ${exerciseIndex})" class="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="font-medium text-gray-800 mb-1 pr-6">${exercise.name}</div>
                        ${exercise.sets ? `<div class="text-sm text-gray-600">Sets: ${exercise.sets}</div>` : ''}
                        ${exercise.reps ? `<div class="text-sm text-gray-600">Reps: ${exercise.reps}</div>` : ''}
                        ${exercise.duration ? `<div class="text-sm text-gray-600">Duration: ${exercise.duration}</div>` : ''}
                        ${exercise.rest ? `<div class="text-sm text-gray-600">Rest: ${exercise.rest}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    // Generate copy-friendly table
    generateCopyFriendlyTable(workout);
    
    // Show custom exercise section
    customExerciseSection.style.display = 'block';
    
    // Scroll to the generated workout
    generatedWorkout.scrollIntoView({ behavior: 'smooth' });
}

function getPhaseColor(phaseName) {
    const colors = {
        'Warmup': 'bg-yellow-500',
        'Cardio': 'bg-red-500',
        'Strength': 'bg-blue-500',
        'Accessory': 'bg-green-500',
        'Recovery': 'bg-purple-500'
    };
    return colors[phaseName] || 'bg-gray-500';
}

// Save workout
async function saveWorkout() {
    if (!currentWorkout) return;
    
    try {
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `Generated ${currentWorkout.type} Workout`,
                date: new Date().toISOString().split('T')[0],
                duration: currentWorkout.duration,
                notes: `Generated workout - ${currentWorkout.intensity} intensity, ${currentWorkout.type} type`,
                exercises: currentWorkout.phases.flatMap(phase => 
                    phase.exercises.map(exercise => ({
                        name: exercise.name,
                        sets: exercise.sets || null,
                        reps: exercise.reps || null,
                        weight: null,
                        duration: exercise.duration || null,
                        notes: null
                    }))
                )
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to save workout');
        }
        
        showSuccessToast();
        loadWorkoutHistory();
        
    } catch (error) {
        console.error('Error saving workout:', error);
        showError('Failed to save workout. Please try again.');
    }
}

// Load workout history
async function loadWorkoutHistory() {
    try {
        const response = await fetch('/api/workouts');
        workoutHistory = await response.json();
        showHistory('all');
    } catch (error) {
        console.error('Error loading workout history:', error);
    }
}

// Show history
function showHistory(type) {
    let workouts = workoutHistory;
    
    if (type === 'generated') {
        workouts = workoutHistory.filter(workout => 
            workout.name.includes('Generated') || workout.notes?.includes('Generated')
        );
    }
    
    if (workouts.length === 0) {
        historyContent.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-dumbbell text-4xl mb-4"></i>
                <p>No ${type === 'generated' ? 'generated ' : ''}workouts found.</p>
            </div>
        `;
        return;
    }
    
    historyContent.innerHTML = workouts.map(workout => `
        <div class="bg-gray-50 rounded-lg p-6 mb-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-3">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">${escapeHtml(workout.name)}</h3>
                    <p class="text-gray-600">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        ${formatDate(workout.date)}
                    </p>
                </div>
                <div class="text-right">
                    <div class="text-sm text-gray-500">
                        <i class="fas fa-dumbbell mr-1"></i>
                        ${workout.exercises ? workout.exercises.length : 0} exercises
                    </div>
                    ${workout.duration ? `
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-clock mr-1"></i>
                            ${workout.duration}
                        </div>
                    ` : ''}
                </div>
            </div>
            
            ${workout.notes ? `
                <div class="text-sm text-gray-600 mb-3">
                    <i class="fas fa-sticky-note mr-2"></i>
                    ${escapeHtml(workout.notes)}
                </div>
            ` : ''}
            
            <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                    <i class="fas fa-clock mr-1"></i>
                    Created ${formatDate(workout.created_at)}
                </div>
                <button onclick="viewWorkoutDetails(${workout.id})" 
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                    <i class="fas fa-eye mr-1"></i>
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

// View workout details
async function viewWorkoutDetails(workoutId) {
    try {
        const response = await fetch(`/api/workouts/${workoutId}`);
        const workout = await response.json();
    
    if (workout) {
            // Create a modal or detailed view
            showWorkoutDetailsModal(workout);
        }
    } catch (error) {
        console.error('Error loading workout details:', error);
        showError('Failed to load workout details');
    }
}

function showWorkoutDetailsModal(workout) {
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-800">${escapeHtml(workout.name)}</h2>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-700 mb-2">Workout Info</h4>
                    <p class="text-sm text-gray-600"><strong>Date:</strong> ${formatDate(workout.date)}</p>
                    ${workout.duration ? `<p class="text-sm text-gray-600"><strong>Duration:</strong> ${workout.duration}</p>` : ''}
                    ${workout.notes ? `<p class="text-sm text-gray-600"><strong>Notes:</strong> ${escapeHtml(workout.notes)}</p>` : ''}
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-700 mb-2">Statistics</h4>
                    <p class="text-sm text-gray-600"><strong>Total Exercises:</strong> ${workout.exercises ? workout.exercises.length : 0}</p>
                </div>
            </div>
            
            ${workout.exercises && workout.exercises.length > 0 ? `
                <div>
                    <h4 class="font-semibold text-gray-700 mb-3">Exercises</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        ${workout.exercises.map(exercise => `
                            <div class="bg-white border border-gray-200 p-3 rounded-lg">
                                <h5 class="font-medium text-gray-800">${escapeHtml(exercise.name)}</h5>
                                ${exercise.sets ? `<p class="text-sm text-gray-600">Sets: ${exercise.sets}</p>` : ''}
                                ${exercise.reps ? `<p class="text-sm text-gray-600">Reps: ${exercise.reps}</p>` : ''}
                                ${exercise.duration ? `<p class="text-sm text-gray-600">Duration: ${exercise.duration}</p>` : ''}
                                ${exercise.notes ? `<p class="text-sm text-gray-600">Notes: ${escapeHtml(exercise.notes)}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : '<p class="text-gray-500 text-center py-4">No exercises found for this workout.</p>'}
        </div>
    `;
    
    document.body.appendChild(modal);
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

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function generateCopyFriendlyTable(workout) {
    // Create a table structure similar to Google Docs format
    let tableHtml = '';
    
    if (workout.type === 'balanced') {
        // For balanced workouts, organize by phases
        const phaseHeaders = workout.phases.map(phase => phase.name);
        const maxExercises = Math.max(...workout.phases.map(phase => phase.exercises.length));
        
        // Create header row
        tableHtml += 'Phase\t' + phaseHeaders.join('\t') + '\n';
        
        // Create exercise rows
        for (let i = 0; i < maxExercises; i++) {
            let row = '';
            workout.phases.forEach((phase, phaseIndex) => {
                if (phaseIndex === 0) {
                    row += `Exercise ${i + 1}\t`;
                }
                if (phase.exercises[i]) {
                    const exercise = phase.exercises[i];
                    let exerciseText = exercise.name;
                    if (exercise.sets && exercise.reps) {
                        exerciseText += ` (${exercise.sets} x ${exercise.reps})`;
                    }
                    if (exercise.duration) {
                        exerciseText += ` (${exercise.duration})`;
                    }
                    row += exerciseText;
                }
                row += '\t';
            });
            tableHtml += row.trim() + '\n';
        }
    } else if (workout.type === 'emom') {
        // For EMOM workouts
        const phase = workout.phases[0];
        tableHtml += 'EMOM Circuit\n';
        tableHtml += 'Exercise\tSets\tReps\tRest\n';
        phase.exercises.forEach(exercise => {
            tableHtml += `${exercise.name}\t${exercise.sets}\t${exercise.reps}\t${exercise.rest}\n`;
        });
    } else if (workout.type === 'spartan') {
        // For Spartan workouts
        workout.phases.forEach(phase => {
            tableHtml += `${phase.name}\n`;
            tableHtml += 'Exercise\tSets\tReps\tRest\n';
            phase.exercises.forEach(exercise => {
                tableHtml += `${exercise.name}\t${exercise.sets}\t${exercise.reps}\t${exercise.rest}\n`;
            });
            tableHtml += '\n';
        });
    } else if (workout.type === 'tabata') {
        // For Tabata workouts
        const phase = workout.phases[0];
        tableHtml += 'Tabata Circuit\n';
        tableHtml += 'Exercise\tSets\tDuration\tRest\n';
        phase.exercises.forEach(exercise => {
            tableHtml += `${exercise.name}\t${exercise.sets}\t${exercise.duration}\t${exercise.rest}\n`;
        });
    }
    
    // Display the table in a copy-friendly format
    copyTable.innerHTML = `<pre>${tableHtml}</pre>`;
}

function copyTableToClipboard() {
    const tableText = copyTable.querySelector('pre').textContent;
    
    // Use the Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(tableText).then(() => {
            showCopySuccessToast();
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(tableText);
        });
    } else {
        fallbackCopyTextToClipboard(tableText);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccessToast();
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showError('Failed to copy table. Please select and copy manually.');
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccessToast() {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check mr-2"></i>
            <span>Table copied to clipboard!</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Data Insights Functions
async function showDataInsights() {
    try {
        showLoading();
        
        // Fetch all the data we need
        const [exerciseData, mostCommon, dailyStats] = await Promise.all([
            fetch('/api/exercise-data').then(res => res.json()),
            fetch('/api/exercises/stats/most-common?limit=10').then(res => res.json()),
            fetch('/api/workouts/stats/daily').then(res => res.json())
        ]);
        
        // Populate overall statistics
        populateOverallStats(exerciseData);
        
        // Populate most common exercises
        populateMostCommonExercises(mostCommon);
        
        // Populate category breakdown
        populateCategoryBreakdown(exerciseData);
        
        // Populate daily patterns
        populateDailyPatterns(dailyStats);
        
        // Show the insights section
        dataInsights.classList.remove('hidden');
        dataInsights.scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('Error loading data insights:', error);
        showToast('Error loading data insights', 'error');
    } finally {
        hideLoading();
    }
}

function hideDataInsights() {
    dataInsights.classList.add('hidden');
}

function populateOverallStats(data) {
    const statsContainer = document.getElementById('overallStats');
    const summary = data.metadata?.summary || {};
    
    statsContainer.innerHTML = `
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Total Workouts:</span>
            <span class="font-semibold text-blue-800">${summary.total_workouts || 0}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Total Days:</span>
            <span class="font-semibold text-blue-800">${summary.total_days || 0}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Unique Exercises:</span>
            <span class="font-semibold text-blue-800">${summary.total_unique_exercises || 0}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Date Range:</span>
            <span class="font-semibold text-blue-800">${summary.date_range?.start || 'N/A'} to ${summary.date_range?.end || 'N/A'}</span>
        </div>
    `;
}

function populateMostCommonExercises(data) {
    const container = document.getElementById('mostCommonExercises');
    const exercises = data.mostCommon || [];
    
    container.innerHTML = exercises.map((item, index) => `
        <div class="flex justify-between items-center">
            <span class="text-sm text-green-700">${index + 1}. ${item.exercise}</span>
            <span class="font-semibold text-green-800">${item.count}</span>
        </div>
    `).join('');
}

function populateCategoryBreakdown(data) {
    const container = document.getElementById('categoryBreakdown');
    const categoryCounts = data.categoryCounts || {};
    
    container.innerHTML = Object.entries(categoryCounts).map(([category, count]) => `
        <div class="flex justify-between items-center">
            <span class="text-sm text-purple-700">${category}:</span>
            <span class="font-semibold text-purple-800">${count} exercises</span>
        </div>
    `).join('');
}

function populateDailyPatterns(data) {
    const container = document.getElementById('dailyPatterns');
    
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${data.totalDays || 0}</div>
                <div class="text-sm text-orange-700">Total Days</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${data.totalWorkouts || 0}</div>
                <div class="text-sm text-orange-700">Total Workouts</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${data.averageWorkoutsPerDay || 0}</div>
                <div class="text-sm text-orange-700">Avg per Day</div>
            </div>
        </div>
        ${data.multiWorkoutDays && data.multiWorkoutDays.length > 0 ? `
            <div class="mt-4">
                <h4 class="font-semibold text-orange-800 mb-2">Days with Multiple Workouts:</h4>
                <div class="space-y-1">
                    ${data.multiWorkoutDays.slice(0, 5).map(([date, count]) => `
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-orange-700">${date}</span>
                            <span class="font-semibold text-orange-800">${count} workouts</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

// Global variable to store current workout (already declared at top)

// Regenerate a single phase
async function regeneratePhase(phaseIndex) {
    if (!currentWorkout) return;
    
    try {
        const intensity = document.querySelector('input[name="intensity"]:checked').value;
        const workoutType = document.querySelector('input[name="workoutType"]:checked').value;
        
        const response = await fetch('/api/generate-workout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                intensity,
                workoutType
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate workout');
        }
        
        const newWorkout = await response.json();
        
        // Replace the specific phase
        currentWorkout.phases[phaseIndex] = newWorkout.phases[phaseIndex];
        
        // Re-render the workout
        displayGeneratedWorkout(currentWorkout);
        
        showSuccessToast('Phase regenerated successfully!');
    } catch (error) {
        console.error('Error regenerating phase:', error);
        showError('Failed to regenerate phase. Please try again.');
    }
}

// Remove an exercise from a phase
function removeExercise(phaseIndex, exerciseIndex) {
    if (!currentWorkout) return;
    
    currentWorkout.phases[phaseIndex].exercises.splice(exerciseIndex, 1);
    
    // Re-render the workout
    displayGeneratedWorkout(currentWorkout);
    
    showSuccessToast('Exercise removed successfully!');
}

// Remove an entire phase
function removePhase(phaseIndex) {
    if (!currentWorkout) return;
    
    // Don't allow removing all phases
    if (currentWorkout.phases.length <= 1) {
        showError('Cannot remove the last remaining phase');
        return;
    }
    
    const phaseName = currentWorkout.phases[phaseIndex].name;
    currentWorkout.phases.splice(phaseIndex, 1);
    
    // Re-render the workout
    displayGeneratedWorkout(currentWorkout);
    
    showSuccessToast(`${phaseName} phase removed successfully!`);
}

// Add a custom exercise
function addCustomExercise() {
    if (!currentWorkout) return;
    
    const phaseName = document.getElementById('customPhaseSelect').value;
    const exerciseName = document.getElementById('customExerciseName').value;
    const sets = document.getElementById('customSets').value;
    const reps = document.getElementById('customReps').value;
    const rest = document.getElementById('customRest').value;
    const duration = document.getElementById('customDuration').value;
    
    if (!exerciseName.trim()) {
        showError('Please enter an exercise name');
        return;
    }
    
    // Find the phase
    const phase = currentWorkout.phases.find(p => p.name === phaseName);
    if (!phase) {
        showError('Phase not found');
        return;
    }
    
    // Create the exercise object
    const exercise = {
        name: exerciseName.trim()
    };
    
    if (sets) exercise.sets = sets;
    if (reps) exercise.reps = reps;
    if (rest) exercise.rest = rest;
    if (duration) exercise.duration = duration;
    
    // Add the exercise to the phase
    phase.exercises.push(exercise);
    
    // Clear the form
    document.getElementById('customExerciseName').value = '';
    document.getElementById('customSets').value = '';
    document.getElementById('customReps').value = '';
    document.getElementById('customRest').value = '';
    document.getElementById('customDuration').value = '';
    
    // Re-render the workout
    displayGeneratedWorkout(currentWorkout);
    
    showSuccessToast('Custom exercise added successfully!');
}

// Add a new phase
function addNewPhase() {
    if (!currentWorkout) return;
    
    // Get phase name from user
    const phaseName = prompt('Enter the name for the new phase:');
    if (!phaseName || !phaseName.trim()) {
        return;
    }
    
    // Create new empty phase
    const newPhase = {
        name: phaseName.trim(),
        exercises: [],
        timing: null
    };
    
    // Add the phase to the workout
    currentWorkout.phases.push(newPhase);
    
    // Re-render the workout
    displayGeneratedWorkout(currentWorkout);
    
    showSuccessToast(`${phaseName} phase added successfully!`);
}

function showSuccessToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Data Insights Functions
async function showDataInsights() {
    try {
        showLoading();
        
        // Fetch all the data we need
        const [exerciseData, mostCommon, dailyStats] = await Promise.all([
            fetch('/api/exercise-data').then(res => res.json()),
            fetch('/api/exercises/stats/most-common?limit=10').then(res => res.json()),
            fetch('/api/workouts/stats/daily').then(res => res.json())
        ]);
        
        // Populate overall statistics
        populateOverallStats(exerciseData);
        
        // Populate most common exercises
        populateMostCommonExercises(mostCommon);
        
        // Populate category breakdown
        populateCategoryBreakdown(exerciseData);
        
        // Populate daily patterns
        populateDailyPatterns(dailyStats);
        
        // Show the insights section
        dataInsights.classList.remove('hidden');
        dataInsights.scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('Error loading data insights:', error);
        showToast('Error loading data insights', 'error');
    } finally {
        hideLoading();
    }
}

function hideDataInsights() {
    dataInsights.classList.add('hidden');
}

function populateOverallStats(data) {
    const statsContainer = document.getElementById('overallStats');
    const summary = data.metadata?.summary || {};
    
    statsContainer.innerHTML = `
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Total Workouts:</span>
            <span class="font-semibold text-blue-800">${summary.total_workouts || 0}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Total Days:</span>
            <span class="font-semibold text-blue-800">${summary.total_days || 0}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Unique Exercises:</span>
            <span class="font-semibold text-blue-800">${summary.total_unique_exercises || 0}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-blue-700">Date Range:</span>
            <span class="font-semibold text-blue-800">${summary.date_range?.start || 'N/A'} to ${summary.date_range?.end || 'N/A'}</span>
        </div>
    `;
}

function populateMostCommonExercises(data) {
    const container = document.getElementById('mostCommonExercises');
    const exercises = data.mostCommon || [];
    
    container.innerHTML = exercises.map((item, index) => `
        <div class="flex justify-between items-center">
            <span class="text-sm text-green-700">${index + 1}. ${item.exercise}</span>
            <span class="font-semibold text-green-800">${item.count}</span>
        </div>
    `).join('');
}

function populateCategoryBreakdown(data) {
    const container = document.getElementById('categoryBreakdown');
    const categoryCounts = data.categoryCounts || {};
    
    container.innerHTML = Object.entries(categoryCounts).map(([category, count]) => `
        <div class="flex justify-between items-center">
            <span class="text-sm text-purple-700">${category}:</span>
            <span class="font-semibold text-purple-800">${count} exercises</span>
        </div>
    `).join('');
}

function populateDailyPatterns(data) {
    const container = document.getElementById('dailyPatterns');
    
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${data.totalDays || 0}</div>
                <div class="text-sm text-orange-700">Total Days</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${data.totalWorkouts || 0}</div>
                <div class="text-sm text-orange-700">Total Workouts</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${data.averageWorkoutsPerDay || 0}</div>
                <div class="text-sm text-orange-700">Avg per Day</div>
            </div>
        </div>
        ${data.multiWorkoutDays && data.multiWorkoutDays.length > 0 ? `
            <div class="mt-4">
                <h4 class="font-semibold text-orange-800 mb-2">Days with Multiple Workouts:</h4>
                <div class="space-y-1">
                    ${data.multiWorkoutDays.slice(0, 5).map(([date, count]) => `
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-orange-700">${date}</span>
                            <span class="font-semibold text-orange-800">${count} workouts</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
}