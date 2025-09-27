import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload
from datetime import datetime
import io
import json
import re

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/drive.readonly",
           'https://www.googleapis.com/auth/drive.file']  # Need full read access for revisions

def get_credentials():
    """Handle Google Drive API authentication."""
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES
            )
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open("token.json", "w") as token:
            token.write(creds.to_json())
    
    return creds

# =============================================================================
# STEP 1: DOWNLOAD ALL REVISIONS
# =============================================================================

def download_all_revisions(exercise_file_id, output_dir="revisions"):
    """
    Step 1: Download all revisions and save them as raw files.
    
    Args:
        exercise_file_id: The file ID containing workout data
        output_dir: Directory to save all revision files
    """
    # Get credentials
    creds = get_credentials()
    
    try:
        service = build("drive", "v3", credentials=creds)
        
        # Create output directory
        os.makedirs(output_dir, exist_ok=True)
        
        # Get all revisions for the file
        print("Fetching revision list...")
        revisions_response = service.revisions().list(fileId=exercise_file_id).execute()
        revision_list = revisions_response.get('revisions', [])
        
        if not revision_list:
            print(f"No revisions found for file ID: {exercise_file_id}")
            return None
        
        print(f"Found {len(revision_list)} revision(s). Downloading...")
        
        # Sort revisions chronologically
        sorted_revisions = sorted(revision_list, key=lambda x: x['modifiedTime'])
        
        revision_metadata = []
        
        for i, revision in enumerate(sorted_revisions):
            revision_id = revision['id']
            modified_time = revision['modifiedTime']
            
            # Parse the timestamp
            timestamp = datetime.fromisoformat(modified_time.replace('Z', '+00:00'))
            formatted_date = timestamp.strftime("%Y-%m-%d_%H-%M-%S")
            
            print(f"Downloading revision {i+1}/{len(revision_list)}: {formatted_date}")
            
            try:
                # Download the revision content
                content = download_revision_content(service, exercise_file_id, revision_id)
                
                if content:
                    # Save raw content to file
                    filename = f"revision_{i+1:03d}_{formatted_date}.txt"
                    filepath = os.path.join(output_dir, filename)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    
                    # Store metadata
                    revision_metadata.append({
                        'revision_number': i + 1,
                        'revision_id': revision_id,
                        'modified_time': modified_time,
                        'formatted_date': formatted_date,
                        'filename': filename,
                        'filepath': filepath,
                        'content_length': len(content)
                    })
                    
                    print(f"  ✅ Saved: {filename} ({len(content)} characters)")
                else:
                    print(f"  ❌ Failed to download revision {revision_id}")
                
            except Exception as e:
                print(f"  ❌ Error downloading revision {revision_id}: {e}")
                continue
        
        # Save metadata
        metadata_file = os.path.join(output_dir, "revisions_metadata.json")
        with open(metadata_file, 'w', encoding='utf-8') as f:
            json.dump(revision_metadata, f, indent=2, default=str)
        
        print(f"\n✅ Downloaded {len(revision_metadata)} revisions to {output_dir}/")
        print(f"📋 Metadata saved to: {metadata_file}")
        
        return revision_metadata
        
    except HttpError as error:
        print(f"Google Drive API error: {error}")
        if error.resp.status == 404:
            print("File not found. Please check the file ID.")
        elif error.resp.status == 403:
            print("Access denied. Check your permissions for this file.")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

def download_revision_content(service, file_id, revision_id):
    """Download the content of a specific revision."""
    try:
        # Get file metadata to determine the MIME type
        file_metadata = service.files().get(fileId=file_id).execute()
        mime_type = file_metadata.get('mimeType')
        
        # Handle different file types
        if 'google-apps.document' in mime_type:
            # For Google Docs, export as plain text
            request = service.files().export_media(
                fileId=file_id,
                mimeType='text/plain'
            )
        else:
            # For other file types, get the raw content
            request = service.revisions().get_media(fileId=file_id, revisionId=revision_id)
        
        file_content = io.BytesIO()
        downloader = MediaIoBaseDownload(file_content, request)
        done = False
        while not done:
            status, done = downloader.next_chunk()
        
        # Decode content
        content = file_content.getvalue().decode('utf-8')
        return content
        
    except Exception as e:
        print(f"    Error downloading revision content: {e}")
        return None

# =============================================================================
# STEP 2: PARSE DOWNLOADED REVISIONS
# =============================================================================

