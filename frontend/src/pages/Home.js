import "./Home.css";
import Stories from "../components/Stories";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="insta-feed">

      {/* Instagram Header */}
      <div className="insta-header">
        <h2>Anurag's Bio</h2>

        <div className="header-right">
          <button
            className="toggle-btn"
            onClick={() => navigate("/hacker")}
          >
            🖥️ Developer Mode
          </button>
        </div>
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
            <span className="username">About</span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg">
          <p>AI-focused Engineer with 11 months of hands-on experience building and deploying intelligent systems across automation,
computer vision, and generative AI. Experienced in FastAPI and Node.js backend development, Retrieval-Augmented
Generation (RAG) pipelines, face recognition systems, and Stable Diffusion workflows, with exposure to cloud-based
deployment.
</p>
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
            <span className="username">@Studio11 Production</span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg2">
          <p>
 <l>Developed an AI-based documentation system using Landing AI for structured text extraction.</l><br></br><br></br>
<l>Built automation pipelines integrating computer vision and NLP components.</l> <br></br><br></br>
 <l>Implemented a multi-document RAG chatbot using sentence-level chunking, transformer embeddings, FAISS
indexing, and CrossEncoder re-ranking with session-aware caching.</l></p>
        </div>

        <div className="post-content">
          <p>
            <b> AI Automation Engineer </b><br></br> <i>Nov 2025 – Present</i>
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
      </div>

<div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">@Verbros Technologies Pvt. Ltd. </span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg2">
          <p><l>Designed and deployed backend services for AI-driven applications using FastAPI and Node.js.</l><br></br><br></br>
          <l> Integrated deep learning models (HuggingFace, Inswapper, Whisper, YOLOv5) and deployed inference pipelines on
AWS Lambda.</l>
          </p>
        </div>

        <div className="post-content">
          <p>
            <b>Backend AI Engineer </b> <br></br>Jun 2025 – Aug 2025
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
      </div>
<div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">@Verbros Technologies Pvt. Ltd. </span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg2">
          <p>
            <l>Implemented attention monitoring using gaze estimation and facial expression analysis.</l><br></br><br></br>
            <l>Built a full-stack application using React, Node.js, and DeepFace for mood-based music playback</l>
          </p>
        </div>

        <div className="post-content">
          <p>
            <b>Junior Software Developer </b> <br></br>Mar 2025 – Jun 2025
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
      </div>
<div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">@Studio11 Productions</span>
          </div>
          <span className="dots">•••</span>
        </div>

        <div className="post-image gradient-bg2">
          <p>
            <l>Developed Stable Diffusion-based image generation workflows for personalized client content.</l><br></br><br></br>
            <l>Created custom computer vision nodes for face and iris detection.</l><br></br><br></br>
            <l>Annotated datasets to improve model performance and client-specific fine-tuning</l>
          </p>
        </div>

        <div className="post-content">
          <p>
            <b>AI Intern</b><br></br><br></br>
            <i>Jul 2024 – Sep 2024</i>
          </p>
        </div>

        <div className="post-actions">🤍 💬 ✈️</div>
      </div>


      {/* SKILLS POST */}
      <div className="insta-post">
        <div className="post-header">
          <div className="profile-left">
            <div className="profile-circle"></div>
            <span className="username">Skill</span>
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