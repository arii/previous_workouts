// Global variables
let currentWorkoutId = null;

// DOM elements
const workoutsList = document.getElementById('workoutsList');
const loadingSpinner = document.getElementById('loadingSpinner');
const emptyState = document.getElementById('emptyState');
const workoutModal = document.getElementById('workoutModal');
const detailModal = document.getElementById('detailModal');
const workoutForm = document.getElementById('workoutForm');
const addWorkoutBtn = document.getElementById('addWorkoutBtn');
const addFirstWorkoutBtn = document.getElementById('addFirstWorkoutBtn');
const closeModal = document.getElementById('closeModal');
const closeDetailModal = document.getElementById('closeDetailModal');
const closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
const cancelWorkout = document.getElementById('cancelWorkout');
const deleteWorkoutBtn = document.getElementById('deleteWorkoutBtn');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadWorkouts();
    setupEventListeners();
    setDefaultDate();
});

function setupEventListeners() {
    addWorkoutBtn.addEventListener('click', openWorkoutModal);
    addFirstWorkoutBtn.addEventListener('click', openWorkoutModal);
    closeModal.addEventListener('click', closeWorkoutModal);
    closeDetailModal.addEventListener('click', closeDetailModal);
    closeDetailModalBtn.addEventListener('click', closeDetailModal);
    cancelWorkout.addEventListener('click', closeWorkoutModal);
    deleteWorkoutBtn.addEventListener('click', deleteWorkout);
    workoutForm.addEventListener('submit', handleWorkoutSubmit);
    
    // Close modals when clicking outside
    workoutModal.addEventListener('click', function(e) {
        if (e.target === workoutModal) {
            closeWorkoutModal();
        }
    });
    
    detailModal.addEventListener('click', function(e) {
        if (e.target === detailModal) {
            closeDetailModal();
        }
    });
}

function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('workoutDate').value = today;
}

// API functions
async function loadWorkouts() {
    showLoading();
    
    try {
        const response = await fetch('/api/workouts');
        const workouts = await response.json();
        
        hideLoading();
        
        if (workouts.length === 0) {
            showEmptyState();
        } else {
            hideEmptyState();
            renderWorkouts(workouts);
        }
    } catch (error) {
        hideLoading();
        console.error('Error loading workouts:', error);
        showError('Failed to load workouts');
    }
}

async function loadWorkoutDetails(workoutId) {
    try {
        const response = await fetch(`/api/workouts/${workoutId}`);
        const workout = await response.json();
        return workout;
    } catch (error) {
        console.error('Error loading workout details:', error);
        showError('Failed to load workout details');
        return null;
    }
}

async function addWorkout(workoutData) {
    try {
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workoutData)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showSuccess('Workout added successfully!');
            closeWorkoutModal();
            loadWorkouts();
        } else {
            showError(result.error || 'Failed to add workout');
        }
    } catch (error) {
        console.error('Error adding workout:', error);
        showError('Failed to add workout');
    }
}

