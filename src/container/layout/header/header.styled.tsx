import { AppBar, styled } from "@mui/material";

const THeaderStyled = styled(AppBar)<{zindex?: number}>`
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    z-index: ${({ zindex }) => zindex};
`;

export default THeaderStyled;