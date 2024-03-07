import Image from "next/image";
import sushi2 from "/public/assets/sushi-2.png";
import sushi3 from "/public/assets/sushi-3.png";
import learnMore from "/public/assets/arrow-up-right.svg";

export default function About() {
  return (
    <section id="about" className="flex min-h-[100vh] overflow-hidden">
      <SushiIllustrations />
      <AboutContent />
    </section>
  );
}

function SushiIllustrations() {
  return (
    <article className="relative flex flex-1 flex-col justify-center bg-white">
      <div
        style={{ backgroundImage: "url('/assets/about_bg1.png')" }}
        className="flex flex-1 items-center justify-center  border-b border-creamson bg-contain bg-center bg-no-repeat pt-8"
      >
        <Image src={sushi3} alt="sushi image 2" width={300} height={225} />
      </div>

      <button
        type="button"
        className="absolute right-0 flex min-h-16 items-center gap-4 rounded-l-3xl bg-secondary px-8 py-3 text-lg font-medium text-white"
      >
        <span>Learn more</span>
        <span>
          <Image src={learnMore} alt="learn more" width={20} />
        </span>
      </button>

      <div
        style={{ backgroundImage: "url('/assets/about_bg2.png')" }}
        className="flex flex-1 items-center justify-center bg-contain bg-center bg-no-repeat pt-8"
      >
        <Image src={sushi2} alt="sushi image 3" width={300} height={225} />
      </div>
    </article>
  );
}

function AboutContent() {
  return (
    <article className="flex w-[55%] flex-col justify-center gap-10 p-16">
      <p className="flex gap-2 text-lg font-medium  tracking-wide text-zinc-500">
        <span>About Us |</span>
        <span>私たちに関しては</span>
      </p>

      <h3 className="font-playfair text-6xl font-bold tracking-wide text-zinc-700">
        Our mission is to bring true Japanese flavours to you.
      </h3>

      <p className="text-lg font-thin leading-loose text-secondary">
        We will continue to provide the experience of Omotenashi, the Japanese
        mindset of hospitality, with our shopping and dining for our customers.
      </p>
    </article>
  );
}
