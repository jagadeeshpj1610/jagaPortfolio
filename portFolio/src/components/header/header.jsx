import "../header/header.css"

const Header = () => {
  return (
    <div className="navDiv">
      <div className="childOne">
        <h3>Jagadeesh Pachikura</h3>
      </div>
      <div className="childSecond">
        <ul className="navList">
          <li className="navItem">About</li>
          <li className="navItem">Skills</li>
          <li className="navItem">Experiance</li>
          <li className="navItem">Projects</li>
          <li className="navItem">Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default Header