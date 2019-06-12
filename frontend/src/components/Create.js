import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MultiSelectReact from 'multi-select-react';


class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            comment: '',
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

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {name, comment, authors, genres} = this.state;
        console.log("onSubmit", name, comment, authors, genres)
        axios.post('/books', {name, comment, authors, genres})
            .then((result) => {
                this.props.history.push("/")
                console.log(result);
            });
    };

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
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Новая книга
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4>
                            <Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                                К списку
                            </Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="isbn">Название:</label>
                                <input type="text" class="form-control" name="name" value={this.state.name}
                                       onChange={this.onChange} placeholder="Название"/>
                            </div>
                            <div class="form-group">
                                <label for="title">Описание:</label>
                                <input type="text" class="form-control" name="comment" value={this.state.comment}
                                       onChange={this.onChange} placeholder="Описание"/>
                            </div>
                            <div class="form-group">
                                <label for="author">Автор:</label>
                                <MultiSelectReact
                                    options={this.state.authors}
                                    optionClicked={this.authorOptionClicked.bind(this)}
                                    selectedBadgeClicked={this.authorSelectedBadgeClicked.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles}
                                    />
                            </div>
                            <div class="form-group">
                                <label for="genre">Жанр:</label>
                                <MultiSelectReact
                                    options={this.state.genres}
                                    optionClicked={this.genreOptionClicked.bind(this)}
                                    selectedBadgeClicked={this.genreSelectedBadgeClicked.bind(this)}
                                    selectedOptionsStyles={selectedOptionsStyles}
                                    optionsListStyles={optionsListStyles}
                                />
                            </div>
                            <button type="submit" class="btn btn-default">Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;