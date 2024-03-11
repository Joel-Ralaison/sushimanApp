import suhshi4 from "/public/assets/sushi-4.png";
import check from "/public/assets/check.svg";
import Image from "next/image";
import { TRENDING_DRINKS } from "@/app/constants/TRENDING_FOODS";

export default function TrendingDrinks() {
  return (
    <article className="flex flex-col md:flex-row-reverse">
      <section className="flex w-full flex-col items-center justify-center gap-5 pb-12 pt-8 md:w-1/2 md:items-start md:pl-6">
        <p className="pl-[40px] pt-3 text-lg text-zinc-600">
          What&apos;s Trending | トレンド
        </p>

        <h3 className="font-playfair text-4xl font-medium text-zinc-700">
          Japanese Drinks
        </h3>

        <p className="font-light text-zinc-700">
          Feel the taste of most tasty Japanese drinks here.
        </p>

        <ul className="grid w-[100%] grid-cols-2 gap-y-2 pl-[15%] md:pl-4">
          {TRENDING_DRINKS.map((drink) => (
            <li key={drink} className="flex w-fit items-center gap-2">
              <span className="grid rounded-full bg-primary px-[3px] py-1">
                <Image src={check} alt="check" width={15} />
              </span>
              <p className="w-full text-center font-light">{drink}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="w-[100%] border-b border-l border-black/15 bg-white py-10 md:w-1/2">
        <div
          style={{ backgroundImage: "url('/assets/japanese_drinks.png')" }}
          className="group flex h-full items-center justify-center bg-contain bg-right-top"
        >
          <Image
            src={suhshi4}
            alt="sushi-4"
            style={{ maxWidth: "40%" }}
            className="scale-90 transition-transform duration-1000 group-hover:scale-100"
          />
        </div>
      </article>
    </article>
  );
}

// TODO: div remove inline style
// TODO: li into a new reusable component
// TODO: Title h3
// TODO: Image component
