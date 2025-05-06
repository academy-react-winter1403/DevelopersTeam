import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import faTranslation from "./../../../local/fa.json";
import enTranslation from "./../../../local/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fa: {
      translation: faTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: "fa", // زبان پیش‌فرض فارسی
  fallbackLng: "fa", // زبان جایگزین در صورت عدم وجود ترجمه
  interpolation: {
    escapeValue: false, // برای جلوگیری از مشکلات امنیتی
  },
});

export default i18n;
