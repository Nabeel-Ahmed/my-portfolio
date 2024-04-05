import { employmentHistory } from "../../data";
import ProjectCard from "../ProjectCards/ProjectCards";

export default function TwineSection() {
  const brandingToBgClass = {
    twine: "bg-twine",
    huel: "bg-huel text-black",
    kadfire: "bg-kadfire",
    pronto: "bg-pronto",
    // add more mappings as needed
  };

  return (
    <div className="text-white h-screen flex flex-col overflow-auto snap-y snap-proximity">
      {employmentHistory.map((employment, index) => (
        <div
          key={index}
          className={`h-auto min-h-full ${
            brandingToBgClass[employment.branding]
          } snap-start shrink-0`}
        >
          <h1 className="text-3xl ml-4 mt-4">
            {employment.position} @ {employment.company} {employment.location}
          </h1>
          <h2 className="text-2xl mt-4 ml-4 text-left">
            {employment.startDate} - {employment.endDate}
          </h2>
          <p className="ml-4 mt-4">{employment.overview}</p>
          <div
            key={index}
            className="m-4 flex gap-2 flex-row flex-wrap justify-center items-center"
          >
            {employment?.projects?.map((project, projIndex) => (
              <ProjectCard
                key={projIndex}
                project={project}
                company={employment.company}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

