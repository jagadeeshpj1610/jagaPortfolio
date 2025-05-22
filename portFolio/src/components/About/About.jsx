import React from "react";
import profileImage from '../../assets/profileImage.png';
import './about.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <div className="profileDiv">
          <img src={profileImage} alt="profileImage" className="profileImage" />
          <h2>Jagadeesh Pachikura</h2>
        </div>
        <div className="aboutContent">
          <div>
            <p>Andhra Pradesh India</p>
          </div>
          <p>I am a Passionate Frontend Developer with 1+ years of Experience, crafting innovative and user-friendly web solutions. I love working on projects that help me grow.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
