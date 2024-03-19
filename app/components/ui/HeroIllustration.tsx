import Image from "next/image";

import { sushiHero } from "@/constants/IMAGES_LIST";
import AsianDecoration from "./Reusables/AsianDecoration";

export default function HeroIllustration() {
  return (
    <article className="relative z-[5] flex h-[calc(100svh-55px)] w-full flex-col md:w-[44.5%]">
      <div>
        <Image
          src={sushiHero}
          alt="sushi"
          style={{ height: "85svh", objectFit: "contain" }}
        />
      </div>
      <AsianDecoration />
      <div className="absolute inset-0 z-[-1] h-[calc(100svh-55px)] w-full bg-primary" />
    </article>
  );
}
