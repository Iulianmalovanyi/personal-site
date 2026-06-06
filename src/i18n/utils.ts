import { ui, defaultLang, type UiLang, type UiKey } from './ui';

/** Extract the locale from a URL pathname (e.g. /uk/about -> 'uk'). */
export function getLangFromUrl(url: URL): UiLang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as UiLang;
  return defaultLang;
}

/** Return a translation function bound to a locale, falling back to English. */
export function useTranslations(lang: UiLang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
