"""
The Bookmark Cafe - Local Development Server
Run this script to preview the website locally at http://localhost:8080
"""
import http.server
import socketserver
import os
import webbrowser
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers for local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    with http.server.ThreadingHTTPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print("  THE BOOKMARK CAFE - Local Website Server")
        print("=" * 60)
        print(f"  Website URL: {url}")
        print(f"  Root Folder: {DIRECTORY}")
        print("  Serving live at http://localhost:8080")
        print("  Press Ctrl+C in terminal to stop.")
        print("=" * 60)
        
        # Try to open the browser automatically if requested
        if "--open" in sys.argv or "-o" in sys.argv:
            try:
                webbrowser.open(url)
            except Exception:
                pass
                
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server. Goodbye!")

if __name__ == '__main__':
    main()
