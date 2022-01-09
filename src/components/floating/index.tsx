import React from "react";
import  { TFloatingStyled,TFloatingProps } from "components";


const TFloating = ({children,...props}: TFloatingProps)=>{
    return <TFloatingStyled {...props}>
        {children}
    </TFloatingStyled>;
};

export default TFloating;