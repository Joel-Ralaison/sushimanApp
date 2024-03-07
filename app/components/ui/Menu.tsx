import Link from "next/link";

export default function Menu() {
  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Food", href: "#food" },
    { label: "Services", href: "#services" },
    { label: "About-us", href: "#about" },
  ];

  return (
    <ul className="hidden md:flex md:justify-evenly md:w-[54.7%] bg-creamson z-20">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-3 py-2">
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
