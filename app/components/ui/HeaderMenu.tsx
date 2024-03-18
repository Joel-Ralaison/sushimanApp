import Link from "next/link";
import { MENU_LINKS } from "../../../constants/MENU_LINKS";

export default function Menu() {
  return (
    <ul className="z-20 hidden bg-creamson md:flex md:w-[54.7%] md:justify-evenly">
      {MENU_LINKS.map((link) => (
        <li key={link.path} className="px-3 py-2">
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
