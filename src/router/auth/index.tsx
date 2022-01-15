import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TLayout from 'container/layout';

import THome from 'pages/home';
import TNotFound from 'pages/error/notFound';

const TAuthRouter = () => {
  return (
    <Router>
      <TLayout>
        <Switch>
          <Route path="/" exact component={THome} />
          <Route component={TNotFound} />
        </Switch>
      </TLayout>
    </Router>
  );
};

export default TAuthRouter;
