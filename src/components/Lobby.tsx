import React from 'react';
import { JoinButton } from './Buttons';
import { HomeTheme } from './Themes';
import { useHistory } from 'react-router-dom';

const Lobby = () => {
    //should take a path paramm to join correct game
    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
    };

    return (
        <HomeTheme>
            <div>
                <h1>Dartscore Lobby</h1>
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
