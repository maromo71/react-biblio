import React, { Component } from 'react';

class Sobre extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <h2 className="mt-5 ml-5">Sobre o aplicativo</h2>
                <div className="ml-5">
                    <h3>Livros</h3>
                    <p>Página de exemplo de exibição de livros usando React JS com
                    banco de dados em tempo real - Google Firebase
                        </p>
                    <p>Criada pelo professor Maromo, como exemplo didático</p>
                    <p>Para maiores detalhes entre em contato:</p>
                    <p>
                        <a href="mailto:marcos.moraes6@fatec.sp.gov.br"
                            className="btn btn-primary">
                            <span class="fa fa-envelope"></span>Email</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default Sobre;   