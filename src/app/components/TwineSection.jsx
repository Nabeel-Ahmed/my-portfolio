import Image from "next/image";
import { useRef } from "react";
import { employmentHistory } from "../data";

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
          className={`h-full ${
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
            className="ml-4 flex gap-2 flex-col lg:flex-row  justify-center items-center"
          >
            {employment?.projects?.map((project, projIndex) => (
              <div
                key={projIndex}
                className={`card w-96 ${
                  employment.company === "Huel" ? "bg-white" : "bg-base-100"
                } shadow-xl mb-4 mt-4`}
              >
                <figure>
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    width={project.imageWidth}
                    height={project.imageHeight}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <div className="flex gap-1">
                    {project.languages.map((language, langIndex) => (
                      <div key={langIndex} className="badge badge-secondary">
                        {language}
                      </div>
                    ))}
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        // <div
        //   key={index}
        //   className={`min-h-screen ${
        //     brandingToBgClass[employment.branding]
        //   } shrink-0 flex flex-col items-center`}
        // >
        //   <div className="ml-4">
        //     <h1 className="text-3xl mt-4">
        //       {employment.position} @ {employment.company} {employment.location}
        //     </h1>
        //     <h2 className="text-2xl mt-2 text-left">
        //       {employment.startDate} - {employment.endDate}
        //     </h2>
        //     <p className="mt-2">{employment.overview}</p>
        //   </div>
        //   <div className="ml-4 flex flex-col lg:flex-row  gap-4 items-center">
        //     {employment?.projects?.map((project, projIndex) => (
        //       <div
        //         key={projIndex}
        //         className={`card w-96 h-96 ${
        //           employment.company === "Huel" ? "bg-white" : "bg-base-100"
        //         } shadow-xl mb-4 mt-4`}
        //       >
        //         <figure>
        //           <img
        //             src={project.imageUrl}
        //             alt={project.altText}
        //             width={project.imageWidth}
        //             height={project.imageHeight}
        //           />
        //         </figure>
        //         <div className="card-body">
        //           <h2 className="card-title">{project.name}</h2>
        //           <div className="flex gap-1">
        //             {project.languages.map((language, langIndex) => (
        //               <div key={langIndex} className="badge badge-secondary">
        //                 {language}
        //               </div>
        //             ))}
        //           </div>
        //           <p>{project.description}</p>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>
      ))}
    </div>
  );
}
