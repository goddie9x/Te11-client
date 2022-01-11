import { FormControl, FormControlProps, styled } from '@mui/material';

export type TFormControlProps = FormControlProps & {
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  border?: number | string;
  borderColor?: string;
  backgroundColor?: string;
};

const TFormControlStyled = styled(FormControl)<{
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  border?: number | string;
  borderColor?: string;
  backgroundColor?: string;
}>`
  .MuiInputBase-root {
    width: ${({ width, theme }) => width && (typeof width === 'string' ? width : theme.spacing(width))};
    height: ${({ height, theme }) => height && (typeof height === 'string' ? height : theme.spacing(height))};
  }
  margin: ${({ margin, theme }) => margin && (typeof margin === 'string' ? margin : theme.spacing(margin))};
  padding: ${({ padding, theme }) => padding && (typeof padding === 'string' ? padding : theme.spacing(padding))};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius && (typeof borderRadius === 'string' ? borderRadius : theme.spacing(borderRadius))};
  border: ${({ border, theme }) => border && (typeof border === 'string' ? border : theme.spacing(border))};
  border-color: ${({ borderColor }) => borderColor && borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`;

export default TFormControlStyled;
