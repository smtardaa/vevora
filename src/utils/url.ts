// Yayın köküne (GitHub Pages alt yolu dahil) göre site içi adres üretir.
// BASE_URL "/" veya "/repo" / "/repo/" olabilir; sondaki eğik çizgi normalize edilir,
// böylece base yolu hiçbir zaman iki kez eklenmez.

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const withBase = (path: string) => `${base}/${path.replace(/^\/+/, '')}`;
