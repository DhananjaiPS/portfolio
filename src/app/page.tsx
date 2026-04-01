import Hero from "@/components/Hero";
import EducationPath from "@/components/EducationPath";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <EducationPath />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
