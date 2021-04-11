import { useRouter } from "next/router";

import { getTranslatedMessages } from "./getTranslatedMessages";

export const SupportedLanguages = [
  {
    name: "English",
    link: "/en",
    locale: "en"
  },
  {
    name: "Spanish",
    link: "/es",
    locale: "es"
  }
];

function getLanguageFromLocale(locale: string = "en"): string {
  const language = SupportedLanguages.find(lang => lang.locale === locale);
  if (!language) {
    throw new Error(
      `Supported language could not be found based on locale ${locale}`
    );
  }
  return language.name;
}

export function useLanguage(): {
  language: string;
  locale: string;
  translations: any;
} {
  const router = useRouter();
  const { locale = "en" } = router;
  const translations = getTranslatedMessages(locale);
  return { language: getLanguageFromLocale(locale), translations, locale };
}
