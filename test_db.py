import os
from urllib.parse import unquote, urlparse
from dotenv import load_dotenv
load_dotenv()

import psycopg2

DATABASE_URL = os.getenv("DATABASE_URL")
print(f"Testing connection to: {DATABASE_URL}")

try:
    conn = psycopg2.connect(DATABASE_URL)
    print("Connection successful!")
    conn.close()
except Exception as e:
    print(f"Connection failed:\n{type(e).__name__}: {e}")
