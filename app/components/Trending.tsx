import TrendingContent from "./ui/Reusables/TrendingContent";

import { MotionSection } from "./ui/Reusables/Motions";
import { sushi4, sushi5 } from "@/constants/IMAGES_LIST";
import { TRENDING_DRINKS, TRENDING_SUSHI } from "@/constants/TRENDING_FOODS";

const growIn = {
  start: { opacity: 0.8, scale: 0.98 },
  stop: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, originX: "50%", originY: "50%" },
  },
};

export default function Trending() {
  return (
    <MotionSection
      variants={growIn}
      initial="start"
      whileInView={"stop"}
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
    </MotionSection>
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
