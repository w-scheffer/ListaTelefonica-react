import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Lista from './lista_com_url/lista.js';
//import ListaEstatica from './lista_estatica/listaEstatica';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Lista />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
