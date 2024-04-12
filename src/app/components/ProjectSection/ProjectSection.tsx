import ProjectCards from "../ProjectCards/ProjectCards";
import { employmentHistory, getAllProjects } from "../../data";

export default function ProjectSection() {
  const allProjects = getAllProjects(employmentHistory);

  return (
    <div className="flex-grow ">
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {allProjects?.map((project, projIndex) => (
          <ProjectCards
            key={projIndex}
            project={project}
            companyName={project.companyName}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
