import React from 'react';
import { HomeTheme } from './Themes';
import { JoinInput } from './Inputs';
import { JoinButton } from './Buttons';

const Create = () => {
    var gameId = Math.random().toString(36).substr(2, 4).toUpperCase();
    return (
        <HomeTheme>
            <div>
                <h1>Dartscore</h1>
            </div>
            <div>
                <h2>Game Code: {gameId}</h2>
            </div>
            <div>
                <label>Name</label>
            </div>
            <div>
                <JoinInput placeholder="Enter Your Name" />
            </div>
            <div>
                <JoinButton>Play</JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Create;
