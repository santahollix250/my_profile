import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="navbar">
      <div className="navbar-scan-line" />
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">PORTFOLIO</span>
          <span className="logo-bracket">]</span>
          <span className="logo-blinking">_</span>
        </div>
        
        <div className="navbar-menu">
          {sections.map((section, idx) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`navbar-link ${activeSection === section ? 'active' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="link-number">0{idx + 1}.</span>
              <span className="link-text">{section}</span>
              <span className={`link-underline ${activeSection === section ? 'active' : ''}`} />
              <span className="link-glitch" />
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
        >
          <span className="theme-icon">{darkMode ? '🔴' : '⚫'}</span>
          <span className="theme-pulse" />
        </button>
      </div>
      <div className="navbar-border-bottom" />
    </nav>
  );
};

export default Navbar;