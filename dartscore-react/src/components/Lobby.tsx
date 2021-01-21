import React, { useRef, useEffect, useState } from 'react';
import { JoinButton } from './Buttons';
import { HomeTheme } from './Themes';
import { useHistory, useLocation } from 'react-router-dom';
import { LobbyState } from '../services/DartscoreService';

type LobbyProps = {
    gameID: string;
    player: string;
};

const Lobby = () => {
    const { state } = useLocation<LobbyProps>();
    const { gameID, player } = state;
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const history = useHistory();

    const ws = useRef<WebSocket>();
    const connURL = `wss://cvc7ipmik7.execute-api.us-east-1.amazonaws.com/dev/?game=${gameID}&player=${player}`;

    const connectMessage = {
        game_id: gameID,
        msg: 'I have connected',
    };

    // need to setup on message functionality and send message after connect
    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket(connURL);
            ws.current.onopen = () => {
                console.log('ws opened');
                ws.current?.send(JSON.stringify(connectMessage));
            }; //will add player to dict on open send message to all connectees
            ws.current.onmessage = () => {
                LobbyState(gameID).then((res) => {
                    const { players } = res;
                    if (!player1) {
                        setPlayer1(players[0]['player']);
                        console.log(player1);
                    }
                    if (players.length === 2 && !player2) {
                        setPlayer2(players[1]['player']);
                    }
                });
            };
            ws.current.onclose = () => console.log('ws closed');

            // return () => {
            //     ws.current?.close();
            // };
            // How will i close socket connections? and update them as well
        }
    });

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
                <h2>{player2}</h2>
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
