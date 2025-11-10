import React from 'react';
import '../CSS/Projects.css'; 
import photon from '../Assets/Photon.jpg';
import fitagotchi from '../Assets/Fitagotchi.jpg';

const projects = [
  {
    title: 'Photon Laser Tag System',
    description: '',
    image: photon,
    link: 'https://github.com/team-15-csce3513/photon'
  },
  {
    title: 'Fitagotchi',
    description: '',
    image: fitagotchi,
    link: 'https://github.com/They-See-Cats/Fitagotchi'
  }
];

const Projects = () => (
  <div className="Projects">
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          {project.image ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          )}
          <li>{project.description}</li>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
