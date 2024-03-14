import { MotionArticle } from "./ui/Reusables/Motions";
import SubscribeForm from "./ui/SubscribeForm";

const fadeIn = {
  start: { opacity: 0, y: "10%" },
  stop: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export default function Subscribe() {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-center gap-8 bg-primary bg-[url('/assets/subscribe_bg.png')] bg-contain bg-center bg-no-repeat py-16"
    >
      <SubscribeTitle />
      <SubscribeForm />
    </section>
  );
}

function SubscribeTitle() {
  return (
    <MotionArticle variants={fadeIn} initial="start" whileInView={"stop"}>
      <h2 className="text-center font-playfair text-4xl font-semibold leading-tight text-white md:text-5xl">
        Get <span>Offers</span> straight
        <br />
        to your inbox
      </h2>
      <p className="font-extralight tracking-widest text-white/90">
        Sign-up for the SushiMan Newsletter
      </p>
    </MotionArticle>
  );
}

// TODO: Remove inline style of div
