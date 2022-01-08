import { styled, Typography, TypographyProps } from '@mui/material';
import { Property } from 'csstype';

export type TTypographyProps = TypographyProps & {
  display?: string;
  width?: number;
  height?: number;
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
  color?: Property.Color | undefined;
};

const TTypographyStyled = styled(Typography)<{
  display?: string;
  width?: number;
  height?: number;
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
  color?: Property.Color | undefined;
}>`
  display: ${({ display }) => display};
  width: ${({ width, theme }) => width && theme.spacing(width)};
  height: ${({ height, theme }) => height&&theme.spacing(height)};
  margin: ${({ margin, theme }) => (margin&&Number(margin))? theme.spacing(margin as number) : margin};
  padding: ${({ padding, theme }) => (padding&&Number(padding))? theme.spacing(padding as number) : padding};
  margin-top: ${({ marginTop, theme }) => marginTop && theme.spacing(marginTop)};
  margin-bottom: ${({ marginBottom, theme }) => marginBottom && theme.spacing(marginBottom)};
  padding-top: ${({ paddingTop, theme }) => paddingTop && theme.spacing(paddingTop)};
  padding-bottom: ${({ paddingBottom, theme }) => paddingBottom && theme.spacing(paddingBottom)};
  margin-left: ${({ marginLeft, theme }) => marginLeft && theme.spacing(marginLeft)};
  margin-right: ${({ marginRight, theme }) => marginRight && theme.spacing(marginRight)};
  padding-left: ${({ paddingLeft, theme }) => paddingLeft && theme.spacing(paddingLeft)};
  padding-right: ${({ paddingRight, theme }) => paddingRight && theme.spacing(paddingRight)};
  color: ${({ color, theme }) => color ?color : theme.palette.primary.dark};
`;

export default TTypographyStyled;
