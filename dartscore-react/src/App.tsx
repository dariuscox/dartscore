import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Create from './components/Create';
import Join from './components/Join';
import Lobby from './components/Lobby';
import Game from './components/Game';
import { StylesProvider } from '@material-ui/core/styles';
import './App.css';

const App = () => (
    <StylesProvider injectFirst>
        {
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" component={Landing} exact />
                    <Route path="/join" component={Join} exact />
                    <Route path="/create" component={Create} exact />
                    <Route path="/lobby" render={() => <Lobby />} exact />
                    <Route path="/game" component={Game} exact />
                </Switch>
            </BrowserRouter>
        }
    </StylesProvider>
);

export default App;
