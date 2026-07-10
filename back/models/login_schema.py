from pydantic import BaseModel, Field

class LoginRequest(BaseModel):
    # Schema de validação do corpo da requisição POST /login.

    login: str = Field(..., min_length=1, description="Login do usuário cadastrado")
    senha: str = Field(..., min_length=1, description="Senha do usuário")