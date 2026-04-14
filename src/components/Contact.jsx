import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const socialLinks = [
    { icon: '🔗', label: 'Website' },
    { icon: '💼', label: 'LinkedIn' },
    { icon: '📧', label: 'Email' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '📱', label: 'Phone' }
  ];

  return (
    <section id="contact" className={`contact ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="contact-grid-overlay" />
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="title-bracket">{'//'}</span>
          <span className="title-text">Get In Touch</span>
          <span className="title-bracket">{'//'}</span>
        </h2>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-grid">
              <div className="input-wrapper">
                <span className="input-prefix">&gt;</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  style={{ animationDelay: '0.1s' }}
                />
                <span className="input-border" />
              </div>
              <div className="input-wrapper">
                <span className="input-prefix">&gt;</span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="contact-input"
                  style={{ animationDelay: '0.2s' }}
                />
                <span className="input-border" />
              </div>
            </div>
            <div className="input-wrapper">
              <span className="input-prefix">&gt;</span>
              <input
                type="text"
                placeholder="Subject"
                className="contact-input"
                style={{ animationDelay: '0.3s' }}
              />
              <span className="input-border" />
            </div>
            <div className="input-wrapper">
              <span className="input-prefix">&gt;</span>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="contact-textarea"
                style={{ animationDelay: '0.4s' }}
              ></textarea>
              <span className="input-border" />
            </div>
            <button
              type="submit"
              className="contact-submit-btn"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="btn-text">SEND MESSAGE</span>
              <span className="btn-blood-fill" />
              <span className="btn-glitch" />
            </button>
          </form>
          
          <div className="contact-social">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="contact-social-link"
                style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                title={item.label}
              >
                <span className="social-icon">{item.icon}</span>
                <span className="social-ring" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;