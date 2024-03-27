export const basePath = "/my-portfolio";
export const employmentHistory = [
  {
    position: "Software Engineer",
    company: "Twine",
    url: "https://twine.net/",
    branding: "twine",
    location: "Manchester (Remote), UK",
    startDate: "July 2022",
    endDate: "December 2023",
    languages: ["TypeScript", "JavaScript"],
    frameworks: ["React", "Next.js", "Redux", "Laravel"],
    tech: ["AWS Lambda", "puppeteer", "SQL"],
    overview:
      "At Twine I worked in a team of 3 using the agile methodolgy and a produt focus reporting directly to the engineering manager. I worked on a variety of different projects in both frontend and backend capacities using React, JavaScript and TypeScript on the frontend end and PHP Laravel on the backend. My main area of responsibility being the Twine Platform frontend which I took ownership over.",
    // I worked on a vareity of different projects. Here's some of the things I worked on at Twine.",
    projects: [
      {
        name: "Twine Platform",
        description:
          "An online marketplace that enables businesses to connect with freelancer by posting jobs which are then pitched on by skilled freelancer. Built using a React frontend and Laravel backend. ",
        languages: ["JavaScript", "React", "PHP", "Laravel", "CSS"],
        tech: ["Next JS", "Tailwind"],
        link: "https://twine.net/jobs/",
        imageUrl: "/images/twine.webp",
      },
      {
        name: "Landing Pages",
        description:
          "A Next.js App that programmatically generated static pages for each role and location on the Twine platform which significantly improved the SEO and increased our average monthly impressions by 5x.",
        languages: ["TypeScript", "Next.js", "Webflow", "AWS"],
        imageUrl: "/images/twinelp.webp",
        link: "https://twine.net/find/animators/",
      },
      {
        name: "Dataset Management Platform",
        description:
          "A Next.js based application that allows users to search and buy datasets. Once purchased users can then manage and maintain and track version history of their Datasets",
        languages: ["JavaScript", "Tailwind", "Next.js"],
        link: "https://dmp.twine.net/",
        imageUrl: "/images/twineDMP.webp",
      },
      {
        name: "Job Crawler",
        description:
          "Built the Job Crawler using TypeScript, Node.js, AWS Lambda and puppeteer which would aggregate jobs from multiple job sites and post them on our own site, alongside SEO optimisation this increased our jobs page’s monthly impressions from 200k to 660k.",
        languages: ["TypeScript", "Puppeteer", "AWS", "Airtable"],
        tech: ["Next JS", "Tailwind"],
        imageUrl: "/images/twineJC.webp",
      },
    ],
  },
  {
    position: "Senior Frontend Engineer",
    company: "Huel",
    url: "https://uk.huel.com/",
    branding: "huel",
    location: "Birmingham, UK",
    startDate: "Nov 2021",
    endDate: "Feb 2022",
    languages: ["TypeScript"],
    frameworks: ["Tailwind"],
    tech: [], // Add specific tech/tools for this job
    projects: [
      {
        name: "Mix & Match",
        description:
          'A Microfrontend designed to split out the subscription checkout allowing customers "Mix & Match" different products when building their cart or building subscription bundles.',
        languages: ["TypeScript", "React", "Redux", "Tailwind"],
        imageUrl: "/images/buildyourbundle.webp",
        link: "https://uk.huel.com/products/build-your-own-bundle",
      },
    ],
  },
  {
    position: "Frontend Developer",
    company: "Kadfire",
    url: "https://www.kadfire.com/",
    branding: "kadfire",
    location: "Redditch, UK",
    startDate: "Mar 2019",
    endDate: "Nov 2021",
    languages: ["JavaScript"],
    frameworks: ["React", "Redux", "Material-UI"],
    tech: ["Web Sockets", "MQTT"],
    projects: [
      {
        name: "Railpoint CMS",
        description:
          "Lead development on a bespoke CMS that was desgined to provide support for and manage content of the RailPoint Screens. It included reporting functionality which would monitor upkeep and statistics of Screens and allow users to open support tickets so we could resolve any issues. Build with React, Redux, SCSS and a Django Python backend.",
        languages: ["React", "Redux", "SCSS"],
        imageUrl: "/images/cms2.png",
      },
      {
        name: "Railpoint Screens",
        description:
          "RailPoint Screens use multiple data feeds to display up-to-the-minute travel information in both touch screen and non touchscreen format at train stations all across the UK. They can be used to plan journeys, as live departure boards, maps, to display station information and provide vital information to passengers such as distruptions and engineering works.",
        languages: ["JavaScript", "HTML", "CSS", "MQTT"],
        imageUrl: "/railpoint.webp",
      },
      {
        name: "RailPay",
        description:
          "An application integrated directly into the RailPoint Screens that enabled Train Operating Companies to allow commuters to purchase train tickets via NFC from RailPoint Touchscreens using their phones. This gave commuters more options to purchase tickets from improving the flow of the stations.  Built using React, Redux, SCSS with a Node JS and Express backend.",
        languages: ["React", "Redux", "SCSS"],
        imageUrl: "/images/RailPay2.jpg",
      },
      {
        name: "Times2",
        description:
          "Times 2 is a SPA built with React on the Frontend and a Python Django backend, it enable Train Operting Companies to tap into multiple different open rail data APIS and generate train timetables between stations for online and offline publication.",
        languages: ["React", "Redux", "Material-UI"],
      },
    ],
  },
  {
    position: "Junior Frontend Developer",
    company: "Pronto Etech Services",
    branding: "pronto",
    url: "https://prontoetech.com/",
    location: "Birmingham, UK",
    startDate: "Sep 2017",
    endDate: "Mar 2019",
    languages: ["JavaScript"],
    frameworks: ["React", "Redux", "Material-UI"],
    tech: [], // Add specific tech/tools for this job
    projects: [
      {
        name: "Double Parked",
        description:
          "I worked on Double Parked from Inception to launch, it's an online market place that enables Driving Instructors to move their diary online and manage their bookings. It also allows students to find their perfect instructor that aligns with their needs and book online",
        languages: ["React", "Redux", "Node.js", "Express"],
        imageUrl: "/images/doubleparked.png",
      },
    ],
  },
];

export function getAllProjects(employmentHistory) {
  // Initialize an empty array to store all projects
  let allProjects = [];

  // Iterate over each employment object
  employmentHistory.forEach((employment) => {
    // Iterate over each project within the employment object
    employment.projects.forEach((project) => {
      // Add the company name property to the project object
      const projectWithCompanyName = {
        ...project,
        companyName: employment.company,
        url: employment.url,
      };

      // Push the augmented project object to the array of all projects
      allProjects.push(projectWithCompanyName);
    });
  });

  // Return the array containing all projects
  return allProjects;
}

// Usage example:
// const allProjects = getAllProjects(employmentHistory);
// console.log(allProjects);
