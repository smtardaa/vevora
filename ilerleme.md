# VEVORA — İlerleme notları

## Aşama 2.1: Gökyüzü mavisi geri alındı (2026-11-01)

Kullanıcının isteğiyle gökyüzü mavisi vurgu kaldırıldı. Vurgu rengi, Aşama 1'deki gibi yeniden marka yeşili `#2E4540`. Aşama 2'nin diğer kararları (tam genişlik bölümler, beyaz header, dört dil, dil seçici) aynen geçerli. Aşağıdaki Aşama 2 notlarında mavi rengi anlatan maddeler (7. madde ve kural tablosundaki vurgu satırı) artık geçerli değil.

- **Değişen dosya:** yalnızca `src/styles/global.css`.
  - `--c-sky*` değişkenleri `--c-accent*` olarak yeniden adlandırıldı. Vurgu artık tek yerden değiştirilebiliyor:
    - `--c-accent`: `#2E4540`
    - `--c-accent-hover`: `#22342F`
    - `--c-accent-surface`: `rgb(46 69 64 / 0.1)`
    - `--c-accent-ink`: `#2E4540`
    - `--c-accent-on-dark`: beyaz
- **Butonlar:**
  - Birincil butonlar (hero ve paket butonları) yeşil dolgulu ve beyaz yazılı.
  - İkincil hero butonları yeşil çerçeveli ve yeşil yazılı; hover'da `#EEEEEE` zemin.
- **Bağlantılar ve odak:** Metin bağlantıları, menü hover ve focus halkası açık zeminde yeşil. Koyu zeminde (iletişim, footer) focus ve hover rengi beyaz.
- **Küçük vurgular:**
  - "Konsept proje" etiketi, paket madde işaretleri, slider okları ve dil seçicideki seçili dil yeşil tonda.
  - Kaydırma çubuğu nötr gri.
- **Doğrulama:**
  - `npm run build` başarılı.
  - `dist/` içinde mavi renk kodu kalmadı (`#38BDF8`, `#0EA5E9`, `#E0F2FE`, `#0369A1` aramasında sonuç yok).
  - 1440 px'te hero ve paket bölümleri tarayıcıda kontrol edildi: paket butonu `rgb(46,69,64)` zemin ve beyaz yazı. Yatay taşma yok.
- **Kontrol edilmedi:** Mobil görünüm ve dört dilin her biri bu turda ayrıca açılmadı. Değişiklik yalnızca renk değişkenlerinde yapıldı, düzen değişmedi.

## Aşama 2: Tam genişlik bölümler, beyaz header, dört dil, gökyüzü mavisi (2026-11-01)

### ⚠️ Değişen (geçersiz kalan) kurallar
Bu aşamadaki brief, Aşama 1'deki ilgili kuralların yerine geçti:

| Aşama 1 kuralı | Aşama 2'deki yeni kural |
|---|---|
| Header, içerik ve footer'ı saran `.shell` kabuğu ekranın %70'i; dışı siyah | Header, her bölüm ve footer **tam genişlik** blok (normal akış, `100vw` yok). %70 sınırı yalnızca iç `.container` öğesinde (mobilde %90 kuralı aynen korunuyor) |
| Header zemini `#000000` | Header zemini `#FFFFFF`, koyu menü yazıları, menü yatay merkezde, sağda dil seçici |
| Dil seçici ve çeviri sayfası yok; görünen metinler Türkçe | Ana sayfa **EN (ana dil, `/`), FR (`/fr/`), DE (`/de/`), IT (`/it/`)** olarak statik üretiliyor. **Türkçe yayınlanmıyor**; `src/i18n/tr.ts` yalnızca kaynak metin olarak duruyor |
| Bölüm kimlikleri Türkçe (`#calismalarimiz`, `#paketlerimiz`, `#hakkimizda`, `#iletisim`) | Dilden bağımsız kimlikler: `#top`, `#work`, `#packages`, `#about`, `#contact` |
| Vurgu rengi yeşil `#2E4540` (butonlar, bağlantılar) | Vurgu rengi **gökyüzü mavisi**; `#2E4540` yalnızca yardımcı marka rengi (bölüm alt başlıkları, alıntının ikinci satırı, "Soon" rozeti) |
| Çalışmalarımız `#EEEEEE`, Paketlerimiz `#DDDDDD` | Yer değişti: Çalışmalarımız `#DDDDDD`, Paketlerimiz `#EEEEEE` (gerekçe: `#0369A1` bağlantı metni `#DDDDDD` üzerinde yalnızca 4,37:1 kontrast veriyor, `#EEEEEE` üzerinde 5,1:1) |
| Gelecekteki sayfa adresleri Türkçe (`/calismalarimiz`, `/sss` …) | Dilden bağımsız taslak adresler (`/work/`, `/packages/`, `/about/`, `/project-brief/`, `/faq/`, `/contact/`); kesinleşmedi |

