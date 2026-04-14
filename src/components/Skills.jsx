import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Skills.css';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const skills = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Python", level: 88, icon: "🐍" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "MongoDB", level: 87, icon: "🍃" }
  ];

  return (
    <section id="skills" className={`skills ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="skills-grid-bg" />
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="title-bracket">[</span>
          <span className="title-text">Technical Skills</span>
          <span className="title-bracket">]</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-scan" />
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-ring" />
                  <div className="skill-icon">{skill.icon}</div>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress-wrapper">
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="skill-progress-blood" />
                      <div className="skill-progress-glitch" />
                    </div>
                  </div>
                </div>
                <div className="skill-percentage-wrapper">
                  <span className="skill-percentage">{skill.level}%</span>
                  <span className="skill-percentage-symbol">//</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;