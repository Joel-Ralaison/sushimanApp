import Image from "next/image";
import sushi2 from "/public/assets/sushi-2.png";
import sushi3 from "/public/assets/sushi-3.png";
import learnMore from "/public/assets/arrow-up-right.svg";

export default function AboutIllustration() {
  return (
    <article className="relative flex w-full flex-col justify-center bg-white md:w-[45%]">
      <div
        style={{ backgroundImage: "url('/assets/about_bg1.png')" }}
        className="flex flex-1 items-center justify-center border-b border-creamson bg-contain bg-center bg-no-repeat py-8"
      >
        <Image src={sushi3} alt="sushi image 2" width={300} height={225} />
      </div>

      <button
        type="button"
        className="group absolute right-0 top-1/2 flex min-h-16 items-center gap-2 rounded-l-3xl bg-secondary px-8 py-3 text-lg font-medium text-white transition-all hover:origin-right hover:bg-primary hover:shadow-md hover:shadow-black/15"
      >
        <span>Learn more</span>
        <span className="relative bottom-0 left-0 transition-all group-hover:bottom-[3px] group-hover:left-[3px]">
          <Image src={learnMore} alt="learn more" width={20} />
        </span>
      </button>

      <div
        style={{ backgroundImage: "url('/assets/about_bg2.png')" }}
        className="flex flex-1 items-center justify-center bg-contain bg-center bg-no-repeat py-8"
      >
        <Image src={sushi2} alt="sushi image 3" width={300} height={225} />
      </div>
    </article>
  );
}

// TODO: div inline style
// TODO: Button component
