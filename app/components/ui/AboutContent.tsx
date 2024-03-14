import { MotionArticle, MotionDiv, MotionP } from "./Reusables/Motions";
import TitleH2 from "./Reusables/TitleH2";

const fadeTop = {
  start: { opacity: 0, y: "20%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, yoyo: 1 },
  },
};

const fade = {
  start: { opacity: 0 },
  stop: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.25, yoyo: 1 },
  },
};

export default function AboutContent() {
  return (
    <article className="flex h-[calc(100svh-55px)] flex-col justify-center gap-8 overflow-hidden pl-8 md:w-[56%]">
      <div className="flex gap-2 text-lg font-medium tracking-wide text-zinc-500 transition-colors">
        <span>About Us |</span>
        <span>私たちに関しては</span>
      </div>

      <MotionDiv variants={fadeTop} initial="start" whileInView={"stop"}>
        <TitleH2 type="main">
          Our mission is to bring true Japanese flavours to you.
        </TitleH2>
      </MotionDiv>

      <MotionP
        variants={fade}
        initial="start"
        whileInView={"stop"}
        className="text-lg font-thin leading-snug text-secondary"
      >
        We will continue to provide the experience of Omotenashi, the Japanese
        mindset of hospitality, with our shopping and dining for our customers.
      </MotionP>
    </article>
  );
}

// TODO: Title h3
// TODO: p > about us (reusable)
// TODO: p > We will continue...
