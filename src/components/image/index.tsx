import { Property } from 'csstype';
import React from 'react';
import TImageStyled from './image.styled';

export type TImageProps = {
  objectFit?: Property.ObjectFit;
  objectPosition?: Property.ObjectPosition;
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
  borderRadius?: number;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const TImage = ({ objectFit, objectPosition, ...props }: TImageProps) => {
  return <TImageStyled fit={objectFit} {...props} position={objectPosition} />;
};

export default TImage;
