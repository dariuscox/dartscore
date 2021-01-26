import React, { Dispatch } from 'react';
import styled from 'styled-components';

import {
    DartGameStateActions,
    handleUpdateTargetValueByPlayerId,
    GameState,
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
    // pull cricket row out into a separate component
    height: 70px;
`;

const CricketNumber = styled.td`
    padding: 10px;
    border-left: 3px solid white;
    border-right: 3px solid white;
`;

// type PlayerScore = {

//     '20': number;
//     '19': number;
//     '18': number;
//     '17': number;
//     '16': number;
//     '15': number;
//     Bull: number;
//     Total: number;
// };

type CricketProps = {
    gameID: string;
    player: string;
    player1: string;
    player2: string;
    gameState: GameState;
    dispatch: Dispatch<DartGameStateActions>;
};
const Cricket = ({
    player,
    player1,
    player2,
    gameState,
    dispatch,
}: CricketProps) => {
    const cricketRows = ['20', '19', '18', '17', '16', '15', 'Bull'];

    const renderCricketRow = (segment: string) => {
        return (
            <CricketRow>
                <td>{gameState[player1][segment]}</td>
                <CricketNumber>
                    <button
                        onClick={handleUpdateTargetValueByPlayerId({
                            dispatch,
                            playerId: player,
                            segment,
                        })}
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
        </CricketTable>
    );
};

export default Cricket;
