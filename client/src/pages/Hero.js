import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Portfolio.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
function Hero() {
  return (
    <section className="hero section" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello,
            <br />
            This is <span className="highlight-name">ANURAG TIWARI</span>,
            <br />
            I'm a Professional{" "}
            <span className="highlight-role">AI Engineer</span>.
          </motion.h1>

          <div className="hero-icons">
            <FaGithub />
            <FaLinkedin />
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>

          <a 
            href="/resume.pdf" 
            download="Anurag_Tiwari_Resume.pdf"
            className="btn-gradient"
          >
            Get Resume ↓
          </a>
          </div>
        </div>

        {/* RIGHT SIDE */}

<motion.div
  className="code-card"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="code-header">
    <span className="dot red"></span>
    <span className="dot yellow"></span>
    <span className="dot green"></span>
  </div>

  <SyntaxHighlighter
    language="javascript"
    style={oneDark}
    customStyle={{
      margin: 0,
      background: "transparent",
      fontSize: "18px",
      padding: "30px",
      borderRadius: "0 0 20px 20px"
    }}
  >
{`const developer = {
  name: "ANURAG TIWARI",
  skills: ["React", "FastAPI", "NodeJS", "LangChain"],
  problemSolver: true,
  quickLearner: true,
  hireable: () => true
};`}
  </SyntaxHighlighter>
</motion.div>
      </div>

    </section>
  );
}

export default Hero;