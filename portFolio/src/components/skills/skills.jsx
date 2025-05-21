
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
    <div  className="skillsContainer">
      <h1 style={{ textAlign: "center" }}>SKILLS</h1>
      <div className="skillsImagesDivs">
        <div className="skill">
          <img src={htmlIcon} alt="html" />
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <img src={cssIcon} alt="css" />
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <img src={jsIcon} alt="js" />
          <h3>Javascript</h3>
        </div>
        <div className="skill">
          <img src={reactIcon} alt="react" />
          <h3>React Js</h3>
        </div>
        <div  className="skill">
          <img src={nodeIcon} alt="node" />
          <h3>Node JS</h3>
        </div>
        <div  className="skill">
          <img src={mysqlIcon} alt="mysql" />
          <h3>MYSQL</h3>
        </div>
        <div className="skill">
          <img src={mongodbIcon} alt="mongodb" />
          <h3>Mongodb</h3>
        </div>
        <div className="skill">
          <img src={pythonIcon} alt="python" />
          <h3>Python</h3>
        </div>
        <div className="skill">
          <img src={git} alt="" />
          <h3>Git</h3>
        </div>
        <div className="skill">
          <img src={githubIcon} alt="github" />
          <h3>Github</h3>
        </div>
        <div className="skill">
          <img src={vscodeIcon} alt="vscodeIcon" />
          <h3>VS Code</h3>
        </div>
        <div className="skill">
          <img src={slack} alt="slack" />
          <h3>Slack</h3>
        </div>
        <div className="skill">
          <img src={npm} alt="npm" />
          <h3>npm</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills