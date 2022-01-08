import React from 'react';
import {Box, BoxProps } from "@mui/material";

const TBox = (props: BoxProps)=>{
    return <Box {...props} boxSizing="border-box"/>;
};

export default TBox;