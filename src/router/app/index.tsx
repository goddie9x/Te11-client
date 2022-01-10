import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import TLayout from 'container/layout';
import THome from 'pages/home';

import TestRouter from './test';

const TAppRouter = () => {
  return (
    <Router>
      <Switch>
        <TLayout>
          <Route path="/" exact component={THome} />
          <TestRouter />
          <Redirect to="/" />
        </TLayout>
      </Switch>
    </Router>
  );
};

export default TAppRouter;
