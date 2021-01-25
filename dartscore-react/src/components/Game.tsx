import React, { useEffect, useState, useRef } from 'react';
import { GameTheme } from './Themes';
import { useLocation } from 'react-router-dom';
import { GameState } from '../services/DartscoreService';
import Cricket from './Cricket';
import FiveOne from './FiveOne'; // make game render whichever based on mode selected from backend

type GameProps = {
    gameID: string;
    player: string;
    player1: string;
    player2: string;
    connURL: string;
};

const Game = () => {
    const { state } = useLocation<GameProps>();
    const { gameID, player, player1, player2, connURL } = state;
    const [gameState, setGameState] = useState();

    const criketProps = {
        player1: player1,
        player2: player2,
    };

    const connectMessage = {
        game_id: gameID,
        msg: 'Joined Game',
    };

    const ws = useRef<WebSocket>();

    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket(connURL);
            ws.current.onopen = () => {
                console.log('ws opened');
                ws.current?.send(JSON.stringify(connectMessage));
            }; //will add player to dict on open send message to all connectees
            ws.current.onmessage = () => {
                GameState(gameID).then((res) => {
                    // no access control header error
                    const { currentState } = res;
                    setGameState(currentState);
                });
            };
            ws.current.onclose = () => console.log('ws closed');

            // return () => {
            //     ws.current?.close();
            // };
            // How will i close socket connections? and update them as well
        }
    });

    return (
        <GameTheme>
            <div>
                <h2>Cricket</h2>
                <h3>Game Code: {gameID}</h3>
                <p>{gameState}</p>
            </div>
            <div>
                <Cricket {...criketProps}></Cricket>
            </div>
        </GameTheme>
    );
};

export default Game;
