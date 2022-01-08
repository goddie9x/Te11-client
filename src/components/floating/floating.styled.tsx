import { BoxProps, styled } from "@mui/material";

import TBox from "components/box";

export type TFloatingProps = BoxProps&{
    positionShowUp?: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
};

const TFloatingStyled = styled(TBox)<{
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}>`
    position: fixed;
    top: ${({ top, theme }) => top && theme.spacing(top)};
    left: ${({ left, theme }) => left && theme.spacing(left)};
    right: ${({ right, theme }) => right && theme.spacing(right)};
    bottom: ${({ bottom, theme }) => bottom && theme.spacing(bottom)};
`;

export default TFloatingStyled;