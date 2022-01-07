import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from '@mui/material';

import TLink from 'components/link';

export interface TBreadcrumbsProps extends BreadcrumbsProps {
  items: Array<{ href: string; label: string }>;
}

const TBreadcrumbs = ({ items, ...props }: TBreadcrumbsProps) => {
  return (
    <Breadcrumbs arial-label="breadcrumbs" {...props}>
      {items.map((item, index) => (
        <TLink key={index} href={item.href}>
          {item.label}
        </TLink>
      ))}
    </Breadcrumbs>
  );
};

export default TBreadcrumbs;
