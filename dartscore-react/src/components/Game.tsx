import React from 'react';
import { GameTheme } from './Themes';
import Cricket from './Cricket';
import FiveOne from './FiveOne'; // make game render whichever based on mode selected from backend

const Game = () => {
    var gameId = Math.random().toString(36).substr(2, 4).toUpperCase(); // get game id from the backend
    return (
        <GameTheme>
            <div>
                <h2>Cricket</h2>
                <h3>Game Code: {gameId}</h3>
            </div>
            <div>
                <Cricket></Cricket>
            </div>
        </GameTheme>
    );
};

export default Game;
