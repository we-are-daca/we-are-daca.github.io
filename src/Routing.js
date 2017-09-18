import React from 'react';
import App from './App.js';
import DanielOne from './participants/Daniel';
import Test from './participants/Test';
import { Switch, Route } from 'react-router-dom';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/a1db8f2ca088/daniel-journey" component={DanielOne} />
        <Route path="/example" component={Test} />
        <Route component={App} />
      </Switch>
);

export default Routing;