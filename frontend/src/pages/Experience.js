import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import "./Portfolio.css";
import laptop from "../assets/laptop.png";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">

        {/* LEFT ILLUSTRATION */}
        <motion.div
          className="experience-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={laptop} alt="Experience Illustration" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="experience-right">

          {/* Studio11 Productions - AI Automation Engineer */}
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="exp-date">Nov 2025 – Present</p>
            <h3>AI Automation Engineer</h3>
            <h4>Studio11 Productions, Bangalore</h4>

            <div className="exp-content">
              <FaUserTie className="exp-icon" />
              <ul>
                <li>Developed an AI-based documentation system using Landing AI for structured text extraction.</li>
                <li>Built automation pipelines integrating computer vision and NLP components.</li>
                <li>Implemented a multi-document RAG chatbot using sentence-level chunking, transformer embeddings, FAISS indexing, and CrossEncoder re-ranking with session-aware caching.</li>
              </ul>
            </div>
          </motion.div>

          {/* Verbros Technologies - Backend AI Engineer */}
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="exp-date">Jun 2025 – Aug 2025</p>
            <h3>Backend AI Engineer</h3>
            <h4>Verbros Technologies Pvt. Ltd., Lucknow</h4>

            <div className="exp-content">
              <FaUserTie className="exp-icon" />
              <ul>
                <li>Designed and deployed backend services using FastAPI and Node.js.</li>
                <li>Integrated deep learning models (HuggingFace, Inswapper, Whisper, YOLOv5).</li>
                <li>Deployed inference pipelines on AWS Lambda.</li>
              </ul>
            </div>
          </motion.div>

          {/* Verbros Technologies - Junior Software Developer */}
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="exp-date">Mar 2025 – Jun 2025</p>
            <h3>Junior Software Developer</h3>
            <h4>Verbros Technologies Pvt. Ltd., Lucknow</h4>

            <div className="exp-content">
              <FaUserTie className="exp-icon" />
              <ul>
                <li>Implemented attention monitoring using gaze estimation and facial expression analysis.</li>
                <li>Built a full-stack application using React, Node.js, and DeepFace for mood-based music playback.</li>
              </ul>
            </div>
          </motion.div>

          {/* Studio11 Productions - AI Intern */}
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="exp-date">Jul 2024 – Sep 2024</p>
            <h3>AI Intern</h3>
            <h4>Studio11 Productions, Remote</h4>

            <div className="exp-content">
              <FaUserTie className="exp-icon" />
              <ul>
                <li>Developed Stable Diffusion-based image generation workflows for personalized client content.</li>
                <li>Created custom computer vision nodes for face and iris detection.</li>
                <li>Annotated datasets to improve model performance and client-specific fine-tuning.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;