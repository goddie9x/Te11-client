import React from 'react';
import { useTranslation } from 'react-i18next';

import TBox from 'components/box';
import TBreadcrumbs from 'components/breadcrumbs';
import TCard from 'components/card';
import TImage from 'components/image';
import TTypography from 'components/typography';
import TGridCard from 'container/gridCard';

const Test2 = () => {
  const dataTest = [
    { href: '/', label: 'Home' },
    { href: '/test', label: 'test' },
    { href: '/test2', label: 'test2' },
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

  const { t } = useTranslation();

  return (
    <TBox>
      <TBreadcrumbs separator="/" items={dataTest} margin={1} />
      <TGridCard
        title="Test"
        subtitle="Test sub"
        data={dataTest2}
        renderItem={(item) => {
          return (
            <TCard marginBottom={5} height="100%" width="100%" padding={0.5}>
              <TImage src={item.href} height={180} width="100%" />
              <TTypography variant="h5">{item.label}</TTypography>
            </TCard>
          );
        }}
      />
      <TBox>
        <TTypography variant="h5">{t('test')}</TTypography>
      </TBox>
    </TBox>
  );
};
export default Test2;
