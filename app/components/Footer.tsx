"use client";

import Image from "next/image";
import { MEDIA_LINKS } from "../../constants/SOCIAL_MEDIA_LISTS";

export default function Footer() {
  return (
    <footer className="shad flex items-center justify-between bg-primary px-5 py-3">
      <FooterLogo />
      <SocialMedia />
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="items-center gap-4 font-playfair font-semibold">
      <p className="font-regular font-jakarta text-sm tablet:text-lg">
        A front-end project based on{" "}
        <span className="text-white">JS Mastery</span> course
      </p>
    </div>
  );
}

function SocialMedia() {
  return (
    <ul className="flex items-center gap-2">
      {MEDIA_LINKS.map((media) => (
        <li
          key={media.href}
          className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-primary"
        >
          <a href={media.href} target="_blank" title={media.href}>
            <Image
              src={media.image}
              alt={media.href}
              style={{ width: "100%", height: "100%", padding: "5px" }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
