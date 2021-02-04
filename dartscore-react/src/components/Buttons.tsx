import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CreateButton = styled(Button)`
    background-color: #b989f8; // #6772e5;
    color: black;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    margin: 10px;
    &:hover {
        background-color: #9d74d3;
    }
`;

const JoinButton = styled(Button)`
    background-color: #2adcc4; //#5dce41;
    color: black;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    margin: 10px;
    &:hover {
        background-color: #24b39f;
    }
`;

export { CreateButton, JoinButton };
