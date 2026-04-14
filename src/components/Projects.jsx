import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const projects = [
    {
      title: "AI-Powered Analytics",
      description: "Real-time analytics platform with machine learning predictions and interactive visualizations.",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, user authentication, and admin panel.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with chat, posts, likes, and user following system.",
      tech: ["React Native", "Firebase", "Socket.io", "Redux"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management with drag-and-drop, team features, and analytics.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
    }
  ];

  return (
    <section id="projects" className={`projects ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="projects-noise" />
      <div className="projects-container">
        <h2 className="projects-title">
          <span className="title-bracket">&lt;/</span>
          <span className="title-text">Featured Projects</span>
          <span className="title-bracket">&gt;</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <div className="project-scan-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-blood" />
                <div className="project-image-glitch" />
                <div className="project-number">
                  <span className="number-bracket">[</span>
                  0{idx + 1}
                  <span className="number-bracket">]</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">
                  <span className="name-cursor">&gt;</span>
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className="project-tech-tag"
                      style={{ animationDelay: `${techIdx * 0.05}s` }}
                    >
                      <span className="tech-hash">#</span>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <button className="project-btn-primary">
                    <span className="btn-text">LIVE DEMO</span>
                    <span className="btn-blood-ripple" />
                  </button>
                  <button className="project-btn-secondary">
                    <span className="btn-text">GITHUB</span>
                    <span className="btn-border-glow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;