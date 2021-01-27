import React from 'react';
import { GameTheme } from 'components/Themes';
import { useLocation } from 'react-router-dom';
import Cricket from 'components/Cricket';
import FiveOne from 'components/FiveOne'; // make game render whichever based on mode selected from backend

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

    return (
        <GameTheme>
            <div>
                <h2>Cricket</h2>
                <h3>Game Code: {gameID}</h3>
            </div>
            <div>
                <Cricket
                    gameID={gameID}
                    connURL={connURL}
                    player={player}
                    player1={player1}
                    player2={player2}
                ></Cricket>
            </div>
        </GameTheme>
    );
};

export default Game;
