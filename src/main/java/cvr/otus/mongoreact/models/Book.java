package cvr.otus.mongoreact.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Book {

    @Id
    private String id;

    private String name;

    private String comment;

//    @DBRef
    private String genre;

//    @DBRef
    private String author ;

    public Book(String name) {
        this.name = name;
    }

    public Book(String name, String comment, String author, String genre) {
        this.name = name;
        this.comment = comment;
        this.author = author;
        this.genre = genre;
    }

    @Override
    public String toString() {
        return name;
    }

}
