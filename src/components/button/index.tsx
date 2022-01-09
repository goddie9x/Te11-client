import React from 'react';

import {TButtonStyled, TButtonProps} from 'components';

const TButton = (props: TButtonProps) => {
    return (
        <TButtonStyled {...props} />
    );
};

export default TButton;