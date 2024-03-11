import HeroContent from "./ui/HeroContent";
import HeroIllustration from "./ui/HeroIllustration";

export default function Hero() {
  return (
    <section className="relative mt-[60px] flex min-h-[calc(100svh-60px)] flex-wrap">
      <HeroIllustration />
      <HeroContent />
    </section>
  );
}
