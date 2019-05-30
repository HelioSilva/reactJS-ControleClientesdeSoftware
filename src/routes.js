import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Main from './pages/main';
import Cliente from './pages/cliente';
import CreateCliente from './pages/create';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cliente/:id" component={Cliente} />
            <Route path="/createCliente" component={CreateCliente} />
        </Switch>
    </BrowserRouter>
);

export default Routes ;