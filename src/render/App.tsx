import React from 'react';

import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';

import TRouter from 'router';
import TParticles from 'components/particles';
import {RootState} from 'store';

function App() {
  const isDarkMode = useSelector((state: RootState) => state.common.isDarkMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode?'dark':'light',
        },
      }),
    [isDarkMode],
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TParticles />
        <TRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
