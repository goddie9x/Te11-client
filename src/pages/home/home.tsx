import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TPost from 'pages/posts';
import TTypography from 'components/typography';
import { useTranslation } from 'react-i18next';
import TGradientWrapper from 'components/gradientWrapper';
import TBox from 'components/box';
import TImage from 'components/image';

import { setHelmet } from 'store/slices/helmet';

const THome = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setHelmet({title: t('home')}));
  },[]);

  return (
    <TBox>
      <TGradientWrapper padding={6} textalign="center" height={400} borderradius={5}>
        <TImage borderradius={30} 
        src="/images/ai_nghe_fb.png" />
      </TGradientWrapper>
      <TPost
        titleRender={
          <TTypography margintop={3} marginbottom={3} variant="h2" textalign="center">
            {t('posts')}
          </TTypography>
        }
        loadMore
      />
    </TBox>
  );
};

export default THome;
