import Image from "next/image";

import { sushiHero } from "@/constants/IMAGES_LIST";
import AsianDecoration from "./Reusables/AsianDecoration";

import { MotionDiv } from "./Reusables/Motions";
import { fade } from "@/utils/motionVariants";

export default function HeroIllustration() {
  return (
    <article className="relative z-[5] flex h-[calc(100svh-55px)] w-full flex-col md:w-[44.5%]">
      <MotionDiv
        className="h-[90%] w-full"
        variants={fade("top", "left", 0.5)}
        initial="start"
        animate="stop"
      >
        <Image
          src={sushiHero}
          alt="sushi"
          className="h-full w-full object-contain"
        />
      </MotionDiv>

      <AsianDecoration />

      <div className="absolute inset-0 z-[-1] h-[calc(100svh-55px)] w-full bg-primary" />
    </article>
  );
}
