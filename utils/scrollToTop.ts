const isBrowser = () => typeof window !== "undefined";

export default function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
