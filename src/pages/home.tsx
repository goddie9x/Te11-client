import React from 'react';

import TBreadcrumbs from 'components/breadcrumps';

const Home = ()=>{
   const dataTest = [{href:'/', label:'Home'}, {href:'/news', label:'news'}];

   return <TBreadcrumbs separator="!" items={dataTest}/>;
};

export default Home;