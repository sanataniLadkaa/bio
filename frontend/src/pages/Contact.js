import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="contact-title">CONTACT WITH ME</h2>

      <div className="contact-container">
        {/* LEFT SIDE - FORM */}
        <div className="contact-form">
          <p className="contact-text">
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form>
            <label>Your Name:</label>
            <input type="text" placeholder="Enter your name" />

            <label>Your Email:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Your Message:</label>
            <textarea rows="5" placeholder="Write your message..." />

            <button type="submit" className="send-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="contact-info">
          <div className="info-item">
            <MdEmail className="info-icon" />
            <span>tiwarianurag812@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 8168596522</span>
          </div>

          <div className="info-item">
            <MdLocationOn className="info-icon" />
            <span>Varanasi, Uttar Pradesh</span>
          </div>

          <div className="social-icons">
            <a href="https://github.com/sanataniLadkaa" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/anurag-tiwari" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
<a
  href="https://twitter.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaXTwitter />
</a>

<a
  href="https://facebook.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebookF />
</a>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;