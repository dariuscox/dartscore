import React, { useState } from 'react';
import { HomeTheme } from './Themes';
import { JoinInput } from './Inputs';
import { JoinButton } from './Buttons';
import { useHistory } from 'react-router-dom';
import DartscoreService from '../services/DartscoreService';

const Create = () => {
    const history = useHistory();
    const [player1, setPlayer1] = useState('');
    const [gameId, setGameId] = useState('');

    if (!gameId) {
        DartscoreService.generateGameId().then((res) => {
            //getting called multiple times for some reason
            const { game_id } = res;
            if (!gameId) {
                setGameId(game_id);
                console.log(game_id);
            }
        });
        // use api call to get game id
    }

    const routeChange = (path: string) => {
        history.push({
            pathname: path,
            state: {
                gameID: gameId,
                player1: player1,
            },
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
                <JoinInput
                    placeholder="Enter Your Name"
                    onChange={(event) => setPlayer1(event.target.value)}
                />
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
