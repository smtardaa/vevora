// @ts-check
import { defineConfig } from 'astro/config';

// Yayın adresi ortam değişkenlerinden okunur (alan adı uydurulmaz):
// - SITE_URL:  yalnızca köken, ör. https://kullanici.github.io  (canonical, hreflang, sitemap için)
// - BASE_PATH: alt yol, ör. /depo-adi  (GitHub Pages proje sitesi); kökte yayınlanıyorsa boş veya "/"
// GitHub Actions iş akışı (.github/workflows/deploy.yml) bu değerleri actions/configure-pages'ten alır.
// Yerelde varsayılanlar: http://localhost:4321 ve "/".
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
