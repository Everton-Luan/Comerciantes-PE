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