"use client";

import classNames from "classnames";

type buttonProps = {
  impact: "cta" | "primary" | "secondary" | "list";
  shape: "cta" | "normal" | "noRoundedRight";
  hoverShape: "grow" | "normal" | "list";
  size: "cta" | "normal" | "small" | "list";

  type?: "button" | "reset" | "submit";
  children: React.ReactNode;
} & React.ComponentProps<"button">;

const twBtnBase =
  "flex items-center justify-center transition-all duration-200";

const twBtnImpact: Record<buttonProps["impact"], string> = {
  cta: "bg-secondary text-white hover:bg-primary",
  primary: "bg-secondary text-white hover:bg-creamson hover:text-secondary",
  secondary:
    "bg-transparent text-black border border-secondary hover:bg-white gap-3",
  list: "bg-white/5 border border-white/20 text-white hover:bg-white/90 hover:text-secondary gap-2",
};

const twBtnShape: Record<buttonProps["shape"], string> = {
  cta: "rounded-2xl",
  normal: "rounded-lg",
  noRoundedRight: "rounded-l-3xl gap-2",
};

const twBtnHover: Record<buttonProps["hoverShape"], string> = {
  grow: "hover:scale-[1.01] hover:shadow-md hover:shadow-black/10 active:scale-[0.98]",
  normal: "hover:shadow-md hover:shadow-black/15",
  list: "",
};

const twBtnSize: Record<buttonProps["size"], string> = {
  cta: "h-[67px] w-[80%] min-w-[150px] p-5 text-[18px] font-medium md:w-[50%]",
  normal: "px-10 py-4 text-lg font-medium leading-[23px]",
  small: "p-3",
  list: "px-7 py-3 font-light leading-6",
};

export default function Button({
  impact = "primary",
  shape = "normal",
  hoverShape = "normal",
  size = "normal",

  type = "button",
  children,
  className,
  ...restProps
}: buttonProps) {
  return (
    <button
      className={classNames(
        twBtnBase,
        twBtnImpact[impact],
        twBtnShape[shape],
        twBtnHover[hoverShape],
        twBtnSize[size],
        className,
      )}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
}
