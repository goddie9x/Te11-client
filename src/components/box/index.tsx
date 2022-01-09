import React from 'react';
import {Box, BoxProps } from "@mui/material";

export type TBoxProps = BoxProps;

const TBox = (props: BoxProps)=>{
    return <Box {...props} boxSizing="border-box"/>;
};

export default TBox;