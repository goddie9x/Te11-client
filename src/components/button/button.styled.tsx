import { Button, ButtonProps, styled } from '@mui/material';

export interface TButtonProps extends ButtonProps{
    width?: number;
    height?: number;
}

const TButtonStyled = styled(Button)<{ width?: number; height?: number }>`
  width: ${({ width, theme }) => width && theme.spacing(width)};
  height: ${({ height, theme }) => height && theme.spacing(height)};
`;

export default TButtonStyled;
