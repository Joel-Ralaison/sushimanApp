import Image from "next/image";

import User from "/public/assets/user.png";
import { FaPlay } from "react-icons/fa";

export default function HeroContent() {
  return (
    <article className="flex w-full flex-col items-center justify-start pt-10 text-center md:h-[calc(100svh-60px)] md:w-[55.5%] md:justify-between md:pt-[4%] md:text-start">
      <article className="flex flex-col gap-4 md:pl-10">
        <h2 className="font-playfair text-6xl font-semibold text-zinc-700 md:text-5xl md:leading-[3.5rem] tablet:text-6xl tablet:leading-[1.2]">
          Feel the taste of Japanese food
        </h2>

        <p className="ml-8 text-[18px] font-normal text-secondary md:mb-4">
          Tasty Japanese food, anywhere anytime
        </p>

        <div className="mb-8 flex flex-col justify-center gap-3 px-8 md:flex-row ">
          <button
            type="button"
            className="duration-50 h-[67px] w-[calc(100%)] min-w-[150px] rounded-2xl border-none bg-secondary p-5 text-[18px] font-medium text-white outline-none transition-all hover:scale-[1.01] hover:bg-primary hover:shadow-md hover:shadow-black/5 active:scale-[0.98] md:w-[45%]"
          >
            Order now
          </button>

          <button
            type="button"
            className="duration-50 flex h-[67px] w-[calc(100%)] min-w-[150px] items-center justify-center gap-2 rounded-2xl border border-secondary bg-transparent text-[16px] outline-none transition-all hover:scale-[1.01] hover:bg-white hover:text-black hover:shadow-md hover:shadow-black/5 active:scale-[0.98] md:w-[45%]"
          >
            <span>
              <FaPlay className="h-[67px]" />
            </span>

            <span>How to order</span>
          </button>
        </div>
      </article>

      <Testimonial />
    </article>
  );
}

function Testimonial() {
  return (
    <article className="flex w-full flex-col items-center gap-8 bg-white px-4 py-2 md:w-[100%] md:flex-row md:justify-center md:gap-5 ">
      <section className="w-[30%] gap-3 text-center md:border-r md:border-zinc-200">
        <h4 className="font-playfair text-3xl tablet:text-5xl">
          <span>24</span>
          <span>k+</span>
        </h4>

        <p className="font-jakarta text-zinc-500">Happy customers</p>
      </section>

      <section className="flex w-[68%] items-center gap-2 text-sm">
        <Image
          src={User}
          alt="user"
          style={{ width: "60px", height: "60px" }}
        />

        <p>
          &apos; This is the best Japanese food delivery service that ever
          existed.&apos;
        </p>
      </section>
    </article>
  );
}

// TODO : Button client components
// TODO : Titles global style
