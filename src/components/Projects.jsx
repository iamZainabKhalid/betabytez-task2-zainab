import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "AI", "Other"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects">
      <p className="eyebrow">MY WORK</p>
      <h2>My Projects</h2>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeFilter === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, i) => (
          <Link to={`/projects/${project.id}`} className="project-row" key={project.id}>
            <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="project-arrow">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;