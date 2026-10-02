import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { ScrollToHash } from "@/components/ScrollToHash";
import { RevealObserver } from "@/components/RevealObserver";
import { CursorTrail } from "@/components/CursorTrail";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* last, so every [data-reveal] above exists when its effect runs */}
      <RevealObserver />
      <CursorTrail />
    </>
  );
}
