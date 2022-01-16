import { TBoxProps } from "components/box/box.styled";
import React from "react";
import TStyledCard from "./card.styled";

export type TCardProps = TBoxProps;

const TCard = ({children, ...props}: TCardProps) => {
    return <TStyledCard {...props}>{children}</TStyledCard>;
};

export default TCard;