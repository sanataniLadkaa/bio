import "./Portfolio.css";
import { FaBootstrap, FaFigma, FaPython } from "react-icons/fa";
import { SiFirebase, SiCplusplus, SiStrapi, SiGooglecloud, SiMui } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Material UI", icon: <SiMui /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Strapi", icon: <SiStrapi /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section className="skills section" id="skills">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-slider">

        {/* Duplicate list for infinite loop */}
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;