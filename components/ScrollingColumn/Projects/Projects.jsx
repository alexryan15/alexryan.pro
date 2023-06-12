import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-36 md:px-12 mb-28">
      <div className="mx-auto">
        <h1 className="GRADIENT text-2xl text-left">PROJECTS</h1>
        <div className="flex flex-col">
          <ProjectItem
            title="Portfolio Website"
            description="This website that was built with React, Next.js, and Tailwind CSS."
            src="https://github.com/alexryan-15/alexryan-15.github.io"
          />
          <ProjectItem
            title="Record Scraper"
            description="A web scraper build with Python and Beautiful Soup."
            src="https://github.com/alexryan-15/Record-Scraper"
          />
          <ProjectItem
            title="Dynamic Memory Allocator"
            description="An implementation of malloc, realloc, and calloc. Source not available per University rules."
          />
          <ProjectItem
            title="Room Scheduler"
            description="A mock room scheduler with Java and MySQL. Source not available per University rules."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
