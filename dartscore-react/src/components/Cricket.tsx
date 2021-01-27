import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { UpdateGame, GetGameState } from 'services/DartscoreService';
import {
    DartGameStateActionTypes,
    handleUpdateGameState,
    useDartGameState,
} from 'hooks/useDartsGameState';

const CricketTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const CricketHeader = styled.th`
    padding: 10px;
    border-bottom: 3px solid white;
`;

const CricketFooter = styled.th`
    padding: 10px;
    border-top: 3px solid white;
`;

const CricketRow = styled.tr`
    height: 70px;
`;

const CricketNumber = styled.td`
    padding: 10px;
    border-left: 3px solid white;
    border-right: 3px solid white;
`;

type CricketProps = {
    gameID: string;
    player: string;
    player1: string;
    player2: string;
    connURL: string;
};
const Cricket = ({
    gameID,
    player,
    player1,
    player2,
    connURL,
}: CricketProps) => {
    const cricketRows = ['20', '19', '18', '17', '16', '15', 'Bull'];
    const [button, setButton] = useState(false);
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
    const ws = useRef<WebSocket>();

    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket(connURL);
            ws.current.onopen = () => {
                console.log('ws opened');
                GetGameState(gameID).then((res) => {
                    const { game_state } = res;
                    handleUpdateGameState(dispatch)(game_state);
                });
            };
            ws.current.onmessage = (msg) => {
                console.log(msg.data);
                console.log(!msg.data.includes(player));
                if (!msg.data.includes(player)) {
                    GetGameState(gameID).then((res) => {
                        const { game_state } = res;

                        handleUpdateGameState(dispatch)(game_state);
                    });
                }
            };
            ws.current.onclose = () => console.log('ws closed');

            // return () => {
            //     ws.current?.close();
            // };
            // How will i close socket connections?

            // if i send an update i dont update myself but my partner updates,
            //then my partner sends an update because he updated and i update infinite loop
        }
    });
    useEffect(() => {
        if (button) {
            UpdateGame(gameID, gameState).then(() => {
                setButton(false);
                ws.current.send(JSON.stringify(updateMessage));
            });
        }
    }, [gameState]);

    const updateMessage = {
        game_id: gameID,
        msg: player,
    };
    const renderCricketRow = (segment: string) => {
        return (
            <CricketRow>
                <td>{gameState[player1][segment]}</td>
                <CricketNumber>
                    <button
                        onClick={() => {
                            dispatch({
                                type:
                                    DartGameStateActionTypes.updateTargetValueByPlayerId,
                                playerId: player,
                                segment: segment,
                            });
                            setButton(true);
                        }}
                    >
                        {segment}
                    </button>
                </CricketNumber>
                <td>{gameState[player2][segment]}</td>
            </CricketRow>
        );
    };

    return (
        <CricketTable>
            <tbody>
                <CricketRow>
                    <CricketHeader>{player1}</CricketHeader>
                    <CricketHeader>VS</CricketHeader>
                    <CricketHeader>{player2}</CricketHeader>
                </CricketRow>
                {cricketRows.map((segment) => renderCricketRow(segment))}
                <CricketRow>
                    <CricketFooter>{gameState[player1]['Total']}</CricketFooter>
                    <CricketFooter></CricketFooter>
                    <CricketFooter>{gameState[player2]['Total']}</CricketFooter>
                </CricketRow>
            </tbody>
        </CricketTable>
    );
};

export default Cricket;
