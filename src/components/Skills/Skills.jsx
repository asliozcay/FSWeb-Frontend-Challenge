import { data } from "../../data";
import "./Skills.css";
export const Skills = () => {
  const language = "en";
  const skillsData = data[language].skillsSectionData;
  const { title, skill1, skill2, skill3, skill4, skill5, skill6 } = skillsData;

  return (
    <section className="skills w-[65%] mx-auto pt-21 pb-24">
      <div className="flex justify-between">
        <h1 className="text-purpleDark text-5xl font-bold">{title}</h1>
        <div className="grid grid-cols-2 gap-x-45 gap-y-9 ">
          {[skill1, skill2, skill3, skill4, skill5, skill6].map((skill) => (
            <div key={skill.name} className="flex items-center gap-6">
              <img src={skill.url} alt={skill.name} className="" />

              <span className="text-grayLight text-[15px] font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
