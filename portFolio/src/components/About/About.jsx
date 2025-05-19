import React from "react";
import profileImage from '../../assets/profileImage.png'
import '../About/about.css'

const About = () => {
  return (

    <div className="aboutContainer">
      <div className="aboutDiv">
        <div>
          <img src={profileImage} alt="profileImage" className="profileImage" />
        </div>
        <div className="aboutContent">
          <p>Andhra Pradesh India</p>
          <p>I am a Passionate Frontend Deveolper with 1+ years of Experiance, crafting innovative and user-friendly web solutions. I love working on projects that help me grow  </p>
        </div>
      </div>
    </div>

  )
}

export default About