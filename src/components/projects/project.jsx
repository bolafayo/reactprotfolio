import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { id, logo, title, description } = props;

  return (
    <div className="project">
      <Link to={`/projects/${id}`}>
        <div className="project-container">
          <div className="project-logo">
            <img src={logo} alt={title} />
          </div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-link">
            <div className="project-link-icon">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="project-link-text">View Details</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
