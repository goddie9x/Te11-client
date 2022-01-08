import TBox from 'components/box';
import TTypography from 'components/typography';
import React from 'react';

import TLinearProgressStyled, { TLinearProgressProps } from './progress.styled';

const TLinearProgress = ({
  showPercentage,
  fontSize,
  height,
  fontWeight,
  width,
  zIndex,
  color = 'secondary',
  value,
  ...props
}: TLinearProgressProps) => {
  return (
    <TBox {...props} width={width ? width : '100%'} zIndex={zIndex} height={height} boxSizing="border-box">
      <TLinearProgressStyled variant="determinate" color={color} value={value} {...props} />
      {showPercentage && (
        <TTypography fontSize={fontSize} fontWeight={fontWeight} marginTop={1}>
          {value}%
        </TTypography>
      )}
    </TBox>
  );
};

export default TLinearProgress;
