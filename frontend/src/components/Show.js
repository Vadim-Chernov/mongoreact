import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {}
        };
    }

    componentDidMount() {
        axios.get('/books/'+this.props.match.params.id)
            .then(res => {
                this.setState({ book: res.data });
                console.log(this.state.book);
            });
    }

    delete(id){
        console.log(id);
        axios.delete('/books/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Описание книги
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> К списку книг</Link></h4>
                        <dl>
                            <dt>Название:</dt>
                            <dd>{this.state.book.name}</dd>
                            <dt>Описание:</dt>
                            <dd>{this.state.book.comment}</dd>
                            <dt>Автор:</dt>
                            <dd>{this.state.book.author}</dd>
                            <dt>Жанр:</dt>
                            <dd>{this.state.book.genre}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.book.id}`} class="btn btn-success">Изменить</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.book.id)} class="btn btn-danger">Удалить</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
