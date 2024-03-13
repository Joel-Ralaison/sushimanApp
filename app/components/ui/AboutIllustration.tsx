import Image from "next/image";
import { learnMore, sushi2, sushi3 } from "@/constants/IMAGES_LIST";
import Button from "./Reusables/Button";

export default function AboutIllustration() {
  return (
    <article className="relative flex w-full flex-col justify-center bg-white md:w-[45%]">
      <div
        style={{ backgroundImage: "url('/assets/about_bg1.png')" }}
        className="flex flex-1 items-center justify-center border-b border-creamson bg-contain bg-center bg-no-repeat py-8"
      >
        <Image src={sushi3} alt="sushi image 2" width={300} />
      </div>

      <Button
        impact="cta"
        shape="noRoundedRight"
        size="normal"
        hoverShape="normal"
        className="group absolute right-0 top-1/2"
      >
        <span>Learn more</span>
        <span className="relative bottom-0 left-0 transition-all group-hover:bottom-[2px] group-hover:left-[2px]">
          <Image src={learnMore} alt="learn more" width={16} />
        </span>
      </Button>

      <div
        style={{ backgroundImage: "url('/assets/about_bg2.png')" }}
        className="flex flex-1 items-center justify-center bg-contain bg-center bg-no-repeat py-8"
      >
        <Image src={sushi2} alt="sushi image 3" width={300} />
      </div>
    </article>
  );
}

// TODO: div inline style
// TODO: Button component
