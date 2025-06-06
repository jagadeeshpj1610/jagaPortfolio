import React from "react";
import profileImage from '../../assets/pj.jpg';
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg style={{ width: "30px", height: "20px", marginBottom: "15px" }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000" className="icon"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path fill="#8f8f8f" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path><path fill="#8f8f8f" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path><path fill="#8f8f8f" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path></g></g></svg>
            <p>Anakapalli Andhra Pradesh India</p>
          </div>
          <p style={{ marginLeft: "10px" }}>I am a Passionate Frontend Developer with 1+ years of experience and I also have experience as a full-stack developer, crafting innovative and user-friendly web solutions. I love working on projects that help me grow — and yes, coffee is my secret coding fuel!

          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
