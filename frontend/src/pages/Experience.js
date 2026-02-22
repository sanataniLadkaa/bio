import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import "./Portfolio.css";
import laptop from "../assets/laptop.png"; // 👈 illustration image

function Experience() {
  return (
    <section className="experience section" id="experience">

      <h2 className="section-title">Experiences</h2>

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

          {/* CARD 1 */}
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="exp-date">Jan 2025 - Present</p>
            <h3>FULL STACK ENGINEER INTERN</h3>
            <h4>Glood.ai</h4>

            <div className="exp-content">
              <FaUserTie className="exp-icon" />
              <p>
                Contributed to scalable MERN applications. Built reusable
                frontend components and optimized backend APIs. Implemented
                testing using Jest and improved performance and reliability.
                Tech stack included React, Node.js, Express, PostgreSQL,
                Docker and MDX.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="exp-date">Aug 2024 - Nov 2024</p>
            <h3>FULL STACK WEB DEVELOPER</h3>
            <h4>Code Smart</h4>

            <div className="exp-content">
              <FaUserTie className="exp-icon" />
              <p>
                Developed full-stack applications and Chrome extensions.
                Collaborated with Agile teams to design and deploy new
                features. Improved UI performance and enhanced user experience.
                Worked with React, Redux, Node.js and MongoDB.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;