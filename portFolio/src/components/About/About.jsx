import React, { useEffect, useRef } from "react";
import profileImage from '../../assets/pj.jpg';
import './about.css';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.animateItem');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 150);
    });
  }, []);

  return (
    <div className="aboutContainer" ref={containerRef}>
      <div className="about">

        <div className="profileDiv animateItem">
          <div className="profileImageWrapper">
            <img src={profileImage} alt="Jagadeesh Pachikura" className="profileImage" />
          </div>
          <h2>Jagadeesh Pachikura</h2>
          <span className="availableBadge">Available for work</span>
        </div>

        <div className="aboutContent">
          <p className="aboutGreeting animateItem">Hello, I'm</p>
          <h1 className="aboutName animateItem">Jagadeesh<br />Pachikura</h1>
          <p className="aboutRole animateItem">Frontend & Full-Stack Developer</p>

          <div className="locationRow animateItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p>Anakapalli, Andhra Pradesh, India</p>
          </div>

          <p className="animateItem">
            Frontend Developer with 1+ year of experience building responsive, performant
            web applications — and a full-stack background in Node.js, Express & MySQL.
            I enjoy turning complex problems into clean, intuitive interfaces.
            Currently open to new opportunities.
          </p>

          <div className="aboutBtns animateItem">
            <a href="#contact" className="btnPrimary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,12 2,6"/>
              </svg>
              Contact Me
            </a>
            <a href="#projects" className="btnOutline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
              View Projects
            </a>
            <a href="/resume.pdf" download className="btnResume">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;