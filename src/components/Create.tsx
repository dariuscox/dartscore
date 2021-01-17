import React from 'react';
import { HomeTheme } from './Themes';
import { JoinInput } from './Inputs';
import { JoinButton } from './Buttons';
import { useHistory } from 'react-router-dom';

const Create = () => {
    var gameId = Math.random().toString(36).substr(2, 4).toUpperCase();

    const history = useHistory();

    const routeChange = (path: string) => {
        history.push({
            pathname: path,
            state: { gameID: gameId },
        });
    };

    return (
        <HomeTheme>
            <div>
                <h1>Dartscore</h1>
            </div>
            <div>
                <h2>Game Code: {gameId}</h2>
            </div>
            <div>
                <label>Name</label>
            </div>
            <div>
                <JoinInput placeholder="Enter Your Name" />
            </div>
            <div>
                <JoinButton onClick={() => routeChange('/lobby')}>
                    Play
                </JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Create;
