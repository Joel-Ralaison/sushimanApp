import Image from "next/image";

import { FOOD_CARDS } from "@/constants/FOODS_FILTER_LIST";
import { star } from "@/constants/IMAGES_LIST";

export default function FoodsCatalog() {
  return (
    <section className="custScrollbar flex h-[225px] max-w-[100%] snap-x snap-mandatory items-center overflow-x-auto">
      <div className="flex w-fit justify-between gap-6 px-4 pb-4">
        {FOOD_CARDS.map((food, index) => (
          <article
            key={index}
            className="full group flex w-[60vw] snap-center snap-always flex-col items-center justify-end gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-white transition-all hover:bg-white/70 hover:text-secondary md:w-[30vw] md:min-w-[200px]"
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
          </article>
        ))}
      </div>
    </section>
  );
}
