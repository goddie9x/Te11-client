import styled from '@emotion/styled';
import { Property } from 'csstype';

const TImageStyled = styled.img<{
  fit?: Property.ObjectFit;
  position?: Property.ObjectPosition;
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
}>`
  object-fit: ${({ fit }) => fit};
  object-position: ${({ position }) => position};
  max-width: 100%;
  max-height: 100%;
  margin: ${({ margin }) => (margin&&Number(margin))? margin + 'px' : margin};
  padding: ${({ padding }) => (padding&&Number(padding))? padding + 'px' : padding};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
`;

export default TImageStyled;
