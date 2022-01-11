import { Box, styled } from "@mui/material";

const TBoxStyled = styled(Box)<{ minwidth?: number }>`
    min-width: ${({ minwidth, theme }) => minwidth&&theme.spacing(minwidth)};
`;

export default TBoxStyled;