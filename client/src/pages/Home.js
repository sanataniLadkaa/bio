import "./Home.css";
import Stories from "../components/Stories";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="insta-feed">

      {/* Instagram Top Header */}
      <div className="insta-header">
        <h2>Instagram</h2>
        <div>🤍 ✉️</div>
      </div>

      {/* STORIES SECTION */}
      <div className="stories-wrapper">
        <Stories />
      </div>

      {/* ABOUT POST */}
      <div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">anurag_tiwari</span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg">
          <h2>About Me</h2>
        </div>

        <div className="post-content">
          <p>
            AI Engineer building scalable RAG and multi-agent systems.
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
      </div>

      {/* EXPERIENCE POST */}
      <div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">anurag_tiwari</span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg2">
          <h2>Experience</h2>
        </div>

        <div className="post-content">
          <p>
            Built AI recruitment automation system, video personality analyzer
            and YOLO detection pipelines.
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
      </div>

      {/* SKILLS POST */}
      <div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">anurag_tiwari</span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg3">
          <h2>Skills</h2>
        </div>

        <div className="post-content">
          <p>
            React • Node • Python • FastAPI • MongoDB • LangChain • Docker
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
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

export default Home;