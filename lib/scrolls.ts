type ScrollToHashOptions = {
  offset?: number; // компенсировать fixed header
  retries?: number; // сколько кадров ждать появления секции (dynamic import)
};

export function scrollToHash(hash: string, opts: ScrollToHashOptions = {}) {
  if (typeof window === "undefined") return;

  const selector = hash.startsWith("#") ? hash : `#${hash}`;
  const retries = opts.retries ?? 60; // ~1s на 60fps
  const offset = opts.offset ?? 0;

  // Обновляем hash, чтобы URL был корректным
  if (window.location.hash !== selector) {
    window.location.hash = selector;
  }

  let attempts = 0;

  const tryScroll = () => {
    const el = document.querySelector(selector) as HTMLElement | null;

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    attempts += 1;
    if (attempts < retries) {
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}
