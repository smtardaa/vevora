// Italiano. Stessa struttura di en.ts; si usa il "tu", comune nella comunicazione web.

import type { Dictionary } from './en';

export const it: Dictionary = {
  meta: {
    title: 'VEVORA — Web design e soluzioni digitali',
    description:
      'VEVORA offre alle aziende soluzioni semplici e pratiche per web design, e-commerce, SEO, social media e pubblicità digitale.',
  },

  common: {
    soon: 'Presto',
    soonLong: 'In arrivo',
    skipToContent: 'Vai al contenuto',
    logoAlt: 'VEVORA',
    homeLinkLabel: 'Home VEVORA',
  },

  language: {
    label: 'Lingua',
    change: 'Cambia lingua',
  },

  nav: {
    label: 'Menu principale',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    items: {
      home: 'Home',
      works: 'Lavori',
      packages: 'Pacchetti',
      about: 'Chi siamo',
      brief: 'Raccontaci il tuo progetto',
      faq: 'FAQ',
      contact: 'Contatti',
    },
  },

  hero: {
    title: 'VEVORA',
    actions: {
      packages: 'Scopri i pacchetti',
      contact: 'Contatti',
      brief: 'Raccontaci il tuo progetto',
    },
  },

  works: {
    title: 'I nostri lavori',
    subtitle: 'Progetti di esempio e reali',
    description: 'Alcuni esempi delle soluzioni web che progettiamo per marchi di settori diversi.',
    allLink: 'Vedi tutti i nostri lavori',
    allLinkSoonNote: 'La pagina dei lavori sarà presto online.',
    conceptTag: 'Progetto concept',
    viewProject: 'Vedi il progetto',
    sliderLabel: 'Esempi di progetti',
    prev: 'Progetti precedenti',
    next: 'Progetti successivi',
    dialogClose: 'Chiudi',
    previewAlt: (name: string) => `Anteprima del sito: ${name}`,
    projects: {
      collection: {
        name: 'Negozio da collezione',
        sector: 'Commercio',
        summary:
          'Un concept per un negozio di oggetti da collezione: una vetrina essenziale che mette in evidenza i prodotti per categoria.',
      },
      cafe: {
        name: 'Caffè di quartiere',
        sector: 'Ristorazione',
        summary: 'Un concept dai toni caldi per un caffè, che mostra a colpo d’occhio menu, orari e posizione.',
      },
      barber: {
        name: 'Barbiere',
        sector: 'Cura della persona',
        summary:
          'Un concept per un barbiere, con toni scuri e una tipografia nitida, che mette in primo piano i servizi e il contatto per prenotare.',
      },
      corporate: {
        name: 'Servizi aziendali',
        sector: 'Consulenza',
        summary: 'Un concept di sito aziendale sobrio e affidabile, che presenta le aree di servizio in blocchi ordinati.',
      },
      architecture: {
        name: 'Studio di architettura',
        sector: 'Architettura',
        summary: 'Un concept di portfolio minimale e arioso, che lascia spazio alle immagini dei progetti.',
      },
    },
  },

  packages: {
    title: 'I nostri pacchetti',
    subtitle: 'Opzioni adatte alle tue esigenze',
    description: 'Scegliamo insieme il pacchetto più adatto: per un preventivo chiaro basta contattarci.',
    contactLink: 'Contattaci subito',
    cta: 'Contattaci',
    ctaLabel: (name: string) => `Contattaci per il pacchetto ${name}`,
    sliderLabel: 'Pacchetti',
    prev: 'Pacchetto precedente',
    next: 'Pacchetto successivo',
    scopeListLabel: 'Cosa comprende',
    note:
      'I contenuti di ogni pacchetto vengono definiti in base alle tue esigenze. Budget pubblicitario, dominio, hosting e abbonamenti a servizi terzi vengono valutati a parte.',
    types: {
      project: 'A progetto',
      monthly: 'Servizio mensile',
    },
    items: {
      starter: {
        name: 'Web Start',
        summary: 'Un inizio semplice, veloce e professionale per il tuo marchio.',
        audience: 'Piccole imprese e personal brand che vanno online per la prima volta.',
        scope: [
          'Sito vetrina di una pagina',
          'Design responsive su misura per il tuo marchio',
          'Sezioni servizi e contatti',
          'Ottimizzazioni SEO on-page di base',
          'Pubblicazione e guida all’uso',
        ],
      },
      corporate: {
        name: 'Sito aziendale',
        summary: 'Presenta il tuo marchio e i tuoi servizi con una struttura chiara.',
        audience: 'Aziende che hanno bisogno di una presentazione più completa.',
        scope: [
          'Struttura di sito multipagina',
          'Pagine di servizi e progetti',
          'Responsive e accessibilità',
          'SEO tecnica e ottimizzazione delle prestazioni',
          'Pianificazione degli aggiornamenti dei contenuti',
        ],
      },
      ecommerce: {
        name: 'E-commerce',
        summary: 'Presenta i tuoi prodotti in un negozio chiaro e affidabile.',
        audience: 'Aziende che vogliono vendere i propri prodotti online.',
        scope: [
          'Struttura di prodotti e categorie',
          'Design del negozio responsive',
          'Configurazione di carrello e pagamento',
          'Gestione di ordini e magazzino',
          'SEO di base per i prodotti e formazione sulla gestione',
        ],
      },
      seo: {
        name: 'SEO e contenuti',
        summary: 'Migliora la tua visibilità nei motori di ricerca con un lavoro pianificato e misurabile.',
        audience: 'Aziende che vogliono migliorare la propria visibilità organica.',
        scope: [
          'Analisi SEO tecnica',
          'Ricerca di parole chiave e intento di ricerca',
          'Ottimizzazione di titoli e contenuti',
          'Piano editoriale e suggerimenti di link interni',
          'Monitoraggio delle prestazioni con Search Console',
        ],
      },
      social: {
        name: 'Social media',
        summary: 'Una presenza social coerente e costante per il tuo marchio.',
        audience: 'Aziende che vogliono gestire con regolarità la comunicazione sui social.',
        scope: [
          'Analisi dell’account e dei concorrenti',
          'Calendario editoriale mensile',
          'Grafiche per post e storie',
          'Testi e pianificazione delle pubblicazioni',
          'Valutazione mensile dei risultati',
        ],
      },
      ads: {
        name: 'Pubblicità digitale',
        summary: 'Raggiungi le persone giuste con annunci in linea con i tuoi obiettivi.',
        audience: 'Aziende che vogliono usare la pubblicità per generare richieste, visite o vendite.',
        scope: [
          'Pubblico e piano della campagna',
          'Configurazione di Google Ads o Meta Ads',
          'Testi degli annunci e varianti creative',
          'Configurazione del monitoraggio delle conversioni',
          'Ottimizzazione continua e report',
        ],
      },
    },
  },

  about: {
    title: 'Chi siamo',
    story:
      'Alla base di VEVORA c’è un’idea semplice: raccontare un marchio online non deve essere complicato. Uniamo design, tecnologia e comunicazione attorno a un unico obiettivo, aiutando le aziende a esprimersi in modo chiaro, coerente e con una voce davvero loro. Ogni progetto inizia dall’ascolto, e ci sta a cuore trasformare le esigenze in soluzioni semplici e pratiche.',
    quote: ['La tua prima impressione nel mondo digitale', 'è una porta.'],
  },

  contact: {
    eyebrow: 'Contatti',
    title: 'Contattaci',
    channels: {
      email: 'E-mail',
      phone: 'Telefono',
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
    tagline: 'Soluzioni semplici e pratiche per web design, e-commerce, SEO, social media e pubblicità digitale.',
    linksLabel: 'Menu del footer',
    socialLabel: 'Canali di contatto',
    copyright: 'VEVORA. Tutti i diritti riservati.',
  },
};
