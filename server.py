"""Nanvi Robotics – local web server.
Run:  python server.py   then open http://localhost:8001

Contact form emails are delivered by the Google Apps Script web app
(see apps-script/Code.gs); this server only serves the static site.
The legacy /contact endpoint still saves submissions to contacts.json.
"""
import json
import os
import re
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE = os.path.dirname(os.path.abspath(__file__))
STATIC = os.path.join(BASE, "static")
DATA = os.path.join(BASE, "contacts.json")
PORT = 8001
RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=STATIC, **kw)

    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isfile(path) and "Range" in self.headers:
            m = RANGE_RE.match(self.headers.get("Range", "").strip())
            if m:
                size = os.path.getsize(path)
                start_str, end_str = m.groups()
                start = int(start_str) if start_str else 0
                end = int(end_str) if end_str else size - 1
                end = min(end, size - 1)
                if start <= end < size:
                    f = open(path, "rb")
                    f.seek(start)
                    self.send_response(206)
                    self.send_header("Content-type", self.guess_type(path))
                    self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
                    self.send_header("Content-Length", str(end - start + 1))
                    self.end_headers()
                    self._range_remaining = end - start + 1
                    return f
        self._range_remaining = None
        return super().send_head()

    def copyfile(self, source, outputfile):
        remaining = getattr(self, "_range_remaining", None)
        try:
            if remaining is None:
                return super().copyfile(source, outputfile)
            bufsize = 64 * 1024
            while remaining > 0:
                chunk = source.read(min(bufsize, remaining))
                if not chunk:
                    break
                outputfile.write(chunk)
                remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            pass

    # Only GET/HEAD/POST are allowed
    def do_PUT(self):
        self.send_error(405, "Method Not Allowed")

    def do_DELETE(self):
        self.send_error(405, "Method Not Allowed")

    def do_PATCH(self):
        self.send_error(405, "Method Not Allowed")

    def do_POST(self):
        if self.path == "/contact":
            self._handle_legacy_contact()
            return
        self.send_error(404)

    def _handle_legacy_contact(self):
        try:
            n = int(self.headers.get("Content-Length", 0))
            item = json.loads(self.rfile.read(n))
            item["time"] = datetime.now().isoformat(timespec="seconds")
            rows = json.load(open(DATA)) if os.path.exists(DATA) else []
            rows.append(item)
            json.dump(rows, open(DATA, "w"), indent=2)
            self.send_response(200)
        except Exception:
            self.send_response(400)
        self.end_headers()


if __name__ == "__main__":
    print(f"Nanvi site running at http://localhost:{PORT}  (Ctrl+C to stop)")
    ThreadingHTTPServer(("", PORT), Handler).serve_forever()
