import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import "../pages/Portfolio.css";
import educationImg from "../assets/laptop.png"; // 👈 your illustration

function Education() {
  return (
    <section className="education section" id="education">

      <h2 className="section-title">Educations</h2>

      <div className="education-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="education-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={educationImg} alt="Education Illustration" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="education-right">

          {/* DEGREE 1 */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="edu-date">2021 - 2025</p>
            <h3>Bachelor's Degree</h3>
            <h4>Rajkiya Engineering College Sonbhadra</h4>

            <div className="edu-content">
              <FaUserGraduate className="edu-icon" />
            </div>
          </motion.div>

          {/* DEGREE 2 */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="edu-date">2019 - 2020</p>
            <h3>Higher Secondary Certificate</h3>
            <h4>DAV Centenary Public School</h4>

            <div className="edu-content">
              <FaUserGraduate className="edu-icon" />
            </div>
          </motion.div>

          {/* DEGREE 3 */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <p className="edu-date">2017 - 2018</p>
            <h3>High School Certificate</h3>
            <h4>DAV Centenary Public School</h4>

            <div className="edu-content">
              <FaUserGraduate className="edu-icon" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;