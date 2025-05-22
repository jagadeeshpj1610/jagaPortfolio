
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
            <img src={portFolio} alt="" className="portfolioThumbnail" />
          </div>
          <div className="port1">
            <h3>Personal Portfolio</h3>
            <p>A personal Portfolio Website, Where I want to showcase my skills, projects and experience and about me and also how to reach out to me.</p>
            <p>I have build this Website using ReactJS.</p>
            <div className="hlo">
              <a href="">View Website</a>
              <a href="https://github.com/jagadeeshpj1610/jagaPortfolio.git">View code</a>
            </div>
          </div>

        </div>
        <div className="portFolio">
          <div className="port">
            <img src={bank} alt="" className="bankThumbnail" />
          </div>
          <div className="port2">
            <h3>Magadha Banking</h3>
            <p>Full-Stack Website</p>
            <p>Built a secure and responsive banking website with user authentication, real-time fund transfers, and transactions. Includes All account management features</p>
            <p>Developed using React, Node.js, Express, and MYSQL.</p>
            <div className="hloo">
              <a href="https://magadha.onrender.com/">View Website</a>
              <a href="https://github.com/jagadeeshpj1610/bankProject.git">View code</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects