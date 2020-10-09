import enTranslations from "../locales/en.json";
import esTranslations from "../locales/es.json";

export function getTranslatedMessages(language: string = "en") {
	console.log(enTranslations);
	if (language === "es") {
		return esTranslations;
	}

	return enTranslations;
}
