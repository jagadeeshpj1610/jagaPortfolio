import React from "react";
import profileImage from '../../assets/pj.jpg';
import './about.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <div className="profileDiv">
          <div className="profileImageWrapper">
            <img src={profileImage} alt="Jagadeesh Pachikura" className="profileImage" />
          </div>
          <h2>Jagadeesh Pachikura</h2>
          <span className="availableBadge">Available for work</span>
        </div>

        <div className="aboutContent">
          <p className="aboutGreeting">Hello, I'm</p>
          <h1 className="aboutName">Jagadeesh<br />Pachikura</h1>
          <p className="aboutRole">Frontend & Full-Stack Developer</p>

          <div className="locationRow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>Anakapalli, Andhra Pradesh, India</p>
          </div>

          <p>
            I am a passionate Frontend Developer with 1+ year of experience, also skilled
            in full-stack development — crafting innovative, user-friendly web solutions.
            I love working on projects that push me to grow. Coffee is my secret coding fuel! ☕
          </p>

          <div className="aboutBtns">
            <a href="#contact" className="btnPrimary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              Contact Me
            </a>
            <a href="#projects" className="btnOutline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              View Projects
            </a>
            <a href="/resume.pdf" download className="btnResume">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
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