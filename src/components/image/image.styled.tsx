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
  borderRadius?: number;
}>`
  object-fit: ${({ fit }) => fit};
  object-position: ${({ position }) => position};
  max-width: 100%;
  max-height: 100%;
  margin: ${({ margin }) => (margin&&Number(margin))? margin + 'px' : margin};
  padding: ${({ padding }) => (padding&&Number(padding))? padding + 'px' : padding};
  margin-top: ${({ marginTop }) => (marginTop&&Number(marginTop))? marginTop + 'px' : marginTop};
  margin-bottom: ${({ marginBottom }) => (marginBottom&&Number(marginBottom))? marginBottom + 'px' : marginBottom};
  padding-top: ${({ paddingTop }) => (paddingTop&&Number(paddingTop))? paddingTop + 'px' : paddingTop};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom&&Number(paddingBottom))? paddingBottom + 'px' : paddingBottom};
  margin-left: ${({ marginLeft }) => (marginLeft&&Number(marginLeft))? marginLeft + 'px' : marginLeft};
  margin-right: ${({ marginRight }) => (marginRight&&Number(marginRight))? marginRight + 'px' : marginRight};
  padding-left: ${({ paddingLeft }) => (paddingLeft&&Number(paddingLeft))? paddingLeft + 'px' : paddingLeft};
  padding-right: ${({ paddingRight }) => (paddingRight&&Number(paddingRight))? paddingRight + 'px' : paddingRight};
  border-radius: ${({ borderRadius }) => (borderRadius&&Number(borderRadius))? borderRadius + 'px' : borderRadius};
`;

export default TImageStyled;
