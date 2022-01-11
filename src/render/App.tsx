import React, { useMemo } from 'react';

import { ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';

import TRouter from 'router';
import TParticles from 'components/particles';

import { RootState } from 'store';
import { setDarkMode, setLanguage } from 'store/slices/common';

import { Language } from 'constants/enum/language';

function App() {
  const storedDarkMode = localStorage.getItem('isDarkMode');
  const storedLanguage = localStorage.getItem('language');

  const dispatch = useDispatch();
  if(storedDarkMode ==="true"){
    dispatch(setDarkMode(true));
  }
  if(storedLanguage ===Language.VI_VN){
    dispatch(setLanguage(Language.VI_VN));
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
