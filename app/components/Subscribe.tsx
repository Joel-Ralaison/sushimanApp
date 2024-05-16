import SubscribeForm from "./ui/SubscribeForm";

import { fade } from "@/utils/motionVariants";
import { MotionArticle } from "./ui/Reusables/Motions";

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
    <MotionArticle
      variants={fade("top", "", 0.25)}
      initial="start"
      whileInView={"stop"}
    >
      <h2 className="text-center font-playfair text-4xl font-semibold leading-tight text-white md:text-5xl">
        Get <span>Offers</span> straight
        <br />
        to your inbox
      </h2>
      <p className="mt-4 font-extralight tracking-widest text-white/90">
        Sign-up for the SushiMan Newsletter
      </p>
    </MotionArticle>
  );
}
