import AboutSection from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import { fetcher } from "@/lib/http";

const getData = async () => {
  const data = await fetcher("/api/services");
  return data;
};

export default async function Home() {
  const services = await getData();

  return (
    <div className="scroll-smooth">
      <Hero />
      <Portfolio />
      <Services services={services} />
      <AboutSection />
    </div>
  );
}
