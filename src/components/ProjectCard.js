import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
