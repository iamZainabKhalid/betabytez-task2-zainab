import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="detail-page">
        <h2>Project not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1>{project.title}</h1>
      <div className="tech-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="detail-description">{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="btn-cta">
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectDetail;