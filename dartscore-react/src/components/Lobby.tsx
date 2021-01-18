import React, { Props } from 'react';
import { JoinButton } from './Buttons';
import { HomeTheme } from './Themes';
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';

type LobbyProps = {
    gameID: string;
    player1: string;
};

const Lobby = (props: RouteComponentProps) => {
    const { state } = useLocation<LobbyProps>();
    const { gameID, player1 } = state;
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
                <h2>{player1}</h2>
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
