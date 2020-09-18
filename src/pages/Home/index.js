import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Content from '../../components/Content';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid primary">
                    <div className="container">
                        <h3>Lista de Livros</h3>
                        <p className="text-justify">O React, lançado em 2013, é uma biblioteca JavaScript de código aberto,
                        fundamental para criação de aplicações front-end. Anteriormente denominado
                        React.js ou ReactJS, foi desenvolvido pelo Facebook para criação de
                        elementos de interface reutilizáveis de forma simples,
                            intuitiva e com uma ótima performance.</p>
                        <p className="text-justify">Esta aplicação trata-se de um simples CRUD para manutenção de um
                            cadastro de livros de uma Biblioteca comum. Usando o bootstrap como framework CSS.</p>
                        <div className="d-flex flex-row-reverse bd-highlight">
                            <Button className="" href="/books">Adicionar Novo Livro</Button>
                        </div>
                    </div>
                </div>
                <Content />
            </div>
        );
    }
}
export default Home;   