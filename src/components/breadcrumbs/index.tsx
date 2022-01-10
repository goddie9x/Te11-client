import React from 'react';
import { BreadcrumbsProps } from '@mui/material';

import TBreadcrumbsStyled from './breadcrumbs.styled';
import TLink from 'components/link';

export type TBreadcrumbsProps = BreadcrumbsProps &{
  width?: number | string;
  minwidth?: number;
  height?: number | string;
  minHeight?: number;
  margin?: string | number;
  padding?: string | number;
  marginTop?: number;
  marginBottom?: number;
  paddingTop?: number;
  paddingBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  items: Array<{ href: string; label: string }>;
};

const TBreadcrumbs = ({ items, ...props }: TBreadcrumbsProps) => {
  return (
    <TBreadcrumbsStyled arial-label="breadcrumbs" {...props}>
      {items.map((item, index) => (
        <TLink key={index} href={item.href}>
          {item.label}
        </TLink>
      ))}
    </TBreadcrumbsStyled>
  );
};

export default TBreadcrumbs;
