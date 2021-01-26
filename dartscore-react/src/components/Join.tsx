import React, { useState } from 'react';
import { HomeTheme } from 'components/Themes';
import { JoinInput } from 'components/Inputs';
import { JoinButton } from 'components/Buttons';
import { useHistory } from 'react-router-dom';

const Join = () => {
    const [gameId, setGameId] = useState('');
    const [player, setPlayer] = useState('');
    // will need to see if game is in progress or not to go to path
    const history = useHistory();

    const routeChange = (path: string) => {
        history.push({
            pathname: path,
            state: {
                gameID: gameId,
                player: player,
            },
        });
    };

    return (
        <HomeTheme>
            <div>
                <h1>Dartscore</h1>
            </div>
            <div>
                <label>Game Code</label>
            </div>
            <div>
                <JoinInput
                    placeholder="Enter 4-Letter Code"
                    onChange={(event) => setGameId(event.target.value)}
                />
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
                <JoinButton onClick={() => routeChange('/lobby')}>
                    Play
                </JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Join;
