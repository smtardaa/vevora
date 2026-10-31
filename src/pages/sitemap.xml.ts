// Statik sitemap: yalnızca yayında olan dört ana sayfa ve karşılıklı dil alternatifleri.
// Henüz hazırlanmamış alt sayfalar bilerek eklenmez.
import type { APIRoute } from 'astro';
import { locales, localePath, defaultLocale } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const absolute = (path: string) => new URL(path, site).href;
  const alternates = [
    ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${absolute(localePath(l.code))}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(localePath(defaultLocale))}"/>`,
  ].join('\n');

  const urls = locales
    .map((l) => `  <url>\n    <loc>${absolute(localePath(l.code))}</loc>\n${alternates}\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
