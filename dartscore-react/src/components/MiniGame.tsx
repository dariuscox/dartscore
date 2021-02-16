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
    var posx = (Math.random() * 750).toFixed();
    var posy = (Math.random() * 550).toFixed();
    console.log(posx);
    const StyledButton = styled.button`
        position: absolute;
        left: ${posx}px;
        top: ${posy}px;
    `;
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
            <GameBackground>{<StyledButton>dart</StyledButton>}</GameBackground>
        </GameTheme>
    );
};

export default MiniGame;
