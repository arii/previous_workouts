#!/usr/bin/env python3
"""
Google API Rate Limiting and Throttling Utilities
Implements exponential backoff and proper request throttling
"""

import time
import random
import requests
from typing import Optional, Dict, Any
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

class GoogleAPIThrottler:
    """
    Handles rate limiting and throttling for Google API requests
    """
    
    def __init__(self, 
                 base_delay: float = 1.0,
                 max_delay: float = 60.0,
                 backoff_factor: float = 2.0,
                 jitter: bool = True):
        """
        Initialize the throttler
        
        Args:
            base_delay: Base delay between requests in seconds
            max_delay: Maximum delay between requests in seconds
            backoff_factor: Factor to multiply delay by on each retry
            jitter: Whether to add random jitter to delays
        """
        self.base_delay = base_delay
        self.max_delay = max_delay
        self.backoff_factor = backoff_factor
        self.jitter = jitter
        self.last_request_time = 0
        self.consecutive_errors = 0
        
    def wait_before_request(self):
        """Wait before making a request to respect rate limits"""
        current_time = time.time()
        time_since_last = current_time - self.last_request_time
        
        # Calculate delay based on consecutive errors
        if self.consecutive_errors > 0:
            delay = min(
                self.base_delay * (self.backoff_factor ** self.consecutive_errors),
                self.max_delay
            )
        else:
            delay = self.base_delay
            
        # Add jitter to prevent thundering herd
        if self.jitter:
            jitter_amount = delay * 0.1  # 10% jitter
            delay += random.uniform(-jitter_amount, jitter_amount)
            delay = max(0, delay)  # Ensure non-negative
            
        # Wait if not enough time has passed
        if time_since_last < delay:
            sleep_time = delay - time_since_last
            print(f"⏳ Rate limiting: waiting {sleep_time:.2f} seconds...")
            time.sleep(sleep_time)
            
        self.last_request_time = time.time()
        
    def handle_response(self, response: requests.Response) -> bool:
        """
        Handle API response and update throttling state
        
        Returns:
            True if request was successful, False if should retry
        """
        if response.status_code == 200:
            self.consecutive_errors = 0
            return True
        elif response.status_code == 429:
            # Rate limit exceeded
            self.consecutive_errors += 1
            retry_after = response.headers.get('Retry-After')
            if retry_after:
                wait_time = float(retry_after)
                print(f"⏳ Rate limited (429). Server says wait {wait_time} seconds...")
                time.sleep(wait_time)
            else:
                # Exponential backoff
                wait_time = min(
                    self.base_delay * (self.backoff_factor ** self.consecutive_errors),
                    self.max_delay
                )
                print(f"⏳ Rate limited (429). Waiting {wait_time:.2f} seconds...")
                time.sleep(wait_time)
            return False
        elif response.status_code in [500, 502, 503, 504]:
            # Server errors - retry with backoff
            self.consecutive_errors += 1
            wait_time = min(
                self.base_delay * (self.backoff_factor ** self.consecutive_errors),
                self.max_delay
            )
            print(f"⏳ Server error ({response.status_code}). Waiting {wait_time:.2f} seconds...")
            time.sleep(wait_time)
            return False
        else:
            # Client errors - don't retry
            print(f"❌ Client error ({response.status_code}): {response.text[:200]}")
            return False
            
    def make_request(self, 
                    method: callable, 
                    max_retries: int = 5,
                    **kwargs) -> Optional[Any]:
        """
        Make a throttled API request with retry logic
        
        Args:
            method: The API method to call
            max_retries: Maximum number of retry attempts
            **kwargs: Arguments to pass to the API method
            
        Returns:
            API response or None if all retries failed
        """
        for attempt in range(max_retries + 1):
            try:
                # Wait before making request
                self.wait_before_request()
                
                # Make the request
                if hasattr(method, '__call__'):
                    # For Google API client methods
                    result = method(**kwargs).execute()
                    self.consecutive_errors = 0
                    return result
                else:
                    # For requests-based methods
                    response = method(**kwargs)
                    if self.handle_response(response):
                        return response
                        
            except Exception as e:
                self.consecutive_errors += 1
                if attempt < max_retries:
                    wait_time = min(
                        self.base_delay * (self.backoff_factor ** self.consecutive_errors),
                        self.max_delay
                    )
                    print(f"⏳ Request failed (attempt {attempt + 1}/{max_retries + 1}): {e}")
                    print(f"   Waiting {wait_time:.2f} seconds before retry...")
                    time.sleep(wait_time)
                else:
                    print(f"❌ Request failed after {max_retries + 1} attempts: {e}")
                    return None
                    
        return None

