from API import app, database, bcrypt
from API.models import Usuario
from flask import request
import sys
import ast


@app.route("/api", methods=["POST"])
def verifica_email_cadastrado():
    email = request.data.decode(sys.getdefaultencoding())

    with app.app_context():
        if Usuario.query.filter_by(email=email).first():
            return "{'status': True}"

    return "{'status': False}"


@app.route("/api/validaLogin", methods=["POST"])
def valida_login():
    info_login = ast.literal_eval(request.data.decode(sys.getdefaultencoding()))

    with app.app_context():
        try:
            usuario = Usuario.query.filter_by(email=info_login["email"]).first()
            if bcrypt.check_password_hash(usuario.senha, info_login["senha"]):
                return {'status': True}
        except:
            return {'status': False}


@app.route("/api/cadastrar", methods=["POST"])
def cadastra_usuario():
    # with app.app_context():
    #     database.drop_all()
    #     database.create_all()

    info_usuario = ast.literal_eval(request.data.decode(sys.getdefaultencoding()))
    usuario = Usuario(
        nome=info_usuario["nome"],
        sobrenome=info_usuario["sobrenome"],
        email=info_usuario["email"],
        senha=bcrypt.generate_password_hash(info_usuario["senha"])
    )

    with app.app_context():
        try:
            usuario.query.filter_by(email=usuario.email).first()
            return {'status': False}
        except:
            database.session.add(usuario)
            database.session.commit()

    return {'status': True}


@app.route("/api/trocar-senha", methods=["POST"])
def trocar_senha():
    info_troca_senha = ast.literal_eval(request.data.decode(sys.getdefaultencoding()))

    with app.app_context():
        usuario = Usuario.query.filter_by(email=info_troca_senha["email"]).first()

        usuario.senha = bcrypt.generate_password_hash(info_troca_senha["senha"])

    return {}
