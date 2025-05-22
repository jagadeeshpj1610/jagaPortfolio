
import "../projects/projects.css"
import portFolio from "../../assets/portFolioThumbnail.png"
import bank from "../../assets/magadhaBank.png"

const Projects = () => {
  return (
    <>
      <h2 className="projectsHeading">PROJECTS</h2>
      <div className="projects">
        <div className="portFolio">
          <div className="port">
            <img src={portFolio} alt="" />
          </div>
          <div className="port1">
            <h3>Personal Portfolio</h3>
            <p>A personal Portfolio Website, Where I want to showcase my skills, projects and experience. </p>
            <p>I have this website build using ReactJS.</p>
            <div className="hlo">
              <a href="">View Site</a>
              <a href="https://github.com/jagadeeshpj1610/jagaPortfolio.git">View code</a>
            </div>
          </div>

        </div>
        <div className="portFolio">
          <div className="port">
            <img src={bank} alt="" />
          </div>
          <div className="port1">
            <h3>Personal Portfolio</h3>
            <p>A personal Portfolio Website, Where I want to showcase my skills, projects and experience. </p>
            <p>I have this website build using ReactJS.</p>
            <div className="hlo">
              <a href="https://magadha.onrender.com/">View Site</a>
              <a href="https://github.com/jagadeeshpj1610/bankProject.git">View code</a>
            </div>
          </div>

        </div>
        <div className="portFolio">
          <div className="port">
            <img src={portFolio} alt="" />
          </div>
          <div className="port1">
            <h3>Personal Portfolio</h3>
            <p>A personal Portfolio Website, Where I want to showcase my skills, projects and experience. </p>
            <p>I have this website build using ReactJS.</p>
            <div className="hlo">
              <a href="">View Site</a>
              <a href="https://github.com/jagadeeshpj1610/jagaPortfolio.git">View code</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects