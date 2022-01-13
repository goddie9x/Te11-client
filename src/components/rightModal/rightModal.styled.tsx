import { Modal, styled } from '@mui/material';
import TPaper from 'components/paper';

const TRightModalStyled = styled(Modal)`
  top: 0;
  right: 0;
  bottom: 0;
  left: unset;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  > .MuiBox-root {
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  }
`;

export const TRightModalWrapper = styled(TPaper)`
  padding: ${({ theme }) => `${theme.spacing(1)}  ${theme.spacing(1)}`};
`;

export default TRightModalStyled;
