import { styled } from '@mui/material';

import TBox from 'components/box';
import TDivider from 'components/divider';

export const TCotWrapper = styled(TBox)`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.paper};
  max-width: 20vw;
  max-height: 60vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 3px;
    background-color: #d6dee1;
    border-radius: 20px;
    border: px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0px 0px 6px 0px #f9f9fa;
  .MuiBox-root > ul {
    border-left: 2px solid ${({ theme }) => theme.palette.text.primary};
  }
  ul {
    overflow-x: hidden;
    overflow-y: auto;
    overflow-wrap: break-word;
    list-style: none;
    padding-inline-start: ${({ theme }) => theme.spacing(1)};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.palette.text.primary};
      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;
export const TDividerStyled = styled(TDivider)`
  height: ${({ theme }) => theme.spacing(0.3)};
  background: linear-gradient(
    to right,
    transparent 0,
    var(--ghost-accent-color, #7450f7) 12%,
    #f77a3b 70%,
    transparent 100%
  );
`;
export const TViewPostContentWrapper = styled(TBox)`
  padding-left: ${({ theme }) => theme.spacing(10)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme }) => theme.spacing(5)};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`;

const TViewPostWrapper = styled(TBox)`
  color: ${({ theme }) => theme.palette.text.primary};
  a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  img {
    max-width: 100% !important;
  }
`;

export default TViewPostWrapper;
