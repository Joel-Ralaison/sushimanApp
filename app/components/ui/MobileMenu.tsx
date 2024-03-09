import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Food", href: "#food" },
  { label: "Services", href: "#services" },
  { label: "About-us", href: "#about" },
];

export default function MobileMenu() {
  return (
    <details className="relative z-20 flex flex-1 justify-end">
      <summary className="flex cursor-pointer list-none justify-end px-1 py-2">
        <BiMenuAltRight className="w-16 text-3xl text-white md:hidden" />
      </summary>

      <ul className="fixed left-0 top-[60px] flex h-[calc(100svh-60px)] w-full flex-col items-center gap-10 bg-primary font-light text-white">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}

        <h2 className="absolute bottom-5 left-0 flex flex-col pl-2 font-playfair text-7xl font-bold text-white/90">
          <span>日</span>
          <span>本</span>
          <span>食</span>
        </h2>
      </ul>
    </details>
  );
}
