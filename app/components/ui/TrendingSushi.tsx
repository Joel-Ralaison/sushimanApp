import Image from "next/image";

import { TRENDING_SUSHI } from "../../constants/TRENDING_FOODS";

import check from "/public/assets/check.svg";
import suhshi5 from "/public/assets/sushi-5.png";

export default function TrendingSushi() {
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
          {TRENDING_SUSHI.map((sushi) => (
            <li key={sushi} className="flex w-fit items-center gap-2">
              <span className="grid rounded-full bg-primary px-[3px] py-1">
                <Image src={check} alt="check" width={15} />
              </span>
              <p className="w-full text-center font-light">{sushi}</p>
            </li>
          ))}
        </ul>
      </section>

      <article className="group w-[100%] overflow-hidden border-b border-l border-black/15 bg-white py-10 md:w-1/2">
        <div
          style={{ backgroundImage: "url('/assets/japanese_sushi.png')" }}
          className="flex h-full items-center justify-center bg-contain bg-right-top"
        >
          <Image
            src={suhshi5}
            alt="sushi-5"
            style={{ maxWidth: "40%" }}
            className="transition-transform duration-1000 group-hover:scale-110"
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
