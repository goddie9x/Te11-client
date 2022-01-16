import { Fab, FabProps, styled } from '@mui/material';
import { TShape } from 'components/button/button.styled';

export interface TIconButtonProps extends FabProps {
  width?: number | string;
  minwidth?: number | string;
  height?: number | string;
  minheight?: number | string;
  shape?: TShape;
  margin?: string | number;
  padding?: string | number;
  marginTop?: number | string;
  marginbottom?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  background?: string;
  lineheight?: number | string;
}

const TIconButtonStyled = styled(Fab)<{
  width?: number | string;
  height?: number | string;
  shape?: TShape;
  margin?: string | number;
  minheight?: number | string;
  minwidth?: number | string;
  padding?: string | number;
  marginTop?: number | string;
  marginbottom?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  background?: string;
  lineheight?: number | string;
}>`
  width: ${({ width, theme }) => width && (typeof width === 'string' ? width : theme.spacing(width > 4.5 ? width : 4.5))};
  height: ${({ height, theme }) =>
    height && (typeof height === 'string' ? height : theme.spacing(height > 4.5 ? height : 4.5))};
  border-radius: ${({ shape = 'none', theme }) => shape !== 'none' && (shape === 'round' ? '999px' : theme.spacing(0.5))};
  margin: ${({ margin, theme }) => (margin && Number(margin) ? theme.spacing(margin as number) : margin)};
  padding: ${({ padding, theme }) => (padding && Number(padding) ? theme.spacing(padding as number) : padding)};
  margin-top: ${({ marginTop, theme }) => (marginTop && Number(marginTop) ? theme.spacing(marginTop as number) : marginTop)};
  margin-bottom: ${({ marginbottom, theme }) =>
    marginbottom && Number(marginbottom) ? theme.spacing(marginbottom as number) : marginbottom};
  padding-top: ${({ paddingTop, theme }) =>
    paddingTop && Number(paddingTop) ? theme.spacing(paddingTop as number) : paddingTop};
  padding-bottom: ${({ paddingBottom, theme }) =>
    paddingBottom && Number(paddingBottom) ? theme.spacing(paddingBottom as number) : paddingBottom};
  margin-left: ${({ marginLeft, theme }) =>
    marginLeft && (Number(marginLeft) ? theme.spacing(marginLeft as number) : marginLeft)};
  margin-right: ${({ marginRight, theme }) =>
    marginRight && (Number(marginRight) ? theme.spacing(marginRight as number) : marginRight)};
  padding-left: ${({ paddingLeft, theme }) =>
    paddingLeft && (Number(paddingLeft) ? theme.spacing(paddingLeft as number) : paddingLeft)};
  padding-right: ${({ paddingRight, theme }) =>
    paddingRight && (Number(paddingRight) ? theme.spacing(paddingRight as number) : paddingRight)};
  background-color: ${({ background }) => background};
  line-height: ${({ lineheight }) => lineheight};
  min-width: ${({ minwidth, theme }) => minwidth && (typeof minwidth === 'string' ? minwidth : theme.spacing(minwidth))};
  min-height: ${({ minheight, theme }) => minheight && (typeof minheight === 'string' ? minheight : theme.spacing(minheight))};
`;

export default TIconButtonStyled;
