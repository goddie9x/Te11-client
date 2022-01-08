import { BoxProps } from "@mui/material";
import React from "react";
import TStyledCard from "./card.styled";

const TCard = ({children, ...props}: BoxProps) => {
    return <TStyledCard {...props}>{children}</TStyledCard>;
};

export default TCard;