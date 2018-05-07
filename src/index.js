import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

const app = (<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>)


ReactDOM.render( app, document.getElementById( 'root' ) );
