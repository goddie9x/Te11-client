import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/home';

const HomeRouter = () => {
  return <Route 
  path="/"
  render={({ match: { path } }) => <Route path={path} exact component={Home} />}
  />;
};

export default HomeRouter;
