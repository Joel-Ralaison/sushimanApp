import HeroContent from "./ui/HeroContent";
import HeroIllustration from "./ui/HeroIllustration";

export default function Hero() {
  return (
    <section className="relative mt-[55px] flex min-h-[calc(100svh-55px)] flex-wrap overflow-hidden rounded-b-lg">
      <HeroIllustration />
      <HeroContent />
    </section>
  );
}
