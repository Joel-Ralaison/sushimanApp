import Image from "next/image";
import { MotionDiv } from "./Reusables/Motions";

import { sushiHero } from "@/constants/IMAGES_LIST";
import AsianDecoration from "./Reusables/AsianDecoration";

const sushiImageVariants = {
  start: { opacity: 0, x: "-10%", y: "-10%" },
  stop: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay: 0.25, type: "tween", duration: 0.75 },
  },
};

export default function HeroIllustration() {
  return (
    <article className="relative z-[5] flex h-[calc(100svh-55px)] w-full flex-col md:w-[44.5%]">
      <MotionDiv
        className="h-[90%] w-full"
        variants={sushiImageVariants}
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
