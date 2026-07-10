from services.login_service import autenticar_usuario

print(autenticar_usuario('jonas123', 'errada'))
print(autenticar_usuario('jonas123', '1234'))