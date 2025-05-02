import { data } from "../../data";
export const Skills = ({ language }) => {
  const skillsData = data[language].skillsSectionData;
  const { title, skill1, skill2, skill3, skill4, skill5, skill6 } = skillsData;

  return (
    <section className="skills pt-12 md:pt-21 pb-16 md:pb-24 bg-white dark:bg-[#252128] px-4">
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] mx-auto">
        <h1 className="text-purpleDark dark:text-greenLight text-3xl md:text-5xl font-bold text-center md:text-left mb-8 md:mb-0">
          {title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-45 md:gap-y-9 max-w-[300px] sm:max-w-none mx-auto sm:mx-0">
          {[skill1, skill2, skill3, skill4, skill5, skill6].map((skill) => (
            <div key={skill.name} className="flex items-center gap-4 md:gap-6">
              <img 
                src={skill.url} 
                alt={skill.name} 
                className="w-16 md:w-auto"
              />
              <span className="text-grayLight dark:text-white text-[14px] md:text-[15px] font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
