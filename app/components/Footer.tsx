import facebook from "/public/assets/facebook.svg";
import twitter from "/public/assets/twitter.svg";
import instagram from "/public/assets/instagram.svg";
import Image from "next/image";
import Menu from "./ui/Menu";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-white px-5 py-3">
      <FooterLogo />
      <Menu />

      <SocialMedia />
    </footer>
  );
}

function FooterLogo() {
  return (
    <h2 className="font-playfair text-3xl font-semibold">
      <Link href="/">
        <span className="text-primary">Sushi</span>
        <span className="text-secondary">Man</span>
      </Link>
    </h2>
  );
}

function SocialMedia() {
  const mediaLinks = [
    { href: "https://www.facebook.com", image: facebook },
    { href: "https://www.twitter.com", image: twitter },
    { href: "https://www.instagram.com", image: instagram },
  ];
  return (
    <ul className="flex items-center gap-2">
      {mediaLinks.map((media) => (
        <li
          key={media.href}
          className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-black"
        >
          <a href={media.href} target="_blank">
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
