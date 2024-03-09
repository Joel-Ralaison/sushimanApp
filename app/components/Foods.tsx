import Image from "next/image";
import suhsi6 from "/public/assets/sushi-6.png";
import suhsi7 from "/public/assets/sushi-7.png";
import suhsi8 from "/public/assets/sushi-8.png";
import suhsi9 from "/public/assets/sushi-9.png";
import suhsi10 from "/public/assets/sushi-10.png";
import suhsi11 from "/public/assets/sushi-11.png";
import suhsi12 from "/public/assets/sushi-12.png";
import Star from "/public/assets/star.svg";
import arrowRight from "/public/assets/arrow-right.svg";

const filterList = [
  { label: "Sushi", image: suhsi9 },
  { label: "Ramen", image: suhsi8 },
  { label: "Udon", image: suhsi7 },
  { label: "Danggo", image: suhsi6 },
];

export default function Foods() {
  return (
    <section
      style={{ backgroundImage: "url('/assets/popular_bg.png')" }}
      id="menu"
      className="flex flex-col items-center overflow-hidden bg-primary bg-contain bg-center bg-no-repeat py-16"
    >
      <h2 className="text-center font-playfair text-4xl font-semibold leading-[78px] text-white md:text-6xl">
        Popular Food | 人気
      </h2>
      <Filter />
      <FoodCatalog />

      <button
        type="button"
        className="group mt-10 flex items-center justify-center gap-4 rounded-lg bg-secondary px-10 py-4 text-lg font-medium leading-[23px] text-white transition-all ease-in-out hover:bg-creamson hover:text-secondary hover:shadow-md hover:shadow-black/15"
      >
        <span>Explore Foods</span>
        <span className="relative left-0 rounded-lg bg-secondary px-2 py-1 transition-all group-hover:left-2">
          <Image src={arrowRight} alt="explore foods" width={20} />
        </span>
      </button>
    </section>
  );
}

function Filter() {
  return (
    <section className="mt-12 flex max-w-[100%] scroll-m-12 gap-6 overflow-x-auto px-2 pb-4">
      <button
        type="button"
        className="rounded-lg border border-white/20 bg-white/90 px-7 py-3 font-light leading-6 text-secondary"
      >
        All
      </button>

      {filterList.map((filter, index) => (
        <button
          key={index + 1}
          type="button"
          className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-7 py-3 font-light leading-6 text-white transition-colors hover:bg-white/90 hover:text-secondary"
        >
          <span>
            <Image src={filter.image} alt={filter.label} width={36} />
          </span>

          <span>{filter.label}</span>
        </button>
      ))}

      <button
        type="button"
        className="rounded-lg border border-white/20 bg-white/5 px-7 py-3 font-light leading-6 text-white"
      >
        Others
      </button>
    </section>
  );
}

function FoodCatalog() {
  const foodCard = [
    { name: "Chezu Sushi", image: suhsi12, rating: 4.8, price: "$21.00" },
    { name: "Originale Sushi", image: suhsi11, rating: 4.9, price: "$15.75" },
    { name: "Ramen Legendo", image: suhsi10, rating: 4.7, price: "$13.00" },
  ];

  return (
    <section className="mt-10 flex flex-col flex-wrap items-end justify-center space-x-4 space-y-4 md:mt-4 md:flex-row">
      {foodCard.map((food, index) => (
        <article
          key={index}
          className="group flex h-[200px] w-1/4 min-w-[70vw] flex-col items-center justify-end gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-white transition-all hover:scale-105 hover:bg-white/70 hover:text-secondary md:min-w-[200px]"
        >
          <span className="mb-3">
            <Image src={food.image} alt={food.name} width={115} height={85} />
          </span>

          <h4 className="font-playfair text-lg font-medium leading-[32px] group-hover:font-bold">
            {food.name}
          </h4>

          <div className="flex gap-8">
            <div className="flex gap-1">
              <Image src={Star} alt="star rating" />
              <p>{food.rating}</p>
            </div>

            <p>{food.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
