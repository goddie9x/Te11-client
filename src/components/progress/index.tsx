import { Box } from '@mui/material';
import TTypography from 'components/typography';
import React from 'react';

import TLinearProgressStyled, { TLinearProgressProps } from "./progress.styled";

const TLinearProgress = ({showPercentage, fontSize, fontWeight, width, color="secondary", ...props}: TLinearProgressProps) => {
    return <Box {...props} width={width? width:'100%'} boxSizing="border-box">
        <TLinearProgressStyled variant="determinate" color={color} value={props.value} {...props} />
        {showPercentage && <TTypography 
        fontSize={fontSize}
        fontWeight={fontWeight}
        marginTop={1}
        >
            {props.value}%
            </TTypography>}
    </Box>;
};

export default TLinearProgress;