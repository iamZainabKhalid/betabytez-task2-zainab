import { skillsData } from "../data";

function Skills() {
  return (
    <section id="skills">
      <p className="eyebrow">WHAT I DO</p>
      <h2>My Skills</h2>

      <div className="skills-marquee">
        <div className="marquee-track">
          {[...skillsData, ...skillsData].map((skill, i) => (
            <span className="marquee-item" key={i}>
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-list">
        {skillsData.map((skill, i) => (
          <div className="skill-row" key={skill.name}>
            <span className="skill-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;