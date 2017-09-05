import React from 'react';
import App from './App.js';
import Test from './participants/Test';
import { Switch, Route } from 'react-router-dom';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/example" component={Test} />
        <Route component={App} />
      </Switch>
);

export default Routing;