import Image from "next/image";

import { sushi2, sushi3 } from "@/constants/IMAGES_LIST";

import { MotionDiv } from "./Reusables/Motions";
import { fade } from "@/utils/motionVariants";
import { LearnMoreButton } from "./Reusables/LearnMoreButton";

export default function AboutIllustration() {
  return (
    <article className="relative flex h-[calc(100svh-55px)] min-h-[400px] w-full flex-col justify-center bg-white md:w-[45%]">
      <MotionDiv
        variants={fade("", "left", 0.25)}
        initial="start"
        whileInView={"stop"}
        style={{ backgroundImage: "url('/assets/about_bg1.png')" }}
        className="flex h-[50%] flex-1 items-center justify-center border-b border-creamson bg-contain bg-center bg-no-repeat py-8"
      >
        <Image
          src={sushi3}
          alt="sushi image 2"
          style={{ height: "85%", objectFit: "contain" }}
        />
      </MotionDiv>

      <LearnMoreButton />

      <MotionDiv
        variants={fade("", "left", 0.25)}
        initial="start"
        whileInView={"stop"}
        style={{ backgroundImage: "url('/assets/about_bg2.png')" }}
        className="flex h-[50%] flex-1 items-center justify-center bg-contain bg-center bg-no-repeat py-8"
      >
        <Image
          src={sushi2}
          alt="sushi image 3"
          style={{ height: "70%", objectFit: "contain" }}
        />
      </MotionDiv>
    </article>
  );
}
