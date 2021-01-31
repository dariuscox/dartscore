import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ScoreInput } from 'components/Inputs';
import { UpdateGame, GetGameState } from 'services/DartscoreService';
import { updateFiveOneState } from 'hooks/updateDartState';
import {
    handleUpdateGameState,
    useFiveOneState,
} from 'hooks/useDartsGameState';

const FiveOneGame = styled.section`
    //add legs
    text-align: center;
    background-color: #282c34;
    justify-content: center;
    display: flex;
    flex-direction: row;
    min-height: 50vh;
    align-items: center;
    font-size: calc(10px + 2vmin);
    //font-family: 'PressStart2P';
    font-family: source-code-pro;
    color: white;
`;

const PlayerDot = styled.span`
    height: 25px;
    width: 25px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
`;

const FiveOneSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const FiveOneScore = styled.label`
    padding: 40px;
    font-size: calc(150px + 2vmin);
`;

const FiveOneTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const FiveOneHeader = styled.th`
    padding: 10px;
    border-bottom: 3px solid white;
`;

const FiveOneRow = styled.tr`
    // pull cricket row out into a separate component
    height: 20px;
`;

const FiveOneData = styled.td`
    text-align: left;
`;

type FiveOneProps = {
    gameID: string;
    player: string;
    player1: string;
    player2: string;
    connURL: string;
};

const FiveOne = ({
    gameID,
    player,
    player1,
    player2,
    connURL,
}: FiveOneProps) => {
    const [textScore, setTextScore] = useState('');
    const score = !isNaN(Number(textScore)) ? Number(textScore) : 0; // warn user invalid input

    const [button, setButton] = useState(false);
    const otherPlayer = player === player1 ? player2 : player1;
    const [gameState, dispatch] = useFiveOneState({
        [player1]: {
            Total: 0,
            Moves: [],
        },
        [player2]: {
            Total: 0,
            Moves: [],
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
                    setButton(false);
                    handleUpdateGameState(dispatch)(game_state);
                });
            };
            ws.current.onmessage = (msg) => {
                console.log(msg.data);
                console.log(!msg.data.includes(player));
                GetGameState(gameID).then((res) => {
                    const { game_state } = res;
                    setButton(false);
                    handleUpdateGameState(dispatch)(game_state);
                });
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
    const buttonUpdate = () => {
        if (!score) {
            (document.getElementById('score') as HTMLInputElement).value = '';
            return;
        }
        const newGameState = updateFiveOneState(score, player, gameState);
        const updateMessage = {
            game_id: gameID,
            msg: player,
        };
        console.log('new game state');
        console.log(newGameState);
        (document.getElementById('score') as HTMLInputElement).value = '';
        UpdateGame(gameID, newGameState).then(() => {
            ws.current.send(JSON.stringify(updateMessage));
        });
    };
    const renderFiveOneRow = (playerId: string) => {
        var rows = [];
        let moves = gameState[playerId]['Moves'] as number[];
        for (var i = 0; i < moves.length; i++) {
            rows.push(
                <FiveOneRow>
                    <td>{(i + 1) * 3}</td>
                    <td>{moves[i]}</td>
                </FiveOneRow>,
            );
        }
        return rows;
    };
    const renderInput = (playerId: string) => {
        // can add functionality to only allow scroe if its players turn
        if (playerId === player) {
            return (
                <div>
                    <ScoreInput
                        placeholder="Score"
                        id="score"
                        onChange={(event) =>
                            setTextScore(event.target.value.toUpperCase())
                        }
                    />
                    <button onClick={buttonUpdate}>submit</button>
                </div>
            );
        }
    };

    return (
        <FiveOneGame>
            <FiveOneSection>
                <FiveOneTable>
                    <FiveOneRow>
                        <FiveOneHeader>Scoreboard</FiveOneHeader>
                    </FiveOneRow>
                    {renderFiveOneRow(player1)}
                </FiveOneTable>
            </FiveOneSection>
            <FiveOneSection>
                <FiveOneScore>{gameState[player1]['Total']}</FiveOneScore>
                <div>
                    <label>{player1}</label>
                    {renderInput(player1)}
                </div>

                {/* <PlayerDot></PlayerDot> */}
            </FiveOneSection>
            <FiveOneSection>
                <FiveOneScore>{gameState[player2]['Total']}</FiveOneScore>
                <label>{player2}</label>
                {renderInput(player2)}
            </FiveOneSection>
            <FiveOneSection>
                <FiveOneTable>
                    <FiveOneRow>
                        <FiveOneHeader>Scoreboard</FiveOneHeader>
                    </FiveOneRow>
                    {renderFiveOneRow(player2)}
                </FiveOneTable>
            </FiveOneSection>
        </FiveOneGame>
    );
};

export default FiveOne;
