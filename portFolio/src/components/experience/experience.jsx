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
            Worked on real-time projects, applying modern technologies, best practices,
            and engineering principles. Mentored by multiple industry experts who helped
            me build a strong foundation for my career in the IT industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;