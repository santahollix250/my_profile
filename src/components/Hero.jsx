import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = "01アイウエオカキクケコサシスセソタチツテト".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
    }
    
    const draw = () => {
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        const gradient = ctx.createLinearGradient(x, y - fontSize, x, y);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(0.5, '#ff3333');
        gradient.addColorStop(1, '#cc0000');
        
        ctx.fillStyle = gradient;
        ctx.fillText(text, x, y);
        
        ctx.shadowColor = '#ff0000';
        ctx.shadowBlur = 15;
        ctx.fillText(text, x, y);
        ctx.shadowBlur = 0;
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <section id="home" className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-blood-cells">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="blood-cell"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 7}s`
              }}
            />
          ))}
        </div>
        
        <div className="hero-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        
        <div className="scan-line" />
        <div className="noise-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-avatar-wrapper">
          <div className="avatar-ring-red" />
          <div className="avatar-ring-pulse" />
          <div className="avatar-ring-rotate" />
          <div className="hero-avatar">
            <img src={profileImg} alt="Profile" />
            <div className="avatar-glitch-overlay" />
          </div>
        </div>
        
        <div className="hero-text-wrapper">
          <div className="hero-subtitle-greeting">
            <span className="bracket">[</span>
            <span className="greeting-text">SYSTEM ONLINE</span>
            <span className="bracket">]</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Hi, I&apos;m</span>
            <div className="glitch-wrapper">
              <span className="glitch-text" data-text="Santa Penkony">Santa Penkony</span>
              <span className="glitch-text-glitch-1" data-text="Santa Penkony">Santa Penkony</span>
              <span className="glitch-text-glitch-2" data-text="Santa Penkony">Santa Penkony</span>
            </div>
          </h1>
          
          <div className="hero-subtitle-wrapper">
            <div className="typing-container">
              <p className="hero-subtitle">
                <span className="cursor">&gt;</span> Full Stack Developer &amp; Creative Technologist
                <span className="cursor-blink">_</span>
              </p>
            </div>
          </div>
          
          <p className="hero-description">
            <span className="comment">//</span> Crafting exceptional digital experiences 
            <span className="highlight"> with cutting-edge technology</span>
          </p>
        </div>
        
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('projects')} className="hero-btn-primary">
            <span className="btn-text">VIEW PROJECTS</span>
            <span className="btn-blood-ripple" />
            <span className="btn-corner-top-left" />
            <span className="btn-corner-top-right" />
            <span className="btn-corner-bottom-left" />
            <span className="btn-corner-bottom-right" />
          </button>
          
          <button onClick={() => scrollToSection('contact')} className="hero-btn-secondary">
            <span className="btn-text">CONTACT ME</span>
            <span className="btn-blood-fill" />
          </button>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">
          <span className="scroll-letter">S</span>
          <span className="scroll-letter">C</span>
          <span className="scroll-letter">R</span>
          <span className="scroll-letter">O</span>
          <span className="scroll-letter">L</span>
          <span className="scroll-letter">L</span>
        </span>
      </div>
      
      <div className="corner-decoration corner-tl" />
      <div className="corner-decoration corner-tr" />
      <div className="corner-decoration corner-bl" />
      <div className="corner-decoration corner-br" />
    </section>
  );
};

export default Hero;