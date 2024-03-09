export default function Subscribe() {
  return (
    <section
      id="services"
      style={{ backgroundImage: "url('assets/subscribe_bg.png')" }}
      className="flex w-full flex-col items-center gap-8 bg-primary bg-contain bg-center bg-no-repeat py-16"
    >
      <h2 className="text-center font-playfair text-4xl font-semibold leading-tight text-white md:text-5xl">
        Get <span>Offers</span> straight
        <br />
        to your inbox
      </h2>

      <p className="font-extralight tracking-widest text-white/90">
        Sign-up for the SushiMan Newsletter
      </p>

      <form
        action="#"
        className="flex w-[75%] gap-4 rounded-lg border border-transparent bg-white/10 py-1 pl-5 pr-2 focus-within:border-white/30 md:w-[50%]"
      >
        <input
          type="email"
          aria-label="email"
          placeholder="Enter your email"
          className="w-[100%] border-b border-black/25 bg-transparent pt-1 text-lg text-white outline-none placeholder:font-extralight placeholder:text-zinc-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-secondary p-3 text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-secondary hover:shadow-md hover:shadow-black/15"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
