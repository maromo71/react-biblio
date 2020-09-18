import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Erro from './pages/Erro';
import Home from './pages/Home';
import CreateBook from './pages/Livros/create';
import EditBook from './pages/Livros/edit';
import Sobre from './pages/Sobre';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/sobre" component={Sobre}></Route>
                <Route exact path="/books/" component={CreateBook}></Route>
                <Route exact path="/books/:id" component={EditBook}></Route>
                <Route path="*" component={Erro}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 