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
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center flex-col">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Nabeel Ahmed</h1>
            <p className="py-6">
              A software engineer with over 5 years of experience building
              software in different spaces such as marketplaces, Web 3.0
              e-commerce, Rail and Transport with both frontend and backend
              experience.
            </p>
          </div>
          {/* animation shit */}
          <div className="relative flex overflow-x-hidden">
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

            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
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

      <div className="flex-grow">
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {allProjects?.map((project, projIndex) => (
            <ProjectCard
              key={projIndex}
              project={project}
              company={project.company}
            />
          ))}
        </div>
        {/* <TwineSecion /> */}
      </div>
    </div>
  );
}
