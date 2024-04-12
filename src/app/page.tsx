"use client";
import Hero from "./components/Hero/Hero";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import BlogPosts from "./components/BlogPosts/BlogPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectSection />
      <div className="divider"></div>
      <BlogPosts />
    </>
  );
}
