import React from 'react';
import {BoxProps } from "@mui/material";
import TBoxStyled from './box.styled';

export type TBoxProps = BoxProps&{
    minwidth?: number;
};

const TBox = (props: TBoxProps)=>{
    return <TBoxStyled {...props} boxSizing="border-box"/>;
};

export default TBox;