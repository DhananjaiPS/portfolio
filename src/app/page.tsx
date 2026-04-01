import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EducationPath from "@/components/EducationPath";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    // 'scroll-smooth' tailwind class is added just as a backup for smooth scrolling
    <main className="bg-background text-foreground min-h-screen scroll-smooth">

      {/* THE NEW NAVBAR */}
      <Navbar />

      {/* Wrapped each component in a section with an ID matching the navbar links */}
      <section id="about">
        <Hero />
        <About />
      </section>

      <section id="education">
        <EducationPath />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <Footer />
    </main>
  );
}