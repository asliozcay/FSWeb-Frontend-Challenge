import { Card, Image, MantineProvider } from "@mantine/core";
import { data } from "../../data";

export const Projects = () => {
  const language = "en";
  const projectsData = data[language].projectsSectionData;
  const { title, project1, project2 } = projectsData;

  return (
    <section className="projects" id="projects">
      <MantineProvider>
        <Card>
          <Card.Section className="">
            <Image src={project1.image} className="object-left h-[360px] w-[360px] object-cover" />
            <h2>title</h2>
          </Card.Section>
        </Card>
      </MantineProvider>
    </section>
  );
};
