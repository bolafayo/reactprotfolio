import React from "react";
import { useParams, Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/projectdetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = INFO.projects[id];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-btn">← Back to Projects</Link>
      <h1>{project.title}</h1>
      <img
        src={project.logo}
        alt={project.title}
        className="project-detail-logo"
      />
      <div
        className="project-readme"
        dangerouslySetInnerHTML={{ __html: project.fullDescription }}
      />
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        {project.linkText}
      </a>
      {project.liveDemo && (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noreferrer"
      className="project-link"
      style={{ marginLeft: "1rem" }}
    >
      {project.liveDemoText || "Live Demo"}
    </a>
  )}
    </div>
  );
};

export default ProjectDetail;
