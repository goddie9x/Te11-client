import { BoxProps, LinearProgress, LinearProgressProps, styled } from '@mui/material';

export type TLinearProgressProps = LinearProgressProps &
  BoxProps & {
    showPercentage?: boolean;
    fontSize?: number;
    fontWeight?: number;
  };

const TLinearProgressStyled = styled(LinearProgress)`
  height: 100%;
  width: 100%;
`;

export default TLinearProgressStyled;
