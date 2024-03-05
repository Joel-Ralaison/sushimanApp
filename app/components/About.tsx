import Image from "next/image";
import sushi2 from "/public/assets/sushi-2.png";
import sushi3 from "/public/assets/sushi-3.png";
import learnMore from "/public/assets/arrow-up-right.svg";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[100vh] overflow-hidden">
      <SushiIllustrations />
      <AboutContent />
    </section>
  );
}

function SushiIllustrations() {
  return (
    <article className="flex-1 flex flex-col justify-center bg-white relative">
      <div
        style={{ backgroundImage: "url('/assets/about_bg1.png')" }}
        className="pt-8 flex-1 flex justify-center  items-center bg-center bg-no-repeat bg-contain border-b border-creamson">
        <Image
          src={sushi3}
          alt="sushi image 2"
          width={300}
          height={225}
        />
      </div>

      <button
        type="button"
        className="absolute right-0 py-3 px-8 min-h-16 flex gap-4 bg-secondary text-white rounded-l-3xl items-center text-lg font-medium">
        <span>Learn more</span>
        <span>
          <Image
            src={learnMore}
            alt="learn more"
            width={20}
          />
        </span>
      </button>

      <div
        style={{ backgroundImage: "url('/assets/about_bg2.png')" }}
        className="pt-8 flex-1 flex justify-center items-center bg-center bg-no-repeat bg-contain">
        <Image
          src={sushi2}
          alt="sushi image 3"
          width={300}
          height={225}
        />
      </div>
    </article>
  );
}

function AboutContent() {
  return (
    <article className="w-[55%] p-16 flex flex-col justify-center gap-10">
      <p className="flex gap-2 font-medium tracking-wide  text-zinc-500 text-lg">
        <span>About Us |</span>
        <span>私たちに関しては</span>
      </p>

      <h3 className="text-6xl tracking-wide font-playfair font-bold text-zinc-700">
        Our mission is to bring true Japanese flavours to you.
      </h3>

      <p className="text-secondary leading-loose font-thin text-lg">
        We will continue to provide the experience of Omotenashi, the Japanese
        mindset of hospitality, with our shopping and dining for our customers.
      </p>
    </article>
  );
}
