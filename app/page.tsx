import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Foods from "./components/Foods";
import Trending from "./components/Trending";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Foods />
      <Trending />
      <Subscribe />
      <Footer />
    </>
  );
}
