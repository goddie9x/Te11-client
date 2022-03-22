import React from 'react';
import TImageStyled, { TImageProps } from './image.styled';

const TImage = ({ objectFit, objectPosition, ...props }: TImageProps) => {
  return <TImageStyled fit={objectFit} {...props} position={objectPosition} />;
};

export default TImage;
