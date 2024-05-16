"use client";

import Image from "next/image";
import Button from "./Button";

import { learnMore } from "@/constants/IMAGES_LIST";
import Link from "next/link";

export function LearnMoreButton() {
  return (
    <Link
      href="https://joelralaison.vercel.app"
      target="_blank"
      className="group absolute right-0 top-[calc(50%-25px)] z-10 flex items-center gap-3 rounded-l-2xl bg-black px-5 py-3 text-white"
    >
      <span>More about us</span>
      <span className="relative bottom-0 left-0 transition-all group-hover:bottom-[2px] group-hover:left-[2px]">
        <Image src={learnMore} alt="learn more" width={16} />
      </span>
    </Link>
  );
}
