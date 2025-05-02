import { Card, Image, MantineProvider, Pill } from "@mantine/core";
import { data } from "../../data";

export const Projects = ({ language }) => {
  const projectsData = data[language].projectsSectionData;
  const { title, project1, project2 } = projectsData;

  return (
    <section className="projects bg-greenLight dark:bg-[#1a210b]" id="projects">
      <div className="w-[95%] md:w-[65%] mx-auto flex flex-col pt-6 md:pt-9 pb-12 md:pb-22">
        <h1 className="text-3xl md:text-4xl font-bold text-purpleDark dark:text-greenLight pb-4 md:pb-7 text-center md:text-left px-2">
          {title}
        </h1>
        <MantineProvider>
          <Card className="mx-2">
            <Card.Section className="flex flex-col md:flex-row bg-white dark:bg-[#2b2727] rounded-lg shadow-md min-h-[380px] items-center">
              <Image
                src={project1.image}
                className="w-full md:w-[360px] h-[250px] md:h-[360px] object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-between gap-4 md:gap-6 p-4 md:p-12 w-full">
                <h2 className="text-xl md:text-2xl font-bold text-purpleDark dark:text-[#c1baed] text-center md:text-left">
                  {project1.title}
                </h2>
                <p className="text-grayLight dark:text-white text-center md:text-left">
                  {project1.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-3 md:px-4 py-2 text-white text-sm">
                    {project1.pill1}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-3 md:px-4 py-2 text-white text-sm">
                    {project1.pill2}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-3 md:px-4 py-2 text-white text-sm">
                    {project1.pill3}
                  </Pill>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 md:space-x-9">
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium text-sm md:text-base"
                  >
                    {project1.link1}
                  </a>
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium text-sm md:text-base"
                  >
                    {project1.link2}
                  </a>
                </div>
              </div>
            </Card.Section>
          </Card>
          <Card className="mt-6 md:mt-9 mx-2">
            <Card.Section className="flex flex-col md:flex-row bg-white dark:bg-[#2b2727] rounded-lg shadow-md min-h-[380px] items-center">
              <Image
                src={project2.image}
                className="w-full md:w-[360px] h-[250px] md:h-[360px] object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-between gap-4 md:gap-6 p-4 md:p-12 w-full">
                <h2 className="text-xl md:text-2xl font-bold text-purpleDark dark:text-[#c1baed] text-center md:text-left">
                  {project2.title}
                </h2>
                <p className="text-grayLight dark:text-white text-center md:text-left">
                  {project2.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-3 md:px-4 py-2 text-white text-sm">
                    {project2.pill1}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-3 md:px-4 py-2 text-white text-sm">
                    {project2.pill2}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-3 md:px-4 py-2 text-white text-sm">
                    {project2.pill3}
                  </Pill>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 md:space-x-9">
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium text-sm md:text-base"
                  >
                    {project2.link1}
                  </a>
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium text-sm md:text-base"
                  >
                    {project2.link2}
                  </a>
                </div>
              </div>
            </Card.Section>
          </Card>
        </MantineProvider>
      </div>
    </section>
  );
};
