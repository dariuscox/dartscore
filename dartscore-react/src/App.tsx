import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Create from './components/Create';
import Join from './components/Join';
import Lobby from './components/Lobby';
import Game from './components/Game';
import './App.css';

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/join" component={Join} exact />
            <Route path="/create" component={Create} exact />
            <Route path="/lobby" render={() => <Lobby />} exact />
            <Route path="/game" component={Game} exact />
        </Switch>
    </BrowserRouter>
);

export default App;
