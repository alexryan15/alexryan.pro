import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[60rem] m-auto gap-8">
        <div className="">
          <h1 className="text-center text-3xl py-4 tracking-widest text-[#7510F7]">
            ABOUT
          </h1>
          <p className="py-4 text-gray-600 text-xl text-center font-light">
            Hi, I'm Alex. I'm a junior at Penn State University studying
            Computer Science. I am currently working for Paylocity as a Software
            Engineer Intern on their Performance Conversation team.
          </p>
          <div className="max-w-[60rem] py-4 md:grid grid-cols-3 text-center border-2">
            <div>
              <p>Languages</p>
              <p>Python</p>
              <p>JavaScript</p>
              <p>Java</p>
              <p>C#</p>
              <p>C</p>
            </div>
            <div>
              <p>Technologies</p>
              <p>React</p>
              <p>.NET</p>
              <p>SQL</p>
            </div>
            <div>
              <p>Dev Tools</p>
              <p>Github</p>
              <p>Bitbucket</p>
              <p>Linux</p>
              <p>Jira</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
