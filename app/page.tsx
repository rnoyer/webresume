import Header from "./components/Header";
import Hero from "./components/Hero";
import Career from "./components/SectionCareer";
import Projects from "./components/SectionProjects";
import Skills from "./components/SectionSkills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="container" className="flex flex-col">
      <Header>
      </Header>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Career />
      </main>
      <Footer>
      </Footer>
    </div >
  );
}
