package cvr.otus.mongoreact.repositories;

import cvr.otus.mongoreact.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, String> {

    Book getById(String id);

    @SuppressWarnings("unchecked")
    Book save(Book book);

//    @Query("select distinct( b.author) from Book b")
//    List<String> getAuthors();


    //    List<Book> findAll();

}
