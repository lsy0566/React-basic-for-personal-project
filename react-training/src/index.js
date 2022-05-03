import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Game from './Game';
import App from './App';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Fragment >
        <App />
    </Fragment>
);