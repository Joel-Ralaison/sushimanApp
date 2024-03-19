"use client";

import Image from "next/image";
import Button from "./Button";

import { learnMore } from "@/constants/IMAGES_LIST";

export function LearnMoreButton() {
  return (
    <Button
      impact="cta"
      shape="noRoundedRight"
      size="normal"
      hoverShape="normal"
      className="group absolute right-0 top-[calc(50%-25px)] z-10"
    >
      <span>Learn more</span>
      <span className="relative bottom-0 left-0 transition-all group-hover:bottom-[2px] group-hover:left-[2px]">
        <Image src={learnMore} alt="learn more" width={16} />
      </span>
    </Button>
  );
}
