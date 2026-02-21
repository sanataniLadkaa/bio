import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="insta-feed">

      {/* Instagram Header */}
      <div className="insta-header">
        <h2>Instagram</h2>
        <div>🤍 ✉️</div>
      </div>

      {/* Profile Section */}
      <div className="profile-header">
        <div className="profile-circle"></div>
        <div>
          <h3 className="username">anurag_tiwari</h3>
          <p className="bio-text">AI Developer | RAG | ML Systems</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="profile-actions">
        <button className="message-btn">Message</button>
      </div>

      {/* Contact Card */}
      <div className="contact-card">
        <h3>Contact Info</h3>

        <p>
          📧{" "}
          <a href="mailto:tiwarianurag812@gmail.com">
            Mail me
          </a>
        </p>

        <p>
          💻{" "}
          <a
            href="https://github.com/sanataniLadkaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/anurag-tiwari-34a176229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button
          onClick={() => navigate("/")}
          className={location.pathname === "/" ? "active" : ""}
        >
          🏠
        </button>

        <button
          onClick={() => navigate("/contact")}
          className={location.pathname === "/contact" ? "active" : ""}
        >
          💬
        </button>
      </div>

    </div>
  );
}

export default Contact;