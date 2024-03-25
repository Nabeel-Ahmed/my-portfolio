import Image from "next/image";
import ExperienceScroller from "../components/ExperienceScroller";

const WorkExperience = ({ place, colour }) => {
  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-blue-950 h-screen">
      {place}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <WorkExperience place="twine" colour="lol" /> */}
      <ExperienceScroller />

      {/* <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-white text-black  h-screen">
        Huel
      </div>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        RailPoint
      </div>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        Kadfire
      </div>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        Pronto Etech
      </div> */}
    </main>
  );
}
