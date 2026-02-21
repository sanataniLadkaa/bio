import "./HackerHome.css";

function HackerHome() {
  return (
    <div className="terminal">

      <div className="terminal-header fall delay1">
        <span>anurag@portfolio:~$</span>
      </div>

      <div className="terminal-body">

        {/* ABOUT */}
        <p className="command fall delay2">whoami</p>
        <div className="output fall delay3">
          <p><strong>Anurag Tiwari</strong></p>
          <p>AI-focused Engineer | GATE DA 2024 Qualified</p>
          <p>Phone: 8168596522</p>
          <p>Email: tiwarianurag812@gmail.com</p>
          <br />
          <p>
            AI-focused Engineer with 11 months of hands-on experience building and deploying intelligent systems across automation,
            computer vision, and generative AI. Experienced in FastAPI and Node.js backend development,
            RAG pipelines, face recognition systems, and Stable Diffusion workflows with cloud deployment exposure.
          </p>
        </div>

        {/* EDUCATION */}
        <p className="command fall delay4">cat education.txt</p>
        <div className="block fall delay5">
          <p className="title">Rajkiya Engineering College, Sonbhadra (U.P.)</p>
          <p>B.Tech in Computer Science</p>
          <p>Nov 2021 – Jun 2025</p>
        </div>

        {/* EXPERIENCE */}
        <p className="command fall delay6">cat experience.log</p>

        <div className="block fall delay7">
          <p className="title">Studio11 Productions — Bangalore</p>
          <p>AI Automation Engineer | Nov 2025 – Present</p>
          <ul>
            <li>Developed AI-based documentation system using Landing AI.</li>
            <li>Built automation pipelines integrating computer vision + NLP.</li>
            <li>Implemented multi-document RAG chatbot using FAISS + CrossEncoder with session caching.</li>
          </ul>
        </div>

        <div className="block fall delay8">
          <p className="title">Verbros Technologies Pvt. Ltd. — Lucknow</p>
          <p>Backend AI Engineer | Jun 2025 – Aug 2025</p>
          <ul>
            <li>Designed backend services using FastAPI & Node.js.</li>
            <li>Integrated HuggingFace, Inswapper, Whisper, YOLOv5 models.</li>
            <li>Deployed inference pipelines on AWS Lambda.</li>
          </ul>
        </div>

        <div className="block fall delay8">
          <p className="title">Verbros Technologies Pvt. Ltd. — Lucknow</p>
          <p>Junior Software Developer | Mar 2025 – Jun 2025</p>
          <ul>
            <li>Implemented gaze estimation & facial expression monitoring.</li>
            <li>Built mood-based music playback system using React + DeepFace.</li>
          </ul>
        </div>

        <div className="block fall delay8">
          <p className="title">Studio11 Productions — Remote</p>
          <p>AI Intern | Jul 2024 – Sep 2024</p>
          <ul>
            <li>Developed Stable Diffusion workflows for personalized content.</li>
            <li>Created custom CV nodes for face & iris detection.</li>
            <li>Annotated datasets for model fine-tuning.</li>
          </ul>
        </div>

        {/* PROJECTS */}
        <p className="command fall delay8">cat projects.md</p>

        <div className="block fall delay8">
          <p className="title">AI-Powered Product Recommendation System</p>
          <ul>
            <li>Built multimodal recommendation engine using CLIP embeddings.</li>
            <li>Implemented semantic search + attribute filtering.</li>
            <li>Designed UI-triggered retraining pipeline.</li>
          </ul>
        </div>

        <div className="block fall delay8">
          <p className="title">Face Recognition-Based Attendance System</p>
          <ul>
            <li>Developed real-time multi-user face recognition system.</li>
            <li>Implemented geolocation-based validation.</li>
            <li>Containerized and deployed using Docker on Render.</li>
          </ul>
        </div>

        <div className="block fall delay8">
          <p className="title">Smart Hiring Platform</p>
          <ul>
            <li>Built recruitment platform using semantic embeddings + RAG summarization.</li>
            <li>Implemented Supabase Row-Level Security (RLS).</li>
          </ul>
        </div>

        {/* ACHIEVEMENTS */}
        <p className="command fall delay8">cat achievements.txt</p>
        <div className="output fall delay8">
          <ul>
            <li>GDSC AI/ML Lead (2023) — Conducted workshops & mentored students.</li>
            <li>SIH 2024 Finalist — Built AI system to predict student dropout risk.</li>
            <li>Training & Placement Cell Representative.</li>
          </ul>
        </div>

        {/* SKILLS */}
        <p className="command fall delay8">cat skills.json</p>
        <div className="output fall delay8">
          <p><strong>Languages:</strong> Python, C/C++, SQL, JavaScript, HTML/CSS</p>
          <p><strong>Frameworks:</strong> FastAPI, Flask, Node.js, React</p>
          <p><strong>Machine Learning:</strong> PyTorch, Scikit-learn, HuggingFace, CLIP</p>
          <p><strong>Computer Vision:</strong> YOLOv5, DeepFace, Stable Diffusion, OpenCV</p>
          <p><strong>Tools:</strong> Docker, AWS (Lambda, EC2), Supabase, Git, Linux</p>
        </div>

      </div>
    </div>
  );
}

export default HackerHome;