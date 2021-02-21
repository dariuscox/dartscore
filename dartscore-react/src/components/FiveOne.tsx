import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { StyledModal, ModalBody } from 'components/Modals';
import { ScoreInput, JoinInput } from 'components/Inputs';
import { UpdateGame, GetGameState } from 'services/DartscoreService';
import { updateFiveOneState, checkWinStateFive } from 'hooks/updateDartState';
import {
    FiveOneState,
    handleUpdateGameState,
    useFiveOneState,
} from 'hooks/useDartsGameState';
import { JoinButton, CreateButton } from 'components/Buttons';
import { useHistory } from 'react-router-dom';

const FiveOneGame = styled.section`
    //add legs
    text-align: center;
    background-color: #252525;
    justify-content: center;
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    align-items: center;
    font-size: calc(10px + 2vmin);
    //font-family: 'PressStart2P';
    font-family: source-code-pro;
    color: white;
`;

const PlayerDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: #2adcc4;
    border-radius: 50%;
    display: inline-block;
`;
const Scoreboard = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
`;
const PlayerInfo = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const Divider = styled.div`
    border-left: 6px solid #9d74d3;
    height: auto;
`;

const FiveOneScore = styled.label`
    padding: 40px;
    font-size: calc(150px + 2vmin);
`;

const FiveOneTable = styled(Table)`
    border-collapse: collapse;
    width: 100%;
`;

const FiveOneHeader = styled.label`
    padding: 10px;
    border-bottom: 3px solid white;
`;

const FiveOneRow = styled(TableRow)`
    // pull cricket row out into a separate component
    height: 20px;
`;
const FiveOneContainer = styled(TableContainer)`
    // pull cricket row out into a separate component
    height: 300px;
`;

const FiveOneData = styled(TableCell)`
    color: white;
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

    const initialState: FiveOneState = {
        [player1]: {
            Total: 501,
            Moves: [],
        },
        [player2]: {
            Total: 501,
            Moves: [],
        },
    };
    const [gameState, dispatch] = useFiveOneState({
        [player1]: {
            Total: 501,
            Moves: [],
        },
        [player2]: {
            Total: 501,
            Moves: [],
        },
    });

    const [winner, setWinner] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        if (winner) {
            handleOpenModal();
        } else {
            handleCloseModal();
        }
    }, [winner]);

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
                    setWinner(checkWinStateFive(game_state, player1, player2));
                });
            };
            ws.current.onmessage = (msg) => {
                if (JSON.stringify(msg.data).includes('-END-')) {
                    routeChange('/');
                }
                GetGameState(gameID).then((res) => {
                    const { game_state } = res;
                    setButton(false);
                    handleUpdateGameState(dispatch)(game_state);
                    setWinner(checkWinStateFive(game_state, player1, player2));
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

    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
    };

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
        (document.getElementById('score') as HTMLInputElement).value = '';
        UpdateGame(gameID, newGameState).then(() => {
            ws.current.send(JSON.stringify(updateMessage));
        });
    };
    const newGame = () => {
        const updateMessage = {
            game_id: gameID,
            msg: player,
        };
        UpdateGame(gameID, initialState).then(() => {
            ws.current.send(JSON.stringify(updateMessage));
        });
    };

    const MenuButtons = () => (
        <div>
            <JoinButton onClick={newGame}>New Game</JoinButton>
            <CreateButton onClick={EndGame}>Exit</CreateButton>
        </div>
    );

    const EndGame = () => {
        const updateMessage = {
            game_id: gameID,
            msg: '-END-',
        };
        ws.current.send(JSON.stringify(updateMessage));
    };

    const body = (
        <ModalBody>
            {winner ? <h2 id="simple-modal-title">{winner} Wins!</h2> : null}
            {player === player1 ? <MenuButtons /> : <h3>Waiting on Host</h3>}
        </ModalBody>
    );
    const MenuToggle = () => (
        <div>
            <CreateButton onClick={handleOpenModal}>Menu</CreateButton>
        </div>
    );
    const renderFiveOneRow = (playerId: string) => {
        var rows = [];
        let moves = gameState[playerId]['Moves'] as number[];
        for (var i = 0; i < moves.length; i++) {
            rows.push(
                <FiveOneRow>
                    <FiveOneData>{(i + 1) * 3}</FiveOneData>
                    <FiveOneData>{moves[i]}</FiveOneData>
                </FiveOneRow>,
            );
        }
        return rows.reverse();
    };
    const handleScoreInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            if (score) {
                buttonUpdate();
            }
        }
    };
    const renderInput = () => {
        // can add functionality to only allow scroe if its players turn
        return (
            <div>
                <JoinInput
                    placeholder="INPUT SCORE"
                    id="score"
                    onChange={(event) =>
                        setTextScore(event.target.value.toUpperCase())
                    }
                    onKeyDown={(event) => handleScoreInput(event)}
                />
                <JoinButton onClick={buttonUpdate}>submit</JoinButton>
            </div>
        );
    };

    return (
        <div>
            {player === player1 ? <MenuToggle /> : null}
            <FiveOneGame>
                {renderInput()}
                <Scoreboard>
                    <PlayerInfo>
                        <FiveOneScore>
                            {gameState[player1]['Total']}
                        </FiveOneScore>
                        <div>
                            <label>{player1}</label>{' '}
                            {player === player1 ? <PlayerDot /> : null}
                        </div>
                        <FiveOneHeader>Scores</FiveOneHeader>
                        <FiveOneContainer>
                            <FiveOneTable stickyHeader>
                                <TableBody>
                                    {renderFiveOneRow(player1)}
                                </TableBody>
                            </FiveOneTable>
                        </FiveOneContainer>
                    </PlayerInfo>
                    <Divider></Divider>
                    <PlayerInfo>
                        <FiveOneScore>
                            {gameState[player2]['Total']}
                        </FiveOneScore>
                        <div>
                            <label>{player2}</label>{' '}
                            {player === player2 ? <PlayerDot /> : null}
                        </div>
                        <FiveOneHeader>Scores</FiveOneHeader>
                        <FiveOneContainer>
                            <FiveOneTable stickyHeader>
                                <TableBody>
                                    {renderFiveOneRow(player2)}
                                </TableBody>
                            </FiveOneTable>
                        </FiveOneContainer>
                    </PlayerInfo>
                </Scoreboard>
            </FiveOneGame>
            <StyledModal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </StyledModal>
        </div>
    );
};

export default FiveOne;
