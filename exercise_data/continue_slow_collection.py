#!/usr/bin/env python3
"""
Continue slow collection from where it left off - skip existing files
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

def continue_collection(file_id, output_dir="revisions_all_slow"):
    """Continue collection from where it left off"""
    print(f"🔄 Continuing slow collection for file: {file_id}")
    print(f"📁 Output directory: {output_dir}")
    print("=" * 60)
    
    # Get list of existing files
    existing_files = set()
    if os.path.exists(output_dir):
        for filename in os.listdir(output_dir):
            if filename.endswith('.txt') and filename.startswith('revision_'):
                existing_files.add(filename)
    
    print(f"📁 Files already downloaded: {len(existing_files)}")
    
    # Authenticate
    service = authenticate()
    
    # Get all revisions
    revisions_response = service.revisions().list(fileId=file_id).execute()
    revisions = revisions_response.get('items', [])
    revisions.sort(key=lambda x: x['modifiedDate'])
    
    print(f"📋 Total revisions available: {len(revisions)}")
    
    # Find missing revisions
    missing_revisions = []
    for revision in revisions:
        revision_id = revision['id']
        modified_date = revision['modifiedDate']
        
        date_obj = datetime.fromisoformat(modified_date.replace('Z', '+00:00'))
        date_str = date_obj.strftime('%Y-%m-%d_%H-%M-%S')
        filename = f"revision_{revision_id}_{date_str}.txt"
        
        if filename not in existing_files:
            missing_revisions.append(revision)
    
    print(f"📋 Missing revisions to download: {len(missing_revisions)}")
    
    if not missing_revisions:
        print("✅ All revisions already downloaded!")
        return
    
    # Download missing revisions
    successful = 0
    failed = 0
    
    for i, revision in enumerate(missing_revisions, 1):
        revision_id = revision['id']
        print(f"\n[{i}/{len(missing_revisions)}] Processing revision {revision_id}...")
        
        if slow_download_revision(service, file_id, revision, output_dir):
            successful += 1
        else:
            failed += 1
        
        # Slow throttling
        if i < len(missing_revisions):
            print(f"  ⏳ Waiting 5 seconds before next request...")
            time.sleep(5)
    
    print(f"\n📊 Continue Summary:")
    print(f"  ✅ New downloads: {successful}")
    print(f"  ❌ Failed: {failed}")
    print(f"  📁 Total files now: {len(existing_files) + successful}")

def main():
    file_id = "1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo"
    continue_collection(file_id)

if __name__ == "__main__":
    main()
