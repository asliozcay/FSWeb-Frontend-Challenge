import { data } from "../../data";
import "./Skills.css"
export const Skills = () => {
  const language = "en";
  const skillsData = data[language].skillsSectionData;
  const { title, skill1, skill2, skill3, skill4, skill5, skill6 } = skillsData;

  return (
    <section className="skills" id="skills">
      <div className="skills-content w-[65%]">
        <h1 className="text-greenLight text-[32px] font-bold">{title}</h1>
        <div className="skills-list grid grid-cols-3 gap-4 mt-4">
          {[skill1, skill2, skill3, skill4, skill5, skill6].map((skill) => (
            <div key={skill.name} className="skill-item flex items-center">
              <img src={skill.url} alt={skill.name} className="w-8 h-8 mr-2" />
              <span className="text-grayLight text-[15px] font-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}