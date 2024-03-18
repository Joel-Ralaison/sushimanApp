"use client";

import Image from "next/image";
import Button from "./Button";
import { arrowRight } from "@/constants/IMAGES_LIST";

export default function ExploreFoodsButton() {
  return (
    <Button
      impact="primary"
      shape="normal"
      size="normal"
      hoverShape="normal"
      className="group"
    >
      <span>Explore Foods</span>
      <span className="relative left-0 rounded-lg bg-secondary px-2 py-1 transition-all group-hover:left-2">
        <Image src={arrowRight} alt="explore foods" width={20} />
      </span>
    </Button>
  );
}
