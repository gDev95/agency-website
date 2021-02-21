import enTranslations from "../locales/en.json";
import esTranslations from "../locales/es.json";

export function getTranslatedMessages(language: string = "en") {
  if (language === "es") {
    return esTranslations;
  }

  return enTranslations;
}
