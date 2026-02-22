import { motion } from "framer-motion";
import "./Portfolio.css";
import profile from "../assets/profile.jpg"; // 👈 Your image path

function About() {
  return (
    <section className="about section" id="about">

      {/* LEFT CONTENT */}
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="about-heading">WHO I AM?</h2>

        <p>
          My name is <span className="highlight-name">ANURAG TIWARI</span>. 
          I am a professional and enthusiastic programmer in my daily life. 
          I am a quick learner with a self-learning attitude. I love to learn 
          and explore new technologies and am passionate about problem-solving.
          <br /><br />
          I love almost all the stacks of web application development and love 
          to make the web more open to the world. My core skill is based on 
          JavaScript and I love to do most of the things using JavaScript.
          <br /><br />
          I am available for any kind of job opportunity that suits my skills 
          and interests.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profile} alt="Profile" />
      </motion.div>

      {/* SIDE LABEL */}
      <div className="about-side-label">
        ABOUT ME
      </div>

    </section>
  );
}

export default About;