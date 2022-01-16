import React from 'react';
import { useTheme } from '@mui/material';

import TBox from 'components/box';
import TFooter from './footer';
import THeader from './header';
import THelmet from './helmet';

import { useSelector } from 'react-redux';

import { RootState } from 'store';

export type TLayoutProps = {
  children: React.ReactNode;
};

const TLayout = ({ children }: TLayoutProps) => {
  const theme = useTheme();
  const isParticlesOn = useSelector((state: RootState) => state.common.isParticlesOn);

  return (
    <TBox background={isParticlesOn?undefined:theme.palette.background.default}>
      <THelmet />
      <THeader />
      <TBox marginTop={5.5} padding={3.75} minHeight={500}>{children}</TBox>
      <TFooter />
    </TBox>
  );
};

export default TLayout;
