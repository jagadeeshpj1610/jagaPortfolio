
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/js.svg";
import reactIcon from "../../assets/reactjs.svg";
import nodeIcon from "../../assets/nodejs.svg";
import mysqlIcon from "../../assets/mysql1.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import pythonIcon from "../../assets/python.svg";
import githubIcon from "../../assets/github1.svg";
import vscodeIcon from "../../assets/vscode.svg";
import slack from "../../assets/slack.svg";
import npm from "../../assets/npm.svg";
import git from "../../assets/git.svg";
import "./skills.css";



const Skills = () => {
  return (
    <div id="skills" className="skillsContainer">
      <h1 style={{ textAlign: "center" }} id="skillsDiv">SKILLS</h1>
      <div className="skillsImagesDivs">
        <div className="skill">
          <img src={htmlIcon} alt="html" />
        </div>
        <div className="skill">
          <img src={cssIcon} alt="css" />
        </div>
        <div className="skill">
          <img src={jsIcon} alt="js" />
        </div>
        <div className="skill">
          <img src={reactIcon} alt="react" />
        </div>
        <div  className="skill">
          <img src={nodeIcon} alt="node" />
        </div>
        <div  className="skill">
          <img src={mysqlIcon} alt="mysql" />
        </div>
        <div className="skill">
          <img src={mongodbIcon} alt="mongodb" />
        </div>
        <div className="skill">
          <img src={pythonIcon} alt="python" />
        </div>
        <div className="skill">
          <img src={git} alt="" />
        </div>
        <div className="skill">
          <img src={githubIcon} alt="github" />
        </div>
        <div className="skill">
          <img src={vscodeIcon} alt="vscodeIcon" />
        </div>
        <div className="skill">
          <img src={slack} alt="slack" />
        </div>
        <div className="skill">
          <img src={npm} alt="npm" />
        </div>
      </div>
    </div>
  )
}

export default Skills