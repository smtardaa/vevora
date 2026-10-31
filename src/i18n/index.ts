import { en } from './en';
import { fr } from './fr';
import { de } from './de';
import { it } from './it';
import { defaultLocale, type Locale } from './locales';

// Yayınlanan dillerin sözlükleri. tr.ts kaynak metin olarak durur ancak bu aşamada yayınlanmaz.
const dictionaries = { en, fr, de, it } satisfies Record<Locale, unknown>;

export const getDictionary = (locale: Locale = defaultLocale) => dictionaries[locale];

export { locales, defaultLocale, localePath, localeInfo, type Locale } from './locales';
