import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Produtos from './Produtos';
import Lojas from './Lojas';
import Contato from './Contato';
import Pedido from './Pedido';

export default () =>
        <BrowserRouter>
        <header>
            <Menu/>
        </header>
            <Switch>
                <Route path="Home" exact component={Home}/>
                <Route path="Produtos" component={Produtos}/>
                <Route path="Lojas" component={Lojas}/>
                <Route path="Contato" component={Contato}/>
                <Route path="Pedido" component={Pedido}/>
            </Switch>
        </BrowserRouter>

