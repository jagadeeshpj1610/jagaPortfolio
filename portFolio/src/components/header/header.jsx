import React, { useState, useEffect } from "react";
import "../header/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sections = ["about", "skills", "experience", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // triggers when section hits middle of screen
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="navDiv" id="nav">
      <div className="childOne">
        <h3><a href="#nav">PJ</a></h3>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`childSecond ${isOpen ? "open" : ""}`}>
        <ul className="navList">
          <li className="navItem">
            <a href="#about" className={activeSection === "about" ? "activeNav" : ""} onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="navItem">
            <a href="#skills" className={activeSection === "skills" ? "activeNav" : ""} onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li className="navItem">
            <a href="#experience" className={activeSection === "experience" ? "activeNav" : ""} onClick={() => setIsOpen(false)}>Experience</a>
          </li>
          <li className="navItem">
            <a href="#projects" className={activeSection === "projects" ? "activeNav" : ""} onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="navItem">
            <a href="#contact" className={activeSection === "contact" ? "activeNav" : ""} onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;