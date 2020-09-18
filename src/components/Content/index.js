import React, { Component } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import firebase from '../../firebaseConn';
import Swal from 'sweetalert2';


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
        Swal.fire(
            'Parabéns!',
            'Livro removido com sucesso!',
            'success'
        )
        
    }

    componentDidMount() {
        firebase.database().ref('livros').on('value', (snapshot) => {
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
            <div>
                <div className="container-fluid mx-auto">
                    {lista.map((item) => {
                        return (
                            <div className="mx-auto">
                                <Card style={{ width: '20rem', margin:'auto' }}>
                                    <Card.Img variant="top" src={item.url} />
                                    <Card.Body>
                                        <Card.Title>{item.titulo}</Card.Title>
                                        <Card.Text>
                                            <strong>Autor do Livro:</strong><br /> {item.autor}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <strong>ISBN: </strong>{item.isbn}
                                        </ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Button className="mt-1" href={`/books/${item.key}`}
                                            variant="primary">Editar</Button>
                                        <Button className="mt-1 ml-2" onClick={() => this.remove(item.key)}
                                            variant="danger">Remover</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}