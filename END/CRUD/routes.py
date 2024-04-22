from flask import Flask, render_template, request, redirect, url_for, jsonify, Blueprint
from models import Usuario, LivroCadastrado, LivroLido
from controllers import Controller


book = Blueprint('book', __name__)
@book.route("/", methods=["GET"])
def main():
    return render_template("index.html")

@book.route("/add", methods=["GET", "POST"])
def book_add():
    if request.method == 'POST':
        data = request.form.to_dict()
        Controller.book_add(data)
        return redirect(url_for('book.main'))
    return render_template("add.html")

@book.route("/home", methods=["GET"])
def book_list():
    books = Controller.book_list()
    return render_template("home.html", books=books)

@book.route("/edit/<int:id>", methods=["GET", "POST"])
def book_edit(id):
    if request.method == 'GET':
        book = Controller.book_find(id)
        return render_template("edit.html", book=book)
    data = request.form.to_dict()
    Controller.book_update(id, data)
    return redirect(url_for('book.book_list'))

@book.route("/delete/<int:id>", methods=["GET"])
def book_delete(id):
    Controller.book_delete(id)
    return redirect(url_for('book.book_list'))