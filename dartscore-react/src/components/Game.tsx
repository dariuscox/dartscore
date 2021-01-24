import React from 'react';
import { GameTheme } from './Themes';
import { useLocation } from 'react-router-dom';
import Cricket from './Cricket';
import FiveOne from './FiveOne'; // make game render whichever based on mode selected from backend

type GameProps = {
    gameID: string;
    player: string;
    player1: string;
    player2: string;
    ws: WebSocket;
};

const Game = () => {
    const { state } = useLocation<GameProps>();
    const { gameID, player, player1, player2, ws } = state;

    const criketProps = {
        player1: player1,
        player2: player2,
    };

    return (
        <GameTheme>
            <div>
                <h2>Cricket</h2>
                <h3>Game Code: {gameID}</h3>
            </div>
            <div>
                <Cricket {...criketProps}></Cricket>
            </div>
        </GameTheme>
    );
};

export default Game;
