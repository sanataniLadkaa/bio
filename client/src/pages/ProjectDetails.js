import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then(res => setProject(res.data));
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Tech Stack</h3>
      <p>{project.tech}</p>
    </div>
  );
}

export default ProjectDetails;
