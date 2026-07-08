import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "database.db")

def get_connection() -> sqlite3.Connection:
    conexao = sqlite3.connect(DB_PATH)
    conexao.row_factory = sqlite3.Row
    return conexao