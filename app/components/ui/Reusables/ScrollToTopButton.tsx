"use client";

import { useMenuState } from "@/utils/menuStore";
import scrollToTop from "@/utils/scrollToTop";

export function ScrollToTopButton() {
  const menuHide = useMenuState((store) => store.menuHide);
  return (
    <button
      type="button"
      className="z-[2] h-full px-5 py-1 font-playfair text-xl font-bold text-white"
      onClick={() => {
        menuHide();
        scrollToTop();
      }}
    >
      SushiMan
    </button>
  );
}
