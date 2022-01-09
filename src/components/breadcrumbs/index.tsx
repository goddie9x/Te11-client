import React from 'react';
import { BreadcrumbsProps } from '@mui/material';

import {TLink, TBreadcrumbsStyled} from 'components';
export interface TBreadcrumbsProps extends BreadcrumbsProps {
  width?: number;
  height?: number;
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
}

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
