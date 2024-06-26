import FoodsFilters from "./ui/FoodsFilters";
import FoodsCatalog from "./ui/FoodsCatalog";

import TitleH2 from "./ui/Reusables/TitleH2";

import { MotionDiv } from "./ui/Reusables/Motions";
import { fade } from "@/utils/motionVariants";
import ExploreFoodsButton from "./ui/Reusables/ExploreFoodsButton";

export default function Foods() {
  return (
    <section
      id="menu"
      className="my-4 flex flex-col items-center overflow-hidden rounded-lg bg-primary bg-[url('/assets/popular_bg.png')] bg-contain bg-center bg-no-repeat py-16 shadow-lg shadow-black/20"
    >
      <TitleH2 type="foods">Popular Food | 人気</TitleH2>

      <MotionDiv
        variants={fade("top", "", 0.25)}
        initial="start"
        whileInView={"stop"}
        className="mt-8 flex w-full flex-col items-center justify-start space-y-3"
      >
        <FoodsFilters />
        <FoodsCatalog />
        <ExploreFoodsButton />
      </MotionDiv>
    </section>
  );
}
