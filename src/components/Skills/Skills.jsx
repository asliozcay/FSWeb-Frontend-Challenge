import { data } from "../../data";
export const Skills = ({ language }) => {
  const skillsData = data[language].skillsSectionData;
  const { title, skill1, skill2, skill3, skill4, skill5, skill6 } = skillsData;

  return (
    <section className="skills pt-21 pb-24 bg-white dark:bg-[#252128]">
      <div className="flex justify-between w-[65%] mx-auto">
        <h1 className="text-purpleDark dark:text-greenLight text-5xl font-bold">
          {title}
        </h1>
        <div className="grid grid-cols-2 gap-x-45 gap-y-9 ">
          {[skill1, skill2, skill3, skill4, skill5, skill6].map((skill) => (
            <div key={skill.name} className="flex items-center gap-6">
              <img src={skill.url} alt={skill.name} className="" />

              <span className="text-grayLight dark:text-white text-[15px] font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
