import React from 'react';

import Test from 'pages/test/test1';
import Test2 from 'pages/test/test2';

const TRoutes = [
  { path: '/test', main:()=><Test/>, exact: true },
  { path: '/test/test2', main:()=><Test2/>, exact: true },
];

export default TRoutes;
