import { styled } from '@mui/material';
import TBox from 'components/box';

const TNavItemStyled = styled(TBox)<{ active: boolean }>`
  ${({ active, theme }) => {
    if (active) {
      return `
               border-bottom: 2px solid ${theme.palette.primary.main};
            `;
    }
  }};
  &:hover {
    & > .MuiBox-root {
      display: block;
    }
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.palette.secondary.main};
    transition: border-bottom 0.2s ease-in-out;
  }
`;

const TNavItemChildrenStyled = styled(TBox)`
  display: none;
  width: max-content;
  padding: ${({ theme }) => theme.spacing(0.25)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const TNavItemChildrenVeriticalStyled = styled(TBox)`
  display: none;
  width: max-content;
  padding: ${({ theme }) => theme.spacing(0.25)};
  padding-left: ${({ theme }) => theme.spacing(0.25)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;

export { TNavItemStyled, TNavItemChildrenStyled, TNavItemChildrenVeriticalStyled };
