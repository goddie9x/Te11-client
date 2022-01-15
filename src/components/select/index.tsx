import React from 'react';

import TSelectStyled, { TSelectProps } from './select.styled';

const TSelect = (props: TSelectProps) => {
  return <TSelectStyled {...props} />;
};

export default TSelect;
