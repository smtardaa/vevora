# VEVORA — Görüntüleme ve yayın

> Bu dosya Aşama 2'de (2026-11-01) oluşturuldu.

## Dil adresleri
Adresler yayın köküne göredir. GitHub Pages proje sitesinde hepsinin önüne depo yolu eklenir (ör. `/vevora/fr/`).

| Dil | Adres | Not |
|---|---|---|
| English | `/` | Ana dil; `x-default` bu adresi gösterir |
| Français | `/fr/` | |
| Deutsch | `/de/` | |
| Italiano | `/it/` | |

- Türkçe sürüm bu aşamada yayınlanmıyor.
- Dil yalnızca URL'den belirlenir. Tarayıcı diline göre yönlendirme ve kayıtlı tercih yok.
- Bölüm hash'leri tüm dillerde aynıdır: `#top`, `#work`, `#packages`, `#about`, `#contact`. Dil değiştirirken geçerli bir hash korunur.
- Sitemap: `/sitemap.xml` (yalnızca dört ana sayfa).

## Yerelde çalıştırma
```bash
npm install
npm run dev        # geliştirme sunucusu: http://localhost:4321 (port doluysa Astro sonrakini seçer)
npm run build      # production çıktısı: dist/
npm run preview    # dist/ klasörünü http://localhost:4321 adresinde sunar
```

- Aynı klasörde ikinci bir `astro preview` başlatılamaz ("Another astro preview server is already running").
- Bu durumda `dist/` klasörü herhangi bir statik sunucuyla açılabilir. Örnek: `python -m http.server 4330 --directory dist` ve ardından `http://localhost:4330/fr/`.
- Yerel build'de canonical ve hreflang adresleri varsayılan olarak `http://localhost:4321` ile başlar. Bu beklenen bir durumdur.

## Yayın yapılandırması (GitHub Pages)
Yayın adresi kodda sabit değildir; build sırasında iki ortam değişkeninden okunur (`astro.config.mjs`):

| Değişken | Anlamı | Örnek |
|---|---|---|
| `SITE_URL` | Yalnızca köken (yol içermez). Canonical, hreflang, `og:url` ve sitemap için kullanılır | `https://kullanici.github.io` |
| `BASE_PATH` | Alt yol. Kökte yayınlanıyorsa boş bırakılır veya `/` yazılır | `/depo-adi` |

Tüm site içi adresler `src/utils/url.ts → withBase()` üzerinden üretilir. Base yolu hiçbir adrese iki kez eklenmez. Bu, `BASE_PATH=/vevora/` ile alınan test build'inde doğrulandı.

### Otomatik yayın: `.github/workflows/deploy.yml`
1. Depoyu GitHub'a gönderin (varsayılan dal `main`).
2. **Settings → Pages → Build and deployment → Source: "GitHub Actions"** seçin.
3. `main` dalına her push'ta iş akışı şu adımları çalıştırır:
   - `actions/configure-pages@v5` ile Pages adresini (`origin`) ve alt yolu (`base_path`) alır.
   - `SITE_URL` ve `BASE_PATH` değişkenleriyle `npm run build` çalıştırır.
   - `dist/` klasörünü yükleyip yayınlar.
4. Elle tetiklemek için Actions sekmesinde **Run workflow** düğmesi de kullanılabilir.

Bu sayede kullanıcı sitesi (`kullanici.github.io`), proje sitesi (`kullanici.github.io/depo-adi`) ve özel alan adı için base yolu ek ayar gerektirmeden doğru gelir.

### Elle build (başka bir sunucu için)
```bash
SITE_URL=https://alanadiniz.com BASE_PATH=/ npm run build
```

- Windows Git Bash'te `/alt-yol/` gibi değerler Windows yoluna çevrilebilir.
- Bunu önlemek için komutun başına `MSYS_NO_PATHCONV=1` ekleyin veya komutu PowerShell'de çalıştırın.

## Henüz yayında olmayanlar
- Alt sayfalar (Çalışmalarımız, Paketlerimiz, Hakkımızda, Projenizi anlatın, SSS, İletişim) yok. Sitemap'e eklenmedi.
- SSS ve "Tüm çalışmalarımızı görüntüleyin" pasif durumda ve "Soon" etiketiyle gösteriliyor.
- İletişim kanallarının tamamı, gerçek bilgiler gelene kadar pasif.
