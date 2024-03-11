export default function AboutContent() {
  return (
    <article className="flex w-full flex-col justify-center gap-10 p-16 md:w-[56%]">
      <p className="flex gap-2 text-lg font-medium tracking-wide text-zinc-500 transition-colors">
        <span>About Us |</span>
        <span>私たちに関しては</span>
      </p>

      <h3 className="font-playfair text-5xl font-bold tracking-wide text-zinc-700 md:text-6xl">
        Our mission is to bring true Japanese flavours to you.
      </h3>

      <p className="text-lg font-thin leading-loose text-secondary">
        We will continue to provide the experience of Omotenashi, the Japanese
        mindset of hospitality, with our shopping and dining for our customers.
      </p>
    </article>
  );
}

// TODO: Title h3
// TODO: p > about us
// TODO: p > We will continue...
