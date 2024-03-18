type ScrollType = "enabled" | "desabled";

export function toggleScroll(scrollType: ScrollType) {
  if (typeof window !== "undefined" && window.document) {
    document.body.style.overflow =
      scrollType === "enabled" ? "unset" : "hidden";
  }
}