async function deleteWorkout() {
    if (!currentWorkoutId) return;
    
    if (!confirm('Are you sure you want to delete this workout? This action cannot be undone.')) {
        return;
    }
    
    try {
        const response = await fetch(`/api/workouts/${currentWorkoutId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showSuccess('Workout deleted successfully!');
            closeDetailModal();
            loadWorkouts();
        } else {
            const result = await response.json();
            showError(result.error || 'Failed to delete workout');
        }
    } catch (error) {
        console.error('Error deleting workout:', error);
        showError('Failed to delete workout');
    }
}

// UI functions
function renderWorkouts(workouts) {
    workoutsList.innerHTML = workouts.map(workout => `
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-1">${escapeHtml(workout.name)}</h3>
                    <p class="text-gray-600">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        ${formatDate(workout.date)}
                    </p>
                </div>
                <div class="text-right">
                    ${workout.duration ? `<p class="text-sm text-gray-500"><i class="fas fa-clock mr-1"></i>${workout.duration} min</p>` : ''}
                    <p class="text-sm text-gray-500">
                        <i class="fas fa-dumbbell mr-1"></i>
                        ${workout.exercise_count || 0} exercises
                    </p>
                </div>
            </div>
            
            ${workout.notes ? `<p class="text-gray-600 mb-4">${escapeHtml(workout.notes)}</p>` : ''}
            
            <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                    <i class="fas fa-clock mr-1"></i>
                    Added ${formatDate(workout.created_at)}
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

async function viewWorkoutDetails(workoutId) {
    currentWorkoutId = workoutId;
    const workout = await loadWorkoutDetails(workoutId);
    
    if (workout) {
        document.getElementById('detailTitle').textContent = workout.name;
        
        const detailsHtml = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-700 mb-2">Workout Info</h4>
                    <p class="text-sm text-gray-600"><strong>Date:</strong> ${formatDate(workout.date)}</p>
                    ${workout.duration ? `<p class="text-sm text-gray-600"><strong>Duration:</strong> ${workout.duration} minutes</p>` : ''}
                    ${workout.notes ? `<p class="text-sm text-gray-600"><strong>Notes:</strong> ${escapeHtml(workout.notes)}</p>` : ''}
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-700 mb-2">Statistics</h4>
                    <p class="text-sm text-gray-600"><strong>Total Exercises:</strong> ${workout.exercises ? workout.exercises.length : 0}</p>
                    <p class="text-sm text-gray-600"><strong>Created:</strong> ${formatDate(workout.created_at)}</p>
                </div>
            </div>
            
            ${workout.exercises && workout.exercises.length > 0 ? `
                <div>
                    <h4 class="font-semibold text-gray-700 mb-3">Exercises</h4>
                    <div class="space-y-3">
                        ${workout.exercises.map(exercise => `
                            <div class="bg-white border border-gray-200 p-4 rounded-lg">
                                <h5 class="font-medium text-gray-800 mb-2">${escapeHtml(exercise.name)}</h5>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                                    ${exercise.sets ? `<span><strong>Sets:</strong> ${exercise.sets}</span>` : ''}
                                    ${exercise.reps ? `<span><strong>Reps:</strong> ${exercise.reps}</span>` : ''}
                                    ${exercise.weight ? `<span><strong>Weight:</strong> ${exercise.weight} lbs</span>` : ''}
                                    ${exercise.duration ? `<span><strong>Duration:</strong> ${exercise.duration} min</span>` : ''}
                                </div>
                                ${exercise.notes ? `<p class="text-sm text-gray-600 mt-2">${escapeHtml(exercise.notes)}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : '<p class="text-gray-500 text-center py-4">No exercises recorded for this workout.</p>'}
        `;
        
        document.getElementById('workoutDetails').innerHTML = detailsHtml;
        detailModal.classList.remove('hidden');
    }
}

function openWorkoutModal() {
    workoutModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeWorkoutModal() {
    workoutModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    workoutForm.reset();
    setDefaultDate();
}

function closeDetailModal() {
    detailModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentWorkoutId = null;
}

function handleWorkoutSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(workoutForm);
    const workoutData = {
        name: formData.get('name'),
        date: formData.get('date'),
        duration: formData.get('duration') ? parseInt(formData.get('duration')) : null,
        notes: formData.get('notes')
    };
    
    addWorkout(workoutData);
}

// Utility functions
function showLoading() {
    loadingSpinner.classList.remove('hidden');
    workoutsList.classList.add('hidden');
    emptyState.classList.add('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
    workoutsList.classList.remove('hidden');
}

function showEmptyState() {
    emptyState.classList.remove('hidden');
    workoutsList.classList.add('hidden');
}

function hideEmptyState() {
    emptyState.classList.add('hidden');
    workoutsList.classList.remove('hidden');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showSuccess(message) {
    // Simple success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-check mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showError(message) {
    // Simple error notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
