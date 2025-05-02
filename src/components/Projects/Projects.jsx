import { Card, Image, MantineProvider, Pill } from "@mantine/core";
import { data } from "../../data";

export const Projects = ({ language }) => {
  const projectsData = data[language].projectsSectionData;
  const { title, project1, project2 } = projectsData;

  return (
    <section
      className="projects bg-greenLight dark:bg-[#1a210b] "
      id="projects"
    >
      <div className="w-[65%] mx-auto flex flex-col pt-9 pb-22 ">
        <h1 className="text-4xl font-bold text-purpleDark dark:text-greenLight pb-7">
          {title}
        </h1>
        <MantineProvider>
          <Card>
            <Card.Section className="flex bg-white dark:bg-[#2b2727] rounded-lg shadow-md h-[380px] items-center">
              <Image
                src={project1.image}
                className="object-left h-[360px] w-[360px] object-cover rounded-tl-xl rounded-bl-xl"
              />
              <div className="flex flex-col justify-between gap-6  px-12">
                <h2 className="text-2xl font-bold text-purpleDark dark:text-[#c1baed]">
                  {project1.title}
                </h2>
                <p className="text-grayLight dark:text-white">
                  {project1.description}
                </p>
                <div className="flex space-x-2">
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-4 py-2 text-white text-sm">
                    {project1.pill1}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-4 py-2 text-white text-sm">
                    {project1.pill2}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-4 py-2 text-white text-sm">
                    {project1.pill3}
                  </Pill>
                </div>
                <div className="flex space-x-9">
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium"
                  >
                    {project1.link1}
                  </a>
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium"
                  >
                    {project1.link2}
                  </a>
                </div>
              </div>
            </Card.Section>
          </Card>
          <Card>
            <Card.Section className="flex bg-white dark:bg-[#2b2727] rounded-lg shadow-md h-[380px] items-center mt-9">
              <Image
                src={project2.image}
                className="object-left h-[360px] w-[360px] object-cover rounded-tl-xl rounded-bl-xl"
              />
              <div className="flex flex-col justify-between gap-6  px-12">
                <h2 className="text-2xl font-bold text-purpleDark dark:text-[#c1baed]">
                  {project2.title}
                </h2>
                <p className="text-grayLight dark:text-white">
                  {project2.description}
                </p>
                <div className="flex space-x-2">
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-4 py-2 text-white text-sm">
                    {project2.pill1}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-4 py-2 text-white text-sm">
                    {project2.pill2}
                  </Pill>
                  <Pill className="bg-purpleDark dark:bg-[#8173da] rounded-3xl px-4 py-2 text-white text-sm">
                    {project2.pill3}
                  </Pill>
                </div>
                <div className="flex space-x-9">
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium"
                  >
                    {project2.link1}
                  </a>
                  <a
                    href="#"
                    className="text-blueDark dark:text-greenLight underline underline-offset-3 font-medium"
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
