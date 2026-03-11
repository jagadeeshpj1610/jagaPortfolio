import "../projects/projects.css";
import portFolio from "../../assets/pj.png";
import bank from "../../assets/magadhaBank.png";

const Projects = () => {
  return (
    <>
      <p className="sectionLabel">Things I've built</p>
      <h2 className="projectsHeading">Projects</h2>
      <div className="projects">

        <div className="portFolio">
          <div className="port">
            <img src={portFolio} alt="Portfolio Website" className="portfolioThumbnail" />
          </div>
          <div className="port1">
            <p className="projectType">Frontend</p>
            <h3>Personal Portfolio</h3>
            <p>A personal portfolio to showcase my skills, projects, and experience — and a way for people to reach out to me.</p>
            <p>Built using React JS.</p>
            <div className="stackTags">
              <span className="stackTag">React JS</span>
              <span className="stackTag">CSS</span>
              <span className="stackTag">Responsive</span>
            </div>
            <div className="hlo">
              <a href="YOUR_LIVE_URL_HERE" target="_blank" rel="noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View Website
              </a>
              <a href="https://github.com/jagadeeshpj1610/jagaPortfolio.git" target="_blank" rel="noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5.1 18 5.4 18 5.4c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="portFolio">
          <div className="port">
            <img src={bank} alt="Magadha Banking" className="bankThumbnail" />
          </div>
          <div className="port2">
            <p className="projectType">Full-Stack</p>
            <h3>Magadha Banking</h3>
            <p>A secure, responsive banking platform with user authentication, real-time fund transfers, and complete account management features.</p>
            <div className="stackTags">
              <span className="stackTag">React</span>
              <span className="stackTag">Node.js</span>
              <span className="stackTag">Express</span>
              <span className="stackTag">MySQL</span>
            </div>
            <div className="hloo">
              <a href="https://magadha.onrender.com/" target="_blank" rel="noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View Website
              </a>
              <a href="https://github.com/jagadeeshpj1610/bankProject.git" target="_blank" rel="noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5.1 18 5.4 18 5.4c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                View Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;