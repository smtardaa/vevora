// Header'daki açılır öğeler (mobil menü, dil seçici) aynı anda açık kalmasın diye
// açılan öğe kendini duyurur; diğerleri kapanır.

const EVENT = 'vevora:popup-open';

export const announceOpen = (id: string) => document.dispatchEvent(new CustomEvent(EVENT, { detail: id }));

export const onOtherOpen = (id: string, close: () => void) =>
  document.addEventListener(EVENT, (event) => {
    if ((event as CustomEvent<string>).detail !== id) close();
  });
