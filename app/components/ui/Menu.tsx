import Link from "next/link";

export default function Menu() {
  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Food", href: "#food" },
    { label: "Services", href: "#services" },
    { label: "About-us", href: "#about" },
  ];

  return (
    <ul className="z-20 hidden bg-creamson md:flex md:w-[54.7%] md:justify-evenly">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="px-3 py-2">
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
