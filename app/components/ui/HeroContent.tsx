import Image from "next/image";

import TitleH2 from "./Reusables/TitleH2";
import { user } from "@/constants/IMAGES_LIST";
import { MotionDiv, MotionArticle } from "./Reusables/Motions";
import { fade } from "@/utils/motionVariants";
import CallToAction from "./Reusables/CallToAction";

export default function HeroContent() {
  return (
    <article className="flex w-full flex-col items-center justify-start pt-10 text-center md:h-[calc(100svh-55px)] md:w-[55.5%] md:justify-between md:pt-[4%] md:text-start">
      <CTA />
      <Testimonial />
    </article>
  );
}

function CTA() {
  return (
    <article className="flex flex-col gap-4 md:pl-10">
      <MotionDiv
        variants={fade("bottom", "", 0.5, "beforeChildren")}
        initial="start"
        animate="stop"
      >
        <TitleH2 type="main"> Feel the taste of Japanese food</TitleH2>

        <p className="ml-8 mt-6 text-[18px] font-normal text-secondary md:mb-4">
          Tasty Japanese food, anywhere anytime
        </p>
      </MotionDiv>

      <CallToAction />
    </article>
  );
}

function Testimonial() {
  return (
    <MotionArticle
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="flex w-full flex-col items-center gap-8 bg-white px-4 py-2 md:w-[100%] md:flex-row md:justify-center md:gap-5 "
    >
      <section className="w-[30%] gap-3 text-center md:border-r md:border-zinc-200">
        <h4 className="font-playfair text-3xl tablet:text-5xl">
          <span>24</span>
          <span>k+</span>
        </h4>

        <p className="font-jakarta text-zinc-500">Happy customers</p>
      </section>

      <section className="flex w-[68%] items-center gap-2 text-sm">
        <Image
          src={user}
          alt="user"
          style={{ width: "60px", height: "60px" }}
        />

        <p>
          &apos; This is the best Japanese food delivery service that ever
          existed.&apos;
        </p>
      </section>
    </MotionArticle>
  );
}
