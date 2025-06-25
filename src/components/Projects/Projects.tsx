import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <div>
        <h1>Projects</h1>
        <div>
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
          {/* <ProjectItem
            title="Dynamic Memory Allocator"
            description="An implementation of malloc, realloc, and calloc. Source not available per University rules."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
