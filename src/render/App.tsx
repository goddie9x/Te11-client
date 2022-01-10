import React, { useMemo } from 'react';

import { ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';

import TRouter from 'router';
import TParticles from 'components/particles';

import { RootState } from 'store';
import { setDarkMode } from 'store/slices/common';

function App() {
  const storedDarkMode = localStorage.getItem('isDarkMode');

  const dispatch = useDispatch();
  if(storedDarkMode ==="true"){
    dispatch(setDarkMode(true));
  }
  if(storedDarkMode ==="false"){
    dispatch(setDarkMode(false));
  }
  
  const isDarkMode = useSelector((state: RootState) => state.common.isDarkMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
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
