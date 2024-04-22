from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuario'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100))
    senha = db.Column(db.String(100))

    def __repr__(self):
        return '<Usuario %r>' % self.nome

class LivroCadastrado(db.Model):
    __tablename__ = 'livro'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    titulo = db.Column(db.String(100))
    autor = db.Column(db.String(100))
    genero = db.Column(db.String(100))
    avaliacao_media = db.Column(db.Float)


class LivroLido(db.Model):
    __tablename__ = 'livrolido'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    livro_cadastrado = db.Column(db.Integer, db.ForeignKey('livro.id'))
    data_leitura = db.Column(db.Date)
    avaliação = db.Column(db.Integer)

    def __repr__(self):
        return '<Livro %r>' % self.titulo   