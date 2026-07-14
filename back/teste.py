from services.produto_service import listar_produtos, buscar_produto_por_id

print(listar_produtos())
print(buscar_produto_por_id(1))       # troque pelo id de um produto real do seu banco
print(buscar_produto_por_id(9999))    # id que não existe -> deve vir None