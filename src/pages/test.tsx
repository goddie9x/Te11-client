import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';

import TBreadcrumbs from 'components/breadcrumbs';
import TButton from 'components/button';
import TIconButton from 'components/iconButton';
import { setDarkMode } from 'store/slices/common';
import TSwitch from 'components/switch';
import TCard from 'components/card';
import TList, { TListItem } from 'components/list';
import TImage from 'components/image';
import TTypography from 'components/typography';
import TLinearProgress from 'components/progress';
import TLoading from 'components/loading';
import TBox from 'components/box';
import TScrollProgress from 'components/scrollProgress';
import TScrollToTop from 'components/scrollToTop';
import TSlider from 'components/slider';
import TEditor from 'components/CKEditor';

const Test = () => {
  const dataTest = [
    { href: '/', label: 'Test' },
    { href: '/news', label: 'news' },
  ];

  const dataTest2 = [
    { href: 'https://doshopvn.com/wp-content/uploads/2020/12/Karen-Kaede-768x1149.jpg', label: 'Karen Kaede' },
    {
      href: 'https://doshopvn.com/wp-content/uploads/2020/12/top-dien-vien-jav-tre-nhat-yua-mikami.jpg',
      label: 'Mikami Yua',
    },
    { href: 'https://doshopvn.com/wp-content/uploads/2020/12/Karen-Kaede-768x1149.jpg', label: 'Karen Kaede' },
    {
      href: 'https://doshopvn.com/wp-content/uploads/2020/12/top-dien-vien-jav-tre-nhat-yua-mikami.jpg',
      label: 'Mikami Yua',
    },
    { href: 'https://doshopvn.com/wp-content/uploads/2020/12/Karen-Kaede-768x1149.jpg', label: 'Karen Kaede' },
    {
      href: 'https://doshopvn.com/wp-content/uploads/2020/12/top-dien-vien-jav-tre-nhat-yua-mikami.jpg',
      label: 'Mikami Yua',
    },
  ];

  const dispatch = useDispatch();

  const isDarkMode = useSelector((state: RootState) => state.common.isDarkMode);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const tempProgress = Math.floor(Math.random() * 100);
      setProgress(tempProgress);
    }, 400);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <TBox display="flex" position="relative" flexDirection="column" alignItems="center" width="100%">
      <TScrollProgress height={10} position="fixed" display="block" zIndex={69} />
      <TBreadcrumbs separator="/" items={dataTest} margin={1} />
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
      <TCard width={300} height={200} margin={1}>
        <TIconButton width={4} height={4} aria-label="add" shape="round">
          <AddIcon />
        </TIconButton>
        <TSwitch darkmode checked={isDarkMode} onChange={() => dispatch(setDarkMode(!isDarkMode))} />
      </TCard>
      <TList margin={1}>
        {dataTest2.map((item, index) => (
          <TListItem key={index}>
            <TImage src={item.href} width={300} height={300} />
            <TTypography variant="h3" display="inline-block">
              {item.label}
            </TTypography>
          </TListItem>
        ))}
      </TList>
      <TTypography variant="h3" display="inline-block" color="primary" margin={1}>
        Hô hồ
      </TTypography>
      <TLinearProgress showPercentage fontSize={15} width={200} height={30} padding={1} value={progress} margin={10} />
      <ReCAPTCHA
        sitekey="6LePBPwdAAAAALYlbbHOE4ylPkDLnhY05AMn5UIl"
        onChange={() => {
          alert('ok bạn không phải là robot');
        }}
      />
      <TLoading margin={1} height={30} padding={0.5} />
      <TScrollToTop bottom={3} right={3} zIndex={9999} />
      <TSlider
        width="100%"
        items={dataTest2}
        renderItem={(item) => {
          return (
            <TCard marginBottom={5}>
              <TImage src={item.href} height={300} width="100%" />
              <TTypography variant="h3">{item.label}</TTypography>
            </TCard>
          );
        }}
      />
      <TSlider
        direction="vertical"
        height={1200}
        width="33.333%"
        navigation={false}
        items={dataTest2}
        breakpoints={undefined}
        renderItem={(item) => {
          return (
            <TCard marginBottom={5} height="100%" width="100%" padding={0.5}>
              <TImage src={item.href} height={180} width="100%" />
              <TTypography variant="h5">{item.label}</TTypography>
            </TCard>
          );
        }}
      />
      <TEditor width={800} height={200} margin={4}/>
    </TBox>
  );
};

export default Test;
