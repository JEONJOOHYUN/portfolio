import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { ScrollToHash } from "@/components/ScrollToHash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </>
  );
}
