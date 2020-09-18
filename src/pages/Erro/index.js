import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component {
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                <h2 className="subtitulo ml-5">Página Não Encontrada</h2>
                <p className="ml-5">Desculpe, mas esta página não foi encontrada.</p>
                <Link className="btn btn-primary ml-5" to="/">Home</Link>
            </div>
        );
    }
}
export default Erro;   