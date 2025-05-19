import React from "react";
import profileImage from '../../assets/profileImage.png';
import './about.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <img src={profileImage} alt="profileImage" className="profileImage" />
        <div className="aboutContent">
          <p>Andhra Pradesh India</p>
          <p>I am a Passionate Frontend Developer with 1+ years of Experience, crafting innovative and user-friendly web solutions. I love working on projects that help me grow.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
