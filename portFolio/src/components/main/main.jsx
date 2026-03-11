import Header from "../header/header"
import About from "../About/About"
import Skills from "../skills/skills"
import Experience from "../experience/experience"
import Projects from "../projects/projects"
import ContactMe from "../contactMe/contactMe"
import Footer from "../footer/footer"

const Main = () => {
  return (
    <>
      <Header />
      <div id="about">
        <About />
      </div>
      <div className="sectionDivider"></div>
      <div id="skills">
        <Skills />
      </div>
      <div className="sectionDivider"></div>
      <div id="experience">
        <Experience />
      </div>
      <div className="sectionDivider"></div>
      <div id="projects">
        <Projects />
      </div>
      <div className="sectionDivider"></div>
      <div id="contact">
        <ContactMe />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Main