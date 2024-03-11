export default function SubscribeForm() {
  return (
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
  );
}

// TODO: Use Client
