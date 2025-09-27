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
let exerciseData = [];
try {
  const data = fs.readFileSync(path.join(__dirname, 'exercise_data', 'workout_history_data_categorized.json'), 'utf8');
  exerciseData = JSON.parse(data);
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

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
