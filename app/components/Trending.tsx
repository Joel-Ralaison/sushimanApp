import TrendingSushi from "./ui/TrendingSushi";
import TrendingDrinks from "./ui/TrendingDrinks";

export default function Trending() {
  return (
    <section id="food" className="relative flex flex-col justify-center">
      <TrendingSushi />
      <TrendingDrinks />
      <Discover />
    </section>
  );
}

function Discover() {
  return (
    <article className="absolute left-[calc(50.2%-50px)] z-10 hidden h-[100px] w-[100px] items-center justify-center rounded-lg md:top-[calc(50%-50px)] md:flex tablet:top-[calc(45%-50px)]">
      <p className="z-10 font-playfair text-xl font-medium text-white">
        DISCOVER
      </p>
      <span className="absolute inset-0 z-[-1] h-full w-full rotate-45 rounded-lg bg-black ring-2 ring-black/25 ring-offset-8"></span>
    </article>
  );
}
