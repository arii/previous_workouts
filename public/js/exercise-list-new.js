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
        closeModal.addEventListener('click', closeModalHandler);
        closeModal.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeModalHandler();
            }
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalHandler();
            }
        });
        
        // Handle Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModalHandler();
            }
        });
    }
    
    function closeModalHandler() {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        // Return focus to the element that opened the modal
        const lastFocusedElement = document.querySelector('[data-last-focused]');
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement.removeAttribute('data-last-focused');
        }
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
    const exerciseGrid = document.getElementById('exerciseGrid');
    const showingCount = document.getElementById('showingCount');
    const noResults = document.getElementById('noResults');

    if (!exerciseGrid) return;

    // Update count
    if (showingCount) showingCount.textContent = filteredExercises.length;

    // Clear existing content
    exerciseGrid.innerHTML = '';

    if (filteredExercises.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    // Group exercises by category
    const exercisesByCategory = {};
    filteredExercises.forEach(exercise => {
        if (!exercisesByCategory[exercise.category]) {
            exercisesByCategory[exercise.category] = [];
        }
        exercisesByCategory[exercise.category].push(exercise);
    });

    // Create category sections
    Object.entries(exercisesByCategory).forEach(([category, exercises]) => {
        const categorySection = createCategorySection(category, exercises);
        exerciseGrid.appendChild(categorySection);
    });
}

function createCategorySection(category, exercises) {
    const section = document.createElement('div');
    
    const categoryInfo = getCategoryInfo(category);
    
    section.innerHTML = `
        <div class="mb-6">
            <div class="bg-gradient-to-r ${categoryInfo.color} rounded-xl p-4 mb-4 shadow-lg">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                            <i class="${categoryInfo.icon} text-white text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-white">${category}</h2>
                            <p class="text-white text-opacity-80 text-sm">${exercises.length} exercises</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-white text-opacity-80 text-sm">Total Usage</div>
                        <div class="text-2xl font-bold text-white">
                            ${exercises.reduce((sum, ex) => sum + ex.frequency, 0)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            ${exercises.map(exercise => createExerciseCard(exercise)).join('')}
        </div>
    `;
    
    return section;
}

function createExerciseCard(exercise) {
    const intensity = getExerciseIntensity(exercise);
    const intensityColors = getIntensityColors(intensity);
    const categoryInfo = getCategoryInfo(exercise.category);
    const safeExerciseName = exercise.name.replace(/'/g, "\\'");
    
    // Get frequency emoji
    const frequencyEmoji = getFrequencyEmoji(exercise.frequency);
    
    return `
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 border-2 ${intensityColors.border} hover:border-opacity-100 touch-manipulation" 
             onclick="viewExerciseDetails('${safeExerciseName}')"
             role="button"
             tabindex="0"
             aria-label="View details for ${exercise.name} exercise"
             onkeydown="handleCardKeydown(event, '${safeExerciseName}')">
            <div class="p-6">
                <!-- Simple, clean layout -->
                <div class="text-center">
                    <h3 class="font-bold text-gray-900 text-lg mb-2">${exercise.name}</h3>
                    <div class="flex items-center justify-center space-x-3 mb-3">
                        <span class="text-3xl">${frequencyEmoji}</span>
                        <span class="text-3xl font-bold text-gray-900">${exercise.frequency}</span>
                    </div>
                    <span class="text-sm text-gray-500">${exercise.category}</span>
                </div>
            </div>
        </div>
    `;
}

function getCategoryInfo(category) {
    const categoryMap = {
        'Warmup': { color: 'bg-orange-500', icon: 'fas fa-fire' },
        'Cardio': { color: 'bg-red-500', icon: 'fas fa-heartbeat' },
        'Strength': { color: 'bg-blue-500', icon: 'fas fa-dumbbell' },
        'Accessory': { color: 'bg-purple-500', icon: 'fas fa-plus' },
        'Recovery': { color: 'bg-green-500', icon: 'fas fa-leaf' }
    };
    return categoryMap[category] || { color: 'bg-gray-500', icon: 'fas fa-question' };
}

function getExerciseIntensity(exercise) {
    // Determine intensity based on frequency and recency
    const frequency = exercise.frequency;
    const daysSinceLastUse = exercise.dates[0] ? 
        Math.floor((new Date() - new Date(exercise.dates[0])) / (1000 * 60 * 60 * 24)) : 999;
    
    if (frequency >= 10 && daysSinceLastUse <= 30) return 'High';
    if (frequency >= 5 && daysSinceLastUse <= 60) return 'Medium';
    if (frequency >= 2 && daysSinceLastUse <= 90) return 'Low';
    return 'Rare';
}

function getIntensityColors(intensity) {
    const colorMap = {
        'High': { bg: 'bg-gradient-to-r from-green-400 to-green-500', text: 'text-white', border: 'border-green-400' },
        'Medium': { bg: 'bg-gradient-to-r from-yellow-400 to-yellow-500', text: 'text-white', border: 'border-yellow-400' },
        'Low': { bg: 'bg-gradient-to-r from-orange-400 to-orange-500', text: 'text-white', border: 'border-orange-400' },
        'Rare': { bg: 'bg-gradient-to-r from-gray-400 to-gray-500', text: 'text-white', border: 'border-gray-400' }
    };
    return colorMap[intensity] || colorMap['Rare'];
}

function getFrequencyEmoji(frequency) {
    if (frequency >= 20) return '🔥';
    if (frequency >= 15) return '⭐';
    if (frequency >= 10) return '💪';
    if (frequency >= 5) return '👍';
    if (frequency >= 2) return '👌';
    return '🆕';
}

function viewExerciseDetails(exerciseName) {
    // Remove the popup entirely - it's not helpful
    // Just show a brief tooltip or do nothing
    console.log(`Exercise clicked: ${exerciseName}`);
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

// Keyboard navigation for exercise cards
function handleCardKeydown(event, exerciseName) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        viewExerciseDetails(exerciseName);
    }
}

// Global function for keyboard navigation
window.handleCardKeydown = handleCardKeydown;
