import Link from "next/link";

import AsianDecoration from "./Reusables/AsianDecoration";
import { MENU_LINKS } from "@/constants/MENU_LINKS";
import { BiMenuAltRight } from "react-icons/bi";

export default function MobileMenu() {
  return (
    <details className="relative z-20 flex flex-1 justify-end">
      <summary className="flex cursor-pointer list-none justify-end px-1 py-2">
        <BiMenuAltRight className="w-16 text-3xl text-white md:hidden" />
      </summary>

      <ul className="fixed left-0 top-[55px] flex h-[calc(100svh-55px)] w-full flex-col items-center gap-10 bg-primary font-light text-white">
        {MENU_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}

        <AsianDecoration />
      </ul>
    </details>
  );
}

// TODO: LINKS to button autoscroll to refs
