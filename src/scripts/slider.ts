// Kaydırma tabanlı slider. Asıl kaydırma CSS scroll-snap ile yapılır; bu modül yalnızca
// ok butonlarını ekler ve ilk/son konumda ilgili butonu pasifleştirir.
// Sonsuz döngü ve kopya kart yoktur; JavaScript olmadan liste yine kaydırılabilir.

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initSliders() {
  document.querySelectorAll<HTMLElement>('[data-slider]').forEach((root) => {
    const track = root.querySelector<HTMLElement>('[data-slider-track]');
    const controls = root.querySelector<HTMLElement>('[data-slider-controls]');
    const prev = root.querySelector<HTMLButtonElement>('[data-slider-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-slider-next]');
    if (!track || !controls || !prev || !next) return;

    const step = () => {
      const item = track.firstElementChild as HTMLElement | null;
      if (!item) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item.getBoundingClientRect().width + gap;
    };

    const update = () => {
      const scrollable = track.scrollWidth - track.clientWidth > 1;
      controls.hidden = !scrollable;
      // Grid düzeninde kaydırılacak bir şey yoksa liste ayrıca sekme durağı olmasın.
      if (scrollable) track.setAttribute('tabindex', '0');
      else track.removeAttribute('tabindex');
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    };

    const move = (direction: 1 | -1) => {
      track.scrollBy({ left: direction * step(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    };

    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
  });
}
