import { fade } from "@/utils/motionVariants";
import { MotionDiv, MotionP } from "./Reusables/Motions";
import TitleH2 from "./Reusables/TitleH2";

export default function AboutContent() {
  return (
    <article className="flex h-[calc(100svh-55px)] flex-col justify-center gap-8 overflow-hidden pl-8 md:w-[56%]">
      <div className="flex gap-2 text-lg font-medium tracking-wide text-zinc-500 transition-colors">
        <span>About Us |</span>
        <span>私たちに関しては</span>
      </div>

      <MotionDiv
        variants={fade("top", "", 0.25)}
        initial="start"
        whileInView={"stop"}
      >
        <TitleH2 type="main">
          Our mission is to bring true Japanese flavours to you.
        </TitleH2>
      </MotionDiv>

      <MotionP
        variants={fade("", "", 0.25)}
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
