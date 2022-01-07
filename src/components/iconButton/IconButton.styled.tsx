import { Fab, FabProps, styled } from '@mui/material';

export interface TIconButtonProps extends FabProps {
  width?: number;
  height?: number;
}

const TIconButtonStyled = styled(Fab)<{ width?: number; height?: number }>`
  width: ${({ width, theme }) => width && theme.spacing(width > 4.5 ? width : 4.5)};
  height: ${({ height, theme }) => height && theme.spacing(height > 4.5 ? height : 4.5)};
`;

export default TIconButtonStyled;
