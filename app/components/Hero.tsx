import Image from "next/image";
import sushiHero from "/public/assets/sushi-1.png";
import User from "/public/assets/user.png";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mt-[60px] flex min-h-[calc(100svh-60px)] flex-wrap overflow-hidden">
      <Illustration />
      <Content />
    </section>
  );
}

function Illustration() {
  return (
    <article className="relative z-[5] flex h-[calc(100svh-60px)] w-full flex-col bg-emerald-400 md:w-[44.5%]">
      <Image
        src={sushiHero}
        alt="sushi"
        className="w-[120%)] h-[90%] object-contain"
      />

      <h2 className="absolute bottom-5 flex flex-col pl-2 font-playfair text-7xl font-bold text-white/90">
        <span>日</span>
        <span>本</span>
        <span>食</span>
      </h2>

      <div className="absolute inset-0 z-[-1] h-[calc(100svh-60px)] w-full bg-primary"></div>
    </article>
  );
}

function Content() {
  return (
    <article className="relative flex w-full flex-col justify-between md:w-[55.5%]">
      <article className="flex flex-col gap-8 pl-10 pt-10">
        <h2 className="font-playfair text-6xl font-semibold text-zinc-700 md:text-6xl md:leading-[3.5rem] tablet:text-6xl tablet:leading-[1.2]">
          Feel the taste of Japanese food
        </h2>

        <p className="mb-4 ml-8 text-[18px] font-normal text-secondary">
          Tasty Japanese food, anywhere anytime
        </p>

        <div className="mb-4 flex flex-col justify-center gap-3 md:flex-row">
          <button
            type="button"
            className="max-h-[67px] w-[80%] min-w-[150px] rounded-2xl border-none bg-secondary p-5 text-[18px] font-medium text-white outline-none md:w-[45%]"
          >
            Order now
          </button>

          <button
            type="button"
            className="flex h-[67px] w-[80%] min-w-[150px] items-center justify-center gap-4 rounded-2xl border border-secondary bg-transparent text-[16px] text-zinc-800 outline-none md:w-[45%]"
          >
            <span>
              <FaPlay className="h-[67px]" />
            </span>

            <span>How to order</span>
          </button>
        </div>
      </article>

      <article className="flex flex-col items-center justify-center gap-8 bg-white px-4 py-2 md:flex-row md:gap-5 ">
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
    </article>
  );
}
