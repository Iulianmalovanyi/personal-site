import { ui, defaultLang, langToPath, pathToLang, type UiLang, type UiKey } from './ui';

/**
 * Extract the language CODE from a URL pathname.
 * The URL uses path segments (e.g. /ua/about); the language code is `uk`.
 * /ua/about -> 'uk'   /about -> 'en'
 */
export function getLangFromUrl(url: URL): UiLang {
  const [, maybeSeg] = url.pathname.split('/');
  return pathToLang[maybeSeg] ?? defaultLang;
}

/** Return a translation function bound to a locale, falling back to English. */
export function useTranslations(lang: UiLang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Split a URL into its language code and its *canonical* (English) path.
 * /ua/about -> { lang: 'uk', path: '/about' }
 * /about    -> { lang: 'en', path: '/about' }
 */
export function getRouteParts(url: URL): { lang: UiLang; path: string } {
  const segments = url.pathname.split('/').filter(Boolean);
  let lang: UiLang = defaultLang;
  if (segments[0] && pathToLang[segments[0]]) {
    lang = pathToLang[segments[0]];
    segments.shift();
  }
  const path = '/' + segments.join('/');
  return { lang, path };
}

/**
 * Map a canonical (English) path to its localised URL.
 * localizePath('/about', 'uk') -> '/ua/about'
 * localizePath('/', 'uk')      -> '/ua/'
 * localizePath('/about', 'en') -> '/about'
 */
export function localizePath(path: string, lang: UiLang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const seg = langToPath[lang];
  if (!seg) return clean === '' ? '/' : clean;
  return clean === '' ? `/${seg}/` : `/${seg}${clean}`;
}

/** Convenience: given the current URL, the equivalent URL in the other locale. */
export function getAlternatePath(url: URL, targetLang: UiLang): string {
  const { path } = getRouteParts(url);
  return localizePath(path, targetLang);
}

export { defaultLang };
export type { UiLang, UiKey };
