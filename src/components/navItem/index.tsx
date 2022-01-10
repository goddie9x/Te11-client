import React, { useEffect, useState } from 'react';

import TButton from 'components/button';
import TLink from 'components/link';
import { TNavItemChildrenStyled, TNavItemStyled } from './navItem.styled';

export type TNavItemProps = {
  title?: string;
  href: string;
  navChildren?: Array<TNavItemProps>;
};

const TNavItem = ({ href, title, navChildren }: TNavItemProps) => {
  const [active, setActive] = useState(false);
  const [firstNav, setFirstNav] = useState(false);

  useEffect(() => {
    const localHref = window.location.pathname.split('/');
    localHref.shift();

    const arraySpitHref = href.split('/');
    const currentHref = arraySpitHref.pop()||'';
    const isNavActive =  localHref?.includes(currentHref);
   
    (arraySpitHref.length<2)?setFirstNav(true):setFirstNav(false);
   
    (isNavActive)?setActive(true):setActive(false);
  });

  return (
    <TNavItemStyled position="relative" active={active}>
      <TLink href={href} underline="none">
        <TButton height="100%" fontSize={2.5} minWidth={12.5}>
          {title}
        </TButton>
      </TLink>
      {navChildren && navChildren.length && (
        <TNavItemChildrenStyled position="absolute" left={firstNav?0:"100%"} top={firstNav?"100%":0}>
          {navChildren.map((child, index) => (
            <TNavItem key={index} href={href + child.href} title={child.title} navChildren={child.navChildren} />
          ))}
        </TNavItemChildrenStyled>
      )}
    </TNavItemStyled>
  );
};

export default TNavItem;
