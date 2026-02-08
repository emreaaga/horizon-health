export function scrollToHash(hash: string) {
  if (typeof window === "undefined") return;

  const selector = hash.startsWith("#") ? hash : `#${hash}`;
  const el = document.querySelector(selector);

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = selector;
  }
}
