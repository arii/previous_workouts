// Global variables
let allExercises = [];
let filteredExercises = [];
let exerciseData = {};
let currentView = 'grid';

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const clearFilters = document.getElementById('clearFilters');
const resultCount = document.getElementById('resultCount');
const exerciseResults = document.getElementById('exerciseResults');
const viewAsGrid = document.getElementById('viewAsGrid');
const viewAsList = document.getElementById('viewAsList');
const loadingOverlay = document.getElementById('loadingOverlay');

// Statistics elements
const totalExercises = document.getElementById('totalExercises');
const totalWorkouts = document.getElementById('totalWorkouts');
const totalCategories = document.getElementById('totalCategories');
const dateRange = document.getElementById('dateRange');
const categoryBreakdown = document.getElementById('categoryBreakdown');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    
    // Show initial loading state
    exerciseResults.innerHTML = `
        <div class="text-center py-8 text-gray-500">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Loading exercise data...</p>
        </div>
    `;
    
    loadData();
});

function setupEventListeners() {
    searchInput.addEventListener('input', filterExercises);
    categoryFilter.addEventListener('change', filterExercises);
    sortFilter.addEventListener('change', filterExercises);
    clearFilters.addEventListener('click', clearAllFilters);
    viewAsGrid.addEventListener('click', () => setView('grid'));
    viewAsList.addEventListener('click', () => setView('list'));
}

async function loadData() {
    showLoading();
    
    try {
        // Load exercise data and statistics
        const [exerciseDataResponse, mostCommonResponse, dailyStatsResponse] = await Promise.all([
            fetch('/api/exercise-data').then(res => res.json()),
            fetch('/api/exercises/stats/most-common?limit=100').then(res => res.json()),
            fetch('/api/workouts/stats/daily').then(res => res.json())
        ]);

        exerciseData = exerciseDataResponse;
        
        // Process all exercises from the categorized data
        allExercises = [];
        
        // Get exercises by category from the server
        const categoryPromises = exerciseData.categories.map(category => 
            fetch(`/api/exercises/${category}`).then(res => res.json())
        );
        
        const categoryData = await Promise.all(categoryPromises);
        
        categoryData.forEach(categoryInfo => {
            const category = categoryInfo.category;
            const exercises = categoryInfo.exercises || [];
            
            exercises.forEach(exerciseName => {
                allExercises.push({
                    name: exerciseName,
                    category: category,
                    frequency: exerciseData.metadata?.summary?.most_common_exercises?.[exerciseName] || 0,
                    originalData: { exercise: exerciseName }
                });
            });
        });

        // Remove duplicates and sort
        allExercises = removeDuplicates(allExercises);
        filteredExercises = [...allExercises];

        // Populate statistics
        populateStatistics(exerciseData, dailyStatsResponse);
        populateCategoryBreakdown();
        
        // Initial display
        displayExercises();
        updateResultCount();
        
        // Show success message
        showToast('Data loaded successfully!', 'success');

    } catch (error) {
        console.error('Error loading data:', error);
        showToast('Error loading data. Please try again.', 'error');
        
        // Show error state
        exerciseResults.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-exclamation-triangle text-4xl mb-4 text-red-500"></i>
                <p class="text-lg font-medium">Failed to load data</p>
                <p class="text-sm mt-2">Please check your connection and try again.</p>
                <button onclick="loadData()" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <i class="fas fa-redo mr-2"></i>
                    Retry
                </button>
            </div>
        `;
    } finally {
        hideLoading();
    }
}

function removeDuplicates(exercises) {
    const seen = new Set();
    return exercises.filter(exercise => {
        const key = `${exercise.name}-${exercise.category}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

function populateStatistics(exerciseData, dailyStats) {
    const summary = exerciseData.metadata?.summary || {};
    
    totalExercises.textContent = summary.total_unique_exercises || allExercises.length;
    totalWorkouts.textContent = summary.total_workouts || 0;
    totalCategories.textContent = Object.keys(exerciseData.categories || {}).length;
    
    const startDate = summary.date_range?.start || 'Unknown';
    const endDate = summary.date_range?.end || 'Unknown';
    dateRange.textContent = `${startDate} - ${endDate}`;
}

function populateCategoryBreakdown() {
    const categoryStats = exerciseData.categoryCounts || {};
    
    // Create category cards
    categoryBreakdown.innerHTML = Object.entries(categoryStats).map(([category, count]) => {
        const colors = {
            'Warmup': 'from-yellow-50 to-yellow-100 text-yellow-800',
            'Cardio': 'from-red-50 to-red-100 text-red-800',
            'Strength': 'from-blue-50 to-blue-100 text-blue-800',
            'Accessory': 'from-green-50 to-green-100 text-green-800',
            'Recovery': 'from-purple-50 to-purple-100 text-purple-800'
        };
        
        const colorClass = colors[category] || 'from-gray-50 to-gray-100 text-gray-800';
        
        return `
            <div class="bg-gradient-to-br ${colorClass} rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow" 
                 onclick="filterByCategory('${category}')">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-semibold">${category}</h3>
                        <p class="text-sm opacity-75">${count} exercises</p>
                    </div>
                    <i class="fas fa-${getCategoryIcon(category)} text-2xl opacity-60"></i>
                </div>
            </div>
        `;
    }).join('');
}

function getCategoryIcon(category) {
    const icons = {
        'Warmup': 'fire',
        'Cardio': 'heartbeat',
        'Strength': 'dumbbell',
        'Accessory': 'cogs',
        'Recovery': 'leaf'
    };
    return icons[category] || 'tag';
}

function filterByCategory(category) {
    categoryFilter.value = category;
    filterExercises();
}

function filterExercises() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const sortBy = sortFilter.value;
    
    filteredExercises = allExercises.filter(exercise => {
        const matchesSearch = !searchTerm || exercise.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || exercise.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    // Sort exercises
    filteredExercises.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'frequency':
                return b.frequency - a.frequency;
            case 'category':
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });
    
    displayExercises();
    updateResultCount();
}

function clearAllFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    sortFilter.value = 'name';
    filterExercises();
}

