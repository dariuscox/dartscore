import React from 'react';
import styled from 'styled-components';

const FiveOneGame = styled.section`
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

const FiveOne = () => (
    <FiveOneGame>
        <FiveOneSection>
            <FiveOneTable>
                <FiveOneRow>
                    <FiveOneHeader>Scoreboard</FiveOneHeader>
                </FiveOneRow>
                <FiveOneRow>
                    <FiveOneData>41</FiveOneData>
                    <FiveOneData>3</FiveOneData>
                </FiveOneRow>
                <FiveOneRow>
                    <FiveOneData>32</FiveOneData>
                    <FiveOneData>6</FiveOneData>
                </FiveOneRow>
            </FiveOneTable>
        </FiveOneSection>
        <FiveOneSection>
            <FiveOneScore>428</FiveOneScore>
            <div>
                <label>Player 1 </label>
                <PlayerDot></PlayerDot>
            </div>
        </FiveOneSection>
        <FiveOneSection>
            <FiveOneScore>483</FiveOneScore>
            <label>Player 2 </label>
        </FiveOneSection>
        <FiveOneSection>
            <FiveOneTable>
                <FiveOneRow>
                    <FiveOneHeader>Scoreboard</FiveOneHeader>
                </FiveOneRow>
                <FiveOneRow>
                    <FiveOneData>18</FiveOneData>
                    <FiveOneData>3</FiveOneData>
                </FiveOneRow>
            </FiveOneTable>
        </FiveOneSection>
    </FiveOneGame>
);

export default FiveOne;
