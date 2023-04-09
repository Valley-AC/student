import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../i18n/locale/en.json"
import translationAR from "../i18n/locale/ar.json"
import translationFR from "../i18n/locale/fr.json"
// import LanguageDetector from "i18next"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation:translationEN
  },
  ar: {
    translation:translationAR
  },
fr: {
    translation:translationFR
  }
};

i18n

  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react : {
useSuspense:false
    }
  });


  export default i18n;