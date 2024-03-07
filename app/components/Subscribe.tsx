export default function Subscribe() {
  return (
    <section
      id="services"
      style={{ backgroundImage: "url('assets/subscribe_bg.png')" }}
      className="flex flex-col items-center gap-8 bg-primary bg-contain bg-center bg-no-repeat py-16"
    >
      <h2 className="text-center font-playfair text-5xl font-semibold leading-tight text-white">
        Get <span>Offers</span> straight
        <br />
        to your inbox
      </h2>

      <p className="font-extralight tracking-widest text-white/90">
        Sign-up for the SushiMan Newsletter
      </p>

      <form
        action="#"
        className="flex gap-4 rounded-lg border border-transparent bg-white/10 py-1 pl-5 pr-2 focus-within:border-white/30"
      >
        <input
          type="email"
          aria-label="email"
          placeholder="Enter your email"
          className="min-w-[400px] border-b border-black/25 bg-transparent pt-1 text-lg text-white outline-none placeholder:font-extralight placeholder:text-zinc-100"
        />
        <button
          type="submit"
          className="rounded-md bg-secondary p-3 text-white"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
