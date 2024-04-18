"use client";
import Hero from "./components/Hero/Hero";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import WorkTogether from "./components/WorkTogether/WorkTogether";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectSection />
      <div className="divider" />
      <BlogPosts />
      <div className="divider" />
      <WorkTogether />
    </>
  );
}
