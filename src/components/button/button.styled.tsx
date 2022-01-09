import { Button, ButtonProps, styled } from '@mui/material';

export type TShape = 'none' | 'round' | 'curved';
export type TButtonProps = ButtonProps & {
  width?: number;
  height?: number;
  shape?: TShape;
  uppercase?: boolean;
  borderRadius?: number;
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
  fontSize?: number;
  fontWeight?: number;
};

const TButtonStyled = styled(Button)<{ 
  width?: number; 
  height?: number;
  shape?: TShape;
  uppercase?: boolean;
  borderRadius?: number;
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
  fontSize?: number;
  fontWeight?: number;
}>`
  width: ${({ width, theme }) => width && theme.spacing(width)};
  height: ${({ height, theme }) => height&&theme.spacing(height)};
  border-radius: ${({ shape = 'none', theme }) => shape !== 'none' && (shape === 'round' ? '999px' : theme.spacing(0.5))};
  border-radius: ${({ borderRadius, theme }) => borderRadius && theme.spacing(borderRadius)};
  text-transform: ${({ uppercase }) => uppercase? 'uppercase' : 'none'};
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
  font-size: ${({ fontSize, theme }) => fontSize && theme.spacing(fontSize)};
  font-weight: ${({ fontWeight, theme }) => fontWeight && theme.typography.fontWeightMedium};
`;

export default TButtonStyled;
