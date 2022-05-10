import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen text-gray-300 caret-transparent"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="caret-transparent text-4xl font-bold inline border-b-4 border-[#06cdd6]">
            Projects
          </p>
        </div>

        {/* Projects Container */}
        <div className="w-full grid grid-cols-1 gap-4 py-8">
          <div className="leading-7 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <p className="mx-4 my-2">
              Portfolio Website <br />
              A responsive website that was built using React and styled with
              Tailwind CSS.
              <br />
              <a
                className="text-[#06cdd6]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/alexryan-15/alexryan-15.github.io"
              >
                SOURCE CODE
              </a>
            </p>
          </div>
          <div className="leading-7 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <p className="mx-4 my-2">
              Record Scraper <br />
              A web scraper to find records on sale from TurntableLab.com. Built
              using Python and the BeautifulSoup library.
              <br />
              <a
                className="text-[#06cdd6]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/alexryan-15/Record-Scraper"
              >
                SOURCE CODE
              </a>
            </p>
          </div>
          <div className="leading-7 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <p className="mx-4 my-2">
              Python Leetcode Solutions <br />
              A repository to eventually store all of the Leetcode solutions in
              Python.
              <br />
              <a
                className="text-[#06cdd6]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/alexryan-15/python-leetcode-solutions"
              >
                SOURCE CODE
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
