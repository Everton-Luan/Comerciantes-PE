from pydantic import BaseModel, Field


class ProdutoResumo(BaseModel):
    id: int
    nome: str
    preco: float
    foto: str


class ProdutoDetalhe(ProdutoResumo):
    telefone: str
    local: str  

class ProdutoRequest(BaseModel):
    nome: str = Field(..., min_length=1)
    preco: float = Field(..., gt=0)
    telefone: str = Field(..., min_length=1)
    local: str = Field(..., min_length=1)
    foto: str = Field(..., min_length=1)
    usuarioId: int