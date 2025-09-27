#!/usr/bin/env python3
"""
Slowly collect ALL revisions using proper throttling to avoid rate limits
This will take time but should get all 200 revisions without hitting 429 errors
"""

import os
import json
import time
import requests
from datetime import datetime
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

# Scopes for Google Drive API v2
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

def authenticate():
    """Authenticate and return service object for API v2"""
    creds = None
    
    # Load existing credentials
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    
    # If there are no (valid) credentials available, let the user log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    
    # Build service for API v2
    service = build('drive', 'v2', credentials=creds)
    return service

def slow_download_revision(service, file_id, revision, output_dir, attempt=1, max_attempts=5):
    """Download a revision with slow, careful throttling"""
    try:
        revision_id = revision['id']
        modified_date = revision['modifiedDate']
        
        # Parse the date for filename
        date_obj = datetime.fromisoformat(modified_date.replace('Z', '+00:00'))
        date_str = date_obj.strftime('%Y-%m-%d_%H-%M-%S')
        
        # Create output filename
        filename = f"revision_{revision_id}_{date_str}.txt"
        filepath = os.path.join(output_dir, filename)
        
        # Skip if already exists
        if os.path.exists(filepath):
            print(f"  ⏭️  Skipping {revision_id} - already exists")
            return True
        
        # Get export links
        export_links = revision.get('exportLinks', {})
        if 'text/plain' not in export_links:
            print(f"  ❌ No text/plain export link for revision {revision_id}")
            return False
        
        # Download using the export link with slow throttling
        download_url = export_links['text/plain']
        headers = {
            'Authorization': f'Bearer {service._http.credentials.token}'
        }
        
        print(f"  📥 Downloading revision {revision_id} (attempt {attempt}/{max_attempts})...")
        
        # Make request with timeout
        response = requests.get(download_url, headers=headers, timeout=30)
        
        if response.status_code == 200:
            content = response.text
            
            # Save the content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"  ✅ Saved {len(content)} chars to {filename}")
            return True
            
        elif response.status_code == 429:
            # Rate limit exceeded - wait longer
            wait_time = (2 ** attempt) + (attempt * 5)  # Exponential backoff with extra delay
            print(f"  ⏳ Rate limited (429). Waiting {wait_time} seconds before retry...")
            time.sleep(wait_time)
            
            if attempt < max_attempts:
                return slow_download_revision(service, file_id, revision, output_dir, attempt + 1, max_attempts)
            else:
                print(f"  ❌ Failed to download revision {revision_id} after {max_attempts} attempts")
                return False
                
        else:
            print(f"  ❌ Failed to download revision {revision_id}: {response.status_code}")
            if attempt < max_attempts:
                wait_time = 10 * attempt  # Wait longer on each retry
                print(f"  ⏳ Waiting {wait_time} seconds before retry...")
                time.sleep(wait_time)
                return slow_download_revision(service, file_id, revision, output_dir, attempt + 1, max_attempts)
            else:
                return False
            
    except Exception as e:
        print(f"  ❌ Error downloading revision {revision_id}: {e}")
        if attempt < max_attempts:
            wait_time = 10 * attempt
            print(f"  ⏳ Waiting {wait_time} seconds before retry...")
            time.sleep(wait_time)
            return slow_download_revision(service, file_id, revision, output_dir, attempt + 1, max_attempts)
        else:
            return False

def collect_all_revisions_slowly(service, file_id, output_dir="revisions_all_slow"):
    """Collect ALL revisions using very slow, careful throttling"""
    print(f"🐌 Slowly collecting ALL revisions for file: {file_id}")
    print(f"📁 Output directory: {output_dir}")
    print("⚠️  This will take a LONG time to avoid rate limits!")
    print("=" * 60)
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        # List all revisions
        print("📋 Fetching all revisions...")
        revisions_response = service.revisions().list(fileId=file_id).execute()
        revisions = revisions_response.get('items', [])
        
        print(f"Found {len(revisions)} total revisions")
        
        if not revisions:
            print("❌ No revisions found")
            return
        
        # Sort by modification date (oldest first)
        revisions.sort(key=lambda x: x['modifiedDate'])
        
        # Show date range
        oldest = revisions[0]['modifiedDate']
        newest = revisions[-1]['modifiedDate']
        print(f"📅 Date range: {oldest} to {newest}")
        
        # Check which files already exist
        existing_files = set()
        for filename in os.listdir(output_dir):
            if filename.endswith('.txt') and filename.startswith('revision_'):
                existing_files.add(filename)
        
        print(f"📁 Files already downloaded: {len(existing_files)}")
        
        # Download all revisions with very slow throttling
        successful = 0
        failed = 0
        skipped = 0
        
        for i, revision in enumerate(revisions, 1):
            revision_id = revision['id']
            modified_date = revision['modifiedDate']
            
            # Check if file already exists
            date_obj = datetime.fromisoformat(modified_date.replace('Z', '+00:00'))
            date_str = date_obj.strftime('%Y-%m-%d_%H-%M-%S')
            filename = f"revision_{revision_id}_{date_str}.txt"
            
            if filename in existing_files:
                print(f"[{i}/{len(revisions)}] ⏭️  Skipping {revision_id} - already exists")
                skipped += 1
                continue
            
            print(f"\n[{i}/{len(revisions)}] Processing revision {revision_id}...")
            
            if slow_download_revision(service, file_id, revision, output_dir):
                successful += 1
            else:
                failed += 1
            
            # SLOW throttling between requests - wait 5 seconds between each request
            if i < len(revisions):  # Don't wait after the last request
                print(f"  ⏳ Slow throttling: waiting 5 seconds before next request...")
                time.sleep(5)
        
        print(f"\n📊 Final Collection Summary:")
        print(f"  ✅ Successful: {successful}")
        print(f"  ❌ Failed: {failed}")
        print(f"  ⏭️  Skipped: {skipped}")
        print(f"  📁 Total files in directory: {successful + skipped}")
        print(f"  📁 Files saved to: {output_dir}")
        
        # Create metadata file
        metadata = {
            'file_id': file_id,
            'collection_date': datetime.now().isoformat(),
            'total_revisions': len(revisions),
            'successful_downloads': successful,
            'failed_downloads': failed,
            'skipped_downloads': skipped,
            'date_range': {
                'oldest': oldest,
                'newest': newest
            },
            'throttling_used': 'slow_5_second_delays',
            'revisions': [
                {
                    'id': r['id'],
                    'modified_date': r['modifiedDate'],
                    'keep_forever': r.get('keepForever', False)
                }
                for r in revisions
            ]
        }
        
        metadata_file = os.path.join(output_dir, 'revisions_metadata_all_slow.json')
        with open(metadata_file, 'w') as f:
            json.dump(metadata, f, indent=2)
        
        print(f"  📄 Metadata saved to: {metadata_file}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def main():
    """Main function"""
    file_id = "1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo"
    
    print("🐌 Starting SLOW revision collection...")
    print("⏰ This will take approximately 15-20 minutes for 200 revisions")
    print("🛡️  Using 5-second delays between requests to avoid rate limits")
    print()
    
    try:
        service = authenticate()
        collect_all_revisions_slowly(service, file_id)
    except Exception as e:
        print(f"❌ Authentication or service creation failed: {e}")

if __name__ == "__main__":
    main()
