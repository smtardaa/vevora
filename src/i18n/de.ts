// Deutsch. Gleiche Struktur wie en.ts; Ansprache in der Sie-Form.

import type { Dictionary } from './en';

export const de: Dictionary = {
  meta: {
    title: 'VEVORA — Webdesign und digitale Lösungen',
    description:
      'VEVORA unterstützt Unternehmen mit klaren, praktischen Lösungen für Webdesign, E-Commerce, SEO, Social Media und digitale Werbung.',
  },

  common: {
    soon: 'Bald',
    soonLong: 'Folgt in Kürze',
    skipToContent: 'Zum Inhalt springen',
    logoAlt: 'VEVORA',
    homeLinkLabel: 'VEVORA Startseite',
  },

  language: {
    label: 'Sprache',
    change: 'Sprache wechseln',
  },

  nav: {
    label: 'Hauptmenü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    items: {
      home: 'Startseite',
      works: 'Referenzen',
      packages: 'Pakete',
      about: 'Über uns',
      brief: 'Projekt beschreiben',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
  },

  hero: {
    title: 'VEVORA',
    actions: {
      packages: 'Pakete ansehen',
      contact: 'Kontakt',
      brief: 'Projekt beschreiben',
    },
  },

  works: {
    title: 'Referenzen',
    subtitle: 'Beispiele und reale Projekte',
    description: 'Eine Auswahl an Weblösungen, die wir für Marken aus unterschiedlichen Branchen gestalten.',
    allLink: 'Alle Referenzen ansehen',
    allLinkSoonNote: 'Die Referenzseite ist bald online.',
    conceptTag: 'Konzeptprojekt',
    viewProject: 'Projekt ansehen',
    sliderLabel: 'Projektbeispiele',
    prev: 'Vorherige Projekte',
    next: 'Nächste Projekte',
    dialogClose: 'Schließen',
    previewAlt: (name: string) => `Website-Vorschau: ${name}`,
    projects: {
      collection: {
        name: 'Sammlerladen',
        sector: 'Einzelhandel',
        summary:
          'Ein Konzept für einen Laden mit Sammlerstücken: ein klares Schaufenster, das Produkte nach Kategorien hervorhebt.',
      },
      cafe: {
        name: 'Café im Viertel',
        sector: 'Gastronomie',
        summary: 'Ein Café-Konzept in warmen Tönen, das Karte, Öffnungszeiten und Lage auf einen Blick zeigt.',
      },
      barber: {
        name: 'Barbershop',
        sector: 'Körperpflege',
        summary:
          'Ein Barbershop-Konzept mit dunklen Tönen und klarer Typografie, das Leistungen und die Terminanfrage in den Vordergrund stellt.',
      },
      corporate: {
        name: 'Unternehmensservice',
        sector: 'Beratung',
        summary:
          'Ein schlichtes, vertrauenswürdiges Unternehmenskonzept, das Leistungsbereiche in übersichtlichen Blöcken darstellt.',
      },
      architecture: {
        name: 'Architekturbüro',
        sector: 'Architektur',
        summary: 'Ein minimalistisches Portfolio-Konzept mit viel Weißraum, das den Projektbildern Raum gibt.',
      },
    },
  },

  packages: {
    title: 'Unsere Pakete',
    subtitle: 'Passende Optionen für Ihren Bedarf',
    description:
      'Lassen Sie uns gemeinsam das passende Paket finden. Für ein klares Angebot genügt eine kurze Nachricht.',
    contactLink: 'Jetzt Kontakt aufnehmen',
    cta: 'Kontakt aufnehmen',
    ctaLabel: (name: string) => `Kontakt zum Paket ${name} aufnehmen`,
    sliderLabel: 'Pakete',
    prev: 'Vorheriges Paket',
    next: 'Nächstes Paket',
    scopeListLabel: 'Leistungsumfang',
    note:
      'Der Leistungsumfang wird nach Ihrem Bedarf festgelegt. Werbebudget, Domain, Hosting und Abonnements von Drittanbietern werden gesondert betrachtet.',
    types: {
      project: 'Projektbasiert',
      monthly: 'Monatliche Leistung',
    },
    items: {
      starter: {
        name: 'Web Start',
        summary: 'Ein schlichter, schneller und professioneller Start für Ihre Marke.',
        audience: 'Kleine Unternehmen und Personal Brands, die zum ersten Mal online gehen.',
        scope: [
          'Onepager zur Vorstellung',
          'Responsives Design passend zu Ihrer Marke',
          'Bereiche für Leistungen und Kontakt',
          'Grundlegende On-Page-SEO',
          'Veröffentlichung und Nutzungsanleitung',
        ],
      },
      corporate: {
        name: 'Unternehmenswebsite',
        summary: 'Präsentieren Sie Ihre Marke und Leistungen in einer klaren Struktur.',
        audience: 'Unternehmen, die einen umfassenderen Auftritt benötigen.',
        scope: [
          'Mehrseitige Website-Struktur',
          'Seiten für Leistungen und Projekte',
          'Responsive Design und Barrierefreiheit',
          'Technische SEO und Performance',
          'Planung der Inhaltspflege',
        ],
      },
      ecommerce: {
        name: 'E-Commerce',
        summary: 'Präsentieren Sie Ihre Produkte in einem übersichtlichen, vertrauenswürdigen Shop.',
        audience: 'Unternehmen, die ihre Produkte online verkaufen möchten.',
        scope: [
          'Produkt- und Kategoriestruktur',
          'Responsives Shop-Design',
          'Einrichtung von Warenkorb und Checkout',
          'Konfiguration von Bestellungen und Lagerbestand',
          'Grundlegende Produkt-SEO und Schulung zur Verwaltung',
        ],
      },
      seo: {
        name: 'SEO & Content',
        summary: 'Verbessern Sie Ihre Sichtbarkeit in der Suche mit geplanter, messbarer Arbeit.',
        audience: 'Unternehmen, die ihre organische Sichtbarkeit ausbauen möchten.',
        scope: [
          'Technische SEO-Analyse',
          'Keyword- und Suchintentionsanalyse',
          'Optimierung von Seitentiteln und Inhalten',
          'Content-Plan und Vorschläge zur internen Verlinkung',
          'Performance-Tracking in der Search Console',
        ],
      },
      social: {
        name: 'Social Media',
        summary: 'Ein einheitlicher, regelmäßiger Social-Media-Auftritt für Ihre Marke.',
        audience: 'Unternehmen, die ihre Social-Media-Kommunikation regelmäßig betreiben möchten.',
        scope: [
          'Analyse von Konto und Wettbewerb',
          'Monatlicher Redaktionsplan',
          'Designs für Beiträge und Stories',
          'Texterstellung und Veröffentlichungsplanung',
          'Monatliche Auswertung der Ergebnisse',
        ],
      },
      ads: {
        name: 'Digitale Werbung',
        summary: 'Erreichen Sie die richtigen Menschen mit Anzeigen, die zu Ihren Zielen passen.',
        audience: 'Unternehmen, die mit Werbung Anfragen, Besuche oder Verkäufe erzielen möchten.',
        scope: [
          'Zielgruppe und Kampagnenplan',
          'Einrichtung von Google Ads oder Meta Ads',
          'Anzeigentexte und kreative Varianten',
          'Einrichtung des Conversion-Trackings',
          'Laufende Optimierung und Reporting',
        ],
      },
    },
  },

  about: {
    title: 'Über uns',
    story:
      'Am Anfang von VEVORA steht ein einfacher Gedanke: Eine Marke digital zu präsentieren, muss nicht kompliziert sein. Wir bringen Design, Technologie und Kommunikation mit einem gemeinsamen Ziel zusammen und helfen Unternehmen, sich klar, stimmig und in ihrer eigenen Sprache auszudrücken. Jedes Projekt beginnt bei uns mit Zuhören – und uns ist wichtig, Anforderungen in einfache, praktische Lösungen zu verwandeln.',
    quote: ['Ihr erster Eindruck in der digitalen Welt', 'ist eine Tür.'],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Schreiben Sie uns',
    channels: {
      email: 'E-Mail',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      facebook: 'Facebook',
      tiktok: 'TikTok',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },

  footer: {
    tagline: 'Klare, praktische Lösungen für Webdesign, E-Commerce, SEO, Social Media und digitale Werbung.',
    linksLabel: 'Footer-Menü',
    socialLabel: 'Kontaktkanäle',
    copyright: 'VEVORA. Alle Rechte vorbehalten.',
  },
};
