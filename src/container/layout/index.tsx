import TBox from 'components/box';
import React from 'react';
import TFooter from './footer';
import THeader from './header';
import THelmet from './helmet';

export type TLayoutProps = {
  children: React.ReactNode;
};

const TLayout = ({ children }: TLayoutProps) => {
  return (
    <>
      <THelmet />
      <THeader />
      <TBox margin="80px 30px 30px 30px" minHeight={500}>{children}</TBox>
      <TFooter />
    </>
  );
};

export default TLayout;
