import classNames from "classnames";

type Props = {
  type: "main" | "foods" | "trending" | "subscribe";
  children: React.ReactNode;
} & React.ComponentProps<"h2">;

const twH2Base = "font-playfair";

const twH2Type: Record<Props["type"], string> = {
  main: "text-6xl font-semibold text-zinc-700 md:text-5xl md:leading-[3.5rem] mini:text-2xl tablet:text-5xl tablet:leading-[1.2]",
  foods:
    "text-center text-4xl font-semibold leading-[78px] text-white md:text-6xl",
  trending: "text-4xl font-medium text-zinc-700",
  subscribe:
    "text-center text-4xl font-semibold leading-tight text-white md:text-5xl",
};

export default function TitleH2({ type = "main", children }: Props) {
  return <h2 className={classNames(twH2Base, twH2Type[type])}>{children}</h2>;
}
