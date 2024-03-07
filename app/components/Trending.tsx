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
    <section
      id="food"
      className="min-h-screen flex flex-col relative">
      <TrendingSushi />
      <TrendingDrinks />

      <div className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] w-[100px] h-[100px] flex justify-center items-center z-10 rounded-lg">
        <p className="text-white z-10 font-medium font-playfair text-xl">
          DISCOVER
        </p>
        <span className="bg-black w-full h-full absolute inset-0 rotate-45 z-[-1] ring-2 ring-black/25 ring-offset-8 rounded-lg"></span>
      </div>
    </section>
  );
}

function TrendingSushi() {
  return (
    <article className="flex h-[50vh]">
      <section className="w-1/2 pl-16 pt-10 flex flex-col justify-center gap-5">
        <p className="text-lg text-zinc-600">What&apos;s Trending | トレンド</p>

        <h3 className="text-4xl font-playfair text-zinc-700 font-medium">
          Japanese Sushi
        </h3>

        <p className="text-zinc-700 font-light">
          Feel the taste of the most delicious Sushi here.
        </p>

        <ul className="max-w-[60%] pl-4 grid grid-cols-2 gap-y-2">
          {sushiNames.map((sushi) => (
            <li
              key={sushi}
              className="w-fit flex items-center gap-2">
              <span className="bg-primary px-[3px] py-1 rounded-full grid">
                <Image
                  src={check}
                  alt="check"
                  width={15}
                />
              </span>
              <p className="font-light">{sushi}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="w-1/2 bg-white pt-10 border-l border-b border-black/15">
        <div
          style={{ backgroundImage: "url('/assets/japanese_sushi.png')" }}
          className="bg-right-top bg-contain flex justify-center items-center h-full">
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
    <article className="h-[50vh] flex flex-row-reverse">
      <section className="w-1/2 pl-16 pt-10 flex flex-col justify-center gap-5">
        <p className="text-lg text-zinc-600">What&apos;s Trending | トレンド</p>

        <h3 className="text-4xl font-playfair text-zinc-700 font-medium">
          Japanese Drinks
        </h3>

        <p className="text-zinc-700 font-light">
          Feel the taste of most delicious Japanese drinks here.
        </p>

        <ul className="max-w-[60%] pl-4 grid grid-cols-2 gap-y-2">
          {drinkNames.map((drink) => (
            <li
              key={drink}
              className="w-fit flex items-center gap-2">
              <span className="bg-primary px-[3px] py-1 rounded-full grid">
                <Image
                  src={check}
                  alt="check"
                  width={15}
                />
              </span>
              <p className="font-light">{drink}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="w-1/2 bg-white pt-10 border-r border-t border-black/15">
        <div
          style={{ backgroundImage: "url('/assets/japanese_drinks.png')" }}
          className="bg-right-top bg-contain flex justify-center items-center h-full">
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
