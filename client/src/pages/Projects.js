import { motion } from "framer-motion";
import "./Portfolio.css";
import project1 from "../assets/profile.jpg";
import project2 from "../assets/profile.jpg";

function Projects() {
  return (
    <section className="projects section" id="projects">

      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-container">

        {/* PROJECT 1 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="project-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <h3>New Education Era</h3>
          </div>

          <img src={project1} alt="Project 1" className="project-image" />

          <div className="project-code">
<pre>{`const project = {
  name: "New Education Era",
  tools: ["ReactJS", "NodeJS", "Express",
          "MongoDB", "TensorFlow", "Python"],
  myRole: "Full Stack & ML Developer",
  description: "Developed an AI-driven early 
  warning system to identify at-risk students 
  and reduce dropout rates."
};`}</pre>
          </div>
        </motion.div>

        {/* PROJECT 2 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="project-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <h3>ConverseX - Chat Application</h3>
          </div>

          <img src={project2} alt="Project 2" className="project-image" />

          <div className="project-code">
<pre>{`const project = {
  name: "ConverseX - Chat Application",
  tools: ["ReactJS", "NodeJS", "Express",
          "MongoDB", "Socket.io"],
  myRole: "Full Stack Developer",
  description: "Developed a real-time chat 
  application with authentication and 
  seamless messaging."
};`}</pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;