import Image from "next/image";

import suhshi4 from "/public/assets/sushi-4.png";
import suhshi5 from "/public/assets/sushi-5.png";
import check from "/public/assets/check.svg";

const sushiNames = [
  "Make sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki",
  "Inari Sushi",
];

const drinkNames = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

export default function Trending() {
  return (
    <section id="food" className="relative flex flex-col justify-center">
      <TrendingSushi />
      <TrendingDrinks />

      <div className="absolute left-[calc(50.2%-50px)] z-10 hidden h-[100px] w-[100px] items-center justify-center rounded-lg md:top-[calc(50%-50px)] md:flex tablet:top-[calc(45%-50px)]">
        <p className="z-10 font-playfair text-xl font-medium text-white">
          DISCOVER
        </p>
        <span className="absolute inset-0 z-[-1] h-full w-full rotate-45 rounded-lg bg-black ring-2 ring-black/25 ring-offset-8"></span>
      </div>
    </section>
  );
}

function TrendingSushi() {
  return (
    <article className="flex flex-col md:flex-row">
      <section className="flex w-full flex-col items-center justify-center gap-5 pb-12 pt-8 md:w-1/2 md:items-start md:pl-6">
        <p className="pl-[40px] pt-3 text-lg text-zinc-600">
          What&apos;s Trending | トレンド
        </p>

        <h3 className="font-playfair text-4xl font-medium text-zinc-700">
          Japanese Sushi
        </h3>

        <p className="font-light text-zinc-700">
          Feel the taste of the most delicious Sushi here.
        </p>

        <ul className="grid w-[100%] grid-cols-2 gap-y-2 pl-[15%] md:pl-4">
          {sushiNames.map((sushi) => (
            <li key={sushi} className="flex w-fit items-center gap-2">
              <span className="grid rounded-full bg-primary px-[3px] py-1">
                <Image src={check} alt="check" width={15} />
              </span>
              <p className="w-full text-center font-light">{sushi}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="w-[100%] border-b border-l border-black/15 bg-white py-10 md:w-1/2">
        <div
          style={{ backgroundImage: "url('/assets/japanese_sushi.png')" }}
          className="flex h-full items-center justify-center bg-contain bg-right-top"
        >
          <Image src={suhshi5} alt="sushi-5" style={{ maxWidth: "40%" }} />
        </div>
      </article>
    </article>
  );
}

function TrendingDrinks() {
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
          {drinkNames.map((drink) => (
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
          className="flex h-full items-center justify-center bg-contain bg-right-top"
        >
          <Image src={suhshi4} alt="sushi-4" style={{ maxWidth: "40%" }} />
        </div>
      </article>
    </article>
  );
}
