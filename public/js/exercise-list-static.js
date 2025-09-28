// Exercise List Page JavaScript
let allExercises = [];
let filteredExercises = [];

document.addEventListener('DOMContentLoaded', function() {
    loadExerciseData();
    setupEventListeners();
});

function setupEventListeners() {
    const searchInput = document.getElementById('exerciseSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (sortBy) {
        sortBy.addEventListener('change', applyFilters);
    }
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}

function loadExerciseData() {
    try {
        console.log('Loading exercise data...');
        const exerciseData = window.EXERCISE_DATA;
        if (!exerciseData) {
            console.error('EXERCISE_DATA not found');
            showError('Failed to load exercise data');
            return;
        }

        console.log('Exercise data found:', exerciseData);
        
        // Extract all exercises from categorized data
        allExercises = [];
        const categorizedExercises = exerciseData.categorized_exercises || {};
        
        console.log('Categorized exercises:', categorizedExercises);
        
        Object.entries(categorizedExercises).forEach(([category, exercises]) => {
            console.log(`Processing ${category}: ${exercises.length} exercises`);
            exercises.forEach(exerciseData => {
                const exercise = {
                    name: exerciseData.exercise,
                    category: category,
                    phase: exerciseData.phase,
                    date: exerciseData.date,
                    filename: exerciseData.filename
                };
                allExercises.push(exercise);
            });
        });
        
        console.log(`Total exercises before deduplication: ${allExercises.length}`);

        // Count frequency of each unique exercise
        const exerciseFrequency = {};
        allExercises.forEach(exercise => {
            if (exerciseFrequency[exercise.name]) {
                exerciseFrequency[exercise.name]++;
            } else {
                exerciseFrequency[exercise.name] = 1;
            }
        });

        // Create unique exercises with frequency data
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
            dates: Array.from(exercise.dates)
        }));

        console.log(`Loaded ${allExercises.length} unique exercises`);
        
        // Update statistics
        updateStatistics();
        
        // Apply initial filters
        applyFilters();
        
    } catch (error) {
        console.error('Error loading exercise data:', error);
        showError('Failed to load exercises');
    }
}

function updateStatistics() {
    const totalExercises = document.getElementById('totalExercises');
    const uniqueExercises = document.getElementById('uniqueExercises');
    const mostUsedExercise = document.getElementById('mostUsedExercise');
    const categoriesCount = document.getElementById('categoriesCount');

    console.log('Updating statistics with', allExercises.length, 'exercises');

    if (totalExercises) {
        const total = allExercises.reduce((sum, ex) => sum + ex.frequency, 0);
        totalExercises.textContent = total;
        console.log('Total exercises:', total);
    }
    
    if (uniqueExercises) {
        uniqueExercises.textContent = allExercises.length;
        console.log('Unique exercises:', allExercises.length);
    }
    
    if (mostUsedExercise) {
        if (allExercises.length > 0) {
            const mostUsed = allExercises.reduce((max, ex) => 
                ex.frequency > max.frequency ? ex : max, allExercises[0]);
            mostUsedExercise.textContent = mostUsed ? mostUsed.name : '-';
            console.log('Most used exercise:', mostUsed ? mostUsed.name : 'none');
        } else {
            mostUsedExercise.textContent = '-';
        }
    }
    
    if (categoriesCount) {
        const categories = new Set(allExercises.map(ex => ex.category));
        categoriesCount.textContent = categories.size;
        console.log('Categories count:', categories.size);
    }
}

