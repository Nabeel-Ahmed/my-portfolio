"use client";
import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { employmentHistory, getAllProjects } from "./data";
import ProjectCard from "./components/ProjectCards";
import TwineSecion from "./components/TwineSection";

export default function Home() {
  console.log("lol");
  const allProjects = getAllProjects(employmentHistory);

  return (
    <>
      <div className="min-h-screen max-w-screen bg-base-200">
        <div className="text-center flex flex-col items-center justify-center h-screen">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Nabeel Ahmed</h1>
            <p className="py-6">
              A software engineer with over 5 years of experience building
              software in different spaces such as marketplaces, Web 3.0,
              e-commerce, Rail and Transport with both frontend and backend
              experience.
            </p>
          </div>

          {/* animation shit */}
          <div>
            <div className="overflow-x-hidden max-w-md">
              <div className="py-12 animate-marquee whitespace-nowrap">
                <span className="text-xl mx-4">JavaScript</span>
                <span className="text-xl mx-4">React</span>
                <span className="text-xl mx-4">TypeScript</span>
                <span className="text-xl mx-4">Redux</span>
                <span className="text-xl mx-4">SCSS</span>
                <span className="text-xl mx-4">Tailwind</span>
                <span className="text-xl mx-4">Node.js</span>
                <span className="text-xl mx-4">PHP</span>
                <span className="text-xl mx-4">Laravel</span>
                <span className="text-xl mx-4">Go</span>
                <span className="text-xl mx-4">AWS</span>
                <span className="text-xl mx-4">Puppeteer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {allProjects?.map((project, projIndex) => (
            <ProjectCard
              key={projIndex}
              project={project}
              company={project.company}
              url={project.url}
            />
          ))}
        </div>
        {/* <TwineSecion /> */}
      </div>
    </>
  );
}
