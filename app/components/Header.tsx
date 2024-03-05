import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Food", href: "#food" },
  { label: "Services", href: "#services" },
  { label: "About-us", href: "#about" },
];

export default function Header() {
  return (
    <header className="top-0 max-w-screen-xl bg-primary md:bg-transparent">
      <nav className="flex items-center">
        <Logo />
        <Menu />
        <BiMenuAltRight className="md:hidden text-3xl text-white pr-2 w-16" />
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <article className="flex-1 overflow-hidden relative px-5 pt-3 pb-4">
      <h1 className="pl-5 font-playfair z-[2] text-white font-bold text-xl">
        SushiMan
      </h1>
      <div className="w-full absolute inset-0 z-[-1] bg-primary"></div>
    </article>
  );
}

function Menu() {
  return (
    <ul className="hidden md:flex justify-evenly w-[55%]">
      {links.map((link) => (
        <Link
          className=""
          key={link.href}
          href={link.href}>
          {link.label}
        </Link>
      ))}

      <Link href="#">
        <FaSearch className="text-xl relative top-1 text-zinc-500" />
      </Link>
    </ul>
  );
}
