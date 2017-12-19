import React from 'react';
import App from './App.js';
import Daniel from './participants/Daniel';
import Daniel1 from './participants/Daniel_1';
import Edgar from './participants/Edgar';
import Elvin from './participants/Elvin';
import Irais from './participants/Irais';
import Jonathan from './participants/Jonathan';
import Jorge from './participants/Jorge';
import Katherine from './participants/Katherine';
import Miriam from './participants/Miriam';
import Leo from './participants/Leo';
import Lesly from './participants/Lesly';
import Luis from './participants/Luis'
import Luis_2 from './participants/Luis_2';
import Octavio from './participants/Octavio';
import Miguel from './participants/Miguel';
import Rosie from './participants/Rosie';
import Sandra from './participants/Sandra';
import Steph from './participants/Steph';
import Xochitl from './participants/Xochitl';
import Yareli from './participants/Yareli';
import Yazmin from './participants/Yazmin';
import Test from './participants/Test';
import { Switch, Route } from 'react-router-dom';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/a1db8f2ca088/daniel-journey" component={Daniel} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/a65e9bc1/daniel-journey' component={Daniel1} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/aa9574739f97/lesly-journey' component={Lesly} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/36432e39/luis-journey' component={Luis} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/5be2766a/xochitl-journey' component={Xochitl} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/00c13752/edgar-journey' component={Edgar} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/0ec6370e/miriam-journey' component={Miriam} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/c5b03d37/yareli-journey' component={Yareli} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/b9961768/yazmin-journey' component={Yazmin} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/82b67ab1/miguel-journey' component={Miguel} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/c05de409/leo-journey' component={Leo} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} /> 
        <Route exact path='/5e286af3/jonathan-journey' component={Jonathan} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/168ed629/rosie-journey' component={Rosie} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/7d56bb43/irais-journey' component={Irais} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/0e9be67f/octavio-journey' component={Octavio} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/08504f4c/jorge-journey' component={Jorge} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/eb241513/katherine-journey' component={Katherine} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/eb241513/estefania-journey' component={Steph} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/4102ff4a/elvin-journey' component={Elvin} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/20852c70/luis-journey' component={Luis_2} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route exact path='/a782b502/sandra-journey' component={Sandra} onEnter={() => setTimeout(function () { window.scrollTo(0, 0);}, 100)} />
        <Route component={App} />
      </Switch>
);

export default Routing;
