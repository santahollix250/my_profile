import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './About.css';

const About = () => {
  const { isDarkMode } = useTheme();
  const stats = [
    { value: '50+', label: 'Projects', icon: '💀' },
    { value: '30+', label: 'Clients', icon: '🩸' },
    { value: '5+', label: 'Years', icon: '🔴' }
  ];

  return (
    <section id="about" className={`about ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="about-scan-line" />
      <div className="about-container">
        <h2 className="about-title">
          <span className="title-bracket">&lt;</span>
          <span className="title-text">About Me</span>
          <span className="title-bracket">/&gt;</span>
        </h2>
        
        <div className="about-grid">
          <div className="about-content">
            <div className="about-card">
              <div className="card-glitch-overlay" />
              <div className="card-corner-top" />
              <div className="card-corner-bottom" />
              <p className="about-text">
                <span className="text-cursor">&gt;</span> I&apos;m a passionate Full Stack Developer with over 5 years of experience in building 
                web applications that solve real-world problems. My journey in tech started with a 
                curiosity about how things work.
              </p>
            </div>
            
            <div className="about-card" style={{ animationDelay: '0.2s' }}>
              <div className="card-glitch-overlay" />
              <div className="card-corner-top" />
              <div className="card-corner-bottom" />
              <p className="about-text">
                <span className="text-cursor">&gt;</span> I specialize in React, Node.js, and modern JavaScript frameworks, but my true passion 
                lies in creating seamless user experiences that combine beautiful design with powerful 
                functionality.
              </p>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="about-stat"
                  style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                >
                  <div className="stat-blood-ring" />
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <div className="image-glitch-border" />
            <div className="image-scan-effect" />
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
                alt="Coding"
              />
              <div className="about-image-overlay">
                <span className="overlay-text">
                  <span className="overlay-bracket">[</span>
                  CODE IS ART
                  <span className="overlay-bracket">]</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;