def parse_downloaded_revisions(revisions_dir="revisions", output_file="workout_history.txt"):
    """
    Step 2: Parse all downloaded revision files and extract workout data.
    
    Args:
        revisions_dir: Directory containing downloaded revision files
        output_file: Path to save the parsed workout log
    """
    
    # Load metadata
    metadata_file = os.path.join(revisions_dir, "revisions_metadata.json")
    if not os.path.exists(metadata_file):
        print(f"❌ Metadata file not found: {metadata_file}")
        print("Run download_all_revisions() first!")
        return None
    
    with open(metadata_file, 'r', encoding='utf-8') as f:
        revision_metadata = json.load(f)
    
    print(f"Parsing {len(revision_metadata)} downloaded revisions...")
    
    workout_log = []
    
    for metadata in revision_metadata:
        filepath = metadata['filepath']
        
        if not os.path.exists(filepath):
            print(f"⚠️  File not found: {filepath}")
            continue
        
        print(f"Parsing: {metadata['filename']}")
        
        # Read the content
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract workout information
        workout_info = extract_workout_info(content, metadata['formatted_date'])
        
        if workout_info:
            workout_log.append({
                'revision_number': metadata['revision_number'],
                'date': metadata['formatted_date'],
                'revision_id': metadata['revision_id'],
                'modified_time': metadata['modified_time'],
                'filename': metadata['filename'],
                'content': workout_info,
                'content_length': metadata['content_length']
            })
            print(f"  ✅ Found workout data ({len(workout_info.get('all_exercises', []))} exercises)")
        else:
            print(f"  ⚠️  No workout data found")
    
    # Save the parsed results
    save_workout_log(workout_log, output_file)
    
    print(f"\n✅ Parsed {len(workout_log)} workouts from {len(revision_metadata)} revisions")
    return workout_log

def extract_workout_info(content, date):
    """
    Extract workout information from the table-formatted Google Doc.
    Focuses on the tabular workout data and ignores whitespace/links below.
    """
    workout_info = {
        'date': date,
        'workout_date': None,
        'exercises_by_column': [],
        'all_exercises': [],
        'table_structure': [],
        'raw_content_preview': content[:500] + "..." if len(content) > 500 else content
    }
    
    lines = content.split('\n')
    
    # Find the workout date in the header (like "40/30/20 (15 off)")
    for line in lines[:5]:  # Check first few lines
        # Look for date patterns like "40/30/20" or "30/10x3"
        date_match = re.search(r'\b\d{1,2}/\d{1,2}[/x]\d{1,2}\b', line)
        if date_match:
            workout_info['workout_date'] = date_match.group()
            break
        
        # Also look for standard date formats
        std_date_match = re.search(r'\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b', line)
        if std_date_match:
            workout_info['workout_date'] = std_date_match.group()
    
    # Parse the table structure
    table_started = False
    
    for line in lines:
        line = line.strip()
        
        # Skip empty lines
        if not line:
            continue
        
        # Skip obvious non-workout content (links, etc.)
        if line.startswith('http') or 'privatebits.io' in line.lower():
            break  # Stop processing when we hit links/footer
            
        # Detect common exercise patterns
        exercise_indicators = [
            'crunch', 'squat', 'curl', 'press', 'kick', 'stretch', 'jack', 
            'plank', 'lunge', 'push', 'pull', 'row', 'fly', 'raise',
            'tabata', 'band', 'db', 'dumbbell', 'kettlebell', 'kb',
            'goblet', 'sumo', 'punch', 'toe touch', 'slider', 'tucks',
            'penguin', 'hydrant', 'seal', 'jump', 'swim', 'mobility'
        ]
        
        # Check if this line contains workout content
        is_workout_line = any(indicator in line.lower() for indicator in exercise_indicators)
        
        # Also check for rep/set patterns like "2 x 15", "30/10x3"
        has_reps = re.search(r'\b\d+\s*[x×]\s*\d+\b|\b\d+/\d+\b|\(\d+\s*off\)', line)
        
        if is_workout_line or has_reps:
            table_started = True
            
            # Split potential table columns (could be separated by tabs or multiple spaces)
            if '\t' in line:
                columns = [col.strip() for col in line.split('\t') if col.strip()]
            else:
                # Split on multiple spaces (common in table formatting)
                columns = [col.strip() for col in re.split(r'\s{2,}', line) if col.strip()]
            
            if len(columns) > 1:
                # This looks like a table row
                workout_info['table_structure'].append(columns)
                workout_info['all_exercises'].extend(columns)
            else:
                # Single exercise or continuation
                workout_info['all_exercises'].append(line)
    
    # Organize exercises by column if we detected table structure
    if workout_info['table_structure']:
        max_columns = max(len(row) for row in workout_info['table_structure']) if workout_info['table_structure'] else 0
        
        for col_idx in range(max_columns):
            column_exercises = []
            for row in workout_info['table_structure']:
                if col_idx < len(row):
                    column_exercises.append(row[col_idx])
            
            if column_exercises:
                workout_info['exercises_by_column'].append({
                    'column': col_idx + 1,
                    'exercises': column_exercises
                })
    
    # Clean up the all_exercises list
    workout_info['all_exercises'] = [ex for ex in workout_info['all_exercises'] if ex and len(ex) > 2]
    
    # Only return if we found workout content
    if workout_info['all_exercises'] or workout_info['table_structure']:
        return workout_info
    
    return None

