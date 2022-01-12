import { Box, styled } from '@mui/material';
import { BoxProps } from '@mui/material';

export type TBoxProps = BoxProps & {
  minwidth?: number;
  background?: string;
};

const TBoxStyled = styled(Box)<{ minwidth?: number; background?: string }>`
  min-width: ${({ minwidth, theme }) => minwidth && theme.spacing(minwidth)};
  background: ${({ background }) => background};
`;

export default TBoxStyled;
