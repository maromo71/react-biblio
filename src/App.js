import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}