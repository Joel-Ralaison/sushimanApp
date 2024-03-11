import Link from "next/link";

import Menu from "./ui/HeaderMenu";
import MobileMenu from "./ui/HeaderMobileMenu";

export default function Header() {
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

function HeaderLogo() {
  return (
    <article className="relative h-[60px] w-[44.5%] overflow-hidden px-5 pb-4 pt-3">
      <h1 className="z-[2] pl-5 font-playfair text-xl font-bold text-white">
        <Link href="/">SushiMan</Link>
      </h1>

      <div className="absolute inset-0 z-[-1] w-full bg-primary"></div>
    </article>
  );
}
