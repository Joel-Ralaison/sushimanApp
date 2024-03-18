"use client";

import Button from "./Button";

type props = React.ComponentProps<"button">;

export default function FoodsFilterButton({ children }: props) {
  return (
    <Button impact="list" shape="normal" size="list" hoverShape="list">
      {children}
    </Button>
  );
}
