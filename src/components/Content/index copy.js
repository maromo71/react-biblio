import React, { Component } from 'react';
import firebase from '../../firebaseConn';


export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            id: ''
        };

    }

    remove = (id) => {
        const itemRef = firebase.database().ref(`/livros/${id}`);
        itemRef.remove();
    }

    componentDidMount() {
        firebase.database().ref('livros').once('value', (snapshot) => {
            let state = this.state;
            state.lista = [];
            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    autor: childItem.val().autor,
                    datacad: childItem.val().datacad,
                    isbn: childItem.val().isbn,
                    url: childItem.val().url,
                    titulo: childItem.val().titulo
                });
            });
            this.setState(state);
        });
    }


    render() {
        const { lista } = this.state;
        return (
            <div className="container">
                <ul>
                    {lista.map((item) => {
                        return (

                            <div className="item" key={item.key}>
                                <li className="codigo">Código: {item.key}</li>
                                <li><strong>Título:</strong>{item.titulo}</li>
                                <li><strong>Autor: </strong>{item.autor}</li>
                                <li><strong>ISBN: </strong>{item.isbn}</li>
                                <li><img className="imagem" alt="Foto do Livro" src={item.url}></img></li>
                                <button href={`/books/${item.key}`}>Editar</button>
                                <button onClick={() => this.remove(item.key)}>Remover</button>
                            </div>

                        );
                    })}
                </ul>
            </div>
        );
    }
}