def save_workout_log(workout_log, output_file):
    """Save the aggregated workout log to a file."""
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("WORKOUT REVISION HISTORY\n")
            f.write("=" * 60 + "\n\n")
            
            for entry in workout_log:
                f.write(f"REVISION #{entry['revision_number']}: {entry['date']}\n")
                f.write(f"Revision ID: {entry['revision_id']}\n")
                f.write(f"Source File: {entry['filename']}\n")
                
                if entry['content'] and entry['content']['workout_date']:
                    f.write(f"Workout Date: {entry['content']['workout_date']}\n")
                
                f.write("-" * 50 + "\n")
                
                if entry['content']:
                    workout = entry['content']
                    
                    # Display table structure if available
                    if workout['exercises_by_column']:
                        f.write("\nWORKOUT TABLE:\n")
                        
                        # Create a formatted table display
                        max_rows = max(len(col['exercises']) for col in workout['exercises_by_column']) if workout['exercises_by_column'] else 0
                        
                        # Write column headers
                        headers = [f"Column {col['column']}" for col in workout['exercises_by_column']]
                        f.write(" | ".join(f"{header:20}" for header in headers) + "\n")
                        f.write("-" * (25 * len(headers)) + "\n")
                        
                        # Write exercise rows
                        for row_idx in range(max_rows):
                            row_data = []
                            for col in workout['exercises_by_column']:
                                if row_idx < len(col['exercises']):
                                    exercise = col['exercises'][row_idx]
                                    # Truncate long exercise names for table formatting
                                    if len(exercise) > 18:
                                        exercise = exercise[:15] + "..."
                                    row_data.append(exercise)
                                else:
                                    row_data.append("")
                            f.write(" | ".join(f"{item:20}" for item in row_data) + "\n")
                        
                    elif workout['all_exercises']:
                        f.write("\nEXERCISES FOUND:\n")
                        for exercise in workout['all_exercises']:
                            f.write(f"  • {exercise}\n")
                    
                    # Show raw table structure for debugging
                    if workout['table_structure']:
                        f.write(f"\nRAW TABLE STRUCTURE ({len(workout['table_structure'])} rows):\n")
                        for i, row in enumerate(workout['table_structure'], 1):
                            f.write(f"  Row {i}: {' | '.join(row)}\n")
                
                f.write("\n" + "="*60 + "\n\n")
        
        # Also save as JSON for easier programmatic access
        json_file = output_file.replace('.txt', '_data.json')
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(workout_log, f, indent=2, default=str)
        
        print(f"📄 Human-readable log: {output_file}")
        print(f"📊 Structured data: {json_file}")
        
    except Exception as e:
        print(f"Error saving workout log: {e}")

# =============================================================================
# MAIN FUNCTIONS
# =============================================================================

def step1_download_revisions(exercise_file_id):
    """Step 1: Download all revisions"""
    print("=" * 60)
    print("STEP 1: DOWNLOADING ALL REVISIONS")
    print("=" * 60)
    
    return download_all_revisions(exercise_file_id)

def step2_parse_revisions():
    """Step 2: Parse downloaded revisions"""
    print("\n" + "=" * 60)
    print("STEP 2: PARSING DOWNLOADED REVISIONS")
    print("=" * 60)
    
    return parse_downloaded_revisions()

def run_both_steps(exercise_file_id):
    """Run both steps in sequence"""
    # Step 1
    metadata = step1_download_revisions(exercise_file_id)
    if not metadata:
        print("❌ Step 1 failed. Cannot proceed to Step 2.")
        return None
    
    # Step 2
    workout_log = step2_parse_revisions()
    return workout_log

def main():
    """
    Main function with options to run individual steps or both.
    """
    # Replace this with your actual Google Drive file ID
    exercise_file_id = "1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo"
    
    print("Workout Revision Aggregator")
    print("Make sure you have credentials.json in your current directory!")
    print()
    
    try:
        # Option 1: Run both steps
        print("Running both steps...")
        workout_log = run_both_steps(exercise_file_id)
        
        # Option 2: Run individual steps (uncomment as needed)
        # metadata = step1_download_revisions(exercise_file_id)
        # workout_log = step2_parse_revisions()
        
        if workout_log:
            print(f"\n🎉 SUCCESS! Found {len(workout_log)} workout revisions")
            print("Check the following files:")
            print("  • revisions/ folder - Raw downloaded revisions")
            print("  • workout_history.txt - Human-readable workout log")
            print("  • workout_history_data.json - Structured data")
        else:
            print("❌ No workout data found")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        print("\nTroubleshooting tips:")
        print("1. Make sure credentials.json is in your directory")
        print("2. Check that the file ID is correct")
        print("3. Ensure you have permission to access the file")
        print("4. Try deleting token.json and re-authenticating")

if __name__ == "__main__":
    main()