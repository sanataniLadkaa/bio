import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
// import { FaXTwitter } from "react-icons/fa6";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }

    } catch (error) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">CONTACT WITH ME</h2>

      <div className="contact-container">

        {/* LEFT SIDE - FORM */}
        <div className="contact-form card">
          <p className="contact-text">
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form onSubmit={handleSubmit}>

            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label>Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Your Message:</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            />

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>

          </form>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="contact-info">

          <div className="info-item">
            <MdEmail className="info-icon" />
            <a href="mailto:tiwarianurag812@gmail.com">
              tiwarianurag812@gmail.com
            </a>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <a href="tel:+918168596522">
              +91 8168596522
            </a>
          </div>

          <div className="info-item">
            <MdLocationOn className="info-icon" />
            <span>Mirzapur, Uttar Pradesh</span>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/sanataniLadkaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/anurag-tiwari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            {/* <a
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
            > */}
              {/* <FaFacebookF /> */}
            {/* </a>
          </div> */}
</div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;