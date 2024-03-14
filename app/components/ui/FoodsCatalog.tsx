import Image from "next/image";
import { FOOD_CARDS } from "@/constants/FOODS_FILTER_LIST";
import { star } from "@/constants/IMAGES_LIST";
import { MotionArticle } from "./Reusables/Motions";

const fadeIn = {
  start: { opacity: 0, scale: 0.95 },
  stop: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, type: "tween", ease: "linear" },
  },
  hover: { scale: 1.05 },
};

export default function FoodsCatalog() {
  return (
    <section className="flex flex-col flex-wrap items-end justify-center space-x-4 space-y-4 md:mt-4 md:flex-row">
      {FOOD_CARDS.map((food, index) => (
        <MotionArticle
          variants={fadeIn}
          initial="start"
          whileInView={"stop"}
          whileHover={"hover"}
          key={index}
          className="group flex h-[175px] w-1/4 min-w-[70vw] flex-col items-center justify-end gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-white transition-all hover:bg-white/70 hover:text-secondary md:min-w-[200px]"
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

// TODO: FOOD COMMAND
