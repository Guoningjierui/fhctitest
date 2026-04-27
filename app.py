from __future__ import annotations

import importlib
from pathlib import Path

from flask import Flask, redirect, request, url_for

compress_module = importlib.util.find_spec("flask_compress")
Compress = None
if compress_module is not None:
    Compress = importlib.import_module("flask_compress").Compress


BASE_DIR = Path(__file__).resolve().parent

app = Flask(__name__, static_folder=".", static_url_path="")
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 60 * 60 * 24 * 30
if Compress is not None:
    Compress(app)


@app.after_request
def apply_cache_headers(response):
    path = request.path.lower()
    static_ext = (
        ".css",
        ".js",
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".webp",
        ".svg",
        ".ico",
        ".woff",
        ".woff2",
    )
    if path.endswith(static_ext):
        response.headers["Cache-Control"] = "public, max-age=2592000, immutable"
    return response


@app.get("/")
def index():
    # Forward root to the known-good static entry page.
    return redirect(url_for("static", filename="index.html"), code=302)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
