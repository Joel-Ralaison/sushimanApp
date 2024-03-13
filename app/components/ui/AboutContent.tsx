import TitleH2 from "./Reusables/TitleH2";

export default function AboutContent() {
  return (
    <article className="flex w-full flex-col justify-center gap-10 p-16 md:w-[56%]">
      <p className="flex gap-2 text-lg font-medium tracking-wide text-zinc-500 transition-colors">
        <span>About Us |</span>
        <span>私たちに関しては</span>
      </p>

      <TitleH2 type="main">
        Our mission is to bring true Japanese flavours to you.
      </TitleH2>

      <p className="text-lg font-thin leading-loose text-secondary">
        We will continue to provide the experience of Omotenashi, the Japanese
        mindset of hospitality, with our shopping and dining for our customers.
      </p>
    </article>
  );
}

// TODO: Title h3
// TODO: p > about us (reusable)
// TODO: p > We will continue...
