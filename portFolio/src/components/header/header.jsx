import "../header/header.css"

const Header = () => {
  return (
    <div className="navDiv" id="nav">
      <div className="childOne">
        <h3><a href="">Jagadeesh Pachikura</a></h3>
      </div>
      <div className="childSecond">
        <ul className="navList">
          <li className="navItem"><a href="#nav">About</a></li>
          <li className="navItem"><a href="#skillsDiv">Skills</a></li>
          <li className="navItem"><a href="#experiance">Experiance</a></li>
          <li className="navItem"><a href="#projects">Projects</a></li>
          <li className="navItem"><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header