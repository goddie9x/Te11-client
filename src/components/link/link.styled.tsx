import { Link, LinkProps } from 'react-router-dom';
import { styled } from '@mui/material';
export type TLinkProps = Omit<LinkProps,'to'>& {
  href: string;
  textalign?: string;
  fontSize?: number;
  fontWeight?: number;
  lineheight?: number;
  margin?: string | number;
  padding?: string | number;
  marginTop?: number;
  marginbottom?: number;
  paddingTop?: number;
  paddingBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  width?: number | string;
  minwidth?: number;
  height?: number | string;
  minHeight?: number;
  uppercase?: boolean;
  color?: string;
  textDecoration?: string;
};

export const StyledLink = styled(Link)<{
  textalign?: string;
  fontSize?: number;
  fontWeight?: number;
  lineheight?: number;
  margin?: string | number;
  padding?: string | number;
  marginTop?: number;
  marginbottom?: number;
  paddingTop?: number;
  paddingBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  width?: number | string;
  minwidth?: number;
  height?: number | string;
  minHeight?: number;
  uppercase?: boolean;
  color?: string;
  textDecoration?: string;
}>`
  width: ${({ width, theme }) => width && (typeof width === 'string' ? width : theme.spacing(width))};
  height: ${({ height, theme }) => height && (typeof height === 'string' ? height : theme.spacing(height))};
  min-width: ${({ minwidth, theme }) => minwidth && theme.spacing(minwidth)};
  min-height: ${({ minHeight, theme }) => minHeight && theme.spacing(minHeight)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  margin: ${({ margin, theme }) => (margin && Number(margin) ? theme.spacing(margin as number) : margin)};
  padding: ${({ padding, theme }) => (padding && Number(padding) ? theme.spacing(padding as number) : padding)};
  margin-top: ${({ marginTop, theme }) => marginTop && theme.spacing(marginTop)};
  margin-bottom: ${({ marginbottom, theme }) => marginbottom && theme.spacing(marginbottom)};
  padding-top: ${({ paddingTop, theme }) => paddingTop && theme.spacing(paddingTop)};
  padding-bottom: ${({ paddingBottom, theme }) => paddingBottom && theme.spacing(paddingBottom)};
  margin-left: ${({ marginLeft, theme }) => marginLeft && theme.spacing(marginLeft)};
  margin-right: ${({ marginRight, theme }) => marginRight && theme.spacing(marginRight)};
  padding-left: ${({ paddingLeft, theme }) => paddingLeft && theme.spacing(paddingLeft)};
  padding-right: ${({ paddingRight, theme }) => paddingRight && theme.spacing(paddingRight)};
  text-align: ${({ textalign }) => textalign};
  font-size: ${({ fontSize, theme }) => fontSize && theme.spacing(fontSize)};
  font-weight: ${({ fontWeight, theme }) => fontWeight && theme.typography.fontWeightBold};
  line-height: ${({ lineheight, theme }) => lineheight && theme.spacing(lineheight)};
  color: ${({ color }) => color};
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
`;
