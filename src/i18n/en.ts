// English (default language). The structure of this dictionary defines the `Dictionary` type;
// fr.ts, de.ts and it.ts must provide the same keys. Components contain no copy.

import type { NavId } from '../data/navigation';
import type { PackageId, PackageType } from '../data/packages';
import type { Project } from '../data/projects';
import type { ChannelId } from '../data/contact';

type ProjectCopy = Record<Project['id'], { name: string; sector: string; summary: string }>;
type PackageCopy = Record<PackageId, { name: string; summary: string; audience: string; scope: string[] }>;

export const en = {
  meta: {
    title: 'VEVORA — Web design and digital solutions',
    description:
      'VEVORA helps businesses with clear, practical solutions in web design, e-commerce, SEO, social media and digital advertising.',
  },

  common: {
    soon: 'Soon',
    soonLong: 'Coming soon',
    skipToContent: 'Skip to content',
    logoAlt: 'VEVORA',
    homeLinkLabel: 'VEVORA home',
  },

  language: {
    label: 'Language',
    change: 'Change language',
  },

  nav: {
    label: 'Main menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    items: {
      home: 'Home',
      works: 'Our work',
      packages: 'Packages',
      about: 'About us',
      brief: 'Tell us about your project',
      faq: 'FAQ',
      contact: 'Contact',
    } as Record<NavId, string>,
  },

  hero: {
    title: 'VEVORA',
    actions: {
      packages: 'View packages',
      contact: 'Contact',
      brief: 'Tell us about your project',
    },
  },

  works: {
    title: 'Our work',
    subtitle: 'Sample and real projects',
    description: 'A few examples of the web solutions we design for brands across different industries.',
    allLink: 'View all our work',
    allLinkSoonNote: 'Our work page is coming soon.',
    conceptTag: 'Concept project',
    viewProject: 'View project',
    sliderLabel: 'Project examples',
    prev: 'Previous projects',
    next: 'Next projects',
    dialogClose: 'Close',
    previewAlt: (name: string) => `Website preview: ${name}`,
    projects: {
      collection: {
        name: 'Collection Store',
        sector: 'Retail',
        summary: 'A concept for a collectibles shop: a clean storefront that highlights products by category.',
      },
      cafe: {
        name: 'Neighbourhood Café',
        sector: 'Food & drink',
        summary: 'A warm-toned café website concept that shows the menu, opening hours and location at a glance.',
      },
      barber: {
        name: 'Barbershop',
        sector: 'Personal care',
        summary:
          'A barbershop website concept with dark tones and crisp typography, focused on services and getting in touch to book.',
      },
      corporate: {
        name: 'Corporate Services',
        sector: 'Consulting',
        summary: 'A clean, trustworthy corporate website concept that presents service areas in well-organised blocks.',
      },
      architecture: {
        name: 'Architecture Studio',
        sector: 'Architecture',
        summary: 'A minimal portfolio concept with generous white space that gives room to project imagery.',
      },
    } as ProjectCopy,
  },

  packages: {
    title: 'Our packages',
    subtitle: 'Options to suit your needs',
    description: 'Let’s find the right package together. For a clear quote, simply get in touch.',
    contactLink: 'Get in touch now',
    cta: 'Contact us',
    ctaLabel: (name: string) => `Contact us about the ${name} package`,
    sliderLabel: 'Packages',
    prev: 'Previous package',
    next: 'Next package',
    scopeListLabel: 'Scope',
    note:
      'Package scope is tailored to your needs. Ad budgets, domain names, hosting and third-party subscriptions are assessed separately.',
    types: {
      project: 'Project-based',
      monthly: 'Monthly service',
    } as Record<PackageType, string>,
    items: {
      starter: {
        name: 'Web Starter',
        summary: 'A simple, fast and professional start for your brand.',
        audience: 'Small businesses and personal brands going online for the first time.',
        scope: [
          'One-page showcase website',
          'Mobile-friendly design tailored to your brand',
          'Services and contact sections',
          'Basic on-page SEO',
          'Launch and user guide',
        ],
      },
      corporate: {
        name: 'Corporate Web',
        summary: 'Present your brand and services in a clear structure.',
        audience: 'Businesses that need a more comprehensive corporate presence.',
        scope: [
          'Multi-page corporate site structure',
          'Service and project pages',
          'Mobile and accessibility improvements',
          'Technical SEO and performance improvements',
          'A planned process for content updates',
        ],
      },
      ecommerce: {
        name: 'E-Commerce',
        summary: 'Present your products in a clear store that inspires trust.',
        audience: 'Businesses that want to sell their products online.',
        scope: [
          'Product and category structure',
          'Mobile-friendly store design',
          'Cart and checkout setup',
          'Order and inventory configuration',
          'Basic product SEO and admin training',
        ],
      },
      seo: {
        name: 'SEO & Content',
        summary: 'Improve your search visibility through planned, measurable work.',
        audience: 'Businesses looking to grow their organic visibility.',
        scope: [
          'Technical SEO review',
          'Keyword and search intent research',
          'Page title and content improvements',
          'Content plan and internal linking suggestions',
          'Performance tracking in Search Console',
        ],
      },
      social: {
        name: 'Social Media',
        summary: 'A consistent, well-organised social media presence for your brand.',
        audience: 'Businesses that want to run their social media communication regularly.',
        scope: [
          'Account and competitor review',
          'Monthly content calendar',
          'Post and story designs',
          'Copywriting and publishing schedule',
          'Monthly performance review',
        ],
      },
      ads: {
        name: 'Digital Advertising',
        summary: 'Reach the right people with ads built around your goals.',
        audience: 'Businesses that want to use advertising to generate enquiries, visits or sales.',
        scope: [
          'Audience and campaign planning',
          'Google Ads or Meta Ads setup',
          'Ad copy and creative variations',
          'Conversion tracking setup',
          'Ongoing optimisation and reporting',
        ],
      },
    } as PackageCopy,
  },

  about: {
    title: 'About us',
    story:
      'VEVORA starts from a simple idea: telling a brand’s story online doesn’t have to be complicated. We bring design, technology and communication together around a single purpose, helping businesses express themselves in a voice that is clear, consistent and truly their own. We begin every project by listening, and we care about turning needs into simple, practical solutions.',
    // Two parts only for a readable line break; the sentence itself is not altered.
    quote: ['Your first impression in the digital world', 'is a door.'],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    channels: {
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      facebook: 'Facebook',
      tiktok: 'TikTok',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    } as Record<ChannelId, string>,
  },

  footer: {
    tagline: 'Clear, practical solutions in web design, e-commerce, SEO, social media and digital advertising.',
    linksLabel: 'Footer menu',
    socialLabel: 'Contact channels',
    // Rendered after "© <year>"; the year is refreshed in the browser.
    copyright: 'VEVORA. All rights reserved.',
  },
};

export type Dictionary = typeof en;
