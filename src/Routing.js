import React from 'react';
import App from './App.js';
import DanielOne from './participants/Daniel';
import Edgar from './participants/Edgar';
import Lesly from './participants/Lesly';
import Luis from './participants/Luis'
import Xochitl from './participants/Xochitl';
import Test from './participants/Test';
import { Switch, Route } from 'react-router-dom';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/a1db8f2ca088/daniel-journey" component={DanielOne} />
        <Route exact path='/aa9574739f97/lesly-journey' component={Lesly} />
        <Route exact path='/36432e39/luis-journey' component={Luis} />
        <Route exact path='/5be2766a/xochitl-journey' component={Xochitl} />
        <Route exact path='/00c13752/edgar-journey' component={Edgar} />
        <Route path="/example" component={Test} />
        <Route component={App} />
      </Switch>
);

export default Routing;