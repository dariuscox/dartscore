import React, { useEffect, useState, useRef } from 'react';
import { GameTheme } from 'components/Themes';
import { useLocation } from 'react-router-dom';
import { GetGameState } from 'services/DartscoreService';
import Cricket from 'components/Cricket';
import FiveOne from 'components/FiveOne'; // make game render whichever based on mode selected from backend
import {
    useDartGameState,
    handleUpdateTargetValueByPlayerId,
    handleUpdateGameState,
} from '../hooks/useDartsGameState';

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
    // const [gameState, setGameState] = useState(Object);
    const [gameState, dispatch] = useDartGameState({
        [player1]: {
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            Total: 0,
            Bull: 0,
        },
        [player2]: {
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            Total: 0,
            Bull: 0,
        },
    });

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
                GetGameState(gameID).then((res) => {
                    // no access control header error
                    console.log(res);
                    const { game_state } = res;
                    console.log(game_state);
                    handleUpdateGameState(dispatch)(game_state);
                });
            };
            ws.current.onclose = () => console.log('ws closed');

            // return () => {
            //     ws.current?.close();
            // };
            // How will i close socket connections?
        }
    });

    // useEffect(() => {
    //     if (gameState) {
    //         cricketProps.player1score = gameState.player1;
    //         cricketProps.player2score = gameState.player2;
    //     }
    // });

    return (
        <GameTheme>
            <div>
                <h2>Cricket</h2>
                <h3>Game Code: {gameID}</h3>
                {/* <p>{gameState}</p>  cant just render gamestate but i am fetching it*/}
            </div>
            <div>
                <Cricket
                    gameID={gameID}
                    gameState={gameState}
                    player={player}
                    player1={player1}
                    player2={player2}
                    dispatch={dispatch}
                ></Cricket>
            </div>
        </GameTheme>
    );
};

export default Game;
