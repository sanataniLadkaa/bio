import "./Portfolio.css";

import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMysql,
  SiFastapi,
  SiFlask,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiOpencv,
  SiAmazon,
  SiSupabase
} from "react-icons/si";

function Skills() {
  const skills = [
    // Languages
    { name: "Python", icon: <FaPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },

    // Frameworks
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },

    // Machine Learning
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "HuggingFace", icon: <SiHuggingface /> },
    { name: "CLIP", icon: "🤖" },

    // Computer Vision
    { name: "YOLOv5", icon: "🎯" },
    { name: "DeepFace", icon: "👤" },
    { name: "Stable Diffusion", icon: "🖼️" },
    { name: "OpenCV", icon: <SiOpencv /> },

    // Tools & Platforms
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS (Lambda, EC2)", icon: <SiAmazon /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Linux", icon: <FaLinux /> },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-slider">
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