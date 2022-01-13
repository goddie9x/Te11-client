import {TextFieldProps, TextField, styled} from "@mui/material";

export type TInputProps = TextFieldProps&{
    width?: number | string;
    height?: number| string;
    margin?: number| string;
    marginTop?: number| string;
    marginBottom?: number| string;
    marginLeft?: number| string;
    marginRight?: number| string;
    padding?: number| string;
    paddingTop?: number| string;
    paddingBottom?: number| string;
    paddingLeft?: number| string;
    paddingRight?: number| string;
    fontSize?: number| string;
    fontWeight?: number| string;
    fontFamily?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number| string;
    borderRadius?: number| string;
};

const TInputStyled = styled(TextField)<TInputProps>`
    width: ${({ width, theme }) => width && (typeof width === 'string' ? width : theme.spacing(width))};
    height: ${({ height, theme }) => height && (typeof height === 'string' ? height : theme.spacing(height))};
    margin: ${({ margin, theme }) => margin && (typeof margin === 'string' ? margin : theme.spacing(margin))};
    margin-top: ${({ marginTop, theme }) => marginTop && (typeof marginTop === 'string' ? marginTop : theme.spacing(marginTop))};
    margin-bottom: ${({ marginBottom, theme }) => marginBottom && (typeof marginBottom === 'string' ? marginBottom : theme.spacing(marginBottom))};
    margin-left: ${({ marginLeft, theme }) => marginLeft && (typeof marginLeft === 'string' ? marginLeft : theme.spacing(marginLeft))};
    margin-right: ${({ marginRight, theme }) => marginRight && (typeof marginRight === 'string' ? marginRight : theme.spacing(marginRight))};
    padding: ${({ padding, theme }) => padding && (typeof padding === 'string' ? padding : theme.spacing(padding))};
    padding-top: ${({ paddingTop, theme }) => paddingTop && (typeof paddingTop === 'string' ? paddingTop : theme.spacing(paddingTop))};
    padding-bottom: ${({ paddingBottom, theme }) => paddingBottom && (typeof paddingBottom === 'string' ? paddingBottom : theme.spacing(paddingBottom))};
    padding-left: ${({ paddingLeft, theme }) => paddingLeft && (typeof paddingLeft === 'string' ? paddingLeft : theme.spacing(paddingLeft))};
    padding-right: ${({ paddingRight, theme }) => paddingRight && (typeof paddingRight === 'string' ? paddingRight : theme.spacing(paddingRight))};
    font-size: ${({ fontSize, theme }) => fontSize && (typeof fontSize === 'string' ? fontSize : theme.spacing(fontSize))};
    font-weight: ${({ fontWeight, theme }) => fontWeight && (typeof fontWeight === 'string' ? fontWeight : theme.spacing(fontWeight))};
    font-family: ${({ fontFamily }) => fontFamily};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-color: ${({ borderColor }) => borderColor};
    border-width: ${({ borderWidth, theme }) => borderWidth && (typeof borderWidth === 'string' ? borderWidth : theme.spacing(borderWidth))};
    border-radius: ${({ borderRadius, theme }) => borderRadius && (typeof borderRadius === 'string' ? borderRadius : theme.spacing(borderRadius))};
`;

export default TInputStyled;