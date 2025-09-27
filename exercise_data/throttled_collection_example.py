#!/usr/bin/env python3
"""
Example of using the Google API Throttler for safe data collection
"""

import os
import json
from datetime import datetime
from google_api_throttler import create_throttled_service, throttled_download_revision

def collect_revisions_with_throttling(file_id: str, output_dir: str = "revisions_throttled"):
    """
    Collect revisions using proper throttling to avoid rate limits
    """
    print(f"🔍 Collecting revisions for file: {file_id}")
    print(f"📁 Output directory: {output_dir}")
    print("=" * 60)
    
    # Create throttled service
    service, throttler = create_throttled_service()
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        # List all revisions with throttling
        print("📋 Fetching all revisions...")
        revisions_result = throttler.make_request(
            service.revisions().list,
            fileId=file_id
        )
        
        if not revisions_result:
            print("❌ Failed to fetch revisions")
            return
            
        revisions = revisions_result.get('items', [])
        print(f"Found {len(revisions)} revisions")
        
        if not revisions:
            print("❌ No revisions found")
            return
        
        # Sort by modification date (oldest first)
        revisions.sort(key=lambda x: x['modifiedDate'])
        
        # Show date range
        oldest = revisions[0]['modifiedDate']
        newest = revisions[-1]['modifiedDate']
        print(f"📅 Date range: {oldest} to {newest}")
        
        # Download revisions with throttling
        successful = 0
        failed = 0
        
        for i, revision in enumerate(revisions, 1):
            print(f"\n[{i}/{len(revisions)}] Processing revision {revision['id']}...")
            
            if throttled_download_revision(service, throttler, file_id, revision, output_dir):
                successful += 1
            else:
                failed += 1
        
        print(f"\n📊 Collection Summary:")
        print(f"  ✅ Successful: {successful}")
        print(f"  ❌ Failed: {failed}")
        print(f"  📁 Files saved to: {output_dir}")
        
        # Create metadata file
        metadata = {
            'file_id': file_id,
            'collection_date': datetime.now().isoformat(),
            'total_revisions': len(revisions),
            'successful_downloads': successful,
            'failed_downloads': failed,
            'date_range': {
                'oldest': oldest,
                'newest': newest
            },
            'throttling_used': True,
            'revisions': [
                {
                    'id': r['id'],
                    'modified_date': r['modifiedDate'],
                    'keep_forever': r.get('keepForever', False)
                }
                for r in revisions
            ]
        }
        
        metadata_file = os.path.join(output_dir, 'revisions_metadata_throttled.json')
        with open(metadata_file, 'w') as f:
            json.dump(metadata, f, indent=2)
        
        print(f"  📄 Metadata saved to: {metadata_file}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def main():
    """Main function"""
    file_id = "1aLn_N1UheWVFKSVQtfBkgQbVDvHNbjVSH9ie3o_trYo"
    
    print("🚀 Starting throttled revision collection...")
    print("⚡ This will use proper rate limiting to avoid 429 errors")
    print()
    
    collect_revisions_with_throttling(file_id)

if __name__ == "__main__":
    main()
