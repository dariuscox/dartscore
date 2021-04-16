import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { UpdateGame, GetGameState } from 'services/DartscoreService';
import { StyledModal, ModalBody } from 'components/Modals';
import {
    updateCricketState,
    checkWinStateCricket,
} from 'hooks/updateDartState';
import {
    handleUpdateGameState,
    useDartGameState,
} from 'hooks/useDartsGameState';
import { JoinButton, CreateButton } from 'components/Buttons';
import { PlayerDot } from 'components/Themes';
import { useHistory } from 'react-router-dom';

const CricketTable = styled.table`
    border-collapse: collapse;
    width: 50vw;
    table-layout: fixed;
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
    height: 40px;
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
    const otherPlayer = player === player1 ? player2 : player1;
    const initialState = {
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
    };
    const [gameState, dispatch] = useDartGameState(initialState);
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
                    setWinner(
                        checkWinStateCricket(game_state, player1, player2),
                    );
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
                    setWinner(
                        checkWinStateCricket(game_state, player1, player2),
                    );
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

    const buttonUpdate = (segment: string) => {
        const newGameState = updateCricketState(
            segment,
            player,
            otherPlayer,
            gameState,
        );
        const updateMessage = {
            game_id: gameID,
            msg: player,
        };
        console.log('new game state');
        console.log(newGameState);
        UpdateGame(gameID, newGameState).then(() => {
            ws.current.send(JSON.stringify(updateMessage));
        });
    };

    const iconSelection = (score: number) => {
        if (score === 0) {
            return '';
        }
        if (score === 1) {
            return `/`;
        }
        if (score === 2) {
            return `x`;
        }
        if (score >= 3) {
            return ` \u24E7 `;
        }
    };
    const renderCricketRow = (segment: string) => {
        return (
            <CricketRow>
                <td>{iconSelection(gameState[player1][segment])}</td>
                <CricketNumber>
                    <JoinButton
                        onClick={() => {
                            buttonUpdate(segment);
                            setButton(true);
                        }}
                    >
                        {segment}
                    </JoinButton>
                </CricketNumber>
                <td>{iconSelection(gameState[player2][segment])}</td>
            </CricketRow>
        );
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

    return (
        <div>
            {player === player1 ? <MenuToggle /> : null}
            <CricketTable>
                <tbody>
                    <CricketRow>
                        <CricketHeader>
                            {player1}
                            {`\u00a0`}
                            {player === player1 ? <PlayerDot /> : null}
                        </CricketHeader>
                        <CricketHeader>VS</CricketHeader>
                        <CricketHeader>
                            {player2}
                            {`\u00a0`}
                            {player === player2 ? <PlayerDot /> : null}
                        </CricketHeader>
                    </CricketRow>
                    {cricketRows.map((segment) => renderCricketRow(segment))}
                    <CricketRow>
                        <CricketFooter>
                            {gameState[player1]['Total']}
                        </CricketFooter>
                        <CricketFooter></CricketFooter>
                        <CricketFooter>
                            {gameState[player2]['Total']}
                        </CricketFooter>
                    </CricketRow>
                </tbody>
            </CricketTable>
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

export default Cricket;
