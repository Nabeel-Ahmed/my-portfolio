"use client";
import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { employmentHistory } from "./data";
import TwineSecion from "./components/TwineSection";

export default function Home() {
  return (
    // <div className="min-h-screen flex flex-col">
    //   <Head>
    //     <title>Nabeel Ahmed - Software Engineer</title>
    //   </Head>
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className="text-5xl text-center mb-8">my portfolio</h1>
    //     <button className="text-lg font-semibold bg-blue-500 text-white px-4 py-2 rounded-lg">
    //       My Experience
    //     </button>
    //   </div>
    <div className="flex-grow">
      <TwineSecion />
    </div>
    // </div>
  );
}
