// Merkezi navigasyon tanımı.
// `href`: bu aşamada kullanılan hedef (ana sayfa içi bölüm).
// `futureHref`: ilgili sayfa hazırlandığında geçilecek adres (dil öneki ve base yolu eklenmeden; kesin değil).
// `status: 'soon'`: hedef henüz hazır değil; bağlantı yerine pasif "Yakında" durumu gösterilir.

export type NavId = 'home' | 'works' | 'packages' | 'about' | 'brief' | 'faq' | 'contact';

export interface NavItem {
  id: NavId;
  href: string | null;
  futureHref: string;
  status: 'active' | 'soon';
}

// Dillerden bağımsız bölüm kimlikleri; dil değiştirirken URL hash'i bu sayede korunur.
export const sectionIds = {
  top: 'top',
  works: 'work',
  packages: 'packages',
  about: 'about',
  contact: 'contact',
} as const;

export const navigation: NavItem[] = [
  { id: 'home', href: `#${sectionIds.top}`, futureHref: '/', status: 'active' },
  { id: 'works', href: `#${sectionIds.works}`, futureHref: '/work/', status: 'active' },
  { id: 'packages', href: `#${sectionIds.packages}`, futureHref: '/packages/', status: 'active' },
  { id: 'about', href: `#${sectionIds.about}`, futureHref: '/about/', status: 'active' },
  // "Projenizi anlatın" sayfası hazır olana kadar iletişim bölümüne gider.
  { id: 'brief', href: `#${sectionIds.contact}`, futureHref: '/project-brief/', status: 'active' },
  { id: 'faq', href: null, futureHref: '/faq/', status: 'soon' },
  { id: 'contact', href: `#${sectionIds.contact}`, futureHref: '/contact/', status: 'active' },
];

// Ana sayfadaki "Tüm çalışmalarımızı görüntüleyin" bağlantısı.
// Çalışmalarımız sayfası yayına alındığında `status: 'active'` ve `href: futureHref` yapılır.
export const allWorksLink: NavItem = {
  id: 'works',
  href: null,
  futureHref: '/work/',
  status: 'soon',
};

export const footerLinks: NavId[] = ['works', 'packages', 'about', 'contact'];

export const navById = (id: NavId) => navigation.find((item) => item.id === id)!;

// Dil değişiminde korunabilecek bölüm hash'leri.
export const sectionHashes = [sectionIds.works, sectionIds.packages, sectionIds.about, sectionIds.contact];
