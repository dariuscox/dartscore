import React from 'react';
import styled from 'styled-components';

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

type CricketProps = {
    player1: string;
    player2: string;
};
const Cricket = (props: CricketProps) => {
    const { player1, player2 } = props;
    return (
        <CricketTable>
            <CricketRow>
                <CricketHeader>{player1}</CricketHeader>
                <CricketHeader>VS</CricketHeader>
                <CricketHeader>{player2}</CricketHeader>
            </CricketRow>
            <CricketRow>
                <td>/</td>
                <CricketNumber>20</CricketNumber>
                <td></td>
            </CricketRow>
            <CricketRow>
                <td>x</td>
                <CricketNumber>19</CricketNumber>
                <td>/</td>
            </CricketRow>
            <CricketRow>
                <td></td>
                <CricketNumber>18</CricketNumber>
                <td></td>
            </CricketRow>
            <CricketRow>
                <td>x</td>
                <CricketNumber>17</CricketNumber>
                <td>x</td>
            </CricketRow>
            <CricketRow>
                <td></td>
                <CricketNumber>16</CricketNumber>
                <td></td>
            </CricketRow>
            <CricketRow>
                <td>x</td>
                <CricketNumber>15</CricketNumber>
                <td>/</td>
            </CricketRow>
            <CricketRow>
                <td></td>
                <CricketNumber>B</CricketNumber>
                <td></td>
            </CricketRow>
            <CricketRow>
                <CricketFooter>Score 1</CricketFooter>
                <CricketFooter></CricketFooter>
                <CricketFooter>Score 2</CricketFooter>
            </CricketRow>
        </CricketTable>
    );
};

export default Cricket;
