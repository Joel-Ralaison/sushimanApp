export default function Subscribe() {
  return (
    <section
      id="services"
      style={{ backgroundImage: "url('assets/subscribe_bg.png')" }}
      className="py-16 flex flex-col items-center gap-8 bg-primary bg-contain bg-no-repeat bg-center">
      <h2 className="font-playfair text-5xl font-semibold leading-tight text-white text-center">
        Get <span>Offers</span> straight
        <br />
        to your inbox
      </h2>

      <p className="text-white/90 font-extralight tracking-widest">
        Sign-up for the SushiMan Newsletter
      </p>

      <form
        action="#"
        className="flex gap-4 pl-5 pr-2 py-1 rounded-lg bg-white/10 border border-transparent focus-within:border-white/30">
        <input
          type="email"
          aria-label="email"
          placeholder="Enter your email"
          className="pt-1 min-w-[400px] bg-transparent border-b border-black/25 outline-none text-lg text-white placeholder:text-zinc-100 placeholder:font-extralight"
        />
        <button
          type="submit"
          className="bg-secondary text-white p-3 rounded-md">
          Subscribe
        </button>
      </form>
    </section>
  );
}
