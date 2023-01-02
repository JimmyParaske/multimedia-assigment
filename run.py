import os
import webbrowser
from http.server import SimpleHTTPRequestHandler, HTTPServer

os.chdir('./')
server_address = ('', 8000)

webbrowser.open('http://localhost:8000/', new=2)

try:
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    httpd.serve_forever()
except Exception:
    httpd.shutdown()