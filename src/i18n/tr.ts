// Türkçe kaynak metinler. Bu aşamada Türkçe sürüm YAYINLANMIYOR (index.ts içinde kayıtlı değil);
// diğer dillerin anlam kaynağı olarak ve ileride Türkçe sürüm için saklanıyor.
// Bileşenler metin içermez; tüm kopya buradan okunur.

import type { NavId } from '../data/navigation';
import type { PackageId, PackageType } from '../data/packages';
import type { Project } from '../data/projects';
import type { ChannelId } from '../data/contact';

export const tr = {
  lang: 'tr',

  meta: {
    title: 'VEVORA — Web tasarım ve dijital çözümler',
    description:
      'VEVORA; web tasarım, e-ticaret, SEO, sosyal medya ve dijital reklam alanlarında işletmelere sade ve kullanışlı çözümler sunar.',
  },

  common: {
    soon: 'Yakında',
    soonLong: 'Yakında eklenecek',
    skipToContent: 'İçeriğe geç',
    logoAlt: 'VEVORA',
    homeLinkLabel: 'VEVORA ana sayfa',
  },

  nav: {
    label: 'Ana menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    items: {
      home: 'Ana sayfa',
      works: 'Çalışmalarımız',
      packages: 'Paketlerimiz',
      about: 'Hakkımızda',
      brief: 'Projenizi anlatın',
      faq: 'SSS',
      contact: 'İletişim',
    } satisfies Record<NavId, string>,
  },

  hero: {
    title: 'VEVORA',
    actions: {
      packages: 'Paketleri incele',
      contact: 'İletişim',
      brief: 'Projenizi anlatın',
    },
  },

  works: {
    title: 'Çalışmalarımız',
    subtitle: 'Örnek ve gerçek projelerimiz',
    description: 'Farklı sektörlerden markalar için tasarladığımız web çözümlerinden birkaç örnek.',
    allLink: 'Tüm çalışmalarımızı görüntüleyin',
    allLinkSoonNote: 'Çalışmalarımız sayfası yakında yayında.',
    conceptTag: 'Konsept proje',
    viewProject: 'Projeyi inceleyin',
    sliderLabel: 'Proje örnekleri',
    prev: 'Önceki projeler',
    next: 'Sonraki projeler',
    dialogClose: 'Kapat',
    previewAlt: (name: string) => `${name} için web sitesi önizlemesi`,
    projects: {
      collection: {
        name: 'Koleksiyon Mağazası',
        sector: 'Perakende',
        summary:
          'Koleksiyon ürünleri satan bir mağaza için ürünleri kategoriye göre öne çıkaran, sade bir vitrin tasarımı konsepti.',
      },
      cafe: {
        name: 'Mahalle Kafesi',
        sector: 'Yeme-içme',
        summary:
          'Menüyü, çalışma saatlerini ve konumu ilk bakışta gösteren, sıcak tonlu bir kafe sitesi konsepti.',
      },
      barber: {
        name: 'Berber Salonu',
        sector: 'Kişisel bakım',
        summary:
          'Hizmetleri ve randevu iletişimini öne çıkaran, koyu ve net tipografili bir berber sitesi konsepti.',
      },
      corporate: {
        name: 'Kurumsal Hizmet',
        sector: 'Danışmanlık',
        summary:
          'Hizmet alanlarını düzenli bloklarla anlatan, güven veren ve sade bir kurumsal site konsepti.',
      },
      architecture: {
        name: 'Mimarlık Stüdyosu',
        sector: 'Mimarlık',
        summary:
          'Proje görsellerine alan açan, geniş boşluklu ve minimal bir portfolyo sitesi konsepti.',
      },
    } satisfies Record<Project['id'], { name: string; sector: string; summary: string }>,
  },

  packages: {
    title: 'Paketlerimiz',
    subtitle: 'İhtiyacınıza uygun tercihler',
    description: 'Size en uygun paketi birlikte belirleyelim; net bir teklif için bize ulaşmanız yeterli.',
    contactLink: 'Hemen iletişime geçin',
    cta: 'İletişime geç',
    ctaLabel: (name: string) => `${name} paketi için iletişime geç`,
    sliderLabel: 'Paketler',
    prev: 'Önceki paket',
    next: 'Sonraki paket',
    scopeListLabel: 'Kapsam',
    note:
      'Paket kapsamları ihtiyacınıza göre netleştirilir. Reklam bütçesi, alan adı, barındırma ve üçüncü taraf abonelikleri ayrıca değerlendirilir.',
    types: {
      project: 'Proje bazlı',
      monthly: 'Aylık hizmet',
    } satisfies Record<PackageType, string>,
    items: {
      starter: {
        name: 'Web Başlangıç',
        summary: 'Markanız için sade, hızlı ve profesyonel bir başlangıç.',
        audience: 'Dijitalde ilk kez yer alacak küçük işletmeler ve kişisel markalar.',
        scope: [
          'Tek sayfalık tanıtım sitesi',
          'Markaya uyarlanmış mobil uyumlu tasarım',
          'Hizmet ve iletişim bölümleri',
          'Temel sayfa içi SEO düzenlemeleri',
          'Yayına alma ve kullanım rehberi',
        ],
      },
      corporate: {
        name: 'Kurumsal Web',
        summary: 'Markanızı ve hizmetlerinizi düzenli bir yapıda tanıtın.',
        audience: 'Daha kapsamlı bir kurumsal sunuma ihtiyaç duyan işletmeler.',
        scope: [
          'Çok sayfalı kurumsal site yapısı',
          'Hizmet ve proje sunum sayfaları',
          'Mobil uyum ve erişilebilirlik düzenlemeleri',
          'Teknik SEO ve performans iyileştirmeleri',
          'İçerik güncelleme sürecinin planlanması',
        ],
      },
      ecommerce: {
        name: 'E-Ticaret',
        summary: 'Ürünlerinizi anlaşılır ve güven veren bir mağazada sunun.',
        audience: 'Ürünlerini internet üzerinden satmak isteyen işletmeler.',
        scope: [
          'Ürün ve kategori yapısı',
          'Mobil uyumlu mağaza tasarımı',
          'Sepet ve ödeme akışının kurulumu',
          'Sipariş ve stok yönetimi yapılandırması',
          'Temel ürün SEO’su ve yönetim eğitimi',
        ],
      },
      seo: {
        name: 'SEO ve İçerik',
        summary: 'Arama görünürlüğünüzü planlı ve ölçülebilir çalışmalarla geliştirin.',
        audience: 'Organik görünürlüğünü geliştirmek isteyen işletmeler.',
        scope: [
          'Teknik SEO incelemesi',
          'Anahtar kelime ve arama niyeti araştırması',
          'Sayfa başlığı ve içerik düzenlemeleri',
          'İçerik planı ve iç bağlantı önerileri',
          'Search Console üzerinden performans takibi',
        ],
      },
      social: {
        name: 'Sosyal Medya',
        summary: 'Markanız için tutarlı ve düzenli bir sosyal medya görünümü.',
        audience: 'Sosyal medya iletişimini düzenli yürütmek isteyen işletmeler.',
        scope: [
          'Hesap ve rakip incelemesi',
          'Aylık içerik takvimi',
          'Gönderi ve hikâye tasarımları',
          'Metin hazırlığı ve yayın planlaması',
          'Aylık performans değerlendirmesi',
        ],
      },
      ads: {
        name: 'Dijital Reklam',
        summary: 'Hedefinize uygun reklamlarla doğru kişilere ulaşın.',
        audience: 'Talep, ziyaret veya satış oluşturmak için reklam kullanmak isteyen işletmeler.',
        scope: [
          'Hedef kitle ve kampanya planı',
          'Google Ads veya Meta Ads kurulumu',
          'Reklam metni ve kreatif varyasyonları',
          'Dönüşüm ölçümünün yapılandırılması',
          'Düzenli optimizasyon ve raporlama',
        ],
      },
    } satisfies Record<PackageId, { name: string; summary: string; audience: string; scope: string[] }>,
  },

  about: {
    title: 'Hakkımızda',
    story:
      'VEVORA’nın çıkış noktasında basit bir düşünce var: Bir markayı dijitalde anlatmak karmaşık olmak zorunda değil. Tasarımı, teknolojiyi ve iletişimi aynı amaç etrafında buluşturuyor; işletmelerin kendilerini açık, tutarlı ve kendilerine ait bir dille ifade etmesine odaklanıyoruz. Her projeye önce dinleyerek başlıyor, ihtiyaçları sade ve kullanışlı çözümlere dönüştürmeyi önemsiyoruz.',
    // Cümle değiştirilmez; yalnızca okunabilir satır kırılımı için iki parçaya ayrılır.
    quote: ['Dijital dünyadaki ilk izleniminiz,', 'bir kapıdır.'],
  },

  contact: {
    eyebrow: 'İletişim',
    title: 'Bize ulaşın',
    channels: {
      email: 'E-posta',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      facebook: 'Facebook',
      tiktok: 'TikTok',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    } satisfies Record<ChannelId, string>,
  },

  footer: {
    tagline: 'Web tasarım, e-ticaret, SEO, sosyal medya ve dijital reklam alanlarında sade ve kullanışlı çözümler.',
    linksLabel: 'Alt menü',
    socialLabel: 'İletişim kanalları',
    // Önüne "© <yıl>" eklenir; yıl tarayıcıda güncel yıla göre yenilenir.
    copyright: 'VEVORA. Tüm hakları saklıdır.',
  },
};


