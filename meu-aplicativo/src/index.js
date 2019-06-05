import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clcock';
import Toggle from './toggle';
import LoginControl from './loginControl';
import * as serviceWorker from './serviceWorker';
import {EssayForm, NameForm, FlavorForm} from './forms';
import Reserva from './reservas'
//import { userInfo } from 'os';


// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );


  
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Reserva />,
    document.getElementById('root')
)

serviceWorker.unregister();
