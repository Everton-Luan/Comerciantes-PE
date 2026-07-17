from pydantic import BaseModel


class ProdutoResumo(BaseModel):
    id: int
    nome: str
    preco: float
    foto: str


class ProdutoDetalhe(ProdutoResumo):
    telefone: str
    local: str  