import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        </TLayout>
      </Switch>
    </Router>
  );
};

export default TAppRouter;
