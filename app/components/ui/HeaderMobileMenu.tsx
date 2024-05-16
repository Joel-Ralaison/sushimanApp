import Link from "next/link";
import { useEffect } from "react";

import AsianDecoration from "./Reusables/AsianDecoration";
import { MENU_LINKS } from "@/constants/MENU_LINKS";
import { toggleScroll } from "@/utils/toggleScroll";
import { BiMenuAltRight } from "react-icons/bi";
import scrollToTop from "@/utils/scrollToTop";

import { clsx } from "clsx";
import { useScreenDetect } from "@/utils/useScreenDetect";
import { useMenuState } from "@/utils/menuStore";

export default function MobileMenu() {
  const menuOpen = useMenuState((store) => store.menuOpen);
  const menuToggle = useMenuState((store) => store.menuToggle);
  const menuHide = useMenuState((store) => store.menuHide);

  const isMobile = useScreenDetect();

  function handleMenuToogle() {
    menuToggle();
    toggleScroll(menuOpen ? "enabled" : "desabled");
  }

  useEffect(() => {
    menuHide();
  }, [isMobile, menuHide]);

  return (
    <section className="relative z-20 flex flex-1 justify-end selection:bg-gray-500/50 md:hidden">
      <button
        type="button"
        title="menuToggler"
        onClick={handleMenuToogle}
        className={clsx({ "pr-[17px]": menuOpen })}
      >
        <BiMenuAltRight className="w-16 text-3xl text-white" />
      </button>

      {menuOpen ? (
        <ul className="fixed left-0 top-[55px] flex h-[calc(100svh-55px)] w-full flex-col items-center justify-around bg-primary py-[4vh] text-3xl font-light text-white">
          <li>
            <button
              type="button"
              className="w-full origin-left px-[10vw] py-4 transition-all hover:text-4xl"
              onClick={() => {
                menuHide();
                toggleScroll("enabled");
                scrollToTop();
              }}
            >
              Home
            </button>
          </li>

          {MENU_LINKS.map((link) => (
            <li
              key={link.path}
              onClick={() => {
                menuHide();
                toggleScroll("enabled");
              }}
            >
              <Link
                href={link.path}
                className="w-full origin-left px-[10vw] py-4 transition-all hover:text-4xl"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <AsianDecoration />
        </ul>
      ) : null}
    </section>
  );
}
