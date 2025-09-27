#!/usr/bin/env python3
"""
Resume slow collection from where it left off
"""

import os
import json
from datetime import datetime
from collect_all_revisions_slow import authenticate, slow_download_revision

def resume_collection(file_id, output_dir="revisions_all_slow"):
    """Resume collection from where it left off"""
    
    # Load metadata to see what we already have
    metadata_file = os.path.join(output_dir, 'revisions_metadata_all_slow.json')
    
    if not os.path.exists(metadata_file):
        print("❌ No metadata file found. Run collect_all_revisions_slow.py first.")
        return
    
    with open(metadata_file, 'r') as f:
        metadata = json.load(f)
    
    print(f"🔄 Resuming collection for file: {file_id}")
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
    
    print(f"\n📊 Resume Summary:")
    print(f"  ✅ New downloads: {successful}")
    print(f"  ❌ Failed: {failed}")
    print(f"  📁 Total files now: {len(existing_files) + successful}")

def main():
    file_id = "1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo"
    resume_collection(file_id)

if __name__ == "__main__":
    main()
