import React from 'react';

import TAppRouter from './app';
import TAuthRouter from './auth';

const TRouter = () => {
  const isLoggedIn = true;
  return (
      isLoggedIn ? <TAppRouter /> : <TAuthRouter />
  );
};

export default TRouter;
