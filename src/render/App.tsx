import React from 'react';
import './App.css';

import TRouter from 'router';
import TParticles from 'components/particles';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme';

function App() {
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
