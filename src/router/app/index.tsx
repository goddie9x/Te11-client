import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import HomeRouter from './home';
import TestRouter from './test';

const TAppRouter = () => {
  return (
    <Router>
      <Switch>
        <TestRouter />
        <HomeRouter />
      </Switch>
    </Router>
  );
};

export default TAppRouter;
