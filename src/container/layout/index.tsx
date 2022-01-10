import TBox from 'components/box';
import React from 'react';
import TFooter from './footer';
import THeader from './header';

export type TLayoutProps = {
  children: React.ReactNode;
};

const TLayout = ({ children }: TLayoutProps) => {
  return (
    <>
      <THeader />
      <TBox margin="80px 0 30px 0">{children}</TBox>
      <TFooter />
    </>
  );
};

export default TLayout;
