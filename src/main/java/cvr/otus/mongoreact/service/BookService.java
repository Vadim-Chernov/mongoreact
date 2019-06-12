package cvr.otus.mongoreact.service;


import cvr.otus.mongoreact.controllers.BookController;
import cvr.otus.mongoreact.models.Book;
import cvr.otus.mongoreact.utils.ValueLabel;

import java.util.List;
import java.util.Optional;

public interface BookService {
    Book save(Book book);

    Iterable<Book> findAll();

    Book get(String id);

    void remove(String id);

    List<ValueLabel> getAuthors();

    List<ValueLabel> getGenres();


//    Book addAuthor(String book_id, String author_id);
//
//    Book addGenre(String book_id, String genre_id);
//
//    Book removeAuthor(String book_id, String author_id);
//
//    Book removeGenre(String book_id, String genre_id);
//
//    List<Author> notAuthors(String book_id);
//
//    List<Genre> notGenres(String book_id);

}
