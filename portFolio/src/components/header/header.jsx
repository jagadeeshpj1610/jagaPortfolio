import "../header/header.css"

const Header = () => {
  return (
    <div className="navDiv" id="nav">
      <div className="childOne">
        <h3><a href="#nav">Jagadeesh Pachikura</a></h3>
      </div>
      <div className="childSecond">
        <ul className="navList">
          <li className="navItem"><a href="#about">ABOUT</a></li>
          <li className="navItem"><a href="#skills">SKILLS</a></li>
          <li className="navItem"><a href="#experience">EXPERIENCE</a></li>
          <li className="navItem"><a href="#projects">PROJECTS</a></li>
          <li className="navItem"><a href="#contact">CONTACT ME</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header