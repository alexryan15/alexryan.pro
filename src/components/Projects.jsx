import React from "react";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="caret-transparent text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
        </div>

        {/* Projects Container */}
        <div className="w-full grid grid-cols-1 gap-4 py-8">
          <div className="leading-7 caret-transparent rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="m-4">
                Portfolio Website <br /> 
                A responsive website that was built using React and styled with Tailwind CSS. <br />
                <a className="text-pink-600" href="https://github.com/alexryan-15/alexryan-15.github.io">SOURCE CODE</a>
            </p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="m-4">WEB SCRAPER</p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="m-4">PYTHON LEETCODE SOLUTIONS</p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="m-4">ROOM SCHEDULER</p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="m-4">MALLOC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
