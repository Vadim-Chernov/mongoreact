import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Select from 'react-select'
import MultiSelectReact from "multi-select-react";

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {},
            authors: [],
            genres: []
        };
        axios.get('/authors')
            .then(res => {
                this.setState({authors: res.data});
                console.log("state.authors", this.state.authors);

            });
        axios.get('/genres')
            .then(res => {
                this.setState({genres: res.data});
                console.log("state.genres", this.state.genres);

            });
    }

    componentDidMount() {
        axios.get('/books/' + this.props.match.params.id)
            .then(res => {
                this.setState({book: res.data});
                console.log(this.state.book);
            });
    }

    onChange = (e) => {
        const state = this.state.book
        state[e.target.name] = e.target.value;
        this.setState({book: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, comment, author, genre} = this.state.book;

        axios.put('/books/' + this.props.match.params.id, {name, comment, author, genre})
            .then((result) => {
                this.props.history.push("/show/" + this.props.match.params.id)
            });
    }
    authorOptionClicked(authors) {
        console.log(`authorOptionClicked:`, authors);
        this.setState({authors: authors});
    }

    authorSelectedBadgeClicked(authors) {
        console.log(`authorSelectedBadgeClicked:`, authors);
        this.setState({authors: authors});
    }
    genreOptionClicked(genres) {
        console.log(`genresOptionClicked:`, genres);
        this.setState({genres: genres});
    }

    genreSelectedBadgeClicked(genres) {
        console.log(`genresSelectedBadgeClicked:`, genres);
        this.setState({genres: genres});
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Редактировать книгу
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4>
                            <Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                                К списку
                            </Link>
                        </h4>

                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="name">Название:</label>
                                <input type="text" class="form-control" name="name" value={this.state.book.name}
                                       onChange={this.onChange} placeholder="Название"/>
                            </div>
                            <div class="form-group">
                                <label for="title">Описание:</label>
                                <input type="text" class="form-control" name="comment" value={this.state.book.comment}
                                       onChange={this.onChange} placeholder="Описание"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Автор:</label>
                                <MultiSelectReact
                                    options={this.state.authors}
                                    optionClicked={this.authorOptionClicked.bind(this)}
                                    selectedBadgeClicked={this.authorSelectedBadgeClicked.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="genre">Жанр:</label>
                                <MultiSelectReact
                                    options={this.state.genres}
                                    optionClicked={this.genreOptionClicked.bind(this)}
                                    selectedBadgeClicked={this.genreSelectedBadgeClicked.bind(this)}
                                />
                            </div>
                            <button type="submit" class="btn btn-default">Изменить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;