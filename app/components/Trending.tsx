import TrendingSushi from "./ui/TrendingSushi";
import TrendingDrinks from "./ui/TrendingDrinks";

export default function Trending() {
  return (
    <section
      id="food"
      className="relative mx-1 my-8 flex flex-col justify-center overflow-hidden rounded-lg shadow-lg shadow-black/10 transition-transform hover:scale-[1.005]"
    >
      <TrendingSushi />
      <TrendingDrinks />
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
