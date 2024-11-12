import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng: "en", //default lng
  fallbackLng: "en", //fallback lng when a key has no translation

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
