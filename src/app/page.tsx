import AboutSection from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Portfolio />
      <Services />
      <AboutSection />
    </div>
  );
}
