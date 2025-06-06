import React, { useState } from "react";
import "../header/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navDiv" id="nav">
      <div className="childOne">
        <h3><a href="#nav">Jagadeesh Pachikura</a></h3>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`childSecond ${isOpen ? "open" : ""}`}>
        <ul className="navList">
          <li className="navItem"><a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a></li>
          <li className="navItem"><a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a></li>
          <li className="navItem"><a href="#experience" onClick={() => setIsOpen(false)}>EXPERIENCE</a></li>
          <li className="navItem"><a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a></li>
          <li className="navItem"><a href="#contact" onClick={() => setIsOpen(false)}>CONTACT ME</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
