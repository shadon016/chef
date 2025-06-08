import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Services from "@/components/services.jsx";
import Faq from "@/components/faq.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Faq />
    </div>
  );
}
