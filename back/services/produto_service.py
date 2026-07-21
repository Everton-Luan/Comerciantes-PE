from database.connection import get_connection


def listar_produtos() -> list[dict]:
    conexao = get_connection()
    try:
        cursor = conexao.cursor()
        cursor.execute("SELECT id, nome, preco, foto FROM produto")
        produtos = cursor.fetchall()
    finally:
        conexao.close()

    return [dict(produto) for produto in produtos]


def buscar_produto_por_id(produto_id: int) -> dict | None:
    conexao = get_connection()
    try:
        cursor = conexao.cursor()
        cursor.execute(
            "SELECT id, nome, preco, foto, telefone, local FROM produto WHERE id = ?",
            (produto_id,)
        )
        produto = cursor.fetchone()
    finally:
        conexao.close()

    if produto is None:
        return None

    return dict(produto)

def criar_produto(dados: dict) -> dict:
    conexao = get_connection()
    try:
        cursor = conexao.cursor()
        cursor.execute(
            """
            INSERT INTO produto (nome, preco, telefone, local, foto, usuarioId)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (dados["nome"], dados["preco"], dados["telefone"], dados["local"], dados["foto"], dados["usuarioId"])
        )
        conexao.commit()
        novo_id = cursor.lastrowid
    finally:
        conexao.close()

    return buscar_produto_por_id(novo_id)