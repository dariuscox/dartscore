import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import doge from 'images/doge.jpg';
import { GameTheme } from 'components/Themes';
import { JoinButton } from 'components/Buttons';

const GameBackground = styled.div`
    margin-top: 10px;
    width: 800px;
    height: 600px;
    background-image: url(${doge});
    background-size: 700;
`;
const MiniGame = () => {
    const [buttonLocation, setButtonLocation] = useState([]);
    const [seconds, setSeconds] = useState(30);
    const [active, setActive] = useState(false);
    useEffect(() => {}, []);
    // const target = {

    // }
    useEffect(() => {
        const interval = setInterval(() => {
            if (active) {
                const updateSeconds = seconds - 1;
                setSeconds(updateSeconds);
                if (updateSeconds <= 0) {
                    setActive(false);
                    setSeconds(0);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [active, seconds]);

    return (
        <GameTheme>
            <JoinButton
                onClick={() => {
                    setActive(true);
                }}
            >
                Start
            </JoinButton>
            <label>{seconds}</label>
            <GameBackground></GameBackground>
        </GameTheme>
    );
};

export default MiniGame;
