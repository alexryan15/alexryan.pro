import React from "react";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="caret-transparent text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
        </div>

        {/* Projects Container */}
        <div className="w-full grid grid-cols-1 gap-4 py-8">
          <div className="leading-7 caret-transparent rounded-lg border-2 border-black shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20" />
            <p className="mx-4 my-2">
                Portfolio Website <br /> 
                {/* A responsive website that was built using React and styled with Tailwind CSS. */}
                I built this website as a portfolio to demonstrate my skills in a way that a resume can not. This website was built with React over the course of a few days and styled with Tailwind CSS. HTML, CSS, and JavaScript are some of the most widely use technologies in the industry, and almost everyone will have to use them at some point in their life. Knowing this, I wanted to learn these as well, but I thought it would be best to use libraries that would give me much more power over what I was creating, which is what led me to using some of the most popular tools in web development.
                <br />
                <a className="text-pink-600" target="_blank" href="https://github.com/alexryan-15/alexryan-15.github.io">SOURCE CODE</a>
            </p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-black shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20" />
            <p className="mx-4 my-2">
                Record Scraper <br />
                A hobby that I developed over the past year or so has been collecting vinyl records. The only problem with this, is that records do not come cheap, so I wanted to find a way that I could find cheaper alternatives to the other locations that I had been buying records from. I decided to make a web scraper which would scrape turntablelab.com for all of the records that were on sale. After collecting all records on sale, the project then exports the records to a csv file which can be viewed in Excel. I used Python and the BeautifulSoup library to create this project.
                <br />
                <a className="text-pink-600" target="_blank" href="https://github.com/alexryan-15/Record-Scraper">SOURCE CODE</a>
            </p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-black shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20" />
            <p className="mx-4 my-2">
                Python Leetcode Solutions <br />
                To improve my knowledge of data structures and algorithms, I have been working on solving all of the leetcode problems using Python and saving them to a Github repository. I have already learned a lot of tricks that I would not have known otherwise just by doing a few of the easier problems on Leetcode. Since there are around 2000 problems, this is very much still a work in progress, but I plan on completing these as I go about my career.
                <br />
                <a className="text-pink-600" target="_blank" href="https://github.com/alexryan-15/python-leetcode-solutions">SOURCE CODE</a>
            </p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-black shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20" />
            <p className="mx-4 my-2">
                Room Scheduler <br />
                As part of a final course project, I created a mock room scheduler which allowed users to reserve classrooms for use. The project, built with Java, MySQL, and Java Swing, allowed users to request a classroom to use based on the number of seats needed. The code would attempt to find a room available in the database, and if none were, the user would be put on a waitlist. Upon a room becoming available, the user's waitlist entry was confirmed to a reservation. This project taught me a lot about relational databases and the basics of user interfaces. Due to University restrictions, I am unable to provide any source code.
            </p>
          </div>
          <div className="leading-7 caret-transparent rounded-lg border-2 border-black shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20" />
            <p className="mx-4 my-2">
                Malloc Reimplementation <br />
                In order to learn more about low-level programming and dynamic memory allocation, I was assigned to reimplement malloc, realloc, and free as part of a course project. Written in C, this project allowed me to expand my knowledge on dynamic memory allocation and the structure of the system's memory. Prior to this course, and specifically this project, I had very little understanding of the system, since most of my experience was with higher level languages such as Python and Java. This project strengthened my abilities with low-level programming using C. Due to University restrictions, I am unable to provide any source code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
