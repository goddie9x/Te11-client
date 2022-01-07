import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import HomeRouter from 'router/app/home';
import TestRouter from 'router/app/test';

const TAuthRouter = () => {
  return (
    <Router>
      <Switch>
        <HomeRouter />
        <TestRouter />
      </Switch>
    </Router>
  );
};

export default TAuthRouter;
