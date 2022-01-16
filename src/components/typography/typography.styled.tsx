import { styled, Typography, TypographyProps } from '@mui/material';
import { Property } from 'csstype';

export type TTypographyProps = TypographyProps & {
  display?: string;
  width?: number | string;
  minwidth?: number;
  height?: number | string;
  minHeight?: number;
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
  color?: Property.Color | undefined;
  lineheight?: number;
  textalign?: 'left' | 'center' | 'right';
};

const TTypographyStyled = styled(Typography)<{
  display?: string;
  width?: number | string;
  minwidth?: number;
  height?: number | string;
  minHeight?: number;
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
  lineheight?: number;
  color?: Property.Color | undefined;
  textalign?: 'left' | 'center' | 'right';
}>`
  display: ${({ display }) => display};
  width: ${({ width, theme }) => width && ((typeof width === 'string')?(width): theme.spacing(width))};
  height: ${({ height, theme }) => height&&((typeof height=== 'string')?(height): theme.spacing(height))};
  min-width: ${({ minwidth, theme }) => minwidth && theme.spacing(minwidth)};
  min-height: ${({ minHeight, theme }) => minHeight && theme.spacing(minHeight)};
  margin: ${({ margin, theme }) => (margin&&Number(margin))? theme.spacing(margin as number) : margin};
  padding: ${({ padding, theme }) => (padding&&Number(padding))? theme.spacing(padding as number) : padding};
  margin-top: ${({ marginTop, theme }) => marginTop && theme.spacing(marginTop)};
  margin-bottom: ${({ marginbottom, theme }) => marginbottom && theme.spacing(marginbottom)};
  padding-top: ${({ paddingTop, theme }) => paddingTop && theme.spacing(paddingTop)};
  padding-bottom: ${({ paddingBottom, theme }) => paddingBottom && theme.spacing(paddingBottom)};
  margin-left: ${({ marginLeft, theme }) => marginLeft && theme.spacing(marginLeft)};
  margin-right: ${({ marginRight, theme }) => marginRight && theme.spacing(marginRight)};
  padding-left: ${({ paddingLeft, theme }) => paddingLeft && theme.spacing(paddingLeft)};
  padding-right: ${({ paddingRight, theme }) => paddingRight && theme.spacing(paddingRight)};
  color: ${({ color, theme }) => color ?color : theme.palette.primary.dark};
  line-height: ${({ lineheight }) => lineheight};
  text-align: ${({ textalign }) => textalign};
`;

export default TTypographyStyled;
