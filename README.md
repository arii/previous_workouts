# Previous Workouts

A modern web application to track and review your previous workout sessions. Built with Node.js, Express, SQLite, and a beautiful responsive UI using Tailwind CSS.

## Features

- 📝 **Add Workouts**: Record new workout sessions with name, date, duration, and notes
- 📊 **View History**: Browse all your previous workouts in a clean, organized interface
- 🔍 **Detailed View**: Click on any workout to see detailed information and exercises
- 🗑️ **Delete Workouts**: Remove workouts you no longer need
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight**: Built with modern web technologies for optimal performance

## Screenshots

The application features a clean, modern interface with:
- Card-based workout display
- Modal dialogs for adding and viewing workouts
- Responsive grid layout
- Beautiful icons and smooth animations

## Installation

1. **Clone or download the project**
   ```bash
   cd previous_workouts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS (optional - for development)**
   ```bash
   npm run build:css
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Development

For development with auto-restart:

```bash
npm run dev
```

For CSS development with auto-rebuild:

```bash
npm run build:css
```

## Project Structure

```
previous_workouts/
├── server.js              # Main server file
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── views/
│   └── index.html         # Main HTML template
├── public/
│   ├── css/
│   │   └── style.css      # Compiled CSS (generated)
│   └── js/
│       └── app.js         # Frontend JavaScript
├── src/
│   └── input.css          # Source CSS with Tailwind directives
└── README.md              # This file
```

## API Endpoints

- `GET /` - Serve the main application
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get specific workout with exercises
- `POST /api/workouts` - Add new workout
- `POST /api/workouts/:id/exercises` - Add exercise to workout
- `DELETE /api/workouts/:id` - Delete workout

## Database Schema

### Workouts Table
- `id` - Primary key
- `name` - Workout name
- `date` - Workout date
- `duration` - Duration in minutes
- `notes` - Additional notes
- `created_at` - Timestamp

### Exercises Table
- `id` - Primary key
- `workout_id` - Foreign key to workouts
- `name` - Exercise name
- `sets` - Number of sets
- `reps` - Number of repetitions
- `weight` - Weight used
- `duration` - Duration in minutes
- `notes` - Exercise notes

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Build Tools**: npm scripts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Future Enhancements

- [ ] User authentication and multiple user support
- [ ] Exercise templates and presets
- [ ] Workout statistics and analytics
- [ ] Export functionality (CSV, PDF)
- [ ] Mobile app (React Native)
- [ ] Social features and sharing
- [ ] Integration with fitness trackers
- [ ] Workout plans and schedules

## Support

If you encounter any issues or have questions, please open an issue on the project repository.
