import React from 'react';
import { Route } from 'react-router-dom';
import Test from 'pages/test';

const TestRouter = () => {
  return <Route 
  path="/test" 
  render={({ match: { path } }) => <Route path={path} component={Test}  />}
  />;
};

export default TestRouter;