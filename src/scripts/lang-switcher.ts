// Dil seçici: gerçek bağlantılardan oluşan, tıklama/dokunma ve klavyeyle çalışan açılır liste.
// - Escape ile kapanır ve odak dil butonuna döner; dışarı tıklama veya odağın çıkmasıyla kapanır.
// - URL'de geçerli bir bölüm hash'i varsa (#packages gibi) dil bağlantılarına eklenir.
// - Tarayıcı diline göre yönlendirme ve kayıtlı tercih YOKTUR: dil yalnızca URL'den belirlenir.

import { announceOpen, onOtherOpen } from './popups';

export function initLanguageSwitcher() {
  const root = document.querySelector<HTMLElement>('[data-lang]');
  const toggle = root?.querySelector<HTMLButtonElement>('[data-lang-toggle]');
  const links = root ? [...root.querySelectorAll<HTMLAnchorElement>('[data-lang-link]')] : [];
  if (!root || !toggle || links.length === 0) return;

  const sections = new Set((root.dataset.sections ?? '').split(' ').filter(Boolean));
  const basePaths = links.map((link) => link.getAttribute('href') ?? '');

  const syncHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const hash = sections.has(id) ? `#${id}` : '';
    links.forEach((link, index) => link.setAttribute('href', basePaths[index] + hash));
  };

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const setOpen = (open: boolean, { restoreFocus = false } = {}) => {
    toggle.setAttribute('aria-expanded', String(open));
    root.toggleAttribute('data-open', open);
    if (open) {
      syncHash();
      announceOpen('lang');
    }
    if (!open && restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));
  onOtherOpen('lang', () => isOpen() && setOpen(false));

  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      event.stopPropagation();
      setOpen(false, { restoreFocus: true });
    }
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && !root.contains(event.target as Node)) setOpen(false);
  });

  root.addEventListener('focusout', (event) => {
    const next = event.relatedTarget as Node | null;
    if (isOpen() && next && !root.contains(next)) setOpen(false);
  });

  window.addEventListener('hashchange', syncHash);
  syncHash();
}
