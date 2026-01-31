import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack"; // নতুন
import { Contact } from "@/components/sections/Contact"; // নতুন

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased selection:bg-yellow-500/30">
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}