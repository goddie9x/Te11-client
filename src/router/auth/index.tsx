import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TLayout from 'container/layout';

import THome from 'pages/home';

const TAuthRouter = () => {
  return (
    <Router>
      <TLayout>
        <Switch>
          <Route path="/" exact component={THome} />
        </Switch>
      </TLayout>
    </Router>
  );
};

export default TAuthRouter;
