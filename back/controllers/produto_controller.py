from fastapi import APIRouter, HTTPException
from models.produto_schema import ProdutoResumo, ProdutoDetalhe
from services.produto_service import listar_produtos, buscar_produto_por_id

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