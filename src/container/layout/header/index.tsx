import React from 'react';
import i18n from 'i18n';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel, Select, SelectChangeEvent } from '@mui/material';

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Language } from 'constants/enum/language';

import TIconTButton from 'components/iconButton';
import TTypography from 'components/typography';
import TBox from 'components/box';
import TSwitchDarkMode from 'components/switchDarkMode';
import TScrollProgress from 'components/scrollProgress';
import THeaderStyled from './header.styled';
import TNavItem from 'components/navItem';
import TNavItemVeritical from 'components/navItem/navItemVertical';
import { setLanguage } from 'store/slices/common';
import TFormControl from 'components/formControl';

const THeader = () => {
  //TODO: remove this after have API
  const { t } = useTranslation();
  const pages = [
    { href: '/', title: t('home') },
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
  const settings = [t('profile'), t('account'),t('dashboard'), t('logout')];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [lang, setLang] = React.useState<string>(i18n.language);

  const dispatch = useDispatch();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    const lang = event.target.value as Language;

    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
    setLang(lang);
  };

  return (
    <THeaderStyled position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TTypography variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            LOGO
          </TTypography>
          <TBox sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <TIconTButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </TIconTButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <TNavItemVeritical key={index} {...page} />
              ))}
            </Menu>
          </TBox>
          <TBox display={{ xs: 'none', md: 'flex' }} flexGrow={1}>
            {pages.map((page, index) => (
              <TNavItem key={index} {...page} />
            ))}
          </TBox>

          <TBox sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <span>
                <TIconTButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </TIconTButton>
              </span>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <TTypography textAlign="center">{setting}</TTypography>
                </MenuItem>
              ))}
            </Menu>
          </TBox>
          <TBox>
            <TSwitchDarkMode />
          </TBox>
          <TFormControl height={5}>
            <InputLabel id="select-language">{t('language')}</InputLabel>
            <Select
              labelId="select-language"
              id="select-language"
              value={lang}
              label="Language"
              onChange={handleChangeLanguage}
            >
              <MenuItem value={Language.EN_US}>English</MenuItem>
              <MenuItem value={Language.VI_VN}>Việt Nam</MenuItem>
            </Select>
          </TFormControl>
        </Toolbar>
      </Container>
      <TScrollProgress height={5} display="block" />
    </THeaderStyled>
  );
};
export default THeader;
