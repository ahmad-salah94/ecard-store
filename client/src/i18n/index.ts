// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import landingPagetranslationsInEng from '../locales/en/VisitorLandingPage.json';
import landingPagetranslationsInArabic from '../locales/ar/VisitorLandingPage.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: landingPagetranslationsInEng,
    direction: 'ltr',
  },
  ar: {
    translation: landingPagetranslationsInArabic,
    direction: 'rtl',
  },
};

// Retrieve the language preference from local storage
const storedLanguage = localStorage.getItem('preferredLanguage');

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: storedLanguage || 'ar', // Use stored language or default to Arabic
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation', 'landingPage'],
    defaultNS: 'translation',
  });

export default i18n;
