import styled from 'styled-components';

const HomeTheme = styled.section`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const JoinTheme = styled.section`
    text-align: center;
    background-color: #aac4f7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #030303;
`;
export { HomeTheme, JoinTheme };
