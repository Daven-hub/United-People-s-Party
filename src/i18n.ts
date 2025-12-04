import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./components/locales/en/translations.json";
import fr from "./components/locales/fr/translations.json";

// Typage des ressources
const resources: Resource = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Langue par défaut au premier chargement
        fallbackLng: "en", // Si une traduction manque
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "querystring", "cookie", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });

export default i18n;
