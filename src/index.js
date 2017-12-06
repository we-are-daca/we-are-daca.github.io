import 'bootstrap/dist/css/bootstrap.css';
import "animate.css/animate.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Routing />
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
