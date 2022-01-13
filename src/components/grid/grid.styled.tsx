import { Grid, GridProps, styled } from "@mui/material";

export type TGridProps = GridProps & {
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  padding?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  background?: string;
  lineheight?: number | string;
  textalign?: "left" | "center" | "right";
};

const TGridStyled = styled(Grid)<{
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  padding?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  background?: string;
  lineheight?: number | string;
  textalign?: "left" | "center" | "right";
}>`
    width: ${({ width, theme})=> width && ((typeof width === 'string')?(width): theme.spacing(width))};
    height: ${({ height, theme})=> height && ((typeof height === 'string')?(height): theme.spacing(height))};
    margin: ${({ margin, theme})=> margin && ((typeof margin === 'string')?(margin): theme.spacing(margin))};
    padding: ${({ padding, theme})=> padding && ((typeof padding === 'string')?(padding): theme.spacing(padding))};
    margin-top: ${({ marginTop, theme})=> marginTop && ((typeof marginTop === 'string')?(marginTop): theme.spacing(marginTop))};
    margin-bottom: ${({ marginBottom, theme})=> marginBottom && ((typeof marginBottom === 'string')?(marginBottom): theme.spacing(marginBottom))};
    margin-left: ${({ marginLeft, theme})=> marginLeft && ((typeof marginLeft === 'string')?(marginLeft): theme.spacing(marginLeft))};
    margin-right: ${({ marginRight, theme})=> marginRight && ((typeof marginRight === 'string')?(marginRight): theme.spacing(marginRight))};
    padding-top: ${({ paddingTop, theme})=> paddingTop && ((typeof paddingTop === 'string')?(paddingTop): theme.spacing(paddingTop))};
    padding-bottom: ${({ paddingBottom, theme})=> paddingBottom && ((typeof paddingBottom === 'string')?(paddingBottom): theme.spacing(paddingBottom))};
    padding-left: ${({ paddingLeft, theme})=> paddingLeft && ((typeof paddingLeft === 'string')?(paddingLeft): theme.spacing(paddingLeft))};
    padding-right: ${({ paddingRight, theme})=> paddingRight && ((typeof paddingRight === 'string')?(paddingRight): theme.spacing(paddingRight))};
    background: ${({ background})=> background && background};
    line-height: ${({ lineheight, theme})=> lineheight && ((typeof lineheight === 'string')?(lineheight): theme.spacing(lineheight))};
    text-align: ${({ textalign})=> textalign && textalign};
    `;

export default TGridStyled;