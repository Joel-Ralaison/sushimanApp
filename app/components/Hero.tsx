import Image from "next/image";
import sushiHero from "/public/assets/sushi-1.png";
import User from "/public/assets/user.png";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex h-[calc(100vh-56px)] overflow-hidden">
      <Illustration />
      <Content />
    </section>
  );
}

function Illustration() {
  return (
    <article className="flex-1 relative flex flex-col z-[5]">
      <Image
        src={sushiHero}
        alt="sushi"
        style={{ objectFit: "contain", width: "120%", height: "100%" }}
      />

      <h2 className="flex flex-col absolute bottom-4 text-white/90 font-bold text-7xl pl-2 font-playfair">
        <span>日</span>
        <span>本</span>
        <span>食</span>
      </h2>

      <div className="absolute inset-0 w-full bg-primary z-[-1]"></div>
    </article>
  );
}

function Content() {
  return (
    <article className="w-[55%] flex flex-col justify-between">
      <article className="p-16 flex-1 flex flex-col justify-center">
        <h2 className="text-7xl font-semibold font-playfair text-secondary">
          Feel the taste of Japanese food
        </h2>

        <p className="text-secondary mt-8 ml-8 text-[18px] font-normal">
          Tasty Japanese food, anywhere anytime
        </p>

        <div className="ml-8 mt-8 flex flex-wrap gap-9">
          <button
            type="button"
            className="p-5 max-h-[67px] rounded-2xl min-w-[212px] outline-none border-none bg-secondary text-white font-medium text-[18px]">
            Order now
          </button>

          <button
            type="button"
            className="h-[67px] overflow-hidden flex items-center justify-center rounded-2xl min-w-[212px] outline-none border border-secondary bg-transparent text-[16px] text-zinc-800 gap-4">
            <span>
              <FaPlay className="h-[67px]" />
            </span>

            <span>How to order</span>
          </button>
        </div>
      </article>

      <article className="py-8 px-16 bg-white flex flex-wrap gap-5 ">
        <section className="flex-1 gap-3 border-r border-zinc-200">
          <h4 className="text-6xl font-playfair">
            <span>24</span>
            <span>k+</span>
          </h4>

          <p className="font-jakarta text-zinc-500">Happy customers</p>
        </section>

        <section className="flex-1 flex items-center gap-3 ml-4">
          <Image
            src={User}
            alt="user"
            style={{ width: "60px", height: "60px" }}
          />

          <p>
            &quot; This is the best Japanese food delivery service that ever
            existed.&quot;
          </p>
        </section>
      </article>
    </article>
  );
}
