import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/eng/common.json';
import cryptoLandingEN from './locales/eng/crypto-landing.json';

const resources = {
  eng: {
      common: translationEN,
      cryptoLanding: cryptoLandingEN,
  },
};


i18n.use(initReactI18next)
.init({
  defaultLanguage: 'eng',
  // otherLanguages: ['ara'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: '/locales',
  debug: true,
  react: {
    useSuspense: false,
  },
  resources,
  // localeSubpaths: {
  //   // ara: 'ar',
  //   eng: 'en',
  // },
  interpolation: {
      escapeValue: false,
    },
});


window.I18n = i18n;