import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';
import Login from './components/Login';
import Menu from './components/Menu'
import Register from './components/Register';
import reset from './constants/css/reset';


const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <Route exact path="/" component={App}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Menu" component={Menu}/>
            </Provider>
            <GlobalStyle />
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
