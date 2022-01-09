import React from 'react';

import {Link as LinkContent, LinkProps} from '@mui/material';

import {StyledLink} from './link.styled';

export interface TLinkProps extends LinkProps{
    href: string;
}

const TLink = ({href, children, ...props}: TLinkProps) =>{
    return (
        <StyledLink to={href}>
            <LinkContent  href={href} component="span" underline="hover" {...props}>
                {children}
            </LinkContent>
        </StyledLink>
    );
};

export default TLink;