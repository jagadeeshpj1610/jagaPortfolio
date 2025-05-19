import "../header/header.css"

const Header = () => {
  return (
    <div className="navDiv">
      <div className="childOne">
        <h3><a href="navDiv">Jagadeesh Pachikura</a></h3>
      </div>
      <div className="childSecond">
        <ul className="navList">
          <li className="navItem"><a href="#about">About</a></li>
          <li className="navItem"><a href="skills">Skills</a></li>
          <li className="navItem"><a href="experiance">Experiance</a></li>
          <li className="navItem"><a href="projects">Projects</a></li>
          <li className="navItem"><a href="contact">Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header