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
            description="This website that was built with React."
            src="https://github.com/alexryan15/alexryan.pro"
          />
          <ProjectItem
            title="KeyV-Cli"
            description="Simple key-value storage solution in the command line built with TypeScript and published through NPM."
            src="https://github.com/alexryan15/keyv-cli"
          />
          <ProjectItem
            title="Record Scraper"
            description="A web scraper build with Python and Beautiful Soup."
            src="https://github.com/alexryan15/Record-Scraper"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
