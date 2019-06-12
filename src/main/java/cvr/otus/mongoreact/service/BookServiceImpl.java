package cvr.otus.mongoreact.service;

import cvr.otus.mongoreact.models.Book;
import cvr.otus.mongoreact.repositories.BookRepository;
import cvr.otus.mongoreact.utils.ValueLabelList;
import cvr.otus.mongoreact.utils.ValueLabel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository repository;

    @Autowired
    public BookServiceImpl(BookRepository repository) {
        this.repository = repository;
    }


    @Override
    public Book save(Book book) {
        return repository.save(book);
    }

    @Override
    public Iterable<Book> findAll() {
        return repository.findAll();
    }

    @Override
    public Book get(String id) {
        return repository.getById(id);
    }

    @Override
    public void remove(String id) {
        Book book = repository.getById(id);
        if (book != null)
            repository.delete(book);
    }

    @Override
    public ValueLabelList getAuthors() {
        Iterable<Book> all = findAll();
        ValueLabelList ret = new ValueLabelList();
        all.forEach(b -> ret.add(b.getAuthor()));
        return ret;
    }

    @Override
    public ValueLabelList getGenres() {
        Iterable<Book> all = findAll();
        ValueLabelList ret = new ValueLabelList();
        all.forEach(b -> ret.add(b.getGenre()));
        return ret;
    }

}
