import { Fab, FabProps, styled } from '@mui/material';
import { TShape } from 'components/button/button.styled';
export interface TIconButtonProps extends FabProps {
  width?: number;
  height?: number;
  shape?: TShape;
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
}

const TIconButtonStyled = styled(Fab)<{
  width?: number;
  height?: number;
  shape?: TShape;
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
}>`
  width: ${({ width, theme }) => width && theme.spacing(width > 4.5 ? width : 4.5)};
  height: ${({ height, theme }) => height && theme.spacing(height > 4.5 ? height : 4.5)};
  border-radius: ${({ shape = 'none', theme }) => shape !== 'none' && (shape === 'round' ? '999px' : theme.spacing(0.5))};
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
`;

export default TIconButtonStyled;
