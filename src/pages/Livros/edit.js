import React, { Component } from 'react';
import firebase from '../../firebaseConn';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


class EditBook extends Component {
  constructor(props) {
    super();
    this.state = {
      titulo: '',
      autor: '',
      isbn: '',
      url: '',
      tituloInput: '',
      autorInput: '',
      isbnInput: '',
      urlInput: '',
      key: props.match.params.id
    }
    this.updateBook = this.updateBook.bind(this);
  }


  updateBook(e) {
    e.preventDefault();
    let { tituloInput, autorInput, isbnInput, urlInput } = this.state;
    if (tituloInput.length === 0) tituloInput = this.state.titulo;
    if (autorInput.length === 0) autorInput = this.state.autor;
    if (isbnInput.length === 0) isbnInput = this.state.isbn;
    if (urlInput.length === 0) urlInput = this.state.url;
    let livros = firebase.database().ref('livros');
    livros.child(this.state.key).set({
      titulo: tituloInput,
      autor: autorInput,
      isbn: isbnInput,
      url: urlInput
    }).then(
      Swal.fire(
        'Parabéns!',
        'Livro alterado com sucesso!',
        'success'
      ),
      this.props.history.push("/")
    );
  }

  
  componentDidMount() {
    this.setState({ isLoading: false });
    //Buscar os dados
    firebase.database().ref('livros').child(this.state.key).once("value")
      .then((snapshot) => {
        this.setState({ titulo: snapshot.child("titulo").val() });
        this.setState({ autor: snapshot.child("autor").val() });
        this.setState({ isbn: snapshot.child("isbn").val() });
        this.setState({ url: snapshot.child("url").val() });
        if(this.state.titulo===null){
          Swal.fire('Opa',
          'Livro não encontrado',
          'error');
          this.props.history.push("/");
        }
      })
  }

  

  render() {
    return (
      <div className="container mt-5">
        <h2>Edição de Livros</h2>
        <h5>Identificação n. {this.state.key}</h5>
        <div className="form-group">
          <form className="formulario" onSubmit={this.updateBook}>
            <div>
              <div>
                Titulo do Livro<br />
                <input type="text" className="form-control" name="tituloInput" placeholder="Título do Livro"
                  onChange={(e) => this.setState({ tituloInput: e.target.value })}
                  defaultValue={this.state.titulo} />
              </div>
              <div>
                Autor do Livro<br />
                <input className="form-control" type="text" id="autorInput" placeholder="Autor do Livro"
                  onChange={(e) => this.setState({ autorInput: e.target.value })}
                  defaultValue={this.state.autor} />
              </div>
              <div>
                ISBN do Livro<br />
                <input className="form-control" type="text" id="isbnInput" placeholder="ISBN do Livro"
                  onChange={(e) => this.setState({ isbnInput: e.target.value })}
                  defaultValue={this.state.isbn} />
              </div>
              <div>
                Url da capa do Livro<br />
                <input className="form-control" type="text" id="urlInput" placeholder="URL da capa do Livro"
                  onChange={(e) => this.setState({ urlInput: e.target.value })}
                  defaultValue={this.state.url} />
              </div>
              <div>
                <button className="btn btn-primary mt-5">Alterar</button>
                <Link to="/" className="btn btn-secondary mt-5 ml-2">Voltar</Link>
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditBook;   