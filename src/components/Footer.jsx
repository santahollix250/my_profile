import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="footer-blood-line" />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-bracket">[</span>
            <span className="footer-text">© 2024</span>
            <span className="footer-name">Santa Penkony</span>
            <span className="footer-bracket">]</span>
          </div>
          
          <div className="footer-center">
            <span className="footer-divider">//</span>
          </div>
          
          <div className="footer-right">
            <span className="footer-text">Built with</span>
            <span className="footer-heart">
              <span className="heart-beat">❤️</span>
            </span>
            <span className="footer-text">React</span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-scan" />
          <span className="footer-status">
            <span className="status-dot" />
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;