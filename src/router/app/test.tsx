import React from 'react';
import { Route } from 'react-router-dom';

import Test from 'pages/test/test1';
import Test2 from 'pages/test/test2';

const TestRouter = () => {
  return (
    <Route
      path="/test"
      render={({ match: { path } }) =>{
        return <>
          <Route path={path} exact component={Test} />
          <Route path={`${path}/test2`} exact component={Test2} />
          <Route path={`${path}/test3`} exact component={Test} />
        </>;
      }
      }
    />
  );
};

export default TestRouter;
