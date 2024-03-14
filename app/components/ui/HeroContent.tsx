import Image from "next/image";

import { MotionDiv, MotionP, MotionArticle } from "./Reusables/Motions";
import TitleH2 from "./Reusables/TitleH2";
import Button from "./Reusables/Button";

import { user } from "@/constants/IMAGES_LIST";
import { FaPlay } from "react-icons/fa";

export default function HeroContent() {
  return (
    <article className="flex w-full flex-col items-center justify-start pt-10 text-center md:h-[calc(100svh-55px)] md:w-[55.5%] md:justify-between md:pt-[4%] md:text-start">
      <CTA />
      <Testimonial />
    </article>
  );
}

const HeadingVariants = {
  start: { opacity: 0, y: "10%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25, duration: 0.75 },
    when: "beforeChildren",
  },
};

const TextVariants = {
  start: { opacity: 0, y: "-10%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const ButtonContainerVariants = {
  start: { opacity: 0, y: "-15%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25, duration: 0.75 },
  },
};

function CTA() {
  return (
    <article className="flex flex-col gap-4 md:pl-10">
      <MotionDiv variants={HeadingVariants} initial="start" animate="stop">
        <TitleH2 type="main"> Feel the taste of Japanese food</TitleH2>

        <MotionP
          variants={TextVariants}
          className="ml-8 mt-6 text-[18px] font-normal text-secondary md:mb-4"
        >
          Tasty Japanese food, anywhere anytime
        </MotionP>
      </MotionDiv>

      <MotionDiv
        variants={ButtonContainerVariants}
        initial="start"
        animate="stop"
        className="mb-8 flex flex-col items-center justify-center gap-3 px-8 md:flex-row"
      >
        <Button impact="cta" shape="cta" size="cta" hoverShape="grow">
          Order now
        </Button>

        <Button impact="secondary" shape="cta" size="cta" hoverShape="grow">
          <span className="md:hidden tablet:block">
            <FaPlay className="h-[65px]" />
          </span>
          <span>How to order</span>
        </Button>
      </MotionDiv>
    </article>
  );
}

const TestimonialVariants = {
  start: { y: "100%" },
  stop: { y: 0, transition: { delay: 0.25, type: "tween", duration: 0.75 } },
};

function Testimonial() {
  return (
    <MotionArticle
      variants={TestimonialVariants}
      initial="start"
      animate="stop"
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

// TODO : Button client components
// TODO : Titles global style
