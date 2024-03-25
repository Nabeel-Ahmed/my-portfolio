import Image from "next/image";
import ExperienceScroller from "../components/ExperienceScroller";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ExperienceScroller />
    </main>
  );
}
