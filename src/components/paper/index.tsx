import React from "react";

import TPaperStyled, { TPaperProps } from "./paper.styled";

const TPaper  = ({children, ...props}: TPaperProps) => {
    return <TPaperStyled {...props}>{children}</TPaperStyled>;
};

export default TPaper;