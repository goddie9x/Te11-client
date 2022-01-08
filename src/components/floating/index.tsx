import React from "react";
import TFloatingStyled, { TFloatingProps } from "./floating.styled";


const TFloating = ({children,...props}: TFloatingProps)=>{
    return <TFloatingStyled {...props}>
        {children}
    </TFloatingStyled>;
};

export default TFloating;