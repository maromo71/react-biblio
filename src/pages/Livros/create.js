import React, { Component } from 'react';
import firebase from '../../firebaseConn';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

class CreateBook extends Component {
    constructor(props) {
        super();
        this.state = {
            tituloInput: '',
            autorInput: '',
            isbnInput: '',
            urlInput: ''
        }
        this.newBook = this.newBook.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm(){
        Swal.fire(
            'Cancelado',
            'Inclusão cancelada',
            'warning'
        );
        var state = this.state;
        state.tituloInput = '';
        state.urlInput = '';
        state.autorInput = '';
        state.isbnInput = '';
        this.setState(state);
        this.props.history.push("/books");
    }

    newBook(e){
        e.preventDefault();
        let livros = firebase.database().ref('livros');
        let chave = livros.push().key;
        livros.child(chave).set({
            titulo: this.state.tituloInput,
            autor: this.state.autorInput,
            isbn: this.state.isbnInput,
            url: this.state.urlInput
        }).then(
            Swal.fire(
                'Parabéns!',
                'Livro cadastrado com sucesso!',
                'success'
              )
        );
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="container mx-auto">
                <h2 className="mt-5">Cadastrar Livros</h2>
                <div className="form-group">
                    <form onSubmit={this.newBook}>
                        <div>
                            Título do Livro<br/>
                            <input type="text" className="form-control"
                            value={this.state.tituloInput} 
                            onChange={ (e)=> this.setState({tituloInput: e.target.value})} />
                        </div>
                        <div>
                            Autor do Livro<br/>
                            <input type="text" className="form-control"
                            value={this.state.autorInput} 
                            onChange={ (e)=> this.setState({autorInput: e.target.value})} />
                        </div>
                        <div>
                            ISBN do Livro<br/>
                            <input type="text" className="form-control"
                            value={this.state.isbnInput} 
                            onChange={ (e)=> this.setState({isbnInput: e.target.value})}  />
                        </div>
                        <div>
                            URL da Imagem da Capa do Livro<br/>
                            <input type="text" className="form-control"
                            value={this.state.urlInput} 
                            onChange={ (e)=> this.setState({urlInput: e.target.value})}  />
                        </div>
                        <div className="itemForm">
                            <button type="submit"  className="btn btn-primary mt-3 mr-1">Cadastrar</button>
                            <Button onClick={this.clearForm} className="btn btn-secondary mt-3 ml-1">Limpar</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default CreateBook;   