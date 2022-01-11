import React, { useEffect, useState } from 'react';

import TButton from 'components/button';
import TLink from 'components/link';
import { TNavItemChildrenVeriticalStyled, TNavItemStyled } from './navItem.styled';

export type TNavItemProps = {
  title?: string;
  href: string;
  navChildren?: Array<TNavItemProps>;
};

const TNavItemVeritical = ({ href, title, navChildren }: TNavItemProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const localHref = window.location.pathname.split('/');
    localHref.shift();

    const arraySpitHref = href.split('/');
    const currentHref = arraySpitHref.pop()||'';
    const isNavActive =  localHref?.includes(currentHref);
   
    (isNavActive)?setActive(true):setActive(false);
  });

  return (
    <TNavItemStyled active={active} minwidth={350}>
      <TLink href={href} underline="none">
        <TButton height="100%" fontSize={2.5} minwidth={12.5}>
          {title}
        </TButton>
      </TLink>
      {navChildren && navChildren.length && (
        <TNavItemChildrenVeriticalStyled>
          {navChildren.map((child, index) => (
            <TNavItemVeritical key={index} href={href + child.href} title={child.title} navChildren={child.navChildren} />
          ))}
        </TNavItemChildrenVeriticalStyled>
      )}
    </TNavItemStyled>
  );
};

export default TNavItemVeritical;
