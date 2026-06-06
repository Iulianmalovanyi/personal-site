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

/**
 * Split a URL into its locale and its *canonical* (English) path.
 * /uk/about -> { lang: 'uk', path: '/about' }
 * /about    -> { lang: 'en', path: '/about' }
 */
export function getRouteParts(url: URL): { lang: UiLang; path: string } {
  const segments = url.pathname.split('/').filter(Boolean);
  let lang: UiLang = defaultLang;
  if (segments[0] === 'uk') {
    lang = 'uk';
    segments.shift();
  }
  const path = '/' + segments.join('/');
  return { lang, path };
}

/**
 * Map a canonical (English) path to its localised URL.
 * localizePath('/about', 'uk') -> '/uk/about'
 * localizePath('/', 'uk')      -> '/uk/'
 * localizePath('/about', 'en') -> '/about'
 */
export function localizePath(path: string, lang: UiLang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean === '' ? '/' : clean;
  return clean === '' ? '/uk/' : `/uk${clean}`;
}

/** Convenience: given the current URL, the equivalent URL in the other locale. */
export function getAlternatePath(url: URL, targetLang: UiLang): string {
  const { path } = getRouteParts(url);
  return localizePath(path, targetLang);
}

export { defaultLang };
export type { UiLang, UiKey };
