import styled from 'styled-components';

export const HomeTheme = styled.section`
    text-align: center;
    background-color: #252525;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const GameTheme = styled.section`
    text-align: center;
    background-color: #252525;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    //font-family: 'PressStart2P';
    font-family: source-code-pro;
    color: white;
`;

export const JoinTheme = styled.section`
    text-align: center;
    background-color: #252525;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const PlayerDot = styled.span`
    height: 20px;
    width: 20px;
    background-color: #2adcc4;
    border-radius: 50%;
    display: inline-block;
`;
