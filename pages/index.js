import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import NowPlaying from "../components/NowPlaying";

export default function Home() {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <div className="flex justify-center">
        <NowPlaying />
      </div>
    </div>
  );
}
