import Image from "next/image";
import { MotionArticle } from "./Reusables/Motions";
import { user } from "@/constants/IMAGES_LIST";

export default function Testimonial() {
  return (
    <MotionArticle
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 0.25, duration: 0.5 }}
      className="flex w-full flex-col items-center gap-8 bg-white px-4 py-4 md:w-[100%] md:flex-row md:justify-center md:gap-5"
    >
      <section
        className={`w-[30%] gap-3 text-center max-md:w-full md:border-r md:border-zinc-200`}
      >
        <h4 className="font-playfair text-3xl tablet:text-5xl">
          <span>24</span>
          <span>k+</span>
        </h4>

        <p className="font-jakarta text-zinc-500">Happy customers</p>
      </section>

      <section className="flex w-[68%] items-center gap-3 text-sm max-md:w-full">
        <Image
          src={user}
          alt="user"
          style={{ width: "60px", height: "60px" }}
        />

        <p className="text-left">
          &apos; This is the best Japanese food delivery service that ever
          existed.&apos;
        </p>
      </section>
    </MotionArticle>
  );
}
