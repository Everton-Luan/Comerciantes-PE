from database.connection import get_connection


def autenticar_usuario(login: str, senha: str) -> dict | None:
    """
    Verifica se existe um usuário com o login informado e se a senha confere.
    Retorna os dados do usuário (sem a senha) em caso de sucesso, ou None
    se as credenciais forem inválidas.
    """
    conexao = get_connection()
    try:
        cursor = conexao.cursor()
        cursor.execute(
            "SELECT id, nome, login, senha FROM usuario WHERE login = ?",
            (login,)
        )
        usuario = cursor.fetchone()
    finally:
        conexao.close()

    if usuario is None:
        return None

    if usuario["senha"] != senha:
        return None

    return {"id": usuario["id"], "nome": usuario["nome"], "login": usuario["login"]}