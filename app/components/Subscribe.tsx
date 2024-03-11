import SubscribeForm from "./ui/SubscribeForm";

export default function Subscribe() {
  return (
    <section
      id="services"
      style={{ backgroundImage: "url('assets/subscribe_bg.png')" }}
      className="flex w-full flex-col items-center gap-8 bg-primary bg-contain bg-center bg-no-repeat py-16"
    >
      <SubscribeTitle />
      <SubscribeForm />
    </section>
  );
}

function SubscribeTitle() {
  return (
    <>
      <h2 className="text-center font-playfair text-4xl font-semibold leading-tight text-white md:text-5xl">
        Get <span>Offers</span> straight
        <br />
        to your inbox
      </h2>
      <p className="font-extralight tracking-widest text-white/90">
        Sign-up for the SushiMan Newsletter
      </p>
    </>
  );
}

// TODO: Remove inline style of div
