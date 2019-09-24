import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

export default function Routes(){

    return(
        <BrowserRouter>
            <Route path='/' exact component={ Home } />
            <Route path='/details/:id' component={ Details } />
        </BrowserRouter>
    )

}