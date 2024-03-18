import { ScrollToTopButton } from "./Reusables/ScrollToTopButton";

export default function HeaderLogo() {
  return (
    <article className="relative h-full w-[44.5%] self-stretch overflow-hidden px-5 pb-4 pt-3">
      <ScrollToTopButton />
      <div className="absolute inset-0 z-[-1] w-full bg-primary" />
    </article>
  );
}
