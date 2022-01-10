import React from 'react';
import {Box, BoxProps } from "@mui/material";

export type TBoxProps = BoxProps&{
    minwidth?: number;
};

const TBox = (props: TBoxProps)=>{
    return <Box {...props} boxSizing="border-box"/>;
};

export default TBox;