from flask import Flask, render_template, request, redirect, url_for
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from routes import book
from models import db, Usuario, LivroCadastrado, LivroLido

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(book)

if __name__ == '__main__':
    app.run(debug=True)