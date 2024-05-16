import Image, { StaticImageData } from "next/image";

import TitleH2 from "./TitleH2";
import { check } from "@/constants/IMAGES_LIST";

import { MotionArticle, MotionSection } from "./Motions";
import { fade } from "@/utils/motionVariants";

type TrendingProps = {
  title: string;
  description: string;
  products: string[];
  image: StaticImageData;
  alt: string;
};

export default function TrendingContent({
  title,
  description,
  image,
  alt,
  products,
}: TrendingProps) {
  return (
    <article className="flex flex-col odd:md:flex-row even:md:flex-row-reverse">
      <MotionSection
        variants={fade("top", "", 0.25)}
        initial="start"
        whileInView={"stop"}
        className="flex h-1/2 w-full flex-col items-center justify-center gap-5 pb-12 pt-8 md:w-1/2 md:items-start md:pl-6"
      >
        <p className="pl-[40px] pt-3 text-lg text-zinc-600">
          What&apos;s Trending | トレンド
        </p>

        <TitleH2 type="trending">{title}</TitleH2>

        <p className="w-[75%] font-light text-zinc-700">{description}</p>

        <ul className="grid w-[100%] grid-cols-2 gap-y-2 pl-[15%] md:pl-4">
          {products.map((sushi) => (
            <li key={sushi} className="flex w-fit items-center gap-2">
              <span className="grid rounded-full bg-primary px-[3px] py-1">
                <Image src={check} alt="check" width={15} />
              </span>
              <p className="w-full text-center font-light">{sushi}</p>
            </li>
          ))}
        </ul>
      </MotionSection>

      <MotionArticle
        variants={fade("bottom", "", 0.25)}
        initial="start"
        whileInView={"stop"}
        className="h-1/2 w-[100%] overflow-hidden bg-white py-10 md:w-1/2"
      >
        <div className="flex h-[250px] items-center justify-center bg-[url('/assets/japanese_sushi.png')] bg-contain bg-right-top">
          <Image
            src={image}
            alt={alt}
            style={{ width: "30%" }}
            className="transition-transform duration-[5s]"
          />
        </div>
      </MotionArticle>
    </article>
  );
}
