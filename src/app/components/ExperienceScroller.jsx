// EmploymentHistory.js
"use client";
import React, { useState, useEffect } from "react";

import { employmentHistory } from "../data";

const ExperienceScroller = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const employmentList = () => {
    return employmentHistory.map((job, index) => (
      <article key={index}>
        <h1 className="text-3xl">{job.position}</h1>
        <p>
          @ {job.company} - {job.location}
        </p>
        <p>
          {job.startDate} - {job.endDate}
        </p>
        <ul>
          {job.languages.map((language, i) => (
            <li key={i}>{language} , </li>
          ))}
        </ul>
        <ul>
          {job.frameworks.map((framework, i) => (
            <li key={i}>{framework}</li>
          ))}
        </ul>
        <ul>
          {job.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </article>
    ));
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold mb-6">Employment History</h1>

      <div className="flex flex-col items-center mt-8">
        <div className="year-section" id="2022">
          {/* Add your employment history for 2022 */}
        </div>
        <div className="year-section" id="2021">
          {/* Add your employment history for 2021 */}
        </div>
        <div>{employmentList()}</div>
        {/* Add more sections for each year as needed */}
      </div>
    </div>
  );
};
export default ExperienceScroller;
