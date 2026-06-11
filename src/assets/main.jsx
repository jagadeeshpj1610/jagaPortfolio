import Header from "../components/header/header"
import About from "../components/About/About"
import Skills from "../components/skills/skills"
import Experience from "../components/experience/experience"
import Projects from "../components/projects/projects"
import ContactMe from "../components/contactMe/contactMe"
import Footer from "../components/footer/footer"

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