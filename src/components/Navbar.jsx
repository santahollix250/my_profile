import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className={`navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
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
          onClick={toggleTheme}
          className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
          aria-label="Toggle theme"
        >
          <span className="theme-icon">
            {isDarkMode ? (
              <>
                <span className="icon-sun">☀️</span>
                <span className="icon-text">LIGHT</span>
              </>
            ) : (
              <>
                <span className="icon-moon">🌙</span>
                <span className="icon-text">DARK</span>
              </>
            )}
          </span>
          <span className="theme-pulse" />
        </button>
      </div>
      <div className="navbar-border-bottom" />
    </nav>
  );
};

export default Navbar;