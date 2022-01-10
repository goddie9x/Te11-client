import React from 'react';

import TBreadcrumbs from 'components/breadcrumbs';

const THome = ()=>{
   const dataTest = [{href:'/', label:'Home'}, {href:'/test', label:'test'}, {href:'/test2', label: 'test2'}];

   return <TBreadcrumbs separator="/" items={dataTest}/>;
};

export default THome;