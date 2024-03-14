import Image from "next/image";

import Button from "./ui/Reusables/Button";
import TitleH2 from "./ui/Reusables/TitleH2";
import { MotionDiv } from "./ui/Reusables/Motions";
import { arrowRight } from "../../constants/IMAGES_LIST";

import FoodsFilters from "./ui/FoodsFilters";
import FoodsCatalog from "./ui/FoodsCatalog";

const fadeIn = {
  start: { opacity: 0, y: "10%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, yoyo: 1 },
  },
};

export default function Foods() {
  return (
    <section
      id="menu"
      className="my-4 flex flex-col items-center overflow-hidden rounded-lg bg-primary bg-[url('/assets/popular_bg.png')] bg-contain bg-center bg-no-repeat py-16 shadow-lg shadow-black/20"
    >
      <MotionDiv variants={fadeIn} initial="start" whileInView={"stop"}>
        <TitleH2 type="foods">Popular Food | 人気</TitleH2>
      </MotionDiv>

      <MotionDiv
        variants={fadeIn}
        initial="start"
        whileInView={"stop"}
        className="mt-8 flex w-full flex-col items-center justify-start space-y-3"
      >
        <FoodsFilters />
        <FoodsCatalog />

        <Button
          impact="primary"
          shape="normal"
          size="normal"
          hoverShape="normal"
          className="group"
        >
          <span>Explore Foods</span>
          <span className="relative left-0 rounded-lg bg-secondary px-2 py-1 transition-all group-hover:left-2">
            <Image src={arrowRight} alt="explore foods" width={20} />
          </span>
        </Button>
      </MotionDiv>
    </section>
  );
}

// TODO: Section with no inline backgroundImage
// TODO: Button client component
