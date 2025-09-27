#!/usr/bin/env python3
"""
Simple slow collection with 30-second delays between requests
"""

import os
import time
import requests
from datetime import datetime
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

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

def download_revision(service, revision, output_dir):
    """Download a single revision"""
    revision_id = revision['id']
    modified_date = revision['modifiedDate']
    
    # Create filename
    date_obj = datetime.fromisoformat(modified_date.replace('Z', '+00:00'))
    date_str = date_obj.strftime('%Y-%m-%d_%H-%M-%S')
    filename = f"revision_{revision_id}_{date_str}.txt"
    filepath = os.path.join(output_dir, filename)
    
    # Skip if exists
    if os.path.exists(filepath):
        print(f"Skipping {revision_id} - exists")
        return True
    
    # Get download URL
    export_links = revision.get('exportLinks', {})
    if 'text/plain' not in export_links:
        print(f"No export link for {revision_id}")
        return False
    
    # Download
    download_url = export_links['text/plain']
    headers = {'Authorization': f'Bearer {service._http.credentials.token}'}
    
    result = False
    try:
        response = requests.get(download_url, headers=headers, timeout=30)
        if response.status_code == 200:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(response.text)
            print(f"Downloaded {revision_id}")
            result =True
        else:
            print(f"Failed {revision_id}: {response.status_code}")
            
    except Exception as e:
        print(f"Error {revision_id}: {e}")
    finally:
        print("Waiting 30 seconds...")
        time.sleep(30)
        return result

def collect_revisions(service, file_id, output_dir="revisions_all_slow"):
    """Collect all revisions with 30-second delays"""
    print(f"Collecting revisions for file: {file_id}")
    print(f"Output directory: {output_dir}")
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Get all revisions
    revisions_response = service.revisions().list(fileId=file_id).execute()
    revisions = revisions_response.get('items', [])
    
    if not revisions:
        print("No revisions found")
        return
    
    revisions.sort(key=lambda x: x['modifiedDate'])
    print(f"Found {len(revisions)} revisions")
    
    
    # Download each revision
    successful = 0
    failed = 0
    
    for i, revision in enumerate(revisions, 1):
        print(f"[{i}/{len(revisions)}] Processing revision {revision['id']}")
        
        if download_revision(service, revision, output_dir):
            successful += 1
        else:
            failed += 1
        
    print(f"Complete: {successful} successful, {failed} failed")

def main():
    file_id = "1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo"
    
    print("Starting revision collection...")
    print("30-second delays between requests")
    
    try:
        service = authenticate()
        collect_revisions(service, file_id)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
