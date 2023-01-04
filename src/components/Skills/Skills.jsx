import "./Skills.css";

import image from "../../assets/images/skills.png";

const skills = [
  {
    title: "HTML",
    progrss: 80,
  },
  {
    title: "CSS",
    progrss: 85,
  },
  {
    title: "JavaScript",
    progrss: 70,
  },
  {
    title: "Python",
    progrss: 80,
  },
];

const Skills = () => {
  return (
    <div className="our-skills" id="our-skills">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <img src={image} alt="" />
        <div className="skills">
          {skills.map((skill, id) => (
            <div className="skill" key={id}>
              <h3>
                {skill.title}
                <span>{skill.progrss}%</span>
              </h3>
              <div className="the-progress">
                <span style={{ width: `${skill.progrss}%` }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
