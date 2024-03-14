import AboutContent from "./ui/AboutContent";
import AboutIllustration from "./ui/AboutIllustration";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100svh-55px)] flex-col-reverse md:flex-row"
    >
      <AboutIllustration />
      <AboutContent />
    </section>
  );
}
