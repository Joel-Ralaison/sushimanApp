import Image from "next/image";
import { FILTERS_LIST } from "@/app/constants/FOODS_FILTER_LIST";

export default function FoodsFilters() {
  return (
    <section className="mt-12 flex max-w-[100%] scroll-m-12 gap-6 overflow-x-auto px-2 pb-4">
      <button
        type="button"
        className="rounded-lg border border-white/20 bg-white/90 px-7 py-3 font-light leading-6 text-secondary"
      >
        All
      </button>

      {FILTERS_LIST.map((filter, index) => (
        <button
          key={index + 1}
          type="button"
          className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-7 py-3 font-light leading-6 text-white transition-colors hover:bg-white/90 hover:text-secondary"
        >
          <span>
            <Image
              src={filter.image}
              alt={filter.label}
              style={{ width: "36px" }}
            />
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

// TODO: BUTTON Client Components to filter tab
