import { BoxProps } from "@mui/material";
import React from "react";
import TStyledCard from "./card.styled";

export type TCardProps = BoxProps;

const TCard = ({children, ...props}: TCardProps) => {
    return <TStyledCard {...props}>{children}</TStyledCard>;
};

export default TCard;