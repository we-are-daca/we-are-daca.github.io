import React from 'react';
import App from './App.js';
import Aylin from './participants/Aylin';
import Daniel from './participants/Daniel';
import Daniel1 from './participants/Daniel_1';
import Edgar from './participants/Edgar';
import Lesly from './participants/Lesly';
import Luis from './participants/Luis'
import Xochitl from './participants/Xochitl';
import Yareli from './participants/Yareli';
import Yazmin from './participants/Yazmin';
import Test from './participants/Test';
import { Switch, Route } from 'react-router-dom';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={App} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path="/a1db8f2ca088/daniel-journey" component={Daniel} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/a65e9bc1/daniel-journey' component={Daniel1} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/aa9574739f97/lesly-journey' component={Lesly} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/36432e39/luis-journey' component={Luis} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/5be2766a/xochitl-journey' component={Xochitl} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/00c13752/edgar-journey' component={Edgar} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/0ec6370e/aylin-journey' component={Aylin} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/c5b03d37/yareli-journey' component={Yareli} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/b9961768/yazmin-journey' component={Yazmin} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route path="/example" component={Test} />
        <Route component={App} />
      </Switch>
);

export default Routing;