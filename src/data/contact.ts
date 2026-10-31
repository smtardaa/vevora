// Merkezi iletişim kanalları. Sıralama, iletişim bölümündeki kart sıralamasıdır.
//
// Bir kanalı etkinleştirmek için yalnızca `value` (görünen bilgi) ve `href` (gerçek bağlantı)
// alanlarını doldurmak yeterlidir. İkisi de dolu olmayan kanal "Yakında eklenecek" olarak pasif kalır.
// Doğrulanmamış veya örnek bilgi girmeyin; örnek telefon numaraları tel:/wa.me bağlantısına çevrilmez.
//
// Örnek (gerçek bilgi geldiğinde):
//   email:    value: 'ornek@alanadi.com',  href: 'mailto:ornek@alanadi.com'
//   phone:    value: '+90 ...',            href: 'tel:+90...'
//   whatsapp: value: '+90 ...',            href: 'https://wa.me/90...'

import type { IconName } from './icons';

export type ChannelId =
  | 'email'
  | 'phone'
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'telegram'
  | 'linkedin'
  | 'github';

export interface ContactChannel {
  id: ChannelId;
  icon: IconName;
  value: string | null;
  href: string | null;
}

export const contactChannels: ContactChannel[] = [
  { id: 'email', icon: 'mail', value: null, href: null },
  { id: 'phone', icon: 'phone', value: null, href: null },
  { id: 'whatsapp', icon: 'whatsapp', value: null, href: null },
  { id: 'instagram', icon: 'instagram', value: null, href: null },
  { id: 'facebook', icon: 'facebook', value: null, href: null },
  { id: 'tiktok', icon: 'tiktok', value: null, href: null },
  { id: 'telegram', icon: 'telegram', value: null, href: null },
  { id: 'linkedin', icon: 'linkedin', value: null, href: null },
  { id: 'github', icon: 'github', value: null, href: null },
];

export const isChannelActive = (channel: ContactChannel) => Boolean(channel.value && channel.href);

export const activeChannels = () => contactChannels.filter(isChannelActive);

// Yeni sekmede açılması gereken (web profili) kanallar.
export const opensExternally = (channel: ContactChannel) => Boolean(channel.href?.startsWith('http'));
