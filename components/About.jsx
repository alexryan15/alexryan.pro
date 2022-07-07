import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flexitems-center py-16">
      <div className="max-w-[60rem] m-auto gap-8">
        <div className="">
          <h1 className="text-center text-3xl py-4 tracking-widest text-HIGHLIGHT">
            ABOUT
          </h1>
          <p className="py-8 pt-4 text-black text-lg text-center font-normal">
            Hi, I&#39;m Alex. I&#39;m a junior at Penn State University studying
            Computer Science. I am currently working for Paylocity as a Software
            Engineer Intern on the Performance Management team.
          </p>
          <div className=" text-md text-black font-normal max-w-[60rem] py-4 md:grid grid-cols-3 text-center rounded-xl border-2 border-HIGHLIGHT">
            <div>
              <p className="text-HIGHLIGHT text-xl font-normal py-2">
                Languages
              </p>
              <p>Python</p>
              <p>JavaScript</p>
              <p>Java</p>
              <p>Go</p>
              <p>C#</p>
              <p>C</p>
            </div>
            <div className="md:border-l md:border-r border-HIGHLIGHT">
              <p className="text-HIGHLIGHT text-xl font-normal py-2">
                Technologies
              </p>
              <p>React</p>
              <p>Redux</p>
              <p>.NET</p>
              <p>SQL</p>
            </div>
            <div>
              <p className="text-HIGHLIGHT text-xl font-normal py-2">
                Dev Tools
              </p>
              <p>Github</p>
              <p>Bitbucket</p>
              <p>Linux</p>
              <p>Jira</p>
              <p>Nano</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
