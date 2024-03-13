import Link from "next/link";

export default function HeaderLogo() {
  return (
    <article className="relative h-[60px] w-[44.5%] overflow-hidden px-5 pb-4 pt-3">
      <h1 className="z-[2] pl-5 font-playfair text-xl font-bold text-white">
        <Link href="/">SushiMan</Link>
      </h1>

      <div className="absolute inset-0 z-[-1] w-full bg-primary"></div>
    </article>
  );
}
