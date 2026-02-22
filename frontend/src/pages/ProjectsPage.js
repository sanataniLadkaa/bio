import "./Portfolio.css";
import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "AI-Powered Product Recommendation System",
      tech: "React • FastAPI • CLIP",
      description:
        "Built a multimodal recommendation engine using CLIP embeddings for image-based similarity search. Implemented semantic filtering and UI-triggered retraining pipeline.",
      github: "https://github.com/2108410100017-cpu/reco",
    },
    {
      title: "Face Recognition Attendance System",
      tech: "FastAPI • DeepFace • MongoDB • Docker",
      description:
        "Developed real-time multi-user face recognition attendance system with geolocation validation and admin dashboard.",
      github: "https://github.com/sanataniLadkaa/Face-Recognition-based-Attendance-System",
    },
    {
      title: "Smart Hiring Platform",
      tech: "Generative AI • FastAPI • BERT",
      description:
        "Built AI-powered recruitment platform using resume embeddings and RAG-based summarization with secure role-based access control.",
      github: "https://github.com/sanataniLadkaa/jobai",
    },
  ];

  return (
    <section className="projects section" id="projects">

      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Browser Header */}
            <div className="project-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <h3>{project.title}</h3>
            </div>

            {/* Code Style Content */}
            <div className="project-code">
              <pre>{`const project = {
  title: "${project.title}",
  tech: "${project.tech}",
  description: "${project.description}"
};`}</pre>
            </div>

            {/* Button */}
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                View Code →
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;