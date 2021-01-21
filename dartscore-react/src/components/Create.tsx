import React, { useState, useEffect } from 'react';
import { HomeTheme } from './Themes';
import { JoinInput } from './Inputs';
import { JoinButton } from './Buttons';
import { useHistory } from 'react-router-dom';
import { GenerateGameId, CreateGame } from '../services/DartscoreService';

const Create = () => {
    const history = useHistory();
    const [player, setPlayer] = useState('');
    const [gameId, setGameId] = useState('');

    useEffect(() => {
        if (!gameId) {
            GenerateGameId().then((res) => {
                const { game_id } = res;
                if (!gameId) {
                    setGameId(game_id);
                    console.log(game_id);
                }
            });
        }
    }, [gameId]);

    const CreateAndRoute = (path: string) => {
        CreateGame(gameId).then(() => {
            history.push({
                pathname: path,
                state: {
                    gameID: gameId,
                    player: player,
                },
            });
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
                    onChange={(event) => setPlayer(event.target.value)}
                />
            </div>
            <div>
                <JoinButton onClick={() => CreateAndRoute('/lobby')}>
                    Play
                </JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Create;
