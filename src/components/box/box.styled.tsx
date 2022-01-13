import { Box, styled } from '@mui/material';
import { BoxProps } from '@mui/material';

export type TBoxProps = BoxProps & {
  minwidth?: number;
  background?: string;
  lineheight?: number;
  textalign?: 'left' | 'center' | 'right';
};

const TBoxStyled = styled(Box)<TBoxProps>`
  min-width: ${({ minwidth, theme }) => minwidth && theme.spacing(minwidth)};
  background: ${({ background }) => background};
  line-height: ${({ lineheight}) => lineheight };
  text-align: ${({ textalign }) => textalign};
`;

export default TBoxStyled;
