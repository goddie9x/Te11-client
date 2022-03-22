import { AppBar, styled } from '@mui/material';

import TBox from 'components/box';

const THeaderStyled = styled(AppBar)<{ zindex?: number }>`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  z-index: ${({ zindex }) => zindex};
`;

export const THeaderSettingMusicWrapper = styled(TBox)`
  iframe {
    border-radius: ${({ theme }) => theme.spacing(4)};
  }
`;

export const NotificationContainer = styled(TBox)`
  overflow-x: hidden;
  overflow-y: scroll;
  *::-webkit-scrollbar:{
    width: ${({theme}) => theme.spacing(0.5)};
  }
  *::-webkit-scrollbar-track: {
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb: {
    width: 5px;
    background-color: #d6dee1;
    border-radius: 20px;
    background-clip: content-box;
  }
  *::-webkit-scrollbar-thumb:hover: {
    background-color: #a8bbbf;
  }
`;

export default THeaderStyled;
