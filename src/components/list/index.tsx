import { BoxProps } from '@mui/material';
import React, { ReactNode } from 'react';

import { TListStyled, TListItemStyled } from './list.styled';

type HWListProps = BoxProps & {
  children: ReactNode;
};

export const TListItem = ({children,...props }: HWListProps) => {
  return (
    <TListItemStyled {...props} component="li">
      {children}
    </TListItemStyled>
  );
};

const TList = ({ children,...props }: HWListProps) => {
  return <TListStyled component="ul" {...props}>{children}</TListStyled>;
};

export default TList;
