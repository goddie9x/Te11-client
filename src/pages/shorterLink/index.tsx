import React, { useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TBox from 'components/box';
import TGradientWrapper from 'components/gradientWrapper';

import { setAlert } from 'store/slices/alert';
import { useTranslation } from 'react-i18next';
import TTypography from 'components/typography';
import TCreateShorterLink from './create';
import { setHelmet } from 'store/slices/helmet';

export type TMatchParamsShorterLink = {
  id?: string;
};

const TShorterLink = ({ match }: RouteComponentProps<TMatchParamsShorterLink>) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    let isUnmounted = false;
    if (id && !isUnmounted) {
      fetch('https://te11api.herokuapp.com/dir/' + id)
        .then((res) => res.json())
        .then((data) => {
          const { longUrl } = data;
          if (longUrl) {
            window.location.href = longUrl;
          }
          dispatch(setAlert({ type: 'error', title: t('error'), message: t('error_fetch_data') }));
          history.push('/dir');
        })
        .catch(() => {
          dispatch(setAlert({ type: 'error', title: t('error'), message: t('error_fetch_data') }));
          history.push('/dir');
        });
    }
    dispatch(setHelmet({ title: t(id ? 'short_link' : 'generate_short_link') }));
    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <TBox>
      <TGradientWrapper padding={3} textalign="center" height={200} borderradius={5}>
        <TTypography variant="h1" textalign="center">
          {t('short_link')}
        </TTypography>
      </TGradientWrapper>
      {id ? <TTypography>{t('loading')}</TTypography> : <TCreateShorterLink />}
    </TBox>
  );
};

export default TShorterLink;
