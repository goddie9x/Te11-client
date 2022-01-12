import React from 'react';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import TBox from 'components/box';
import TTypography from 'components/typography';
import TGrid from 'components/grid';
import TIconButton from 'components/iconButton';
import TLink from 'components/link';
import { TFooterHeadStyled, TFooterMainStyled } from './footer.styled';
import Logo from 'assets/images/T_logo.png';
import TImage from 'components/image';
import TListColumnGrid from 'components/listColumnGrid';

const TFooter = () => {
  const { t } = useTranslation();

  const socicalsUrl = {
    facebook: 'https://www.facebook.com/goddie9x/',
    instagram: 'https://www.instagram.com/goddie9x/',
    twitter: 'https://twitter.com/goddie9x',
    github: 'https://github.com/goddie9x/',
    linkedin: 'https://www.linkedin.com/in/ho%C3%A0ng-minh-t%C3%A2m-209236212/',
    google: 'mailto:hoangminhtam7991@gmail.com',
  };

  const footerGridColumnData = [
    {
      title: t('about'),
      column: [
        { label: t('about'), href: '/about' },
        { label: t('contact'), href: '/contact' },
      ],
    },
    {
      title: t('about'),
      column: [
        { label: t('about'), href: '/about' },
        { label: t('contact'), href: '/contact' },
      ],
    },
    {
      title: t('about'),
      column: [
        { label: t('about'), href: '/about' },
        { label: t('contact'), href: '/contact' },
      ],
    },
  ];

  return (
    <TBox height="max-content">
      <TFooterHeadStyled paddingLeft={3.25} paddingRight={3.25} container padding={1} alignItems="center">
        <TGrid item xs={12} md={6}>
          <TTypography variant="h5">{t('get_connected_with_me_on_social_networks')}</TTypography>
        </TGrid>
        <TGrid item xs={12} md={6}>
          <TGrid container lineHeight={3}>
            <TGrid item md={2} xs={4}>
              <TIconButton width={3} height={3} background="#38262647">
                <TLink href={socicalsUrl.facebook}>
                  <FacebookIcon />
                </TLink>
              </TIconButton>
            </TGrid>
            <TGrid item md={2} xs={4}>
              <TIconButton width={3} height={3} background="#38262647">
                <TLink href={socicalsUrl.twitter}>
                  <TwitterIcon />
                </TLink>
              </TIconButton>
            </TGrid>
            <TGrid item md={2} xs={4}>
              <TIconButton width={3} height={3} background="#38262647">
                <TLink href={socicalsUrl.google}>
                  <GoogleIcon />
                </TLink>
              </TIconButton>
            </TGrid>
            <TGrid item md={2} xs={4}>
              <TIconButton width={3} height={3} background="#38262647">
                <TLink href={socicalsUrl.instagram}>
                  <InstagramIcon />
                </TLink>
              </TIconButton>
            </TGrid>
            <TGrid item md={2} xs={4}>
              <TIconButton width={3} height={3} background="#38262647">
                <TLink href={socicalsUrl.linkedin}>
                  <LinkedInIcon />
                </TLink>
              </TIconButton>
            </TGrid>
            <TGrid item md={2} xs={4}>
              <TIconButton width={3} height={3} background="#38262647">
                <TLink href={socicalsUrl.github}>
                  <GitHubIcon />
                </TLink>
              </TIconButton>
            </TGrid>
          </TGrid>
        </TGrid>
      </TFooterHeadStyled>
      <TFooterMainStyled padding="40px 26px" container alignItems="center">
        <TGrid item xs={12} md={6} textAlign="center">
          <TImage src={Logo} borderRadius={50} height={75} marginBottom={10} />
          <TTypography variant="h5" marginBottom={4}>{t('main_quote')}</TTypography>
        </TGrid>
        <TGrid item xs={12} md={6}>
          <TListColumnGrid data={footerGridColumnData} />
        </TGrid>
      </TFooterMainStyled>
      <TBox height={50} paddingLeft={3.25} lineHeight={50} paddingRight={3.25} background="#38262647">
        <TTypography variant="h6" textAlign="center" lineHeight={2.3} color="textSecondary">
          {t('copyright')}
        </TTypography>
      </TBox>
    </TBox>
  );
};

export default TFooter;
