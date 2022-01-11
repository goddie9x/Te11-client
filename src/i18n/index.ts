import { Language } from 'constants/enum/language';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './locales';

i18n.use(initReactI18next).init({
  resources,
  lng: Language.EN_US,
  fallbackLng: Language.EN_US,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
