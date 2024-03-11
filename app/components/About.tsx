import AboutContent from "./ui/AboutContent";
import AboutIllustration from "./ui/AboutIllustration";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[100vh] flex-col-reverse flex-wrap md:flex-row md:flex-nowrap"
    >
      <AboutIllustration />
      <AboutContent />
    </section>
  );
}
