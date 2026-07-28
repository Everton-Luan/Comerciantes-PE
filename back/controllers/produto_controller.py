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

@router.get("/meus-produtos", response_model=list[ProdutoResumo])
def get_meus_produtos(usuarioId: int):
    return listar_produtos_usuario(usuarioId)

@router.put("/produtos/{produto_id}", response_model=ProdutoDetalhe)
def put_produto(produto_id: int, dados: ProdutoRequest):
    produto_existente = buscar_produto_por_id(produto_id)

    if produto_existente is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    if produto_existente["usuarioId"] != dados.usuarioId:
        raise HTTPException(status_code=403, detail="Você não tem permissão para editar este produto")

    return atualizar_produto(produto_id, dados.model_dump())

@router.delete("/produtos/{produto_id}", status_code=204)
def delete_produto(produto_id: int, usuarioId: int):
    produto_existente = buscar_produto_por_id(produto_id)

    if produto_existente is None:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    if produto_existente["usuarioId"] != usuarioId:
        raise HTTPException(status_code=403, detail="Você não tem permissão para excluir este produto")

    excluir_produto(produto_id)