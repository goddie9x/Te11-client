import {AlertProps, Alert, styled} from "@mui/material";

export type TAlertProps = AlertProps & {
    title?: string;
    message?: string;
    width?: number | string;
    minwidth?: number | string;
    maxwidth?: number | string;
    height?: number | string;
    minheight?: number | string;
    maxheight?: number | string;
    radius?: number | string;
    padding?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    margin?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    border?: number | string;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: number | string;
    borderRadius?: number | string;
    borderStyle?: string;
    boxShadow?: string;
    zindex?: number;
    position?: string;
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
    display?: string;
    opacity?: number;
};

const TAlertStyled = styled(Alert)<TAlertProps>`
    width: ${({ width, theme})=> width && ((typeof width === 'string')?(width): theme.spacing(width))};
    min-width: ${({ minwidth, theme})=> minwidth && ((typeof minwidth === 'string')?(minwidth): theme.spacing(minwidth))};
    max-width: ${({ maxwidth, theme})=> maxwidth && ((typeof maxwidth === 'string')?(maxwidth): theme.spacing(maxwidth))};
    height: ${({ height, theme})=> height && ((typeof height === 'string')?(height): theme.spacing(height))};
    min-height: ${({ minheight, theme})=> minheight && ((typeof minheight === 'string')?(minheight): theme.spacing(minheight))};
    max-height: ${({ maxheight, theme})=> maxheight && ((typeof maxheight === 'string')?(maxheight): theme.spacing(maxheight))};
    border-radius: ${({ radius, theme})=> radius && ((typeof radius === 'string')?(radius): theme.spacing(radius))};
    padding: ${({ padding, theme})=> padding && ((typeof padding === 'string')?(padding): theme.spacing(padding))};
    padding-top: ${({ paddingTop, theme})=> paddingTop && ((typeof paddingTop === 'string')?(paddingTop): theme.spacing(paddingTop))};
    padding-bottom: ${({ paddingBottom, theme})=> paddingBottom && ((typeof paddingBottom === 'string')?(paddingBottom): theme.spacing(paddingBottom))};
    padding-left: ${({ paddingLeft, theme})=> paddingLeft && ((typeof paddingLeft === 'string')?(paddingLeft): theme.spacing(paddingLeft))};
    padding-right: ${({ paddingRight, theme})=> paddingRight && ((typeof paddingRight === 'string')?(paddingRight): theme.spacing(paddingRight))};
    margin: ${({ margin, theme})=> margin && ((typeof margin === 'string')?(margin): theme.spacing(margin))};
    margin-top: ${({ marginTop, theme})=> marginTop && ((typeof marginTop === 'string')?(marginTop): theme.spacing(marginTop))};
    margin-bottom: ${({ marginBottom, theme})=> marginBottom && ((typeof marginBottom === 'string')?(marginBottom): theme.spacing(marginBottom))};
    margin-left: ${({ marginLeft, theme})=> marginLeft && ((typeof marginLeft === 'string')?(marginLeft): theme.spacing(marginLeft))};
    margin-right: ${({ marginRight, theme})=> marginRight && ((typeof marginRight === 'string')?(marginRight): theme.spacing(marginRight))};
    border: ${({ border, theme})=> border && ((typeof border === 'string')?(border): theme.spacing(border))};
    background-color: ${({ backgroundColor})=> backgroundColor};
    color: ${({ color})=> color};
    border-color: ${({ borderColor})=> borderColor};
    border-width: ${({ borderWidth, theme})=> borderWidth && ((typeof borderWidth === 'string')?(borderWidth): theme.spacing(borderWidth))};
    border-radius: ${({ borderRadius, theme})=> borderRadius && ((typeof borderRadius === 'string')?(borderRadius): theme.spacing(borderRadius))};
    border-style: ${({ borderStyle})=> borderStyle};
    box-shadow: ${({ boxShadow})=> boxShadow};
    opacity: ${({ opacity})=> opacity};
    position: ${({ position})=> position};
    top: ${({ top, theme})=> top && ((typeof top === 'string')?(top): theme.spacing(top))};
    right: ${({ right, theme})=> right && ((typeof right === 'string')?(right): theme.spacing(right))};
    bottom: ${({ bottom, theme})=> bottom && ((typeof bottom === 'string')?(bottom): theme.spacing(bottom))};
    left: ${({ left, theme})=> left && ((typeof left === 'string')?(left): theme.spacing(left))};
    display: ${({ display})=> display };
    z-index: ${({ zindex})=> zindex};
`;

export default TAlertStyled;