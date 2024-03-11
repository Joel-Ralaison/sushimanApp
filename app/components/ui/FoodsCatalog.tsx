import Image from "next/image";
import { FOOD_CARDS } from "@/app/constants/FOODS_FILTER_LIST";

import Star from "/public/assets/star.svg";

export default function FoodsCatalog() {
  return (
    <section className="mt-10 flex flex-col flex-wrap items-end justify-center space-x-4 space-y-4 md:mt-4 md:flex-row">
      {FOOD_CARDS.map((food, index) => (
        <article
          key={index}
          className="group flex h-[200px] w-1/4 min-w-[70vw] flex-col items-center justify-end gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-white transition-all hover:scale-105 hover:bg-white/70 hover:text-secondary md:min-w-[200px]"
        >
          <span className="mb-3">
            <Image src={food.image} alt={food.name} width={115} height={85} />
          </span>

          <h4 className="font-playfair text-lg font-medium leading-[32px] group-hover:font-bold">
            {food.name}
          </h4>

          <div className="flex gap-8">
            <div className="flex gap-1">
              <Image src={Star} alt="star rating" />
              <p>{food.rating}</p>
            </div>

            <p>{food.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

// TODO: FOOD COMMAND
