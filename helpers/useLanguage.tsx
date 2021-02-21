import { useRouter } from "next/router";

import { getTranslatedMessages } from "./getTranslatedMessages";

export function useLanguage(): { language: string; translations: any } {
  const router = useRouter();
  const language = router.query.language;
  let translations;

  if (typeof language === "string") {
    translations = getTranslatedMessages(language);
    return { language, translations };
  }

  translations = getTranslatedMessages("en");
  return { language: "en", translations };
}
