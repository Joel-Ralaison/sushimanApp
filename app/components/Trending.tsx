import TrendingContent from "./ui/Reusables/TrendingContent";

import { TRENDING_DRINKS, TRENDING_SUSHI } from "@/constants/TRENDING_FOODS";
import { sushi4, sushi5 } from "@/constants/IMAGES_LIST";

export default function Trending() {
  return (
    <section
      id="food"
      className="relative my-8 flex flex-col justify-center overflow-hidden rounded-lg shadow-lg shadow-black/10"
    >
      <TrendingContent
        title="Japanese Sushi"
        description="Feel the taste of the most delicious Sushi here."
        image={sushi5}
        alt="Trending sushi"
        products={TRENDING_SUSHI}
      />

      <TrendingContent
        title="Japanese Drinks"
        description="Feel the taste of most tasty Japanese drinks here."
        image={sushi4}
        alt="Trending drinks"
        products={TRENDING_DRINKS}
      />

      <Discover />
    </section>
  );
}

function Discover() {
  return (
    <article className="absolute left-[calc(50.2%-50px)] z-10 hidden h-[100px] w-[100px] items-center justify-center rounded-lg md:top-[calc(50%-50px)] md:flex">
      <p className="z-10 font-playfair text-xl font-medium text-white">
        DISCOVER
      </p>
      <span className="absolute inset-0 z-[-1] h-full w-full rotate-45 rounded-lg bg-black ring-2 ring-black/25 ring-offset-8"></span>
    </article>
  );
}
