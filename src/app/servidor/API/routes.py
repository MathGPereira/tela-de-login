from API import app, database, bcrypt
from API.models import Usuario
from flask import request
import sys
import ast


@app.route("/", methods=["POST"])
def cadastra_usuario():
    info_usuario = ast.literal_eval(request.data.decode(sys.getdefaultencoding()))
    usuario = Usuario(
        nome=info_usuario.nome,
        sobrenome=info_usuario.sobrenome,
        email=info_usuario.email,
        senha=bcrypt.generate_password_hash(info_usuario.senha)
    )

    with app.app_context():
        database.session.add(usuario)
        database.session.commit()

    return ""
