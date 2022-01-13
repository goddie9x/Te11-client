import { Menu, MenuProps, styled } from '@mui/material';

export type TMenuProps = MenuProps & {
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  borderRadius?: string | number;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  textalign?: string;
  textTransform?: string;
  textDecoration?: string;
  textOverflow?: string;
  textShadow?: string;
  textJustify?: string;
};

const TMenuStyled = styled(Menu)<{
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  borderRadius?: string | number;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  textalign?: string;
  textTransform?: string;
  textDecoration?: string;
  textOverflow?: string;
  textShadow?: string;
  textJustify?: string;
}>`
  width: ${({ width, theme }) => width && (typeof width === 'string' ? width : theme.spacing(width))};
  height: ${({ height, theme }) => height && (typeof height === 'string' ? height : theme.spacing(height))};
  padding: ${({ padding, theme }) => padding && (typeof padding === 'string' ? padding : theme.spacing(padding))};
  padding-top: ${({ paddingTop, theme }) =>
    paddingTop && (typeof paddingTop === 'string' ? paddingTop : theme.spacing(paddingTop))};
  padding-bottom: ${({ paddingBottom, theme }) =>
    paddingBottom && (typeof paddingBottom === 'string' ? paddingBottom : theme.spacing(paddingBottom))};
  padding-left: ${({ paddingLeft, theme }) =>
    paddingLeft && (typeof paddingLeft === 'string' ? paddingLeft : theme.spacing(paddingLeft))};
  padding-right: ${({ paddingRight, theme }) =>
    paddingRight && (typeof paddingRight === 'string' ? paddingRight : theme.spacing(paddingRight))};
  margin: ${({ margin, theme }) => margin && (typeof margin === 'string' ? margin : theme.spacing(margin))};
  margin-top: ${({ marginTop, theme }) =>
    marginTop && (typeof marginTop === 'string' ? marginTop : theme.spacing(marginTop))};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom && (typeof marginBottom === 'string' ? marginBottom : theme.spacing(marginBottom))};
  margin-left: ${({ marginLeft, theme }) =>
    marginLeft && (typeof marginLeft === 'string' ? marginLeft : theme.spacing(marginLeft))};
  margin-right: ${({ marginRight, theme }) =>
    marginRight && (typeof marginRight === 'string' ? marginRight : theme.spacing(marginRight))};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius && (typeof borderRadius === 'string' ? borderRadius : theme.spacing(borderRadius))};
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
  color: ${({ color }) => color && color};
  font-size: ${({ fontSize, theme }) => fontSize && (typeof fontSize === 'string' ? fontSize : theme.spacing(fontSize))};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight && (typeof fontWeight === 'string' ? fontWeight : theme.spacing(fontWeight))};
  font-family: ${({ fontFamily }) => fontFamily && fontFamily};
  text-align: ${({ textalign }) => textalign && textalign};
  text-transform: ${({ textTransform }) => textTransform && textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration && textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow && textOverflow};
  text-shadow: ${({ textShadow }) => textShadow && textShadow};
  text-justify: ${({ textJustify }) => textJustify && textJustify};
`;

export default TMenuStyled;
