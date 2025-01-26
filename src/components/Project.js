import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiWebpack } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import './Project.css';

function Projects() {
  const projects = [
    {
      title: 'Zetta Portal',
      company: 'Zettaone, Bangalore, India',
      duration: 'MAR 21 - PRESENT',
      description:
        'Led frontend development of the Zetta Portal using React, integrated with backend APIs for a smooth user experience.',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'API Integration', icon: <MdApi /> },
      ],
    },
    {
      title: 'PCBPartz',
      company: 'Zettaone, Bangalore, India',
      duration: 'MAR 21 - PRESENT',
      description:
        'Worked on developing a user-friendly interface for the PCBPartz project using ReactJS and optimizing the frontend for scalability and performance.',
      technologies: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'UI/UX', icon: <FaCss3Alt /> },
        { name: 'Performance Optimization', icon: <SiWebpack /> },
      ],
    },
    {
      title: 'Hidden Brain',
      company: 'Freelance Project',
      duration: 'JUL 20 - MAR 21',
      description:
        'Contributed to building a fully responsive UI using React to ensure consistent user experience across devices.',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Responsive Design', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="company">{project.company}</p>
            <p className="duration">{project.duration}</p>
            <p className="description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <div className="tech" key={index}>
                  <span className="tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
