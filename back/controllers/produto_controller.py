from fastapi import APIRouter, HTTPException
from models.produto_schema import *
from services.produto_service import *

router = APIRouter()


@router.get("/produtos", response_model=list[ProdutoResumo])
def get_produtos():
    return listar_produtos()


@router.get("/produtos/{produto_id}", response_model=ProdutoDetalhe)
def get_produto(produto_id: int):
    produto = buscar_produto_por_id(produto_id)

    if produto is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    return produto

@router.post("/produtos", response_model=ProdutoDetalhe, status_code=201)
def post_produto(dados: ProdutoRequest):
    return criar_produto(dados.model_dump())