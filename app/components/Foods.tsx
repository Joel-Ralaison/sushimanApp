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
      className="p-5 min-h-screen flex flex-col items-center bg-primary bg-center bg-no-repeat bg-contain overflow-hidden">
      <h2 className="text-6xl font-playfair font-semibold leading-[78px] text-white text-center">
        Popular Food | 人気
      </h2>
      <Filter />
      <FoodCatalog />

      <button
        type="button"
        className="py-4 px-10 mt-10 flex justify-center items-center gap-4 bg-secondary text-white rounded-lg font-medium text-lg leading-[23px]">
        <span>Explore Foods</span>
        <span>
          <Image
            src={arrowRight}
            alt="explore foods"
            width={20}
          />
        </span>
      </button>
    </section>
  );
}

function Filter() {
  return (
    <section className="mt-12 max-w-[100%] overflow-x-auto flex justify-center gap-6">
      <button
        type="button"
        className="py-3 px-7 bg-white/90 rounded-lg border border-white/20 font-light leading-6 text-secondary">
        All
      </button>

      {filterList.map((filter, index) => (
        <button
          key={index + 1}
          type="button"
          className="py-3 px-7 flex items-center gap-3 bg-white/5 rounded-lg border border-white/20 font-light leading-6 text-white hover:bg-white/90 hover:text-secondary transition-colors">
          <span>
            <Image
              src={filter.image}
              alt={filter.label}
              width={36}
            />
          </span>

          <span>{filter.label}</span>
        </button>
      ))}

      <button
        type="button"
        className="py-3 px-7 bg-white/5 rounded-lg border border-white/20 font-light leading-6 text-white">
        Others
      </button>
    </section>
  );
}

function FoodCatalog() {
  const foodCard = [
    { name: "Chezu Sushi", image: suhsi12, rating: 4.9, price: "$21.00" },
    { name: "Originale Sushi", image: suhsi11, rating: 4.8, price: "$15.75" },
    { name: "Ramen Legendo", image: suhsi10, rating: 4.7, price: "$13.00" },
  ];

  return (
    <section className="mt-16 flex justify-center items-end flex-wrap gap-12">
      {foodCard.map((food, index) => (
        <article
          key={index}
          className="w-1/4 py-3 h-[200px] min-w-[200px] bg-white/10 border border-white/20 flex flex-col items-center justify-end gap-2 rounded-lg hover:scale-105 hover:bg-white/70 transition-all group text-white hover:text-secondary">
          <span className="mb-3">
            <Image
              src={food.image}
              alt={food.name}
              width={115}
              height={85}
            />
          </span>

          <h4 className="font-medium leading-[32px] font-playfair text-lg group-hover:font-bold">
            {food.name}
          </h4>

          <div className="flex gap-8">
            <div className="flex gap-1">
              <Image
                src={Star}
                alt="star rating"
              />
              <p>{food.rating}</p>
            </div>

            <p>{food.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
