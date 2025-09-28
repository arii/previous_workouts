// Static version of data exploration - no API calls needed

// DOM elements
const overallStats = document.getElementById('overallStats');
const mostCommonExercises = document.getElementById('mostCommonExercises');
const categoryBreakdown = document.getElementById('categoryBreakdown');
const dailyPatterns = document.getElementById('dailyPatterns');
const exerciseSearch = document.getElementById('exerciseSearchInput');
const searchResults = document.getElementById('exerciseSearchResults');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadDataInsights();
    setupSearch();
});

// Load all data insights
function loadDataInsights() {
    try {
        const exerciseData = window.EXERCISE_DATA;
        
        // Populate overall statistics
        populateOverallStats(exerciseData);
        
        // Populate most common exercises
        populateMostCommonExercises(exerciseData);
        
        // Populate category breakdown
        populateCategoryBreakdown(exerciseData);
        
        // Populate daily patterns
        populateDailyPatterns(exerciseData);
        
    } catch (error) {
        console.error('Error loading data insights:', error);
    }
}

// Populate overall statistics
function populateOverallStats(data) {
    const summary = data.metadata?.summary || {};
    
    overallStats.innerHTML = `
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

// Populate most common exercises
function populateMostCommonExercises(data) {
    const categorizedExercises = data.categorized_exercises || {};
    const exerciseCounts = {};
    
    // Count all exercises across all categories
    Object.values(categorizedExercises).forEach(exercises => {
        exercises.forEach(exercise => {
            const name = exercise.exercise;
            exerciseCounts[name] = (exerciseCounts[name] || 0) + 1;
        });
    });
    
    // Sort by count and get top 10
    const mostCommon = Object.entries(exerciseCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
    
    mostCommonExercises.innerHTML = mostCommon.map(([exercise, count], index) => `
        <div class="flex justify-between items-center">
            <span class="text-sm text-green-700">${index + 1}. ${exercise}</span>
            <span class="font-semibold text-green-800">${count}</span>
        </div>
    `).join('');
}

// Populate category breakdown
function populateCategoryBreakdown(data) {
    const categorizedExercises = data.categorized_exercises || {};
    const categoryCounts = {};
    
    Object.entries(categorizedExercises).forEach(([category, exercises]) => {
        categoryCounts[category] = exercises.length;
    });
    
    categoryBreakdown.innerHTML = Object.entries(categoryCounts).map(([category, count]) => `
        <div class="flex justify-between items-center">
            <span class="text-sm text-purple-700">${category}:</span>
            <span class="font-semibold text-purple-800">${count} exercises</span>
        </div>
    `).join('');
}

// Populate daily patterns
function populateDailyPatterns(data) {
    const dailyCounts = data.metadata?.summary?.daily_workout_counts || {};
    const totalDays = Object.keys(dailyCounts).length;
    const totalWorkouts = Object.values(dailyCounts).reduce((sum, count) => sum + count, 0);
    const averageWorkoutsPerDay = totalDays > 0 ? (totalWorkouts / totalDays).toFixed(1) : 0;
    
    // Find days with multiple workouts
    const multiWorkoutDays = Object.entries(dailyCounts)
        .filter(([, count]) => count > 1)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
    
    dailyPatterns.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${totalDays}</div>
                <div class="text-sm text-orange-700">Total Days</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-orange-800">${totalWorkouts}</div>
                <div class="text-sm text-orange-700">Total Workouts</div>
            </div>
        </div>
    `;
}

// Setup exercise search
function setupSearch() {
    exerciseSearch.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        searchExercises(query);
    });
}

// Search exercises
function searchExercises(query) {
    const exerciseData = window.EXERCISE_DATA;
    const categorizedExercises = exerciseData.categorized_exercises || {};
    const results = [];
    
    // Search through all exercises
    Object.entries(categorizedExercises).forEach(([category, exercises]) => {
        exercises.forEach(exercise => {
            if (exercise.exercise.toLowerCase().includes(query)) {
                results.push({
                    name: exercise.exercise,
                    category: category,
                    date: exercise.date,
                    phase: exercise.phase
                });
            }
        });
    });
    
    // Remove duplicates and sort
    const uniqueResults = results.filter((exercise, index, self) => 
        index === self.findIndex(e => e.name === exercise.name)
    );
    
    // Display results
    if (uniqueResults.length === 0) {
        searchResults.innerHTML = '<p class="text-gray-500 text-center py-4">No exercises found matching your search.</p>';
        return;
    }
    
    searchResults.innerHTML = `
        <div class="text-sm text-gray-600 mb-2">Found ${uniqueResults.length} exercise${uniqueResults.length !== 1 ? 's' : ''}:</div>
        <div class="space-y-2 max-h-64 overflow-y-auto">
            ${uniqueResults.slice(0, 20).map(exercise => `
                <div class="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors" onclick="showWorkoutFromDate('${exercise.date}')">
                    <div class="font-medium text-gray-800">${exercise.name}</div>
                    <div class="text-sm text-gray-600">
                        <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">${exercise.category}</span>
                        ${exercise.phase ? `<span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2">${exercise.phase}</span>` : ''}
                        <span class="text-gray-500">${formatDate(exercise.date)}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        ${uniqueResults.length > 20 ? `<div class="text-sm text-gray-500 text-center mt-2">... and ${uniqueResults.length - 20} more</div>` : ''}
    `;
}

// Show workout from specific date
function showWorkoutFromDate(date) {
    const exerciseData = window.EXERCISE_DATA;
    const dailyWorkouts = exerciseData.daily_workouts || {};
    
    console.log('Looking for date:', date);
    console.log('Available dates:', Object.keys(dailyWorkouts));
    console.log('Workout data for date:', dailyWorkouts[date]);
    
    if (!dailyWorkouts[date]) {
        alert('No workout found for this date');
        return;
    }
    
    const workouts = dailyWorkouts[date];
    
    // Create modal to display the workout
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Workout from ${formatDate(date)}</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="space-y-4">
                    ${workouts.map((workout, index) => `
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h4 class="font-medium text-gray-800 mb-3">Workout ${index + 1}</h4>
                            ${createGoogleDocsStyleTable(workout.phases)}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Create Google Docs style table with timing as headers and exercises vertically
function createGoogleDocsStyleTable(phases) {
    if (!phases || phases.length === 0) {
        return '<p class="text-gray-500 text-sm">No workout data available</p>';
    }
    
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

// Helper function to format dates
function formatDate(dateString) {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
