import React, { Props } from 'react';
import { JoinButton } from './Buttons';
import { GameTheme, HomeTheme } from './Themes';
import { StaticContext } from 'react-router';
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';

type LobbyProps = {
    gameID: string;
};

const Lobby = (props: RouteComponentProps) => {
    //should take a path paramm to join correct game
    const { state } = useLocation<LobbyProps>();
    const { gameID } = state;
    console.log(state);
    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
    };

    return (
        <HomeTheme>
            <div>
                <h1>Dartscore Lobby: {gameID}</h1>
            </div>
            <div>
                <h2>Player 1</h2>
            </div>
            <div>
                <h2>Player 2</h2>
            </div>
            <div>
                <JoinButton onClick={() => routeChange('/game')}>
                    Play
                </JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Lobby;