def create_throttled_service(credentials_file: str = 'credentials.json',
                           token_file: str = 'token.json',
                           scopes: list = None) -> tuple:
    """
    Create a Google API service with throttling
    
    Returns:
        Tuple of (service, throttler)
    """
    if scopes is None:
        scopes = ['https://www.googleapis.com/auth/drive.readonly']
        
    # Authenticate
    creds = None
    if os.path.exists(token_file):
        creds = Credentials.from_authorized_user_file(token_file, scopes)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(credentials_file, scopes)
            creds = flow.run_local_server(port=0)
        
        with open(token_file, 'w') as token:
            token.write(creds.to_json())
    
    # Create service and throttler
    service = build('drive', 'v2', credentials=creds)
    throttler = GoogleAPIThrottler(
        base_delay=2.0,      # 2 second base delay
        max_delay=60.0,      # Max 60 seconds
        backoff_factor=2.0,  # Double delay on each retry
        jitter=True          # Add random jitter
    )
    
    return service, throttler

def throttled_download_revision(service, throttler, file_id: str, revision: dict, 
                              output_dir: str) -> bool:
    """
    Download a revision with proper throttling
    """
    try:
        revision_id = revision['id']
        modified_date = revision['modified_date']
        
        # Parse date for filename
        from datetime import datetime
        date_obj = datetime.fromisoformat(modified_date.replace('Z', '+00:00'))
        date_str = date_obj.strftime('%Y-%m-%d_%H-%M-%S')
        filename = f"revision_{revision_id}_{date_str}.txt"
        filepath = os.path.join(output_dir, filename)
        
        # Skip if already exists
        if os.path.exists(filepath):
            print(f"  ⏭️  Skipping {revision_id} - already exists")
            return True
        
        # Get revision details with throttling
        revision_details = throttler.make_request(
            service.revisions().get,
            fileId=file_id,
            revisionId=revision_id
        )
        
        if not revision_details:
            print(f"  ❌ Failed to get revision details for {revision_id}")
            return False
            
        # Get export links
        export_links = revision_details.get('exportLinks', {})
        if 'text/plain' not in export_links:
            print(f"  ❌ No text/plain export link for revision {revision_id}")
            return False
        
        # Download with throttling
        download_url = export_links['text/plain']
        headers = {
            'Authorization': f'Bearer {service._http.credentials.token}'
        }
        
        def download_request():
            return requests.get(download_url, headers=headers, timeout=30)
        
        response = throttler.make_request(download_request)
        
        if response and response.status_code == 200:
            content = response.text
            
            # Save content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"  ✅ Saved {len(content)} chars to {filename}")
            return True
        else:
            print(f"  ❌ Failed to download revision {revision_id}")
            return False
            
    except Exception as e:
        print(f"  ❌ Error downloading revision {revision_id}: {e}")
        return False

# Example usage
if __name__ == "__main__":
    import os
    
    # Create throttled service
    service, throttler = create_throttled_service()
    
    # Example: List files with throttling
    print("🔍 Listing files with throttling...")
    files_result = throttler.make_request(
        service.files().list,
        pageSize=10,
        q="name contains 'workout'"
    )
    
    if files_result:
        files = files_result.get('items', [])
        print(f"Found {len(files)} files")
        for file in files:
            print(f"  📄 {file['title']} ({file['id']})")
    else:
        print("❌ Failed to list files")
