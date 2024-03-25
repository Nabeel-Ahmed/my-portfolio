// ProjectCard.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, company }) {
  return (
    <div
      className={`card flex-shrink-0 w-1/4 ${
        company === "Huel" ? "bg-white" : "bg-base-300"
      } shadow-xl mb-4 mt-4`}
    >
      {project.imageUrl && (
        <figure>
          <Image
            src={project.imageUrl}
            alt={project.altText}
            width={800}
            height={200}
          />
        </figure>
      )}
      <div className="card-body flex flex-col h-full">
        <h2 className="card-title">{project.name}</h2>
        <div className="flex gap-1">
          {project.languages.map((language, langIndex) => (
            <div key={langIndex} className="badge badge-secondary">
              {language}
            </div>
          ))}
        </div>
        <p>{project.description}</p>
        <div class="badge badge-outline">{project.companyName}</div>
      </div>
    </div>
  );
}
