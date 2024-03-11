import Image from "next/image";

import FoodsFilters from "./ui/FoodsFilters";
import FoodsCatalog from "./ui/FoodsCatalog";
import { arrowRight } from "../constants/IMAGES_LIST";

export default function Foods() {
  return (
    <section
      style={{ backgroundImage: "url('/assets/popular_bg.png')" }}
      id="menu"
      className="mx-1 my-4 flex flex-col items-center overflow-hidden rounded-lg bg-primary bg-contain bg-center bg-no-repeat py-16 shadow-lg shadow-black/20 transition-transform hover:scale-[1.005]"
    >
      <h2 className="text-center font-playfair text-4xl font-semibold leading-[78px] text-white md:text-6xl">
        Popular Food | 人気
      </h2>
      <FoodsFilters />
      <FoodsCatalog />

      <button
        type="button"
        className="group mt-10 flex items-center justify-center gap-4 rounded-lg bg-secondary px-10 py-4 text-lg font-medium leading-[23px] text-white transition-all ease-in-out hover:bg-creamson hover:text-secondary hover:shadow-md hover:shadow-black/15"
      >
        <span>Explore Foods</span>
        <span className="relative left-0 rounded-lg bg-secondary px-2 py-1 transition-all group-hover:left-2">
          <Image src={arrowRight} alt="explore foods" width={20} />
        </span>
      </button>
    </section>
  );
}

// TODO: Section with no inline backgroundImage
// TODO: Button client component
