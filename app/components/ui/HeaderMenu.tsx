import Link from "next/link";
import { MENU_LINKS } from "../../../constants/MENU_LINKS";

export default function Menu() {
  return (
    <ul className="z-20 hidden bg-creamson md:flex md:w-[54.7%] md:justify-evenly">
      {MENU_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="px-3 py-2">
          {link.label}
        </Link>
      ))}
    </ul>
  );
}

// TODO: Links to autoscroll to the ref
