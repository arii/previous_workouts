# Workout Generator

A static web application for generating personalized workouts and exploring historical exercise data. This application is designed to work with GitHub Pages and requires no server-side components.

## Features

- **Workout Generation**: Generate 40-minute workouts with different intensity levels and types (Balanced, EMOM, Spartan, Tabata)
- **Historical Data**: View workouts from 2023-2025 with 141 total workouts and 659 unique exercises
- **Data Exploration**: Explore exercise patterns, most common exercises, and workout statistics
- **Copy-Friendly Tables**: Generate tables that can be easily copied to Google Docs
- **Static Site**: No server required - works entirely in the browser

## Live Demo

Visit the live site: [https://arii.github.io/previous_workouts/](https://arii.github.io/previous_workouts/)

## Local Development

### Prerequisites
- Python 3 (for local server)
- Node.js (for CSS building)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/arii/previous_workouts.git
   cd previous_workouts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build CSS (optional):
   ```bash
   npm run build:css
   ```

4. Start local server:
   ```bash
   npm start
   # or
   python3 -m http.server 8000
   ```

5. Open your browser to `http://localhost:8000`

## Data Structure

The application uses structured exercise data from Google Drive revisions:

- **141 workouts** from 2023-2025
- **659 unique exercises** across 5 categories
- **117 workout days** with historical data
- **Categories**: Warmup, Cardio, Strength, Accessory, Recovery

### Data Collection

Historical data was collected using the Google Drive API v2 with the following process:
- Accessed Google Docs revision history
- Downloaded 147 unique revision files
- Processed and categorized exercises by phase and type
- Standardized exercise names and removed invalid entries
- Applied rate limiting (30-second delays) to avoid API quotas

## Project Structure

```
├── index.html                 # Main workout generator page
├── workout-history.html       # Historical workouts viewer
├── data-exploration.html      # Data insights and exploration
├── public/
│   ├── css/
│   │   └── style.css         # Tailwind CSS styles
│   └── js/
│       ├── exercise-data.js   # Embedded exercise data
│       ├── app-static.js      # Main application logic
│       ├── workout-history-static.js
│       └── data-exploration-static.js
├── exercise_data/
│   ├── workout_history_data_categorized.json  # Main data file
│   └── revisions/            # Raw revision files
├── src/
│   └── input.css             # Tailwind CSS source
└── package.json
```

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment:

1. **Repository Settings**: Go to Settings → Pages
2. **Source**: Deploy from a branch
3. **Branch**: Select `main` branch
4. **Folder**: Select `/ (root)`
5. **Save**: The site will be available at `https://username.github.io/previous_workouts/`

## Features in Detail

### Workout Generation
- **Intensity Levels**: Lower, Normal, Higher
- **Workout Types**: 
  - Balanced: Mix of all categories
  - EMOM: Every Minute On the Minute
  - Spartan: High-intensity circuit training
  - Tabata: 20 sec work, 10 sec rest intervals

### Data Insights
- Overall statistics (total workouts, exercises, date range)
- Most common exercises across all historical data
- Exercise category breakdown
- Daily workout patterns and frequency analysis
- Exercise search functionality

### Historical Workouts
- View workouts by date with exercise details
- Filter by recent workouts (last 30 days) or all history
- Detailed workout breakdowns with phases and timing
- Exercise standardization and validation

## Technical Notes

- **No Backend**: All functionality runs client-side using embedded JavaScript data
- **No Database**: Exercise data is embedded in `exercise-data.js`
- **No API Calls**: All data processing happens in the browser
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly interface
- **Copy Functionality**: Uses modern Clipboard API for table copying

## Data Quality

The application includes several data quality improvements:
- Exercise name standardization (e.g., "Ch" → "Chest", "Sh." → "Shoulder")
- Invalid exercise filtering (removes "10 Down", "OR", "R", etc.)
- Unilateral exercise pairing (ensures L/R exercises are paired)
- Proper warmup exercise selection
- Phase-based exercise categorization

## License

MIT License - see LICENSE file for details.

## Contributing

This is a personal project, but suggestions and improvements are welcome!