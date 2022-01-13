import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import TBox from 'components/box';
import TScrollProgress from 'components/scrollProgress';
import THeaderStyled from './header.styled';
import TNavItem from 'components/navItem';
import TImage from 'components/image';
import TLink from 'components/link';
import THeaderMenuDropdown from 'components/headerMenuDropdown';
import THeaderSetting from './headerSetting';

import Logo from 'assets/images/T_logo.png';

const THeader = () => {
  //TODO: remove this after have API
  const { t } = useTranslation();
  const pages = [
    {
      href: '/test',
      title: t('test'),
      navChildren: [
        {
          href: '/test1',
          title: t('test') + 1,
          navChildren: [
            { href: '/test3', title: t('test') + 3 },
            { href: '/test4', title: t('test') + 4 },
          ],
        },
        {
          href: '/test2',
          title: t('test') + 2,
          navChildren: [
            { href: '/test3', title: t('test') + 3 },
            { href: '/test4', title: t('test') + 4 + 'dàiiiiiiiiiiiiiiiiiiiiiiiii' },
          ],
        },
      ],
    },
  ];
  const AccountSettings = [
    { href: 'user/profile', title: t('profile') },
    { href: 'user/account', title: t('account') },
    { href: 'user/dashboard', title: t('dashboard') },
    { href: 'logout', title: t('logout') },
  ];

  return (
    <THeaderStyled position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TLink href="/">
            <TImage src={Logo} width={75} marginRight={10} borderRadius={10} />
          </TLink>
          <THeaderMenuDropdown marginRight={2} forMobile={true} menuList={pages} />
          <TBox display={{ xs: 'none', md: 'flex' }} flexGrow={1}>
            {pages.map((page, index) => (
              <TNavItem key={index} {...page} />
            ))}
          </TBox>
          <THeaderMenuDropdown
            menuProps={{ width: '250px', textAlign: 'left' }}
            marginRight={2}
            toolTip={t('account_settings')}
            IconButton={<AccountCircleIcon />}
            menuList={AccountSettings}
          />
          <THeaderSetting />
        </Toolbar>
      </Container>
      <TScrollProgress height={5} display="block" />
    </THeaderStyled>
  );
};
export default THeader;
