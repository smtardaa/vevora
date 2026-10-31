// Konsept proje önizleme pencereleri (yerel <dialog>).
// Tetikleyici bir bağlantıdır; JavaScript yoksa doğrudan önizleme görseline gider.

export function initDialogs() {
  document.querySelectorAll<HTMLAnchorElement>('[data-dialog-open]').forEach((trigger) => {
    const dialog = document.getElementById(trigger.dataset.dialogOpen ?? '');
    if (!(dialog instanceof HTMLDialogElement) || typeof dialog.showModal !== 'function') return;

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.showModal();
    });

    dialog.addEventListener('close', () => trigger.focus());
  });

  document.querySelectorAll<HTMLDialogElement>('[data-dialog]').forEach((dialog) => {
    dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog.close());
    // Arka plana tıklayınca kapanır.
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}
