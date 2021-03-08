import { useRouter } from "next/router";

import { getTranslatedMessages } from "./getTranslatedMessages";

export function useLanguage(): { language: string; translations: any } {
  const router = useRouter();
  const { locale} = router;
  const translations = getTranslatedMessages(locale);
  return { language: "en", translations };
}
