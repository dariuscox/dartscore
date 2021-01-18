import React from 'react';
import { HomeTheme } from './Themes';
import { JoinInput } from './Inputs';
import { JoinButton } from './Buttons';
import { useHistory } from 'react-router-dom';

const Join = () => {
    // will need to see if game is in progress or not to go to path
    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
    };

    return (
        <HomeTheme>
            <div>
                <h1>Dartscore</h1>
            </div>
            <div>
                <label>Game Code</label>
            </div>
            <div>
                <JoinInput placeholder="Enter 4-Letter Code" />
            </div>
            <div>
                <label>Name</label>
            </div>
            <div>
                <JoinInput placeholder="Enter Your Name" />
            </div>
            <div>
                <JoinButton onClick={() => routeChange('/lobby')}>
                    Play
                </JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Join;
