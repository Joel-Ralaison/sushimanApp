"use client";

import { useScreenDetect } from "@/utils/useScreenDetect";
import HeaderLogo from "./ui/HeaderLogo";
import Menu from "./ui/HeaderMenu";
import MobileMenu from "./ui/HeaderMobileMenu";

export default function Header() {
  useScreenDetect();

  return (
    <header className="primary fixed top-0 z-20 h-[60px] w-full overflow-hidden rounded-b-md bg-primary shadow-lg shadow-black/15 md:max-w-screen-xl md:bg-creamson">
      <nav className="flex items-center">
        <HeaderLogo />
        <Menu />
        <MobileMenu />
      </nav>
    </header>
  );
}
