import Header from "../header/header"
import About from "../About/About"
import Skills from "../skills/skills"
import Experience from "../experience/experience"


const Main = () => {
  return (
    <div>
      <div id="nav">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </div>
  )
}

export default Main