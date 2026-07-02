import sqlite3

conexao = sqlite3.connect("back/Database/database.db")
cursor = conexao.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS usuario(
               id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
               nome TEXT NOT NULL,
               login TEXT NOT NULL UNIQUE,
               senha TEXT NOT NULL
               )
               """)

cursor.execute("""INSERT INTO usuario(nome, login, senha)
               SELECT 'Jonas', 'jonas123', '1234'
               WHERE NOT EXISTS(SELECT 1 FROM usuario WHERE login = 'jonas123')
               """)

cursor.execute("""CREATE TABLE IF NOT EXISTS produto(
               id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
               nome TEXT NOT NULL,
               preco REAL NOT NULL UNIQUE,
               telefone TEXT NOT NULL,
               local TEXT NOT NULL,
               foto TEXT,
               usuarioId INTEGER NOT NULL,
               FOREIGN KEY (usuarioId) REFERENCES usuario(id)
               )""")

conexao.commit()
conexao.close()