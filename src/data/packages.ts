// Merkezi paket listesi. Görünen metinler `src/i18n/<dil>.ts` içinde paket kimliğiyle tutulur.
// Fiyat, teslim süresi veya garanti bilgisi bilerek bulunmaz.

export type PackageId = 'starter' | 'corporate' | 'ecommerce' | 'seo' | 'social' | 'ads';
export type PackageType = 'project' | 'monthly';

export interface ServicePackage {
  id: PackageId;
  type: PackageType;
}

export const packages: ServicePackage[] = [
  { id: 'starter', type: 'project' },
  { id: 'corporate', type: 'project' },
  { id: 'ecommerce', type: 'project' },
  { id: 'seo', type: 'monthly' },
  { id: 'social', type: 'monthly' },
  { id: 'ads', type: 'monthly' },
];