function setView(view) {
    currentView = view;
    
    // Update button styles
    if (view === 'grid') {
        viewAsGrid.className = 'px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors';
        viewAsList.className = 'px-3 py-1 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition-colors';
    } else {
        viewAsGrid.className = 'px-3 py-1 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition-colors';
        viewAsList.className = 'px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors';
    }
    
    displayExercises();
}

function displayExercises() {
    if (currentView === 'grid') {
        displayExercisesAsGrid();
    } else {
        displayExercisesAsList();
    }
}

function displayExercisesAsGrid() {
    exerciseResults.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            ${filteredExercises.map(exercise => `
                <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow fade-in">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="font-medium text-gray-800 text-sm leading-tight">${escapeHtml(exercise.name)}</h3>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(exercise.category)}">
                            ${exercise.category}
                        </span>
                    </div>
                    <div class="text-xs text-gray-500">
                        <i class="fas fa-chart-bar mr-1"></i>
                        Used ${exercise.frequency} times
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function displayExercisesAsList() {
    exerciseResults.innerHTML = `
        <div class="space-y-2">
            ${filteredExercises.map(exercise => `
                <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow fade-in">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <h3 class="font-medium text-gray-800">${escapeHtml(exercise.name)}</h3>
                            <div class="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                <span class="inline-flex items-center">
                                    <i class="fas fa-tag mr-1"></i>
                                    ${exercise.category}
                                </span>
                                <span class="inline-flex items-center">
                                    <i class="fas fa-chart-bar mr-1"></i>
                                    Used ${exercise.frequency} times
                                </span>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryBadgeColor(exercise.category)}">
                            ${exercise.category}
                        </span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function getCategoryBadgeColor(category) {
    const colors = {
        'Warmup': 'bg-yellow-100 text-yellow-800',
        'Cardio': 'bg-red-100 text-red-800',
        'Strength': 'bg-blue-100 text-blue-800',
        'Accessory': 'bg-green-100 text-green-800',
        'Recovery': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
}

function updateResultCount() {
    const count = filteredExercises.length;
    const total = allExercises.length;
    
    if (count === total) {
        resultCount.textContent = `Showing all ${total} exercises`;
    } else {
        resultCount.textContent = `Showing ${count} of ${total} exercises`;
    }
}

function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toastId = 'toast-' + Date.now();
    
    const colors = {
        'success': 'bg-green-500',
        'error': 'bg-red-500',
        'warning': 'bg-yellow-500',
        'info': 'bg-blue-500'
    };
    
    const colorClass = colors[type] || colors['info'];
    
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `${colorClass} text-white px-6 py-3 rounded-lg shadow-lg fade-in`;
    toast.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="removeToast('${toastId}')" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        removeToast(toastId);
    }, 5000);
}

function removeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.remove();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
