import React, { memo } from 'react';
import { Toolbar, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

import TBox from 'components/box';
import TScrollProgress from 'components/scrollProgress';
import THeaderStyled from './header.styled';
import TNavItem from 'components/navItem';
import TImage from 'components/image';
import TLink from 'components/link';
import THeaderMenuDropdown from 'components/headerMenuDropdown';
import THeaderSetting from './headerSetting';
import THeaderMenuRenderOption from 'components/headerMenuDropdown/headerMenuRenderOption';
import TLoginModal from 'container/modal/login';
import TRegisterModal from 'container/modal/register';
import TButton from 'components/button';

import Logo from 'assets/images/T_logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { openLoginModal, openRegisterModal, logout } from 'store/slices/auth';
import { setAlert } from 'store/slices/alert';

const THeader = () => {
  //TODO: remove this after have API
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
    {
      href: '/posts',
      title: t('posts'),
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
    {
      href: 'logout',
      title: t('logout'),
      onClick: () => {
        dispatch(logout());
        dispatch(
          setAlert({
            title: t('you_are_not_logged_in'),
            message: t('you_should_login_to_get_more_infomation'),
            type: 'warning',
          }),
        );
      },
    },
  ];
  const loginOption = [
    {
      title: t('login'),
      onClick: () => {
        dispatch(openLoginModal(true));
      },
    },
    {
      title: t('register'),
      onClick: () => {
        dispatch(openRegisterModal(true));
      },
    },
  ];
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <THeaderStyled position="fixed" zindex={1300}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TLink href="/">
            <TImage src={Logo} width={75} marginRight={10} borderRadius={10} />
          </TLink>
          <THeaderMenuDropdown marginLeft={2} forMobile={true} menuList={pages} />
          <TBox display={{ xs: 'none', md: 'flex' }} flexGrow={1}>
            {pages.map((page, index) => (
              <TNavItem key={index} {...page} />
            ))}
          </TBox>
          {isLoggedIn && (
            <THeaderMenuDropdown
              menuProps={{ width: '250px', textalign: 'left' }}
              marginLeft={2}
              marginRight={2}
              toolTip={t('account_settings')}
              IconButton={<AccountCircleIcon />}
              menuList={AccountSettings}
            />
          )}
          <THeaderSetting marginLeft={2} />
          {!isLoggedIn && (
            <THeaderMenuRenderOption
              marginLeft={2}
              menuList={loginOption}
              toolTip={t('login')}
              IconButton={
                <TBox width="max-content">
                  <TBox display={{ xs: 'block', md: 'none' }}>
                    <LoginIcon />
                  </TBox>
                  <TBox padding={1} display={{ xs: 'none', md: 'block' }}>
                    {t('login') + '/' + t('register')}
                  </TBox>
                </TBox>
              }
              renderMenuItem={(title, onClick, index) => {
                return (
                  <TBox key={index}>
                    <TButton
                      minwidth={22}
                      onClick={() => {
                        onClick && onClick();
                      }}
                    >
                      {title}
                    </TButton>
                  </TBox>
                );
              }}
            />
          )}
        </Toolbar>
      </Container>
      <TScrollProgress height={5} display="block" />
      <TLoginModal />
      <TRegisterModal />
    </THeaderStyled>
  );
};
export default memo(THeader);
