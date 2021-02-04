import React, { useState, useEffect } from 'react';
import { HomeTheme } from 'components/Themes';
import { JoinInput } from 'components/Inputs';
import { JoinButton } from 'components/Buttons';
import { useHistory } from 'react-router-dom';
import { GenerateGameId, CreateGame } from 'services/DartscoreService';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const Create = () => {
    const history = useHistory();
    const [player, setPlayer] = useState('');
    const [gameId, setGameId] = useState('');
    const [gameType, setGameType] = useState('cricket');

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
        CreateGame(gameId, gameType).then(() => {
            history.push({
                pathname: path,
                state: {
                    gameID: gameId,
                    player: player,
                },
            });
        });
    };

    const handleChange = (event: object, newGameType: string) => {
        if (newGameType !== null) {
            setGameType(newGameType);
        }
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
                    inputProps={{
                        maxLength: 12,
                        style: { textTransform: 'uppercase' },
                    }}
                    onChange={(event) =>
                        setPlayer(event.target.value.toUpperCase())
                    }
                />
            </div>
            <div>
                <ToggleButtonGroup
                    value={gameType}
                    onChange={handleChange}
                    exclusive
                >
                    <ToggleButton value="cricket">Cricket</ToggleButton>
                    <ToggleButton value="fiveOhOne">501</ToggleButton>
                </ToggleButtonGroup>
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
