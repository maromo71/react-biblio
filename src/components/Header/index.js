import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import firebase from '../../firebaseConn';

export default class Header extends Component {

  constructor(props) {
    super();
    this.state = {
      empresa: 'Carregando... ',
    }

    //atualizar o state, alterando o nome da empresa
    firebase.database().ref('empresa').on('value', (snapshot) => {
      let state = this.state;
      state.empresa = snapshot.val();
      this.setState(state);
    });
  }

  render() {
    const { empresa } = this.state;
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">{empresa} [Santa Lucia]</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link color="default" href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    );
  }
}