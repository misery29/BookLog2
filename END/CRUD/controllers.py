from models import db, LivroCadastrado

class Controller:
    def book_add(data):
        newBook = LivroCadastrado(titulo= data["titulo"], autor= data["autor"], genero= data["genero"], avaliacao_media= float(data["avaliacao_media"]))
        db.session.add(newBook)
        db.session.commit()


    def book_list():
        books = LivroCadastrado.query.all()
        return books
    
    def book_find(id):
        return LivroCadastrado.query.get(id)

    def book_update(id, data):
        book = LivroCadastrado.query.get(id)
        book.titulo = data["titulo"]
        book.autor = data["autor"]
        book.genero = data["genero"]
        book.avaliacao_media = float(data["avaliacao_media"])
        db.session.commit()
        return book
    
    def book_delete(id):
        book = LivroCadastrado.query.get(id)
        db.session.delete(book)
        db.session.commit()