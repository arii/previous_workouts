# Exercise Data Directory

This directory contains the processed workout history data and related files.

## Files

### Data Files
- **`workout_history_data_categorized.json`** - Main categorized workout data with exercises organized by category (Warmup, Cardio, Strength, Accessory, Recovery)
- **`workout_history_data.txt`** - Comprehensive text summary of all workout data with statistics, timing protocols, and difficulty analysis

### Source Files
- **`revisions/`** - Directory containing all 844 individual workout revision files downloaded from Google Drive
- **`collect_from_drive.py`** - Script to download workout revisions from Google Drive (requires Google API credentials)
- **`token.json`** - Google Drive API authentication token (keep secure)

## Data Structure

The categorized data includes:
- **89 workout revisions** from March 28 to September 24, 2025
- **1,335 total exercises** categorized into 5 phases
- **5 timing protocols** consistently used across workouts
- **Difficulty levels** (all current workouts are "Moderate" level)

## Categories
- **Warmup** (20.0%): Basic movements to prepare the body
- **Cardio** (26.7%): High-intensity interval training and cardiovascular exercises  
- **Strength** (33.3%): Resistance training with weights and bands
- **Accessory** (20.0%): Supporting exercises for muscle groups
- **Recovery** (0.0%): Mobility and stretching (currently not captured)

## Timing Protocols
- **30/10x3**: 30 seconds work, 10 seconds rest, 3 rounds (Warmup)
- **Tabata**: 20 seconds work, 10 seconds rest, 8 rounds (Cardio)
- **40/30/20 (15 off)**: 40/30/20 second intervals (Strength)
- **2 x 15**: 2 sets of 15 repetitions (Accessory)
- **Mobility stretches**: Recovery phase

Last updated: September 27, 2025
