// Merkezi proje listesi. Görünen metinler `src/i18n/<dil>.ts` içinde proje kimliğiyle tutulur.
//
// Şu an gerçek/doğrulanmış müşteri projesi bulunmadığı için tüm kayıtlar özgün konsept önizlemelerdir.
// Gerçek bir proje eklendiğinde `concept: false` ve doğrulanmış yayın adresi `url` alanına yazılır;
// "Projeyi inceleyin" o zaman önizleme penceresi yerine bu adrese gider.

export interface Project {
  id: 'collection' | 'cafe' | 'barber' | 'corporate' | 'architecture';
  image: string;
  concept: boolean;
  url: string | null;
}

export const projects: Project[] = [
  { id: 'collection', image: '/projects/koleksiyon-magazasi.svg', concept: true, url: null },
  { id: 'cafe', image: '/projects/kafe.svg', concept: true, url: null },
  { id: 'barber', image: '/projects/berber.svg', concept: true, url: null },
  { id: 'corporate', image: '/projects/kurumsal-hizmet.svg', concept: true, url: null },
  { id: 'architecture', image: '/projects/mimarlik-studyosu.svg', concept: true, url: null },
];

// Tüm önizleme görselleri aynı en-boy oranındadır (16:10).
export const projectImageSize = { width: 640, height: 400 };
