import { styled, SelectProps, Select } from '@mui/material';

export type TSelectProps = SelectProps & {
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginbottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  zindex?: number;
  border?: string;
  borderRadius?: string | number;
  borderColor?: string;
};

const TSelectStyled = styled(Select)<TSelectProps>`
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
  margin-bottom: ${({ marginbottom, theme }) =>
    marginbottom && (typeof marginbottom === 'string' ? marginbottom : theme.spacing(marginbottom))};
  margin-left: ${({ marginLeft, theme }) =>
    marginLeft && (typeof marginLeft === 'string' ? marginLeft : theme.spacing(marginLeft))};
  margin-right: ${({ marginRight, theme }) =>
    marginRight && (typeof marginRight === 'string' ? marginRight : theme.spacing(marginRight))};
  z-index: ${({ zindex }) => zindex};
  border: ${({ border, theme }) => border && (typeof border === 'string' ? border : theme.spacing(border))};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius && (typeof borderRadius === 'string' ? borderRadius : theme.spacing(borderRadius))};
  border-color: ${({ borderColor, theme }) =>
    borderColor && (typeof borderColor === 'string' ? borderColor : theme.spacing(borderColor))};
`;

export default TSelectStyled;
