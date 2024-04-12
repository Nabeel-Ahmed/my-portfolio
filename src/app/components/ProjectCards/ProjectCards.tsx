import React from "react";
import Image from "next/image";
import { basePath } from "../../data";

export default function ProjectCard({
  project,
  company,
  url,
}: {
  project: any;
  company: string;
  url: undefined | string;
}) {
  let usePath = false;

  if (process.env.NODE_ENV === "production") {
    usePath = true;
  }

  return (
    <div
      className={`card flex-shrink-0 flex-grow-0 md:w-2/5 lg:w-3/12 ${
        company === "Huel" ? "bg-white" : "bg-base-300"
      } shadow-xl mb-4 mt-4 w-4/5 `}
    >
      {project.imageUrl && (
        <figure>
          <Image
            src={usePath ? basePath + project.imageUrl : project.imageUrl}
            alt={project.altText}
            width={800}
            height={200}
          />
        </figure>
      )}
      <div className="card-body flex flex-col h-full">
        <h2 className="card-title">{project.name}</h2>
        <div className="flex gap-1 flex-wrap">
          {project?.languages?.map((language: string, langIndex: number) => (
            <div key={langIndex} className="badge badge-secondary">
              {language}
            </div>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="flex gap-2">
          <a className="badge badge-accent" href={url}>
            {project.companyName}
          </a>
          {project.link && (
            <a className="badge badge-primary" href={project.link}>
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
