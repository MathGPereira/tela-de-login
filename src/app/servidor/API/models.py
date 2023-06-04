from API import database


class Usuario(database.Model):
    id = database.Column(database.Integer, primary_key=True, autoincrement=True, nullable=False)
    nome = database.Column(database.String, nullable=False)
    sobrenome = database.Column(database.String, nullable=False)
    email = database.Column(database.String, nullable=False, unique=True)
    senha = database.Column(database.String, nullable=False)
