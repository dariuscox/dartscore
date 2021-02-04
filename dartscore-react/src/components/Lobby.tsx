import React, { useRef, useEffect, useState } from 'react';
import { JoinButton } from 'components/Buttons';
import { HomeTheme } from 'components/Themes';
import { useHistory, useLocation } from 'react-router-dom';
import { LobbyState, InitializeGame } from 'services/DartscoreService';

type LobbyProps = {
    gameID: string;
    player: string;
};

const Lobby = () => {
    const { state } = useLocation<LobbyProps>();
    const { gameID, player } = state;
    const [gameType, setGameType] = useState('');
    const [readableGameType, setReadableGameType] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [ready, setReady] = useState(false);
    const host = player === player1;
    const playButton = ready && host;

    const history = useHistory();

    useEffect(() => {
        if (gameType) {
            gameType === 'cricket'
                ? setReadableGameType('Cricket')
                : setReadableGameType('501');
        }
    }, [gameType]);
    const ws = useRef<WebSocket>();
    const connURL = `wss://cvc7ipmik7.execute-api.us-east-1.amazonaws.com/dev/?game=${gameID}&player=${player}`;

    const connectMessage = {
        game_id: gameID,
        msg: 'I have connected',
    };

    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket(connURL);
            ws.current.onopen = () => {
                console.log('ws opened');
                ws.current?.send(JSON.stringify(connectMessage));
            };
            ws.current.onmessage = () => {
                if (!ready) {
                    LobbyState(gameID).then((res) => {
                        const { players, game_type } = res;
                        setGameType(game_type);
                        if (!player1) {
                            setPlayer1(players[0]['player']);
                            console.log(player1);
                        }
                        if (players.length === 2 && !player2) {
                            setPlayer2(players[1]['player']);
                        }
                    });
                }
            };
            ws.current.onclose = () => console.log('ws closed');

            // return () => {
            //     ws.current?.close();
            // };
            // How will i close socket connections? and update them as well
        }
    });

    useEffect(() => {
        if (player1 && player2) {
            setReady(true);
        }
    }, [player1, player2]);

    useEffect(() => {
        if (ready) {
            ws.current.onmessage = (wsMessage) => {
                console.log(wsMessage);
                if (wsMessage.data.includes('start')) routeChange('/game');
            };
        }
    });

    const routeChange = (path: string) => {
        history.push({
            pathname: path,
            state: {
                gameID: gameID,
                gameType: gameType,
                player: player,
                player1: player1,
                player2: player2,
                connURL: connURL,
            },
        });
    };

    const startMessage = {
        game_id: gameID,
        msg: 'start',
    };
    const players = [player1, player2];

    const startGame = () => {
        InitializeGame(gameID, players, gameType).then(() => {
            ws.current?.send(JSON.stringify(startMessage));
        });
    };
    const PlayButton = () => (
        <div>
            <JoinButton
                onClick={() => {
                    startGame();
                }}
            >
                Play
            </JoinButton>
        </div>
    );

    return (
        <HomeTheme>
            <div>
                <h1>Dartscore Lobby: {gameID}</h1>
                <h1>{readableGameType}</h1>
            </div>
            <div>
                <h3>{player1}</h3>
                <h3>{player2}</h3>
            </div>
            {playButton ? <PlayButton /> : null}
        </HomeTheme>
    );
};

export default Lobby;
