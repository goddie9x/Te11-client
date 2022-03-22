import { styled } from '@mui/material';

import TGrid from 'components/grid';

const NotificationWrapper = styled(TGrid)<{read?: boolean}>`
    ${({read}) => !read &&'opacity: 0.8;'}
    :hover{
       border-radius: ${({theme})=>theme.spacing(0.6)};
        background-color:  ${({theme})=>theme.palette.action.hover};
    }
`;

export default NotificationWrapper;
