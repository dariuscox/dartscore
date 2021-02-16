import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const ModalBody = styled.section({
    position: 'absolute',
    width: 300,
    height: 150,
    backgroundColor: '#252525',
    border: '2px solid #000',
    color: 'white',
    padding: '0 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});
export const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
