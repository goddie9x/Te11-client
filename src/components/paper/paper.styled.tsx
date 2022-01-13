import { Paper, PaperProps, styled } from '@mui/material';

export type TPaperProps = PaperProps&{
    position?: 'absolute' | 'relative' | 'static' | 'sticky' | 'fixed' | 'inherit';
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
    width?: number | string;
    height?: number | string;
    minwidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    margin?: number | string;
    marginTop?: number | string;
    marginRight?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    padding?: number | string;
    paddingTop?: number | string;
    paddingRight?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    borderRadius?: number | string;
    border?: number | string;
    borderColor?: string;
    borderWidth?: number | string;
    borderStyle?: string;
    background?: string;
};

const TPaperStyled = styled(Paper)<TPaperProps>`
    position: ${props => props.position};
    top: ${({top, theme}) => top && ((typeof top === 'string')?(top):(theme.spacing(top)))};
    right: ${({right, theme}) => right && ((typeof right === 'string')?(right):(theme.spacing(right)))};
    bottom: ${({bottom, theme}) => bottom && ((typeof bottom === 'string')?(bottom):(theme.spacing(bottom)))};
    left: ${({left, theme}) => left && ((typeof left === 'string')?(left):(theme.spacing(left)))};
    width: ${({width, theme}) => width && ((typeof width === 'string')?(width): theme.spacing(width))};
    height: ${({height, theme}) => height && ((typeof height === 'string')?(height): theme.spacing(height))};
    min-width: ${({minwidth, theme}) => minwidth && ((typeof minwidth === 'string')?(minwidth): theme.spacing(minwidth))};
    min-height: ${({minHeight, theme}) => minHeight && ((typeof minHeight === 'string')?(minHeight): theme.spacing(minHeight))};
    max-width: ${({maxWidth, theme}) => maxWidth && ((typeof maxWidth === 'string')?(maxWidth): theme.spacing(maxWidth))};
    max-height: ${({maxHeight, theme}) => maxHeight && ((typeof maxHeight === 'string')?(maxHeight): theme.spacing(maxHeight))};
    margin: ${({margin, theme}) => margin && ((typeof margin === 'string')?(margin): theme.spacing(margin))};
    margin-top: ${({marginTop, theme}) => marginTop && ((typeof marginTop === 'string')?(marginTop): theme.spacing(marginTop))};
    margin-right: ${({marginRight, theme}) => marginRight && ((typeof marginRight === 'string')?(marginRight): theme.spacing(marginRight))};
    margin-bottom: ${({marginBottom, theme}) => marginBottom && ((typeof marginBottom === 'string')?(marginBottom): theme.spacing(marginBottom))};
    margin-left: ${({marginLeft, theme}) => marginLeft && ((typeof marginLeft === 'string')?(marginLeft): theme.spacing(marginLeft))};
    padding: ${({padding, theme}) => padding && ((typeof padding === 'string')?(padding): theme.spacing(padding))};
    padding-top: ${({paddingTop, theme}) => paddingTop && ((typeof paddingTop === 'string')?(paddingTop): theme.spacing(paddingTop))};
    padding-right: ${({paddingRight, theme}) => paddingRight && ((typeof paddingRight === 'string')?(paddingRight): theme.spacing(paddingRight))};
    padding-bottom: ${({paddingBottom, theme}) => paddingBottom && ((typeof paddingBottom === 'string')?(paddingBottom): theme.spacing(paddingBottom))};
    padding-left: ${({paddingLeft, theme}) => paddingLeft && ((typeof paddingLeft === 'string')?(paddingLeft): theme.spacing(paddingLeft))};
    border-radius: ${({borderRadius, theme}) => borderRadius && ((typeof borderRadius === 'string')?(borderRadius): theme.spacing(borderRadius))};
    border: ${({border, theme}) => border && ((typeof border === 'string')?(border): theme.spacing(border))};
    border-color: ${({borderColor}) => borderColor };
    border-width: ${({borderWidth, theme}) => borderWidth && ((typeof borderWidth === 'string')?(borderWidth): theme.spacing(borderWidth))};
    border-style: ${({borderStyle}) => borderStyle};
    background: ${({background}) => background};
`;

export default TPaperStyled;