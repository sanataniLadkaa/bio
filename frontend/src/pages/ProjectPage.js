import "./Portfolio.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

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
    <div className="portfolio">

      {/* Glow Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Back Button */}
      <div className="navbar">
        <h3>Projects</h3>
        <button className="resume-btn" onClick={() => navigate("/portfolio")}>
          ← Back
        </button>
      </div>

      <section className="section">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h1>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{project.title}</h2>
            <p className="tech">{project.tech}</p>
            <p>{project.description}</p>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;