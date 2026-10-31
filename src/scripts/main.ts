import { initNav } from './nav';
import { initLanguageSwitcher } from './lang-switcher';
import { initSliders } from './slider';
import { initDialogs } from './dialog';

initNav();
initLanguageSwitcher();
initSliders();
initDialogs();

// Statik derlemede yazılan yılı ziyaret anındaki yıla güncelle.
document.querySelectorAll('[data-current-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
