import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen">
      <div className="max-w-[1240px] mx-auto pt-36">
        <h2 className="text-3xl pb-8 text-center tracking-widest uppercase text-[#7510F7]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            title="Neetcode 150 Solutions"
            description="Solutions to Neetcode's 150 Leetcode questions for interview prep."
            src="https://github.com/alexryan-15/neetcode-150-solutions"
          />
          <ProjectItem
            title="Room Scheduler"
            description="Built a mock room scheduler as a final course project with Java and MySQL. Source not available per University rules."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
