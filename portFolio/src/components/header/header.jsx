import React, { useState } from "react";
import "../header/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navDiv" id="nav">
      <div className="childOne">
        <h3><a href="#nav">JP.</a></h3>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`childSecond ${isOpen ? "open" : ""}`}>
        <ul className="navList">
          <li className="navItem"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="navItem"><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li className="navItem"><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li className="navItem"><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li className="navItem"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;