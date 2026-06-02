import CustomCursor from "@/components/CustomCursor";
import BackgroundGrid from "@/components/BackgroundGrid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Immersive FX Layers */}
      <CustomCursor />
      <BackgroundGrid />

      {/* Floating Navigation Header */}
      <Header />

      {/* Main Single Page Scroll Journey */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Section 1: Hero Hook */}
        <Hero />

        {/* Section 2: Narrative Story */}
        <About />

        {/* Section 3: Professional Arsenal */}
        <Skills />

        {/* Section 4: Horizontal Showcase Case Studies */}
        <Projects />

        {/* Section 5: Premium Lead Form */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-900/60 bg-slate-950/20 text-center relative z-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider font-outfit text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Aria Vance. All Rights Reserved.
          </div>
          <div>
            Designed with High-Craft Restraint &amp; Engineered in Next.js
          </div>
        </div>
      </footer>
    </>
  );
}
