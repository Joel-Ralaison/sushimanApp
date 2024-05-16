import Image from "next/image";
import Link from "next/link";
import { MEDIA_LINKS } from "../../constants/SOCIAL_MEDIA_LISTS";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-primary px-5 py-3 max-md:flex-col">
      <FooterText />

      <p className="my-2 text-sm tracking-widest tablet:text-lg">
        <span>
          Rebuilt with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="text-white underline"
          >
            Nextjs
          </Link>{" "}
          by{" "}
        </span>
        <Link
          href="https://joelralaison.vercel.app"
          target="_self"
          className="text-white underline"
        >
          Joël Ralaison
        </Link>
      </p>

      <SocialMedia />
    </footer>
  );
}

function FooterText() {
  return (
    <div className="font-regular flex flex-wrap justify-center font-jakarta text-sm tablet:text-lg">
      <p>
        <span>A front-end project based on</span>{" "}
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=QRrPE9aj3wI&ab_channel=JavaScriptMastery"
          className="text-white underline"
        >
          JS Mastery
        </Link>{" "}
        <span>course</span>
      </p>
    </div>
  );
}

function SocialMedia() {
  return (
    <ul className="mt-2 flex items-center gap-2">
      {MEDIA_LINKS.map((media) => (
        <li
          key={media.href}
          className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-primary"
        >
          <Link href={media.href} target="_blank" title={media.href}>
            <Image
              src={media.image}
              alt={media.href}
              style={{ width: "100%", height: "100%", padding: "5px" }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
