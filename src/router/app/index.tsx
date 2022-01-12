import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TLayout from 'container/layout';
import THome from 'pages/home';

import TNotFound from 'pages/error/notFound';
import TRoutes from 'router/app/routes';

const TAppRouter = () => {
  return (
    <Router>
      <TLayout>
        <Switch>
          <Route path="/" exact component={THome} />
          {TRoutes.map(({main, ...props}, index) => <Route key={index} component={main} {...props} />)}
          <Route component={TNotFound} />
        </Switch>
      </TLayout>
    </Router>
  );
};

export default TAppRouter;
