"use client";

import Button from "./Button";
import { fade } from "@/utils/motionVariants";
import { MotionDiv } from "./Motions";
import { FaPlay } from "react-icons/fa";

export default function CallToAction() {
  return (
    <MotionDiv
      variants={fade("top", "", 0.75)}
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
  );
}
