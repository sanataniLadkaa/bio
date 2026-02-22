
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
<div className="stories">
  {projects.map((project) => (
    <div
      key={project.id}
      className="story-circle"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="story-inner">
        {project.title}
      </div>
    </div>
  ))}
</div>

  );
}

export default Stories;
