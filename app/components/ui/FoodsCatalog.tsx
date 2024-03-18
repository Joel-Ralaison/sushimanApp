import Image from "next/image";

import { FOOD_CARDS } from "@/constants/FOODS_FILTER_LIST";
import { star } from "@/constants/IMAGES_LIST";

import { MotionArticle } from "./Reusables/Motions";
import { fade } from "@/utils/motionVariants";

export default function FoodsCatalog() {
  return (
    <section className="flex flex-col flex-wrap justify-center gap-4 md:mt-4 md:flex-row">
      {FOOD_CARDS.map((food, index) => (
        <MotionArticle
          variants={fade("top", "", 0.25)}
          initial="start"
          whileInView={"stop"}
          whileHover={{ transform: "scale(1.05)" }}
          key={index}
          className="group flex h-[175px] w-1/4 min-w-[70vw] flex-col items-center justify-end gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-white transition-all hover:scale-105 hover:bg-white/70 hover:text-secondary md:min-w-[200px]"
        >
          <span className="mb-3">
            <Image src={food.image} alt={food.name} height={65} />
          </span>

          <h4 className="font-playfair text-lg font-medium leading-[32px] group-hover:font-bold">
            {food.name}
          </h4>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <Image src={star} alt="star rating" style={{ width: "20px" }} />
              <p>{food.rating}</p>
            </div>

            <p>{food.price}</p>
          </div>
        </MotionArticle>
      ))}
    </section>
  );
}
