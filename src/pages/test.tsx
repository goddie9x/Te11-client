import React from 'react';

import TBreadcrumbs from 'components/breadcrumbs';
import TButton from 'components/button';
import AddIcon from '@mui/icons-material/Add';
import TIconButton from 'components/iconButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { setDarkMode } from 'store/slices/common';
import TSwitch from 'components/switch';
import TCard from 'components/card';
import TList, { TListItem } from 'components/list';
import TImage from 'components/image';
import TTypography from 'components/typography';
import { Box } from '@mui/material';

const Test = () => {
  const dataTest = [
    { href: '/', label: 'Test' },
    { href: '/news', label: 'news' },
  ];

  const dispatch = useDispatch();

  const isDarkMode = useSelector((state: RootState) => state.common.isDarkMode);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TBreadcrumbs separator="/" items={dataTest} margin={1}/>
      <TButton
        variant="contained"
        shape="curved"
        width={50}
        height={10}
        margin={1}
        startIcon={<TBreadcrumbs separator="/" items={dataTest} />}
      >
        Test
      </TButton>
      <TCard width={300} height={200}  margin={1}>
        <TIconButton width={4} height={4} aria-label="add" shape="round">
          <AddIcon />
        </TIconButton>
        <TSwitch darkmode checked={isDarkMode} onChange={() => dispatch(setDarkMode(!isDarkMode))} />
      </TCard>
      <TList  margin={1}>
        {dataTest.map((item, index) => <TListItem key={index}>
          <TImage src={item.href}/>
          <TTypography variant="h3"  display="inline-block">{item.label}</TTypography>
          </TListItem> )}
      </TList>
      <TTypography variant="h3"  display="inline-block" margin={1}>Hô hồ</TTypography>
    </Box>
  );
};

export default Test;