function applyFilters() {
    const searchTerm = document.getElementById('exerciseSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const sortBy = document.getElementById('sortBy')?.value || 'name';

    // Filter exercises
    filteredExercises = allExercises.filter(exercise => {
        const matchesSearch = exercise.name.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || exercise.category === categoryFilter;
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
}

function clearFilters() {
    const searchInput = document.getElementById('exerciseSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');

    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (sortBy) sortBy.value = 'name';

    applyFilters();
}

function displayExercises() {
    console.log('Displaying exercises...');
    console.log('Filtered exercises:', filteredExercises.length);
    console.log('All exercises:', allExercises.length);
    
    const exerciseList = document.getElementById('exerciseList');
    const showingCount = document.getElementById('showingCount');
    const totalCount = document.getElementById('totalCount');
    const noResults = document.getElementById('noResults');

    if (!exerciseList) {
        console.error('exerciseList element not found');
        return;
    }

    // Update counts
    if (showingCount) showingCount.textContent = filteredExercises.length;
    if (totalCount) totalCount.textContent = allExercises.length;

    // Clear existing content
    exerciseList.innerHTML = '';

    if (filteredExercises.length === 0) {
        console.log('No exercises to display, showing no results message');
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    console.log('Creating exercise items...');
    // Create exercise items
    filteredExercises.forEach((exercise, index) => {
        if (index < 5) { // Log first 5 exercises
            console.log(`Creating item for: ${exercise.name}`);
        }
        const exerciseItem = createExerciseItem(exercise);
        exerciseList.appendChild(exerciseItem);
    });
    
    console.log('Exercise items created and added to DOM');
}

function createExerciseItem(exercise) {
    const item = document.createElement('div');
    item.className = 'bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer';
    
    const categoryColors = {
        'Warmup': 'bg-orange-100 text-orange-800',
        'Cardio': 'bg-red-100 text-red-800',
        'Strength': 'bg-blue-100 text-blue-800',
        'Accessory': 'bg-purple-100 text-purple-800',
        'Recovery': 'bg-green-100 text-green-800'
    };

    const categoryClass = categoryColors[exercise.category] || 'bg-gray-100 text-gray-800';

    item.innerHTML = `
        <div class="flex justify-between items-start">
            <div class="flex-1">
                <h3 class="font-semibold text-gray-800 mb-1">${exercise.name}</h3>
                <div class="flex items-center space-x-2 mb-2">
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${categoryClass}">
                        ${exercise.category}
                    </span>
                    <span class="text-sm text-gray-600">
                        Used ${exercise.frequency} time${exercise.frequency !== 1 ? 's' : ''}
                    </span>
                </div>
                <div class="text-sm text-gray-500">
                    <div>Phases: ${exercise.phases.slice(0, 3).join(', ')}${exercise.phases.length > 3 ? '...' : ''}</div>
                    <div>Recent: ${exercise.dates.slice(0, 2).join(', ')}${exercise.dates.length > 2 ? '...' : ''}</div>
                </div>
            </div>
            <div class="ml-4">
                <button class="text-blue-600 hover:text-blue-800" onclick="viewExerciseDetails('${exercise.name}')">
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

    // Create modal content
    const modalContent = `
        <div class="space-y-4">
            <div class="text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${exercise.name}</h3>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    ${exercise.category}
                </span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-gray-50 rounded-lg p-3">
                    <div class="text-2xl font-bold text-blue-600">${exercise.frequency}</div>
                    <div class="text-sm text-gray-600">Total Uses</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                    <div class="text-2xl font-bold text-green-600">${exercise.phases.length}</div>
                    <div class="text-sm text-gray-600">Different Phases</div>
                </div>
            </div>
            
            <div>
                <h4 class="font-semibold text-gray-800 mb-2">Used in Phases:</h4>
                <div class="flex flex-wrap gap-2">
                    ${exercise.phases.map(phase => 
                        `<span class="px-2 py-1 bg-gray-200 rounded text-sm">${phase}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div>
                <h4 class="font-semibold text-gray-800 mb-2">Recent Workouts:</h4>
                <div class="space-y-1 max-h-32 overflow-y-auto">
                    ${exercise.dates.slice(0, 10).map(date => 
                        `<div class="text-sm text-gray-600">${new Date(date).toLocaleDateString()}</div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;

    // Show modal (reuse workout modal structure)
    const modal = document.getElementById('workoutModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContentDiv = document.getElementById('modalContent');

    if (modal && modalTitle && modalContentDiv) {
        modalTitle.textContent = `Exercise: ${exercise.name}`;
        modalContentDiv.innerHTML = modalContent;
        modal.classList.remove('hidden');
    }
}

function showError(message) {
    console.error(message);
    // You could add a toast notification here
}

// Set up modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('workoutModal');
    const closeModal = document.getElementById('closeModal');
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});
