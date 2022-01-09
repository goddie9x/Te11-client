import TBox from "components/box";
import {TLinearProgressStyled,  TLinearProgressProps } from "components";
import React from "react";

const TLoading = ({width, color="secondary", ...props}: TLinearProgressProps) => {
    return <TBox {...props} width={width? width:'100%'}>
        <TLinearProgressStyled color={color} {...props}/>
    </TBox>;
};

export default TLoading;