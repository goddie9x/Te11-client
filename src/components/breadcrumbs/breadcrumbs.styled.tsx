import { Breadcrumbs, styled } from '@mui/material';

const TBreadcrumbsStyled = styled(Breadcrumbs)<{
  width?: number | string;
  minwidth?: number;
  height?: number | string;
  minHeight?: number;
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
  width: ${({ width, theme }) => width && ((typeof width === 'string')?(width): theme.spacing(width))};
  height: ${({ height, theme }) => height&&((typeof height=== 'string')?(height): theme.spacing(height))};
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
  min-width: ${({ minwidth, theme }) => minwidth && theme.spacing(minwidth)};
  min-height: ${({ minHeight, theme }) => minHeight && theme.spacing(minHeight)};
`;

export default TBreadcrumbsStyled;
