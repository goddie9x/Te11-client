import { createTheme } from '@mui/material/styles';

/*
 * Rules:
 *  Color HEX:
 *   - Correct: #ffffff
 *   - Incorrect: #FFF
 */

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#3a53a4',
    },
    grey: {
      50: '#e0e0e0',
      100: '#d9d9d9',
      200: '#c4c4c4',
      300: '#b3b3b3',
      400: '#acacac',
      500: '#999999',
      600: '#808080',
      700: '#666666',
      800: '#595959',
      900: '#333333',
      A100: '#fafafa',
      A200: '#f1f1f1',
      A400: '#555555',
    },
    error: {
      main: '#ff4a00',
    },
  },
  components: {},
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: {
      fontSize: '27px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '25px',
      fontWeight: 700,
      lineHeight: '30px',
    },
    h3: {
      fontSize: '22px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '22px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '16px',
    },
    subtitle2: {
      fontSize: '15px',
    },
    body1: {
      fontSize: '15px',
      lineHeight: '18px',
    },
    body2: {
      fontSize: '13px',
      lineHeight: '16px',
    },
    caption: {
      fontSize: '13px',
      lineHeight: '16px',
      color: '#595959',
    },
  },
});

export type CustomizedTheme = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomizedTheme {}
}
