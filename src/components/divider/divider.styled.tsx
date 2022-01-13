import { Divider,styled,DividerProps } from "@mui/material";

export type TDividerProps = DividerProps & {
    width?:string | number;
    height?:string | number;
    margin?:string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    padding?:string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
};

const TDividerStyled = styled(Divider)<{
    width?:string | number;
    height?:string | number;
    margin?:string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    padding?:string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
}>`
    width: ${({width, theme}) => width && ((typeof width === 'string')?(width): theme.spacing(width))};
    height: ${({height, theme}) => height && ((typeof height === 'string')?(height): theme.spacing(height))};
    margin: ${({margin, theme}) => margin && ((typeof margin === 'string')?(margin): theme.spacing(margin))};
    margin-top: ${({marginTop, theme}) => marginTop && ((typeof marginTop === 'string')?(marginTop): theme.spacing(marginTop))};
    margin-bottom: ${({marginBottom, theme}) => marginBottom && ((typeof marginBottom === 'string')?(marginBottom): theme.spacing(marginBottom))};
    margin-left: ${({marginLeft, theme}) => marginLeft && ((typeof marginLeft === 'string')?(marginLeft): theme.spacing(marginLeft))};
    margin-right: ${({marginRight, theme}) => marginRight && ((typeof marginRight === 'string')?(marginRight): theme.spacing(marginRight))};
    padding: ${({padding, theme}) => padding && ((typeof padding === 'string')?(padding): theme.spacing(padding))};
    padding-top: ${({paddingTop, theme}) => paddingTop && ((typeof paddingTop === 'string')?(paddingTop): theme.spacing(paddingTop))};
    padding-bottom: ${({paddingBottom, theme}) => paddingBottom && ((typeof paddingBottom === 'string')?(paddingBottom): theme.spacing(paddingBottom))};
    padding-left: ${({paddingLeft, theme}) => paddingLeft && ((typeof paddingLeft === 'string')?(paddingLeft): theme.spacing(paddingLeft))};
    padding-right: ${({paddingRight, theme}) => paddingRight && ((typeof paddingRight === 'string')?(paddingRight): theme.spacing(paddingRight))};
`;

export default TDividerStyled;