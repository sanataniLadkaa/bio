import "./Portfolio.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
// import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectsPage from "./ProjectsPage";
import Education from "../components/Education";

function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsPage />
      <Skills />
      <Education/>
      <Contact />
    </div>
  );
}

export default Portfolio;