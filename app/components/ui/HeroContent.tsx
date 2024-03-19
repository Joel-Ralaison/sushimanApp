import Image from "next/image";

import TitleH2 from "./Reusables/TitleH2";
import { user } from "@/constants/IMAGES_LIST";
import { MotionDiv, MotionArticle } from "./Reusables/Motions";
import { fade } from "@/utils/motionVariants";
import CallToAction from "./Reusables/CallToAction";
import Testimonial from "./Testimonial";

export default function HeroContent() {
  return (
    <article className="flex  h-[550px] w-full flex-col items-center justify-start pt-10 text-center md:h-[calc(100svh-55px)] md:w-[55.5%] md:justify-between md:pt-[4%] md:text-start">
      <CTA />
      <Testimonial />
    </article>
  );
}

function CTA() {
  return (
    <article className="flex flex-col gap-4 md:pl-10">
      <TitleH2 type="main">Feel the taste of Japanese food</TitleH2>

      <MotionDiv
        variants={fade("top", "", 0.5, 0.25, "beforeChildren")}
        initial="start"
        animate="stop"
      >
        <p className="ml-8 mt-6 text-[18px] font-normal text-secondary md:mb-4">
          Tasty Japanese food, anywhere anytime
        </p>
      </MotionDiv>

      <CallToAction />
    </article>
  );
}
