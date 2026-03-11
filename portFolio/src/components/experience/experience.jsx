import "../experience/experience.css";

const Experience = () => {
  return (
    <>
      <p className="sectionLabel">Where I've worked</p>
      <h2 className="experienceHeading">Experience</h2>
      <div className="experience">
        <div className="timeLine">
          <p>Jun 2024 — Nov 2024</p>
          <span className="expBadge">Internship</span>
        </div>
        <div className="experienceContent">
          <h3>PATH Intern</h3>
          <p className="expCompany">ThoughtWorks</p>
          <p>
            Joined as a PATH intern — an intensive entry-level program at ThoughtWorks
            where "We Work While Learning", gaining real-world exposure from day one.
          </p>
          <p>
ThoughtWorks is a global technology consultancy. As a PATH intern, I worked on real projects in an Agile environment — applying React JS, Node.js, REST APIs and engineering best practices under the guidance of senior industry engineers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;