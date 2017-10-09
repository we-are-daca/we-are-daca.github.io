import React from 'react';
import App from './App.js';
import Aylin from './participants/Aylin';
import DanielOne from './participants/Daniel';
import Edgar from './participants/Edgar';
import Lesly from './participants/Lesly';
import Luis from './participants/Luis'
import Xochitl from './participants/Xochitl';
import Test from './participants/Test';
import { Switch, Route } from 'react-router-dom';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={App} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path="/a1db8f2ca088/daniel-journey" component={DanielOne} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/aa9574739f97/lesly-journey' component={Lesly} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/36432e39/luis-journey' component={Luis} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/5be2766a/xochitl-journey' component={Xochitl} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/00c13752/edgar-journey' component={Edgar} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/0ec6370e/aylin-journey' component={Aylin} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route path="/example" component={Test} />
        <Route component={App} />
      </Switch>
);

export default Routing;