import { AppBar, styled } from "@mui/material";

const THeaderStyled = styled(AppBar)`
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export default THeaderStyled;