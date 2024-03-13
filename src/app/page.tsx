import Hero from "@/components/sections/hero";
import ProjectSection from "@/components/sections/project-section";
import ServiceSection from "@/components/sections/service-section";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ServiceSection />
      <ProjectSection />
    </main>
  );
}
