import React from 'react';

import TIconButtonStyled, { TIconButtonProps } from './IconButton.styled';

const TIconButton = (props: TIconButtonProps) => {
    return (
        <TIconButtonStyled {...props}/>
    );
};

export default TIconButton;