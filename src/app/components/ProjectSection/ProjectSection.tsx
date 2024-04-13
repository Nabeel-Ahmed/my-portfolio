import ProjectCards from "../ProjectCards/ProjectCards";
import { employmentHistory, getAllProjects } from "../../data";

export default function ProjectSection() {
  const allProjects = getAllProjects(employmentHistory);

  return (
    <div className="flex-grow ">
      <h1 className="text-2xl font-bold flex justify-center p-8 ">
        Here's some of the things I've worked on professionally
      </h1>
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {allProjects?.map((project, projIndex) => (
          <ProjectCards
            key={projIndex}
            project={project}
            company={project.companyName}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
