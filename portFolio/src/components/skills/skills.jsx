
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/js.svg";
import reactIcon from "../../assets/reactjs.svg";
import nodeIcon from "../../assets/nodejs.svg";
import mysqlIcon from "../../assets/mysql.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import pythonIcon from "../../assets/python.svg";



const Skills = () => {
  return (
    <div id="skills" className="skillsContainer">
      <h4 style={{ textAlign: "center" }}>SKILLS</h4>
      <div className="skillsImagesDivs">
        <div>
          <img src={htmlIcon} alt="html" />
        </div>
        <div>
          <img src={cssIcon} alt="css" />
        </div>
        <div>
          <img src={jsIcon} alt="js" />
        </div>
        <div>
          <img src={reactIcon} alt="react" />
        </div>
        <div>
          <img src={nodeIcon} alt="node" />
        </div>
        <div>
          <img src={mysqlIcon} alt="mysql" />
        </div>
        <div>
          <img src={mongodbIcon} alt="mongodb" />
        </div>
        <div>
          <img src={pythonIcon} alt="python" />
        </div>
      </div>
    </div>
  )
}

export default Skills