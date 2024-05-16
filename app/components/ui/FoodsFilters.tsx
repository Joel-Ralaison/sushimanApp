import Image from "next/image";

import { FILTERS_LIST } from "@/constants/FOODS_FILTER_LIST";
import FoodsFilterButton from "./Reusables/FoodsFilterButton";

export default function FoodsFilters() {
  return (
    <section className="custScrollbar flex max-w-[100%] gap-6 overflow-x-auto px-2 pb-4">
      <FoodsFilterButton>All</FoodsFilterButton>

      {FILTERS_LIST.map((filter, index) => (
        <FoodsFilterButton key={index}>
          <span>
            <Image
              src={filter.image}
              alt={filter.label}
              style={{ width: "36px" }}
            />
          </span>
          <span>{filter.label}</span>
        </FoodsFilterButton>
      ))}

      <FoodsFilterButton>Others</FoodsFilterButton>
    </section>
  );
}
