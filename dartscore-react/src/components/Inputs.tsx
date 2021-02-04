import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const JoinInput = styled(TextField)`
    /* default */
    .MuiInput-underline:before {
        border-bottom: 2px solid #b989f8;
    }
    /* hover (double-ampersand needed for specificity reasons. */
    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #9d74d3;
    }
    /* focused */
    .MuiInput-underline:after {
        border-bottom: 2px solid #2adcc4;
    }
    & .MuiInput-root {
        padding: 10px;
        margin: 10px;
        color: #b989f8;
    }
    ::placeholder {
        color: #b989f8;
    }
`;

export const ScoreInput = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: #b6b6b6;
    border: none;
    border-radius: 3px;
    ::placeholder {
        color: #666666;
    }
    text-transform: uppercase;
`;
