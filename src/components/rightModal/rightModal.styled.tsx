import { Modal, ModalProps, styled } from '@mui/material';
import TPaper from 'components/paper';

export type TRightModalProps = ModalProps&{
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
  zindex?: string | number;
};

const TRightModalStyled = styled(Modal)<TRightModalProps>`
  width: ${({ width, theme }) => width && (typeof width === 'string' ? width : theme.spacing(width))};
  height: ${({ height, theme }) => height && (typeof height === 'string' ? height : theme.spacing(height))};
  padding: ${({ padding, theme }) => padding && (typeof padding === 'string' ? padding : theme.spacing(padding))};
  padding-top: ${({ paddingTop, theme }) => paddingTop && (typeof paddingTop === 'string' ? paddingTop : theme.spacing(paddingTop))};
  padding-bottom: ${({ paddingBottom, theme }) => paddingBottom && (typeof paddingBottom === 'string' ? paddingBottom : theme.spacing(paddingBottom))};
  padding-left: ${({ paddingLeft, theme }) => paddingLeft && (typeof paddingLeft === 'string' ? paddingLeft : theme.spacing(paddingLeft))};
  padding-right: ${({ paddingRight, theme }) => paddingRight && (typeof paddingRight === 'string' ? paddingRight : theme.spacing(paddingRight))};
  margin: ${({ margin, theme }) => margin && (typeof margin === 'string' ? margin : theme.spacing(margin))};
  margin-top: ${({ marginTop, theme }) => marginTop && (typeof marginTop === 'string' ? marginTop : theme.spacing(marginTop))};
  margin-bottom: ${({ marginBottom, theme }) => marginBottom && (typeof marginBottom === 'string' ? marginBottom : theme.spacing(marginBottom))};
  margin-left: ${({ marginLeft, theme }) => marginLeft && (typeof marginLeft === 'string' ? marginLeft : theme.spacing(marginLeft))};
  margin-right: ${({ marginRight, theme }) => marginRight && (typeof marginRight === 'string' ? marginRight : theme.spacing(marginRight))};
  border-radius: ${({ borderRadius, theme }) => borderRadius && (typeof borderRadius === 'string' ? borderRadius : theme.spacing(borderRadius))};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: ${({ fontSize, theme }) => fontSize && (typeof fontSize === 'string' ? fontSize : theme.spacing(fontSize))};
  font-weight: ${({ fontWeight, theme }) => fontWeight && (typeof fontWeight === 'string' ? fontWeight : theme.spacing(fontWeight))};
  font-family: ${({ fontFamily, theme }) => fontFamily && (typeof fontFamily === 'string' ? fontFamily : theme.spacing(fontFamily))};
  text-align: ${({ textalign, theme }) => textalign && (typeof textalign === 'string' ? textalign : theme.spacing(textalign))};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow};
  z-index: ${({ zindex }) => zindex};
  top: 0;
  right: 0;
  bottom: 0;
  left: unset;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  > .MuiBox-root {
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  }
`;

export const TRightModalWrapper = styled(TPaper)`
  padding: ${({ theme }) => `${theme.spacing(1)}  ${theme.spacing(1)}`};
`;

export default TRightModalStyled;
