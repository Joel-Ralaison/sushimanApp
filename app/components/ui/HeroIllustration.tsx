import Image from "next/image";
import { sushiHero } from "@/constants/IMAGES_LIST";
import AsianDecoration from "./Reusables/AsianDecoration";

export default function HeroIllustration() {
  return (
    <article className="relative z-[5] flex h-[calc(100svh-55px)] w-full flex-col bg-emerald-400 md:w-[44.5%]">
      <Image
        src={sushiHero}
        alt="sushi"
        className="w-[100%)] h-[90%] object-contain"
      />

      <AsianDecoration />

      <div className="absolute inset-0 z-[-1] h-[calc(100svh-55px)] w-full bg-primary"></div>
    </article>
  );
}
