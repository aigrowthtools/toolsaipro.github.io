from http.server import BaseHTTPRequestHandler
import json
import base64
import io
from pypdf import PdfReader, PdfWriter

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            file_b64 = data.get('file')
            password = data.get('password', '')
            
            file_bytes = base64.b64decode(file_b64)
            
            input_pdf = PdfReader(io.BytesIO(file_bytes))
            
            # Agar file encrypted hai toh check karega aur kholega
            if input_pdf.is_encrypted:
                decrypt_success = input_pdf.decrypt(password)
                if not decrypt_success:
                    raise Exception("Galat Password! Kripya sahi password enter karein.")
            
            output_pdf = PdfWriter()
            
            for page in input_pdf.pages:
                output_pdf.add_page(page)
                
            output_stream = io.BytesIO()
            output_pdf.write(output_stream)
            unlocked_bytes = output_stream.getvalue()
            
            unlocked_b64 = base64.b64encode(unlocked_bytes).decode('utf-8')
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            response = {"success": True, "file": unlocked_b64}
            self.wfile.write(json.dumps(response).encode('utf-8'))
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {"success": False, "error": str(e)}
            self.wfile.write(json.dumps(response).encode('utf-8'))
          
