import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen">
      <div className="max-w-[1240px] mx-auto pt-36">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Example 1" projectUrl="/property" />
          <ProjectItem title="Example 2" projectUrl="/crypto" />
          <ProjectItem title="Example 3" projectUrl="/netflix" />
          <ProjectItem title="Example 4" projectUrl="/twitch" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
