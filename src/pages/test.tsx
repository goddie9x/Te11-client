import React from 'react';

import TBreadcrumbs from 'components/breadcrumps';
import TButton from 'components/button';
import AddIcon from '@mui/icons-material/Add';
import TIconButton from 'components/iconButton';

const Test = () => {
  const dataTest = [
    { href: '/', label: 'Test' },
    { href: '/news', label: 'news' },
  ];

  return (
    <>
      <TBreadcrumbs separator="/" items={dataTest} />
      <TButton 
        variant="contained"
        width={50}
        height={10}
        startIcon={<TBreadcrumbs separator="/" items={dataTest} />}>
        Test
      </TButton>
      <TIconButton width={4} height={4} color="primary" aria-label="add">
        <AddIcon />
      </TIconButton>
    </>
  );
};

export default Test;
