const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Initialize SQLite database
const db = new sqlite3.Database('workouts.db');

// Create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    duration INTEGER,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER,
    name TEXT NOT NULL,
    sets INTEGER,
    reps INTEGER,
    weight REAL,
    duration INTEGER,
    notes TEXT,
    FOREIGN KEY (workout_id) REFERENCES workouts (id)
  )`);
});

// Load exercise data from JSON file
let exerciseData = {};
let exerciseMetadata = {};
try {
  const data = fs.readFileSync(path.join(__dirname, 'exercise_data', 'workout_history_data_categorized.json'), 'utf8');
  const parsedData = JSON.parse(data);
  exerciseData = parsedData.categorized_exercises || {};
  exerciseMetadata = parsedData.metadata || {};
  console.log('Loaded exercise data:', {
    totalWorkouts: exerciseMetadata.summary?.total_workouts || 0,
    totalExercises: exerciseMetadata.summary?.total_unique_exercises || 0,
    dateRange: exerciseMetadata.summary?.date_range || {},
    categories: Object.keys(exerciseData)
  });
} catch (error) {
  console.error('Error loading exercise data:', error);
}

// Helper function for difficulty labels
function getDifficultyLabel(difficulty) {
  const labels = {
    1: "Beginner",
    2: "Easy", 
    3: "Moderate",
    4: "Hard",
    5: "Expert"
  };
  return labels[difficulty] || "Unknown";
}

// Workout generation logic
function generateWorkout(intensity, workoutType) {
  // Get exercises from our new categorized data structure
  const categories = {};
  
  // Extract unique exercises from each category
  Object.keys(exerciseData).forEach(category => {
    const exercises = exerciseData[category];
    const uniqueExercises = [...new Set(exercises.map(item => item.exercise))];
    categories[category] = uniqueExercises;
  });
  
  console.log('Available categories:', Object.keys(categories));
  console.log('Exercise counts per category:', Object.keys(categories).map(cat => `${cat}: ${categories[cat].length}`));
  
  // Target 40 minutes - adjust exercise count and structure accordingly
  let exerciseCount = 10; // Base for 40-minute workout
  let phaseDistribution = { 'Warmup': 2, 'Cardio': 3, 'Strength': 3, 'Accessory': 2 };
  
  if (intensity === 'lower') {
    exerciseCount = 8;
    phaseDistribution = { 'Warmup': 2, 'Cardio': 2, 'Strength': 2, 'Accessory': 2 };
  } else if (intensity === 'higher') {
    exerciseCount = 12;
    phaseDistribution = { 'Warmup': 2, 'Cardio': 4, 'Strength': 4, 'Accessory': 2 };
  }
  
  // Generate workout based on type
  let phases = [];
  
  if (workoutType === 'emom') {
    phases = generateEMOMWorkout(categories, exerciseCount, intensity);
  } else if (workoutType === 'spartan') {
    phases = generateSpartanWorkout(categories, exerciseCount, intensity);
  } else if (workoutType === 'tabata') {
    phases = generateTabataWorkout(categories, exerciseCount, intensity);
  } else {
    phases = generateBalancedWorkout(categories, phaseDistribution, intensity);
  }
  
  // Adjust phases to target 40 minutes
  phases = adjustWorkoutFor40Minutes(phases, intensity, workoutType);
  
  return {
    type: workoutType,
    intensity: intensity,
    duration: "40 minutes",
    totalExercises: exerciseCount,
    phases: phases,
    generatedAt: new Date().toISOString()
  };
}

function generateBalancedWorkout(categories, distribution, intensity) {
  const phases = [];
  
  Object.entries(distribution).forEach(([phaseName, count]) => {
    if (count > 0) {
      const phaseExercises = categories[phaseName] || [];
      const selectedExercises = getRandomExercises(phaseExercises, count);
      
      phases.push({
        name: phaseName,
        exercises: selectedExercises.map(exercise => ({
          name: exercise,
          sets: getSetsForPhase(phaseName, intensity),
          reps: getRepsForPhase(phaseName, intensity),
          duration: getDurationForPhase(phaseName, intensity),
          rest: getRestForPhase(phaseName, intensity)
        })),
        timing: getTimingForPhase(phaseName)
      });
    }
  });
  
  return phases;
}

function generateEMOMWorkout(categories, exerciseCount, intensity) {
  const exercises = [];
  
  // Select exercises from all categories
  Object.values(categories).flat().forEach(exercise => {
    exercises.push(exercise);
  });
  
  const selectedExercises = getRandomExercises(exercises, exerciseCount);
  
  return [{
    name: 'EMOM Circuit',
    exercises: selectedExercises.map(exercise => ({
      name: exercise,
      sets: '1',
      reps: getEMOMReps(intensity),
      duration: null,
      rest: 'Remaining minute'
    })),
    timing: 'Every Minute On the Minute - Complete exercise within 1 minute'
  }];
}

function generateSpartanWorkout(categories, exerciseCount, intensity) {
  const phases = [];
  
  // Warmup
  phases.push({
    name: 'Warmup',
    exercises: getRandomExercises(categories['Warmup'], 2).map(exercise => ({
      name: exercise,
      sets: '1',
      reps: '10-15',
      duration: null,
      rest: '30 sec'
    })),
    timing: '2 rounds, 30 sec rest between exercises'
  });
  
  // Main circuit
  const circuitExercises = [];
  Object.values(categories).flat().forEach(exercise => {
    circuitExercises.push(exercise);
  });
  
  const selectedExercises = getRandomExercises(circuitExercises, exerciseCount - 2);
  
  phases.push({
    name: 'Spartan Circuit',
    exercises: selectedExercises.map(exercise => ({
      name: exercise,
      sets: '3-5',
      reps: getSpartanReps(intensity),
      duration: null,
      rest: '15-30 sec'
    })),
    timing: '3-5 rounds, minimal rest between exercises'
  });
  
  return phases;
}

function generateTabataWorkout(categories, exerciseCount, intensity) {
  const exercises = [];
  
  // Focus on cardio and strength for Tabata
  [...categories['Cardio'], ...categories['Strength']].forEach(exercise => {
    exercises.push(exercise);
  });
  
  const selectedExercises = getRandomExercises(exercises, Math.min(exerciseCount, 8));
  
  return [{
    name: 'Tabata Circuit',
    exercises: selectedExercises.map(exercise => ({
      name: exercise,
      sets: '8',
      reps: null,
      duration: '20 sec',
      rest: '10 sec'
    })),
    timing: '20 seconds work, 10 seconds rest, 8 rounds per exercise'
  }];
}

// Helper functions for workout generation
function getRandomExercises(exercises, count) {
  const shuffled = [...exercises].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getSetsForPhase(phaseName, intensity) {
  // Special case for warmup - always 2-3 sets
  if (phaseName === 'Warmup') {
    if (intensity === 'lower') {
      return '2';
    } else if (intensity === 'higher') {
      return '3';
    } else {
      return '2-3';
    }
  }
  
  const baseSets = {
    'Cardio': 3,
    'Strength': 3,
    'Accessory': 2
  };
  
  let sets = baseSets[phaseName] || 2;
  
  if (intensity === 'higher') {
    sets += 1;
  } else if (intensity === 'lower') {
    sets = Math.max(1, sets - 1);
  }
  
  return sets.toString();
}

function getRepsForPhase(phaseName, intensity) {
  const baseReps = {
    'Warmup': '10-15',
    'Cardio': '15-20',
    'Strength': '8-12',
    'Accessory': '12-15'
  };
  
  return baseReps[phaseName] || '10-15';
}

function getDurationForPhase(phaseName, intensity) {
  if (phaseName === 'Cardio') {
    return intensity === 'higher' ? '45 sec' : intensity === 'lower' ? '30 sec' : '40 sec';
  }
  return null;
}

function getRestForPhase(phaseName, intensity) {
  const baseRest = {
    'Warmup': '30 sec',
    'Cardio': '30 sec',
    'Strength': '60 sec',
    'Accessory': '45 sec'
  };
  
  let rest = baseRest[phaseName] || '45 sec';
  
  if (intensity === 'higher') {
    rest = rest.replace(/\d+/, match => Math.max(15, parseInt(match) - 15));
  } else if (intensity === 'lower') {
    rest = rest.replace(/\d+/, match => parseInt(match) + 15);
  }
  
  return rest;
}

function getTimingForPhase(phaseName) {
  const timings = {
    'Warmup': '2-3 rounds, 30 sec rest',
    'Cardio': '3-4 rounds, 30 sec rest',
    'Strength': '3-4 rounds, 60 sec rest',
    'Accessory': '2-3 rounds, 45 sec rest'
  };
  
  return timings[phaseName] || '2-3 rounds';
}

function getEMOMReps(intensity) {
  const reps = {
    'lower': '8-12',
    'normal': '12-15',
    'higher': '15-20'
  };
  
  return reps[intensity] || '12-15';
}

function getSpartanReps(intensity) {
  const reps = {
    'lower': '8-12',
    'normal': '12-15',
    'higher': '15-25'
  };
  
  return reps[intensity] || '12-15';
}

function adjustWorkoutFor40Minutes(phases, intensity, workoutType) {
  // Calculate current estimated duration
  let currentDuration = calculateWorkoutDuration(phases, intensity, workoutType);
  const targetMinutes = 40;
  
  // If we're close to 40 minutes (within 5 minutes), return as is
  if (Math.abs(currentDuration - targetMinutes) <= 5) {
    return phases;
  }
  
  // Adjust sets to get closer to 40 minutes
  const adjustmentFactor = targetMinutes / currentDuration;
  
  phases.forEach(phase => {
    phase.exercises.forEach(exercise => {
      if (exercise.sets && !exercise.duration) {
        // Adjust sets for rep-based exercises
        const currentSets = parseSets(exercise.sets);
        const newSets = Math.max(1, Math.round(currentSets * adjustmentFactor));
        exercise.sets = newSets.toString();
      }
    });
  });
  
  return phases;
}

function calculateWorkoutDuration(phases, intensity, workoutType) {
  let totalMinutes = 0;
  
  phases.forEach(phase => {
    phase.exercises.forEach(exercise => {
      // Parse sets (handle ranges like "3-5" by taking average)
      const sets = parseSets(exercise.sets);
      
      // Estimate time per set based on exercise type and intensity
      let timePerSet = 0;
      
      if (exercise.duration) {
        // For timed exercises (like Tabata)
        const durationSeconds = parseInt(exercise.duration);
        timePerSet = durationSeconds + parseInt(exercise.rest || 0);
      } else {
        // For rep-based exercises
        const avgReps = parseReps(exercise.reps);
        timePerSet = estimateTimeForReps(avgReps, phase.name, intensity);
      }
      
      totalMinutes += (sets * timePerSet) / 60;
    });
    
    // Add transition time between phases (1-2 minutes)
    totalMinutes += 1.5;
  });
  
  // Add warmup and cooldown time
  totalMinutes += 5; // 5 minutes for warmup/cooldown
  
  return Math.round(totalMinutes);
}

function parseSets(setsString) {
  if (!setsString) return 1;
  
  // Handle ranges like "3-5" by taking average
  if (setsString.includes('-')) {
    const [min, max] = setsString.split('-').map(Number);
    return Math.round((min + max) / 2);
  }
  
  return parseInt(setsString) || 1;
}

function parseReps(repsString) {
  if (!repsString) return 10;
  
  // Handle ranges like "8-12" by taking average
  if (repsString.includes('-')) {
    const [min, max] = repsString.split('-').map(Number);
    return Math.round((min + max) / 2);
  }
  
  return parseInt(repsString) || 10;
}

function estimateTimeForReps(reps, phaseName, intensity) {
  // Base time per rep in seconds
  const baseTimePerRep = {
    'Warmup': 2,
    'Cardio': 1.5,
    'Strength': 3,
    'Accessory': 2.5
  };
  
  let timePerRep = baseTimePerRep[phaseName] || 2;
  
  // Adjust for intensity
  if (intensity === 'higher') {
    timePerRep *= 0.8; // Faster pace
  } else if (intensity === 'lower') {
    timePerRep *= 1.2; // Slower pace
  }
  
  return reps * timePerRep;
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve the data exploration page
app.get('/data-exploration', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'data-exploration.html'));
});

// Generate workout endpoint
app.post('/api/generate-workout', (req, res) => {
  try {
    const { intensity, workoutType } = req.body;
    
    if (!intensity || !workoutType) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    const workout = generateWorkout(intensity, workoutType);
    res.json(workout);
  } catch (error) {
    console.error('Error generating workout:', error);
    res.status(500).json({ error: 'Failed to generate workout' });
  }
});

// Get all exercises from JSON data
app.get('/api/exercises', (req, res) => {
  try {
    // Extract unique exercises from all revisions
    const allExercises = new Set();
    
    exerciseData.forEach(revision => {
      if (revision.content && revision.content.all_exercises) {
        revision.content.all_exercises.forEach(exercise => {
          // Filter out non-exercise entries (like dates, numbers, etc.)
          if (exercise && 
              typeof exercise === 'string' && 
              exercise.trim() && 
              !exercise.match(/^\d+/) && // Not starting with numbers
              !exercise.includes('/') && // Not date-like
              exercise.length > 2) { // Reasonable length
            allExercises.add(exercise.trim());
          }
        });
      }
    });
    
    const exercises = Array.from(allExercises).sort();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load exercises' });
  }
});

// Get workout history from JSON data
app.get('/api/workout-history', (req, res) => {
  try {
    // Use the categorized data structure
    const workoutHistory = exerciseData.map((workout, index) => ({
      id: index + 1,
      name: `Workout ${workout.date}`,
      date: workout.date,
      revision_number: workout.revision_number,
      modified_time: workout.modified_time,
      difficulty: workout.difficulty || 3,
      difficulty_label: getDifficultyLabel(workout.difficulty || 3),
      exercises_by_category: workout.exercises_by_category,
      category_counts: workout.category_counts,
      timing_protocols: workout.column_structure?.headers || [],
      total_exercises: workout.total_exercises,
      created_at: workout.modified_time
    }));
    
    res.json(workoutHistory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load workout history' });
  }
});

// Get all workouts
app.get('/api/workouts', (req, res) => {
  const query = `
    SELECT w.*, 
           COUNT(e.id) as exercise_count,
           GROUP_CONCAT(e.name) as exercises
    FROM workouts w
    LEFT JOIN exercises e ON w.id = e.workout_id
    GROUP BY w.id
    ORDER BY w.date DESC
  `;
  
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get workout by ID with exercises
app.get('/api/workouts/:id', (req, res) => {
  const workoutId = req.params.id;
  
  const workoutQuery = 'SELECT * FROM workouts WHERE id = ?';
  const exercisesQuery = 'SELECT * FROM exercises WHERE workout_id = ? ORDER BY id';
  
  db.get(workoutQuery, [workoutId], (err, workout) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    if (!workout) {
      res.status(404).json({ error: 'Workout not found' });
      return;
    }
    
    db.all(exercisesQuery, [workoutId], (err, exercises) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      res.json({ ...workout, exercises });
    });
  });
});

// Add new workout
app.post('/api/workouts', (req, res) => {
  const { name, date, duration, notes } = req.body;
  
  const query = 'INSERT INTO workouts (name, date, duration, notes) VALUES (?, ?, ?, ?)';
  
  db.run(query, [name, date, duration, notes], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    res.json({ id: this.lastID, message: 'Workout added successfully' });
  });
});

// Add exercise to workout
app.post('/api/workouts/:id/exercises', (req, res) => {
  const workoutId = req.params.id;
  const { name, sets, reps, weight, duration, notes } = req.body;
  
  const query = 'INSERT INTO exercises (workout_id, name, sets, reps, weight, duration, notes) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.run(query, [workoutId, name, sets, reps, weight, duration, notes], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    res.json({ id: this.lastID, message: 'Exercise added successfully' });
  });
});

// Delete workout
app.delete('/api/workouts/:id', (req, res) => {
  const workoutId = req.params.id;
  
  db.run('DELETE FROM exercises WHERE workout_id = ?', [workoutId], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    db.run('DELETE FROM workouts WHERE id = ?', [workoutId], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      res.json({ message: 'Workout deleted successfully' });
    });
  });
});

// Get exercise data and statistics
app.get('/api/exercise-data', (req, res) => {
  try {
    res.json({
      metadata: exerciseMetadata,
      categories: Object.keys(exerciseData),
      categoryCounts: Object.keys(exerciseData).reduce((acc, category) => {
        acc[category] = exerciseData[category].length;
        return acc;
      }, {})
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load exercise data' });
  }
});

// Get exercises by category
app.get('/api/exercises/:category', (req, res) => {
  const category = req.params.category;
  
  if (!exerciseData[category]) {
    res.status(404).json({ error: 'Category not found' });
    return;
  }
  
  // Get unique exercises from this category
  const uniqueExercises = [...new Set(exerciseData[category].map(item => item.exercise))];
  
  res.json({
    category: category,
    exercises: uniqueExercises,
    count: uniqueExercises.length
  });
});

// Get most common exercises
app.get('/api/exercises/stats/most-common', (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const mostCommon = exerciseMetadata.summary?.most_common_exercises || {};
    
    const sortedExercises = Object.entries(mostCommon)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit)
      .map(([exercise, count]) => ({ exercise, count }));
    
    res.json({
      mostCommon: sortedExercises,
      total: Object.keys(mostCommon).length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load exercise statistics' });
  }
});

// Get daily workout statistics
app.get('/api/workouts/stats/daily', (req, res) => {
  try {
    const dailyCounts = exerciseMetadata.summary?.daily_workout_counts || {};
    const multiWorkoutDays = Object.entries(dailyCounts)
      .filter(([, count]) => count > 1)
      .sort(([,a], [,b]) => b - a);
    
    res.json({
      totalDays: Object.keys(dailyCounts).length,
      totalWorkouts: Object.values(dailyCounts).reduce((sum, count) => sum + count, 0),
      multiWorkoutDays: multiWorkoutDays,
      averageWorkoutsPerDay: (Object.values(dailyCounts).reduce((sum, count) => sum + count, 0) / Object.keys(dailyCounts).length).toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load daily statistics' });
  }
});

// Get historical workouts from categorized data
app.get('/api/workouts/historical', (req, res) => {
  try {
    const dailyCounts = exerciseMetadata.summary?.daily_workout_counts || {};
    const dateRange = exerciseMetadata.summary?.date_range || {};
    
    // Convert daily counts to workout objects
    const historicalWorkouts = Object.entries(dailyCounts).map(([date, count]) => {
      // Get exercises for this date from the categorized data
      const dayExercises = [];
      Object.keys(exerciseData).forEach(category => {
        const categoryExercises = exerciseData[category] || [];
        const dayCategoryExercises = categoryExercises.filter(exercise => 
          exercise.date === date
        );
        dayExercises.push(...dayCategoryExercises);
      });
      
      return {
        id: `historical-${date}`,
        name: count > 1 ? `${count} Workouts` : 'Workout',
        date: date,
        duration: '40 min', // Default duration for historical workouts
        notes: `Historical workout${count > 1 ? 's' : ''} from ${date}`,
        created_at: date,
        exercise_count: dayExercises.length,
        exercises: dayExercises,
        is_historical: true,
        workout_count: count
      };
    }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
    
    res.json({
      workouts: historicalWorkouts,
      total: historicalWorkouts.length,
      dateRange: dateRange
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load historical workouts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
