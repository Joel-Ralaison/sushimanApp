import Image from "next/image";

import { MotionDiv } from "./Reusables/Motions";
import { learnMore, sushi2, sushi3 } from "@/constants/IMAGES_LIST";
import Button from "./Reusables/Button";

const fadeRight = {
  start: { opacity: 0, y: "10%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, yoyo: 1 },
  },
};

export default function AboutIllustration() {
  return (
    <article className="relative flex h-[calc(100svh-55px)] w-full flex-col justify-center bg-white md:w-[45%]">
      <MotionDiv
        variants={fadeRight}
        initial="start"
        whileInView={"stop"}
        style={{ backgroundImage: "url('/assets/about_bg1.png')" }}
        className="flex h-[50%] flex-1 items-center justify-center border-b border-creamson bg-contain bg-center bg-no-repeat py-8"
      >
        <Image src={sushi3} alt="sushi image 2" width={250} />
      </MotionDiv>

      <Button
        impact="cta"
        shape="noRoundedRight"
        size="normal"
        hoverShape="normal"
        className="group absolute right-0 top-1/2 z-20"
      >
        <span>Learn more</span>
        <span className="relative bottom-0 left-0 transition-all group-hover:bottom-[2px] group-hover:left-[2px]">
          <Image src={learnMore} alt="learn more" width={16} />
        </span>
      </Button>

      <MotionDiv
        variants={fadeRight}
        initial="start"
        whileInView={"stop"}
        style={{ backgroundImage: "url('/assets/about_bg2.png')" }}
        className="flex h-[50%] flex-1 items-center justify-center bg-contain bg-center bg-no-repeat py-8"
      >
        <Image src={sushi2} alt="sushi image 3" width={250} />
      </MotionDiv>
    </article>
  );
}

// TODO: div inline style
// TODO: Button component
