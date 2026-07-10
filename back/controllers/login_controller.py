from fastapi import APIRouter, HTTPException
from models.login_schema import LoginRequest
from services.login_service import autenticar_usuario

router = APIRouter()


@router.post("/login")
def login(dados: LoginRequest):
    usuario = autenticar_usuario(dados.login, dados.senha)

    if usuario is None:
        raise HTTPException(status_code=401, detail="Login ou senha incorretos")

    return usuario