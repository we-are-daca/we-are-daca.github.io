import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routing from './Routing';
import 'react-loading-bar/dist/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Routing />
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
