import Link from "next/link";
import facebook from "/public/assets/facebook.svg";
import twitter from "/public/assets/twitter.svg";
import instagram from "/public/assets/instagram.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-5 py-3 bg-white flex justify-between items-center">
      <h2 className="text-3xl font-semibold font-playfair">
        <span className="text-primary">Sushi</span>
        <span className="text-secondary">Man</span>
      </h2>

      <Menu />

      <SocialMedia />
    </footer>
  );
}

function Menu() {
  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Food", href: "#food" },
    { label: "Services", href: "#services" },
    { label: "About-us", href: "#about" },
  ];

  return (
    <ul className="hidden md:flex justify-evenly w-[55%]">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}>
          {link.label}
        </Link>
      ))}
    </ul>
  );
}

function SocialMedia() {
  const mediaLinks = [
    { href: "https://www.facebook.com", image: facebook },
    { href: "https://www.twitter.com", image: twitter },
    { href: "https://www.instagram.com", image: instagram },
  ];
  return (
    <ul className="flex gap-2 items-center">
      {mediaLinks.map((media) => (
        <li
          key={media.href}
          className="bg-black h-[35px] w-[35px] flex items-center justify-center rounded-full">
          <a
            href={media.href}
            target="_blank">
            <Image
              src={media.image}
              alt={media.href}
              style={{ width: "85%", height: "85%" }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
