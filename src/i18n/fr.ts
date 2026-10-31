// Français. Même structure que en.ts. Espace insécable ( ) avant « : » et « ; ».

import type { Dictionary } from './en';

export const fr: Dictionary = {
  meta: {
    title: 'VEVORA — Création de sites web et solutions digitales',
    description:
      'VEVORA accompagne les entreprises avec des solutions simples et pratiques en création de sites web, e-commerce, SEO, réseaux sociaux et publicité digitale.',
  },

  common: {
    soon: 'Bientôt',
    soonLong: 'Bientôt disponible',
    skipToContent: 'Aller au contenu',
    logoAlt: 'VEVORA',
    homeLinkLabel: 'Accueil VEVORA',
  },

  language: {
    label: 'Langue',
    change: 'Changer de langue',
  },

  nav: {
    label: 'Menu principal',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    items: {
      home: 'Accueil',
      works: 'Réalisations',
      packages: 'Offres',
      about: 'À propos',
      brief: 'Parlez-nous de votre projet',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },

  hero: {
    title: 'VEVORA',
    actions: {
      packages: 'Voir les offres',
      contact: 'Contact',
      brief: 'Parlez-nous de votre projet',
    },
  },

  works: {
    title: 'Nos réalisations',
    subtitle: 'Exemples et projets réels',
    description: 'Quelques exemples de solutions web que nous concevons pour des marques de différents secteurs.',
    allLink: 'Voir toutes nos réalisations',
    allLinkSoonNote: 'La page Réalisations sera bientôt en ligne.',
    conceptTag: 'Projet concept',
    viewProject: 'Voir le projet',
    sliderLabel: 'Exemples de projets',
    prev: 'Projets précédents',
    next: 'Projets suivants',
    dialogClose: 'Fermer',
    previewAlt: (name: string) => `Aperçu du site web : ${name}`,
    projects: {
      collection: {
        name: 'Boutique de collection',
        sector: 'Commerce',
        summary:
          'Un concept de vitrine épurée pour une boutique d’objets de collection, qui met en avant les produits par catégorie.',
      },
      cafe: {
        name: 'Café de quartier',
        sector: 'Restauration',
        summary:
          'Un concept de site aux tons chaleureux pour un café, qui présente la carte, les horaires et l’adresse en un coup d’œil.',
      },
      barber: {
        name: 'Barbier',
        sector: 'Soins personnels',
        summary:
          'Un concept de site pour un barbier, aux tons sombres et à la typographie nette, centré sur les prestations et la prise de rendez-vous.',
      },
      corporate: {
        name: 'Services aux entreprises',
        sector: 'Conseil',
        summary:
          'Un concept de site institutionnel sobre et rassurant, qui présente les domaines d’activité en blocs bien organisés.',
      },
      architecture: {
        name: 'Studio d’architecture',
        sector: 'Architecture',
        summary: 'Un concept de portfolio minimaliste et aéré, qui laisse toute la place aux visuels des projets.',
      },
    },
  },

  packages: {
    title: 'Nos offres',
    subtitle: 'Des formules adaptées à vos besoins',
    description:
      'Choisissons ensemble l’offre qui vous convient le mieux ; il vous suffit de nous contacter pour recevoir un devis clair.',
    contactLink: 'Contactez-nous dès maintenant',
    cta: 'Nous contacter',
    ctaLabel: (name: string) => `Nous contacter au sujet de l’offre ${name}`,
    sliderLabel: 'Offres',
    prev: 'Offre précédente',
    next: 'Offre suivante',
    scopeListLabel: 'Contenu de l’offre',
    note:
      'Le contenu de chaque offre est précisé selon vos besoins. Le budget publicitaire, le nom de domaine, l’hébergement et les abonnements à des services tiers sont évalués séparément.',
    types: {
      project: 'Sur projet',
      monthly: 'Service mensuel',
    },
    items: {
      starter: {
        name: 'Web Essentiel',
        summary: 'Un démarrage simple, rapide et professionnel pour votre marque.',
        audience: 'Petites entreprises et marques personnelles qui se lancent en ligne.',
        scope: [
          'Site vitrine d’une page',
          'Design responsive adapté à votre marque',
          'Sections services et contact',
          'Optimisations SEO de base sur la page',
          'Mise en ligne et guide d’utilisation',
        ],
      },
      corporate: {
        name: 'Site institutionnel',
        summary: 'Présentez votre marque et vos services dans une structure claire.',
        audience: 'Entreprises qui ont besoin d’une présentation plus complète.',
        scope: [
          'Structure de site multipage',
          'Pages de services et de projets',
          'Responsive et accessibilité',
          'SEO technique et performances',
          'Organisation des mises à jour de contenu',
        ],
      },
      ecommerce: {
        name: 'E-commerce',
        summary: 'Présentez vos produits dans une boutique claire et rassurante.',
        audience: 'Entreprises qui souhaitent vendre leurs produits en ligne.',
        scope: [
          'Structure des produits et des catégories',
          'Design de boutique responsive',
          'Mise en place du panier et du paiement',
          'Configuration des commandes et des stocks',
          'SEO produit de base et formation à la gestion',
        ],
      },
      seo: {
        name: 'SEO et contenu',
        summary: 'Améliorez votre visibilité dans les moteurs de recherche grâce à un travail planifié et mesurable.',
        audience: 'Entreprises qui souhaitent développer leur visibilité naturelle.',
        scope: [
          'Audit SEO technique',
          'Recherche de mots-clés et d’intentions de recherche',
          'Optimisation des titres et des contenus',
          'Plan de contenu et suggestions de maillage interne',
          'Suivi des performances dans Search Console',
        ],
      },
      social: {
        name: 'Réseaux sociaux',
        summary: 'Une présence cohérente et régulière sur les réseaux sociaux.',
        audience: 'Entreprises qui souhaitent animer leurs réseaux sociaux avec régularité.',
        scope: [
          'Analyse du compte et de la concurrence',
          'Calendrier éditorial mensuel',
          'Visuels de publications et de stories',
          'Rédaction et planification des publications',
          'Bilan mensuel des performances',
        ],
      },
      ads: {
        name: 'Publicité digitale',
        summary: 'Touchez les bonnes personnes avec des annonces adaptées à vos objectifs.',
        audience: 'Entreprises qui souhaitent générer des demandes, des visites ou des ventes grâce à la publicité.',
        scope: [
          'Ciblage et plan de campagne',
          'Configuration de Google Ads ou Meta Ads',
          'Textes et variantes créatives des annonces',
          'Mise en place du suivi des conversions',
          'Optimisation continue et reporting',
        ],
      },
    },
  },

  about: {
    title: 'À propos',
    story:
      'VEVORA part d’une idée simple : présenter une marque en ligne n’a pas besoin d’être compliqué. Nous réunissons le design, la technologie et la communication autour d’un même objectif, pour aider les entreprises à s’exprimer de façon claire, cohérente et qui leur ressemble. Chaque projet commence par l’écoute, et nous tenons à transformer les besoins en solutions simples et pratiques.',
    quote: ['Dans le monde digital, votre première impression', 'est une porte.'],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contactez-nous',
    channels: {
      email: 'E-mail',
      phone: 'Téléphone',
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
    tagline:
      'Des solutions simples et pratiques en création de sites web, e-commerce, SEO, réseaux sociaux et publicité digitale.',
    linksLabel: 'Menu du pied de page',
    socialLabel: 'Canaux de contact',
    copyright: 'VEVORA. Tous droits réservés.',
  },
};
