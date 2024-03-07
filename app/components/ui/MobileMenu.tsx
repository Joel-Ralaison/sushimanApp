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
    <details className="z-20 relative flex-1 flex justify-end">
      <summary className="list-none py-2 px-1 cursor-pointer flex justify-end">
        <BiMenuAltRight className="md:hidden text-3xl text-white w-16" />
      </summary>

      <ul className="fixed top-[60px] left-0 w-full h-[calc(100svh-60px)] bg-primary flex flex-col items-center gap-10 text-white font-light">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </details>
  );
}
