import React, { memo, useState } from 'react';
import i18n from 'i18n';
import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

import SettingsIcon from '@mui/icons-material/Settings';

import { useDispatch } from 'react-redux';

import { Language } from 'constants/enum/language';
import { setLanguage } from 'store/slices/common';

import TSwitchDarkMode from 'components/switchDarkMode';
import TFormControl from 'components/formControl';
import TRightModal from 'components/rightModal';
import TBox from 'components/box';
import TTooltip from 'components/toolTip';
import TIconButton from 'components/iconButton';
import TTypography from 'components/typography';

const THeaderSetting = () => {
  const [lang, setLang] = React.useState<string>(i18n.language);
  const [openSetting, setOpenSetting] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const openSettingModal = () => {
    setOpenSetting(true);
  };

  const closeSettingModal = () => {
    setOpenSetting(false);
  };

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    const lang = event.target.value as Language;

    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
    setLang(lang);
  };

  return (
    <>
      <TTooltip title={t('settings')} onClick={openSettingModal}>
        <TIconButton width={6} height={6} shape="curved" aria-label="account of current user" aria-haspopup="true">
          <SettingsIcon />
        </TIconButton>
      </TTooltip>
      <TRightModal open={openSetting} onClose={closeSettingModal} title={t('settings')}>
        <>
          <TBox display="flex" height={50} alignItems="center" marginBottom={2}>
            <TTypography variant="body1" color="textPrimary">
              {t('dark_mode')}
            </TTypography>
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
        </>
      </TRightModal>
    </>
  );
};

export default memo(THeaderSetting);