Değişmeyenler: mobilde %90 içerik genişliği, `theme-color: #000000` (yeni brief'te geçmiyor, bu yüzden korundu; beyaz header ile birlikte mobil tarayıcı çubuğu siyah kalıyor), iletişim bölümü tasarımı, paket ve proje kapsamları.

### Yapılanlar
1. **Tam genişlik arka planlar:** `BaseLayout` içindeki `.shell` kaldırıldı. Ortak `.container { width: var(--content-width); margin-inline: auto; container-type: inline-size }` eklendi (`--content-width`: %70, 768 px altında %90). Bölümlerde artık yalnızca dikey padding var. Container query ve `cqi` birimleri `.section` yerine `.container` üzerinden çalışıyor.
2. **Beyaz header:** Sticky, 1 px `#EEEEEE` alt çizgi. DOM sırası: logo → menü butonu → menü → dil seçici. Geniş düzen `grid-template-columns: minmax(0,1fr) auto minmax(0,1fr)`: yan kolonlar eşit olduğundan menü logonun veya dil butonunun genişliğinden bağımsız olarak header'ın tam ortasında duruyor. Geniş/dar kararını `Header.astro` içindeki küçük satır içi betik veriyor: menünün doğal genişliği + 2 × (logo ile dil butonundan geniş olanı) + 2 × kolon aralığı kapsayıcıya sığıyorsa `data-layout="wide"`, sığmıyorsa `compact`. Bu, dile göre değişen metin uzunluklarını ölçtüğü için sabit kırılım noktası gerektirmiyor. JS yoksa dar düzen; menü ve dil listesi açık olarak görünüyor.
3. **Dil seçici** (`LanguageSwitcher.astro`, `scripts/lang-switcher.ts`): Butonda kısa kod (EN/FR/DE/IT) ve aşağı ok var. Açılan listede dillerin kendi adlarıyla gerçek `<a>` bağlantıları bulunuyor (`hreflang`, `lang` öznitelikleri). Geçerli dil `aria-current="page"`, açık mavi zemin ve onay işaretiyle belirtiliyor. `aria-expanded`/`aria-controls` kullanılıyor. Liste Escape ile kapanıp odağı butona döndürüyor; dışarı tıklama veya odağın çıkmasıyla da kapanıyor. Sağa hizalı ve `max-width: calc(100vw - 32px)`. Dil menüsü ile mobil menü birbirini kapatıyor (`scripts/popups.ts`). URL'de geçerli bir bölüm hash'i varsa dil bağlantılarına ekleniyor. Tarayıcı diline göre yönlendirme ve kayıtlı tercih yok.
4. **Dört dil:** `src/i18n/locales.ts` (dil listesi, `localePath`), `en.ts` (yapıyı ve `Dictionary` tipini tanımlar), `fr.ts`, `de.ts`, `it.ts`. Sayfalar `src/pages/index.astro` (EN) ve `src/pages/[lang]/index.astro` (`getStaticPaths` → fr, de, it). İkisi de tek ortak kompozisyon olan `src/views/HomePage.astro` dosyasını çiziyor. Her bileşen `locale` alıyor. Her dilin HTML çıktısı kendi çevrilmiş metnini içeriyor; JS ile metin değiştirilmiyor. VEVORA adı ve iletişim verileri çevrilmedi. Yeni hizmet veya iddia eklenmedi.
5. **SEO/meta:** Her sayfada doğru `html lang`, kendi canonical adresi, dört dil için karşılıklı `hreflang` ve İngilizceyi gösteren `x-default`, `og:url`, `og:locale` ve `og:locale:alternate` var. Daha önce sitemap yoktu; `src/pages/sitemap.xml.ts` yalnızca dört ana sayfayı ve alternatiflerini listeleyen statik bir sitemap üretiyor.
6. **Base yolu (GitHub Pages):** `src/utils/url.ts → withBase()`. Tüm görseller, favicon, dil bağlantıları ve canonical adresleri bu yardımcıdan geçiyor. `astro.config.mjs`: `site = SITE_URL || http://localhost:4321`, `base = BASE_PATH || /`. `.github/workflows/deploy.yml` bu değerleri `actions/configure-pages` çıktısından alıyor. Alan adı uydurulmadı.
7. **Gökyüzü mavisi:** `--c-sky #38BDF8`, `--c-sky-hover #0EA5E9`, `--c-sky-surface #E0F2FE`, `--c-sky-ink #0369A1`. Kullanıldığı yerler:
   - Hero'nun birincil butonu ve paket butonları: mavi dolgu, **siyah** yazı (≈9,6:1; hover ≈7,6:1).
   - İkincil hero butonları: koyu çerçeve, hover'da açık mavi zemin.
   - Metin bağlantıları `#0369A1`.
   - "Konsept proje" etiketi açık mavi zemin + koyu mavi yazı.
   - Paket madde işaretleri, slider okları (mavi çerçeve, koyu mavi ok) ve slider kaydırma çubuğu.
   - Dil menüsünde seçili dil.
   - Focus halkası: açık zeminde `#0369A1`, koyu zeminde `#38BDF8`. Footer bağlantılarının hover rengi mavi.
   - Büyük mavi alan ve gradyan yok. Logolara dokunulmadı.
8. **Konsept önizlemeler dilden bağımsız:** `public/projects/*.svg` içindeki Türkçe `<text>` öğeleri aynı boyut ve renkte yuvarlatılmış iskelet çubuklarına çevrildi.
9. **İkonlar:** `chevronDown` ve `check` (Tabler, MIT) eklendi.

### Değiştirilen / eklenen dosyalar
- **Yeni:**
  - `src/utils/url.ts`
  - `src/i18n/locales.ts`, `en.ts`, `fr.ts`, `de.ts`, `it.ts`
  - `src/components/LanguageSwitcher.astro`
  - `src/views/HomePage.astro`
  - `src/pages/[lang]/index.astro`, `src/pages/sitemap.xml.ts`
  - `src/scripts/popups.ts`, `src/scripts/lang-switcher.ts`
  - `.github/workflows/deploy.yml`
  - `görüntüleme.md`
- **Güncellenen:**
  - `astro.config.mjs`
  - `src/i18n/index.ts`, `src/i18n/tr.ts` (yalnızca başlık yorumu; kayıtlı değil)
  - `src/data/navigation.ts`, `site.ts`, `icons.ts`
  - `src/layouts/BaseLayout.astro`
  - `src/components/Header.astro`, `Hero.astro`, `Works.astro`, `Packages.astro`, `About.astro`, `Contact.astro`, `Footer.astro`
  - `src/pages/index.astro`
  - `src/scripts/nav.ts`, `main.ts`
  - `src/styles/global.css` (yeniden yazıldı)
  - `public/projects/*.svg`
  - `.claude/launch.json` (statik önizleme sunucusu eklendi)

### Test sonuçları (gerçekten yapılanlar)
Production build (`dist/`) Python statik sunucusuyla sunularak test edildi.
- **Build:** `npm run build` başarılı; çıktı `index.html`, `fr/`, `de/`, `it/` ve `sitemap.xml`.
- **Tam genişlik:** 1440 px'te header, tüm bölümler ve footer 0 → 1425 px (tam görünür genişlik) arasında. Renkler beklendiği gibi. İçerik kapsayıcısı ekranın 0,693'ü.
- **Yatay taşma:**
  - 1440 ve 375 px'te dört dilde de yok.
  - 1280 px'te FR, DE ve EN kontrol edildi; yok.
  - 1024 px'te FR ve DE, 768 px'te DE ve IT kontrol edildi; yok.
  - Header, butonlar, paket/proje/iletişim kartları ve başlıklarda iç taşma bulunmadı.
- **Menü merkezi:** Geniş düzende menünün orta noktası ile ekran merkezi arasındaki fark 0–0,01 px (1440 ve 1280 px, dört dil). 1024 px'te FR/DE ve 768 px'te DE/IT doğru şekilde hamburger menüye geçiyor.
- **Uzun çeviriler:**
  - FR'de "Parlez-nous de votre projet" hero butonunda iki satıra iniyor. Üç buton yine eşit boyutta (245×60).
  - Mobilde üç buton eşit (338×48).
  - Paket butonları her satırda aynı hizada.
- **Doğrudan açma ve yenileme:** `/`, `/fr/`, `/de/`, `/it/` doğrudan açıldı. `html lang`, başlıklar ve dil butonu kodu doğru. `/fr/` yenilendikten sonra Fransızca kaldı.
- **Dil geçişleri:**
  - Gerçek bağlantı tıklamasıyla EN→FR→DE→IT→EN döngüsü `#contact` hash'i korunarak tamamlandı; son sayfada İletişim bölümü görünüyordu.
  - Dört sayfanın her birinde dört dil bağlantısının hedefi ve geçerli dil işareti doğrulandı.
  - Geçersiz hash (`#bogus`) bağlantılara eklenmiyor.
- **Dil menüsü + mobil menü (375 px):**
  - Dil menüsü ekran içinde kalıyor (124–304 px).
  - Mobil menü açılınca dil menüsü kapanıyor, dil menüsü açılınca mobil menü kapanıyor.
  - Escape dil menüsünü kapatıp odağı butona döndürüyor; dışarı tıklama da kapatıyor.
- **Sliderlar:**
  - Proje slider'ı dört dilde ilerliyor ve uçlarda okları doğru pasifleştiriyor. EN, FR ve DE'de programatik buton tıklamasıyla, IT'de gerçek fare tıklamasıyla denendi.
  - Mobil paket slider'ı (DE) sona kadar gidiyor.
- **Önizleme penceresi:** Dört dilde açılıyor, başlığı çevrilmiş, kapanınca odak tetikleyiciye dönüyor.
- **Bağlantılar ve içerik:** Bölüm bağlantılarının (`#top`, `#work`, `#packages`, `#about`, `#contact`) hepsinin hedefi dört dilde mevcut. Çıktılarda Türkçe metin kalıntısı yok.
- **GitHub Pages base yolu:** `SITE_URL=https://example.github.io BASE_PATH=/vevora/` ile geçici bir klasöre build alındı (yayınlanmadı).
  - Canonical, hreflang, sitemap `<loc>`, favicon, CSS, görseller ve dil bağlantıları tam bir kez `/vevora/` ile başlıyor.
  - `vevora/vevora` gibi çift önek yok; base'siz kök adres de kalmamış.
  - Not: Windows Git Bash `/vevora/` değerini yola çevirdiği için testte `MSYS_NO_PATHCONV=1` gerekti. Linux üzerindeki GitHub Actions'ta bu sorun yok.

**Test edilmeyenler:**
- Gerçek klavyeyle Tab gezinmesi; odak ve Escape programatik olarak denendi.
- Gerçek dokunmatik cihaz.
- Safari ve Firefox.
- GitHub Pages'e gerçek yayın (proje git deposu değil).
- `astro check`: ek paket kurmak istediği için atlandı.
- Yerel build'de canonical adresler `http://localhost:4321` ile başlıyor; doğru alan adı yayın sırasında `SITE_URL` ile gelir.

### Açık konular
- Gerçek iletişim bilgileri hâlâ bekleniyor; 9 kanal dört dilde de "Coming soon / Bientôt disponible / Folgt in Kürze / In arrivo" durumunda.
- Gelecekteki alt sayfaların dile göre adresleri (ör. `/fr/realisations/`) kesinleşmedi.
- Türkçe sürüm istenirse `tr.ts` sözlüğe eklenip `locales.ts` listesine kaydedilecek.
- Sözlüklerdeki çeviriler model tarafından hazırlandı; yayından önce ana dili Fransızca, Almanca ve İtalyanca olan biri tarafından gözden geçirilmesi önerilir.

---

## Aşama 1: Ana sayfa (2026-11-01)

> Bu bölüm geçmiş kayıttır. Genişlik kabuğu, header rengi, bölüm kimlikleri, vurgu rengi ve dil konularında Aşama 2'deki kurallar geçerlidir.

### Başlangıç durumu
- Proje klasöründe yalnızca iki logo vardı; kod, proje talimatı (CLAUDE.md vb.) veya eski bağımlılık yoktu. Silinen bir şey olmadı.
- `VEVORA logo-1.PNG` (1432×452, RGBA): V işareti + "VEVORA" yazısı → **büyük logo**.
- `VEVORA logo-2.png` (525×372, RGBA): yalnızca V işareti → **küçük logo**.
- İki logo da siyah işaret, opak beyaz zemin (piksel değeri 253–255). Orijinal dosyalar kök dizinde duruyor; `public/` altına değiştirilmeden kopyalandı:
  - `public/brand/vevora-logo-large.png`, `public/brand/vevora-logo-small.png`, `public/favicon.png`.

### Teknoloji
- Astro 7.4.4, statik üretim (`output: 'static'`), semantik HTML, tek CSS dosyası, küçük vanilla TS modülleri.
- Çalışma zamanı bağımlılığı yalnızca `astro`. React/Tailwind/slider kütüphanesi yok.
- Komutlar: `npm run dev`, `npm run build` (çıktı `dist/`), `npm run preview`.

### Dosya düzeni
| Sorumluluk | Dosya |
|---|---|
| Layout + meta (theme-color, favicon, OG) | `src/layouts/BaseLayout.astro` |
| Header / mobil menü | `src/components/Header.astro`, `src/scripts/nav.ts` |
| Hero | `src/components/Hero.astro` |
| Çalışmalarımız + önizleme pencereleri | `src/components/Works.astro`, `src/scripts/dialog.ts` |
| Paketlerimiz | `src/components/Packages.astro` |
| Hakkımızda | `src/components/About.astro` |
| İletişim | `src/components/Contact.astro` |
| Footer | `src/components/Footer.astro` |
| Ortak parçalar | `SectionHeading.astro`, `SliderControls.astro`, `Icon.astro`, `src/scripts/slider.ts` |
| Navigasyon verisi (şimdiki + gelecekteki adresler) | `src/data/navigation.ts` |
| Paket / proje / iletişim verisi | `src/data/packages.ts`, `src/data/projects.ts`, `src/data/contact.ts` |
| İkonlar | `src/data/icons.ts` |
| Görünen tüm Türkçe metinler | `src/i18n/tr.ts` (yükleyici: `src/i18n/index.ts`) |
| Stiller (renk değişkenleri dahil) | `src/styles/global.css` |

Çok dilli yapıya hazırlık: bileşenlerde metin yok. Yeni dil için `src/i18n/en.ts` vb. aynı yapıyla eklenip `index.ts` içine kaydedilecek. Bu aşamada dil seçici ve çeviri sayfası yok.

### Uygulanan kararlar
- **Genişlik:** `.shell` (header, main ve footer'ı birlikte kapsar) masaüstü/tablette `width: 70%`, 768 px altında `90%`, ortalı. Dış zemin siyah. 1440 px'te ölçülen oran: 0,69. Tüm sayfada yatay taşma yok (1440 ve 375 px'te `scrollWidth === clientWidth` doğrulandı).
  - ⚠️ **Not:** %70 / %90 sınırı mobilde ve dar tabletlerde içerik alanını belirgin biçimde daraltır (375 px telefonda kabuk 337 px; iç boşluklardan sonra yaklaşık 297 px kalır). Kural brief gereği değiştirilmedi.
- **Renkler:** `:root` içinde `--c-black`, `--c-green (#2E4540)`, `--c-gray-200 (#DDDDDD)`, `--c-gray-100 (#EEEEEE)`, `--c-white`. Yardımcı tonlar: iletişim kartı `#2B2B2B`, pasif kart `#191919`, okunabilirlik için metin grileri.
- **Bölüm zeminleri:** Hero `#FFFFFF`, Çalışmalarımız `#EEEEEE`, Paketlerimiz `#DDDDDD`, Hakkımızda `#FFFFFF`, İletişim `#000000`; header ve footer `#000000`.
- **Logo yerleşimi:** Logolara filtre, yeniden çizim veya oran değişikliği uygulanmadı. Siyah header/footer'da küçük logo kendi beyaz zemini görünecek şekilde köşeleri yuvarlatılmış bir karo olarak duruyor. Büyük logonun zemini (253–255) beyaz hero ve Hakkımızda zeminiyle gözle ayırt edilemeyecek kadar yakın.
- **Header menüsü:** Yatay/mobil geçişi cihaz adına göre değil, header kapsayıcısının genişliğine göre (container query, ≥ 880 px). Mobil menüde `aria-expanded`/`aria-controls`, Escape ile kapanıp odağın butona dönmesi, bölüm seçilince ve dışarı tıklanınca kapanma var. Kapalı menü `display:none` olduğu için odak almıyor. JS yoksa menü açık liste olarak görünür.
- **SSS** ve **"Tüm çalışmalarımızı görüntüleyin":** Bağlantı değil, `aria-disabled` metin + "Yakında" rozeti. Gelecekteki adresler `navigation.ts` içinde (`/sss`, `/calismalarimiz`). "Projenizi anlatın" şimdilik `#iletisim` adresine gidiyor.
- **Hero:** Büyük logo `h1` içinde (alt="VEVORA"). Üç buton masaüstünde eşit genişlikte (3 sütunlu grid), 600 px altında alt alta ve yine eşit boyutta (ölçülen: 298×48 ×3). Tam ekran yüksekliği zorlanmadı.
- **Çalışmalarımız:** Gerçek proje bulunmadığı için 5 özgün **konsept** önizleme SVG'si hazırlandı: `public/projects/*.svg`, 16:10 oran. Kartlarda "Konsept proje" etiketi var. "Projeyi inceleyin" erişilebilir bir `<dialog>` açıyor; JS yoksa görselin kendisine gidiyor. Slider: CSS scroll-snap + ok butonları (ilk ve son konumda pasif), dokunma ve klavyeyle kaydırma (liste odaklanabiliyor). Otomatik ilerleme, döngü ve kopya kart yok. Kapsayıcı genişliğine göre 3 / 2 / 1 (+ bir sonraki kartın kenarı) kart görünüyor.
- **Paketlerimiz:** 6 kart. Kapsayıcı ≥ 1480 px → 6 sütun, ≥ 780 → 3×2, ≥ 520 → 2 sütun, altında tek kartlık yatay slider (okları var). 1440 px ekranda kabuk ~998 px olduğu için 3×2 görünüyor; 6 sütun ancak ~2400 px+ ekranlarda devreye giriyor. Fiyat, süre ve garanti yok. Butonlar `#iletisim` adresine gidiyor (gerçek WhatsApp/e-posta olmadığı için mesaj taslağı yok). Hedef kitle metinleri `tr.ts` içinde, ileride Paketler sayfası için hazır; ana sayfada gösterilmiyor.
- **Hakkımızda:** Container ≥ 720 px'te iki kolon (logo + hikâye), altında alıntı iki satır olarak gösteriliyor. Cümle değiştirilmedi.
- **İletişim:** Referans görsele göre 3×3 grid, kartlar 270×191 (1440 px'te ölçüldü), 24 px aralık, 16 px köşe, siyah dairesel ikon alanı. ≥ 400 px'te 2, altında 1 sütun. Kart sırası korunuyor, slider yok.
- **İkonlar:** Tabler Icons (MIT, © Paweł Kuna) outline seti. Hepsi 24×24 ve stroke 2. Yollar `src/data/icons.ts` içine lisans notuyla kopyalandı; paket bağımlılık olarak tutulmadı.
- **Hareket:** Yalnızca kısa hover/focus geçişleri, kartlarda 3 px yükselme (sadece `hover: hover` cihazlarda), yumuşak anchor kaydırma. `prefers-reduced-motion` tercihinde hepsi kapanıyor. Görünme animasyonu eklenmedi, bu yüzden içerik hiçbir koşulda gizli kalmıyor.
- **Mobil tarayıcı:** `theme-color #000000`, html/body siyah.
- **Footer:** Yıl derleme anında yazılıyor ve tarayıcıda güncel yıla göre yenileniyor.

### ⚠️ Eksik iletişim bilgileri (tümü)
Proje dosyalarında doğrulanmış iletişim bilgisi bulunmadı. Referans görseldeki "velora" adresleri ve örnek numaralar kullanılmadı. Aşağıdaki **9 kanalın tamamı** şu an pasif ve "Yakında eklenecek" gösteriyor:

- [ ] E-posta
- [ ] Telefon
- [ ] WhatsApp
- [ ] Instagram
- [ ] Facebook
- [ ] TikTok
- [ ] Telegram
- [ ] LinkedIn
- [ ] GitHub

Etkinleştirmek için `src/data/contact.ts` içinde ilgili kanalın `value` ve `href` alanlarını doldurmak yeterli. Kart aktif stile geçer, footer'daki sosyal bağlantılar kendiliğinden görünür. Bu nedenle İletişim bölümü şu an referanstaki LinkedIn/GitHub kartları gibi bütünüyle soluk görünüyor.

### Paket araştırması
- Okunan sayfalar: webfx.com web tasarım ve e-ticaret hizmetleri, Google SEO Başlangıç Rehberi, shopify.com/online.
- webfx.com SEO, sosyal medya ve PPC sayfalarından yalnızca sayfa başlığı alınabildi; içerikleri okunamadı. Bu üç paket için brief'teki kapsamla ilerlendi.
- Çıkarımlar: e-ticaret kapsamı platform ve ödeme sağlayıcısına bağlı (teklifte doğrulanacak). Google, belirli bir sıralama veya indekslenme garantisi verilemeyeceğini açıkça belirtiyor, bu yüzden SEO kartında garanti ifadesi yok. Başka ajansların fiyat ve metinleri kopyalanmadı.

### Doğrulama
- `npm run build` başarılı (1 sayfa).
- Tarayıcıda (1440×900 ve 375×812) kontrol edildi: bölüm sırası, taşma, menü davranışları, slider ok durumları, dialog açma/kapama ve odak dönüşü, iletişim kartı ölçüleri, kırık bağlantı olmaması (tüm `href` değerleri `#bölüm` veya mevcut `/projects/*.svg`).
- `astro check` (TypeScript denetimi) çalıştırılmadı: ek paket kurulumu istediği için yarıda kesildi.

### Açık konular / sonraki aşama
- Brief'in 14. bölümü ("Mobil tarayıcı görünümü") "Gerek…" ifadesinde kesilmiş geldi. Theme-color ve siyah dış zemin uygulandı; devamı iletilirse tamamlanacak.
- Gerçek iletişim bilgileri (yukarıdaki liste).
- Gerçek proje görselleri ve doğrulanmış adresler gelince `projects.ts` içinde `concept: false` ve `url` alanları doldurulacak.
- Sonraki sayfalar: Çalışmalarımız, Paketlerimiz, Hakkımızda, Projenizi anlatın, SSS, İletişim. Bu sayfalar hazırlanınca `navigation.ts` içindeki `href`/`status` alanları güncellenecek.
- Çeviriler (en, fr, de, it) ve dil seçici.
- Yayın alan adı belli olunca `astro.config.mjs` içine `site` eklenerek canonical ve OG URL'leri oluşturulabilir.
