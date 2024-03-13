import Image from "next/image";
import { FILTERS_LIST } from "@/constants/FOODS_FILTER_LIST";
import Button from "./Reusables/Button";

export default function FoodsFilters() {
  return (
    <section className="mt-12 flex max-w-[100%] scroll-m-12 gap-6 overflow-x-auto px-2 pb-4">
      <Button impact="list" shape="normal" size="list" hoverShape="list">
        All
      </Button>

      {FILTERS_LIST.map((filter, index) => (
        <Button
          key={index + 1}
          impact="list"
          shape="normal"
          size="list"
          hoverShape="list"
        >
          <span>
            <Image
              src={filter.image}
              alt={filter.label}
              style={{ width: "36px" }}
            />
          </span>
          <span>{filter.label}</span>
        </Button>
      ))}

      <Button impact="list" shape="normal" size="list" hoverShape="list">
        Others
      </Button>
    </section>
  );
}

// TODO: BUTTON Client Components to filter tab
