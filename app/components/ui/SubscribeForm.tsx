import Button from "./Reusables/Button";
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

      <Button
        impact="primary"
        size="small"
        shape="normal"
        hoverShape="normal"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
}

// TODO: Use Client
