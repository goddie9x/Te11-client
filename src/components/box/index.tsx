import React from 'react';
import TBoxStyled, { TBoxProps } from './box.styled';


const TBox = (props: TBoxProps)=>{
    return <TBoxStyled {...props} boxSizing="border-box"/>;
};

export default TBox;