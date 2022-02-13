import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      errors: {
        "name_error": "\"Name\" length must be at least 3 characters long",
        "display_name_error": "\"Display name\" length must be at least 3 characters long",
      },
      basic_info: {
        "heading": "Basic info",
        "subtitle": "These are basic details needed to set up your new organization.",
        "create_org": "Create organization",
        "name_help": "This is any human-readable identifier for the organization that will be used by end-users to direct them to their organization in your application. This name cannot be changed.",
        "display_name_help": "If set, this is the name that will be displayed to end-users for this organization in any interaction with them.",
        
      }
    }
  },
  
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;