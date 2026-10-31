import { withBase } from '../utils/url';

// Yayınlanan diller. Ana dil İngilizce ve kök adreste ("/") yayınlanır.
// Dil adları her zaman kendi dillerinde (endonym) gösterilir.
export const locales = [
  { code: 'en', name: 'English', short: 'EN', ogLocale: 'en_US' },
  { code: 'fr', name: 'Français', short: 'FR', ogLocale: 'fr_FR' },
  { code: 'de', name: 'Deutsch', short: 'DE', ogLocale: 'de_DE' },
  { code: 'it', name: 'Italiano', short: 'IT', ogLocale: 'it_IT' },
] as const;

export type Locale = (typeof locales)[number]['code'];

export const defaultLocale: Locale = 'en';

export const localeInfo = (code: Locale) => locales.find((locale) => locale.code === code)!;

// Base yolu dahil, ilgili dilin ana sayfa adresi: "/", "/fr/", "/de/", "/it/".
export const localePath = (code: Locale) => withBase(code === defaultLocale ? '/' : `/${code}/`);
