import About from "./sections/About";
import Blog from "./sections/Blog";
import Footer from "./sections/components/Footer";
import Navbar from "./sections/components/Navbar";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Footer />
    </>
  );
}
