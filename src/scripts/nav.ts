// Mobil menü: aç/kapa, Escape, dışarı tıklama ve bölüm seçildiğinde kapanma.
// Menü kapalıyken CSS `display: none` uyguladığı için gizli bağlantılar odak almaz.
// Geniş/dar düzen kararını Header.astro içindeki satır içi betik `data-layout` ile verir.

import { announceOpen, onOtherOpen } from './popups';

export function initNav() {
  const header = document.querySelector<HTMLElement>('[data-nav]');
  const toggle = header?.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const menu = header?.querySelector<HTMLElement>('[data-nav-menu]');
  const label = toggle?.querySelector<HTMLElement>('[data-nav-toggle-label]');
  if (!header || !toggle || !menu || !label) return;

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const isCompact = () => header.dataset.layout !== 'wide';

  const setOpen = (open: boolean, { restoreFocus = false } = {}) => {
    toggle.setAttribute('aria-expanded', String(open));
    label.textContent = (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '';
    header.toggleAttribute('data-open', open);
    if (open) announceOpen('nav');
    if (!open && restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));
  onOtherOpen('nav', () => isOpen() && setOpen(false));

  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a') && isCompact()) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) setOpen(false, { restoreFocus: true });
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && !menu.contains(event.target as Node) && !toggle.contains(event.target as Node)) setOpen(false);
  });

  // Geniş düzene geçildiğinde açık kalan mobil menü durumunu sıfırla.
  new MutationObserver(() => {
    if (isOpen() && !isCompact()) setOpen(false);
  }).observe(header, { attributes: true, attributeFilter: ['data-layout'] });
}
