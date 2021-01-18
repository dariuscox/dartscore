import React from 'react';
import { CreateButton, JoinButton } from './Buttons';
import { HomeTheme } from './Themes';
import { useHistory } from 'react-router-dom';

const Landing = () => {
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
                <CreateButton onClick={() => routeChange('/create')}>
                    Create Game
                </CreateButton>
            </div>

            <div>
                <JoinButton onClick={() => routeChange('/join')}>
                    Join Game
                </JoinButton>
            </div>
        </HomeTheme>
    );
};

export default Landing;
