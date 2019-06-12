package cvr.otus.mongoreact.controllers;

import cvr.otus.mongoreact.models.Book;
import cvr.otus.mongoreact.service.BookService;
import cvr.otus.mongoreact.utils.ValueLabel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public Iterable<Book> bookList() {
        Iterable<Book> all = bookService.findAll();
        return all;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public Book save(@RequestBody Book book) {
        bookService.save(book);
        return book;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public Book show(@PathVariable String id) {
        return bookService.get(id);
    }


    @GetMapping(value = "/authors")
    public List<ValueLabel> authorList() {
        List<ValueLabel> all = bookService.getAuthors();
        return all;
    }
    @GetMapping(value = "/genres")
    public List<ValueLabel> genreList() {
        List<ValueLabel> all = bookService.getGenres();
        return all;
    }


}