import Image from "next/image";

import suhshi4 from "/public/assets/sushi-4.png";
import suhshi5 from "/public/assets/sushi-5.png";
import check from "/public/assets/check.svg";

const sushiNames = [
  "Make sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
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
    <section id="food" className="relative flex min-h-screen flex-col">
      <TrendingSushi />
      <TrendingDrinks />

      <div className="absolute left-[calc(50%-50px)] top-[calc(50%-50px)] z-10 flex h-[100px] w-[100px] items-center justify-center rounded-lg">
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
    <article className="flex h-[50vh]">
      <section className="flex w-1/2 flex-col justify-center gap-5 pl-16 pt-10">
        <p className="text-lg text-zinc-600">What&apos;s Trending | トレンド</p>

        <h3 className="font-playfair text-4xl font-medium text-zinc-700">
          Japanese Sushi
        </h3>

        <p className="font-light text-zinc-700">
          Feel the taste of the most delicious Sushi here.
        </p>

        <ul className="grid max-w-[60%] grid-cols-2 gap-y-2 pl-4">
          {sushiNames.map((sushi) => (
            <li key={sushi} className="flex w-fit items-center gap-2">
              <span className="grid rounded-full bg-primary px-[3px] py-1">
                <Image src={check} alt="check" width={15} />
              </span>
              <p className="font-light">{sushi}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="w-1/2 border-b border-l border-black/15 bg-white pt-10">
        <div
          style={{ backgroundImage: "url('/assets/japanese_sushi.png')" }}
          className="flex h-full items-center justify-center bg-contain bg-right-top"
        >
          <Image
            src={suhshi5}
            alt="sushi-5"
            style={{ height: "70%", objectFit: "contain" }}
          />
        </div>
      </article>
    </article>
  );
}

function TrendingDrinks() {
  return (
    <article className="flex h-[50vh] flex-row-reverse">
      <section className="flex w-1/2 flex-col justify-center gap-5 pl-16 pt-10">
        <p className="text-lg text-zinc-600">What&apos;s Trending | トレンド</p>

        <h3 className="font-playfair text-4xl font-medium text-zinc-700">
          Japanese Drinks
        </h3>

        <p className="font-light text-zinc-700">
          Feel the taste of most delicious Japanese drinks here.
        </p>

        <ul className="grid max-w-[60%] grid-cols-2 gap-y-2 pl-4">
          {drinkNames.map((drink) => (
            <li key={drink} className="flex w-fit items-center gap-2">
              <span className="grid rounded-full bg-primary px-[3px] py-1">
                <Image src={check} alt="check" width={15} />
              </span>
              <p className="font-light">{drink}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="w-1/2 border-r border-t border-black/15 bg-white pt-10">
        <div
          style={{ backgroundImage: "url('/assets/japanese_drinks.png')" }}
          className="flex h-full items-center justify-center bg-contain bg-right-top"
        >
          <Image
            src={suhshi4}
            alt="sushi-5"
            style={{ height: "70%", objectFit: "contain" }}
          />
        </div>
      </article>
    </article>
  );
}
