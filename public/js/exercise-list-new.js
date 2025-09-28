// New Exercise List JavaScript - Clean and Simple
let allExercises = [];
let filteredExercises = [];

document.addEventListener('DOMContentLoaded', function() {
    loadExerciseData();
    setupEventListeners();
});

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(applyFilters, 300));
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (sortBy) {
        sortBy.addEventListener('change', applyFilters);
    }

    // Modal event listeners
    const modal = document.getElementById('exerciseModal');
    const closeModal = document.getElementById('closeModal');
    
    if (closeModal) {
        closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
}

function loadExerciseData() {
    try {
        const exerciseData = window.EXERCISE_DATA;
        if (!exerciseData) {
            console.error('EXERCISE_DATA not found');
            return;
        }

        // Extract all exercises from categorized data
        allExercises = [];
        const categorizedExercises = exerciseData.categorized_exercises || {};
        
        Object.entries(categorizedExercises).forEach(([category, exercises]) => {
            exercises.forEach(exerciseData => {
                allExercises.push({
                    name: exerciseData.exercise,
                    category: category,
                    phase: exerciseData.phase,
                    date: exerciseData.date,
                    filename: exerciseData.filename
                });
            });
        });

        // Create unique exercises with frequency data
        const exerciseFrequency = {};
        allExercises.forEach(exercise => {
            exerciseFrequency[exercise.name] = (exerciseFrequency[exercise.name] || 0) + 1;
        });

        const uniqueExercises = {};
        allExercises.forEach(exercise => {
            if (!uniqueExercises[exercise.name]) {
                uniqueExercises[exercise.name] = {
                    name: exercise.name,
                    category: exercise.category,
                    frequency: exerciseFrequency[exercise.name],
                    phases: new Set(),
                    dates: new Set()
                };
            }
            uniqueExercises[exercise.name].phases.add(exercise.phase);
            uniqueExercises[exercise.name].dates.add(exercise.date);
        });

        // Convert back to array
        allExercises = Object.values(uniqueExercises).map(exercise => ({
            ...exercise,
            phases: Array.from(exercise.phases),
            dates: Array.from(exercise.dates).sort().reverse() // Most recent first
        }));

        console.log(`Loaded ${allExercises.length} unique exercises`);
        
        updateStatistics();
        applyFilters();
        
    } catch (error) {
        console.error('Error loading exercise data:', error);
    }
}

function updateStatistics() {
    const totalCount = document.getElementById('totalCount');
    const uniqueCount = document.getElementById('uniqueCount');
    const mostUsed = document.getElementById('mostUsed');
    const categoriesCount = document.getElementById('categoriesCount');

    if (totalCount) {
        totalCount.textContent = allExercises.reduce((sum, ex) => sum + ex.frequency, 0);
    }
    
    if (uniqueCount) {
        uniqueCount.textContent = allExercises.length;
    }
    
    if (mostUsed) {
        if (allExercises.length > 0) {
            const mostUsedExercise = allExercises.reduce((max, ex) => 
                ex.frequency > max.frequency ? ex : max, allExercises[0]);
            mostUsed.textContent = mostUsedExercise.name;
        } else {
            mostUsed.textContent = '-';
        }
    }
    
    if (categoriesCount) {
        const categories = new Set(allExercises.map(ex => ex.category));
        categoriesCount.textContent = categories.size;
    }
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const sortBy = document.getElementById('sortBy')?.value || 'name';

    // Filter exercises
    filteredExercises = allExercises.filter(exercise => {
        const matchesSearch = exercise.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || exercise.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    // Sort exercises
    filteredExercises.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'frequency':
                return b.frequency - a.frequency;
            case 'recent':
                return new Date(b.dates[0]) - new Date(a.dates[0]);
            default:
                return 0;
        }
    });

    displayExercises();
}

function displayExercises() {
    const exerciseList = document.getElementById('exerciseList');
    const showingCount = document.getElementById('showingCount');
    const noResults = document.getElementById('noResults');

    if (!exerciseList) return;

    // Update count
    if (showingCount) showingCount.textContent = filteredExercises.length;

    // Clear existing content
    exerciseList.innerHTML = '';

    if (filteredExercises.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    // Create exercise items
    filteredExercises.forEach(exercise => {
        const exerciseItem = createExerciseItem(exercise);
        exerciseList.appendChild(exerciseItem);
    });
}

function createExerciseItem(exercise) {
    const item = document.createElement('div');
    item.className = 'p-4 hover:bg-gray-50 cursor-pointer transition-colors';
    
    const categoryColors = {
        'Warmup': 'bg-orange-100 text-orange-800',
        'Cardio': 'bg-red-100 text-red-800',
        'Strength': 'bg-blue-100 text-blue-800',
        'Accessory': 'bg-purple-100 text-purple-800',
        'Recovery': 'bg-green-100 text-green-800'
    };

    const categoryClass = categoryColors[exercise.category] || 'bg-gray-100 text-gray-800';
    const mostRecentDate = exercise.dates[0] ? new Date(exercise.dates[0]).toLocaleDateString() : 'Unknown';

    item.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="flex-1">
                <h3 class="font-semibold text-gray-800 mb-1">${exercise.name}</h3>
                <div class="flex items-center space-x-3 text-sm text-gray-600">
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${categoryClass}">
                        ${exercise.category}
                    </span>
                    <span>Used ${exercise.frequency} time${exercise.frequency !== 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>Last: ${mostRecentDate}</span>
                </div>
            </div>
            <div class="ml-4">
                <button class="text-blue-600 hover:text-blue-800 p-2" onclick="viewExerciseDetails('${exercise.name}')">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
    `;

    // Make entire item clickable
    item.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'I') {
            return;
        }
        viewExerciseDetails(exercise.name);
    });

    return item;
}

function viewExerciseDetails(exerciseName) {
    const exercise = allExercises.find(ex => ex.name === exerciseName);
    if (!exercise) return;

    const modal = document.getElementById('exerciseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    if (!modal || !modalTitle || !modalContent) return;

    modalTitle.textContent = exercise.name;
    
    const categoryColors = {
        'Warmup': 'bg-orange-100 text-orange-800',
        'Cardio': 'bg-red-100 text-red-800',
        'Strength': 'bg-blue-100 text-blue-800',
        'Accessory': 'bg-purple-100 text-purple-800',
        'Recovery': 'bg-green-100 text-green-800'
    };

    const categoryClass = categoryColors[exercise.category] || 'bg-gray-100 text-gray-800';

    modalContent.innerHTML = `
        <div class="space-y-6">
            <div class="text-center">
                <span class="px-3 py-1 rounded-full text-sm font-medium ${categoryClass}">
                    ${exercise.category}
                </span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="text-2xl font-bold text-blue-600">${exercise.frequency}</div>
                    <div class="text-sm text-gray-600">Total Uses</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="text-2xl font-bold text-green-600">${exercise.phases.length}</div>
                    <div class="text-sm text-gray-600">Different Phases</div>
                </div>
            </div>
            
            <div>
                <h4 class="font-semibold text-gray-800 mb-3">Used in Phases:</h4>
                <div class="flex flex-wrap gap-2">
                    ${exercise.phases.map(phase => 
                        `<span class="px-2 py-1 bg-gray-200 rounded text-sm">${phase}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div>
                <h4 class="font-semibold text-gray-800 mb-3">Recent Workouts:</h4>
                <div class="space-y-1 max-h-40 overflow-y-auto">
                    ${exercise.dates.slice(0, 10).map(date => 
                        `<div class="text-sm text-gray-600">${new Date(date).toLocaleDateString()}</div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
