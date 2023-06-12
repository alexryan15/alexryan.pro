import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const languages = ["Python", "JavaScript", "Java", "C#", "C"];
  const technologies = ["React", "Redux", "SQL", ".NET"];
  const tools = ["Github", "Bitbucket", "Linux", "Jira"];

  return (
    <div id="about" className="w-full pt-36 -mt-36 md:px-12 text-left">
      <div>
        <div>
          <h1 className="text-2xl">ABOUT</h1>
          <p className="py-4 pb-8 text-md font-normal">
            Hi, I&#39;m Alex. In May of 2023, I graduated from Penn State
            University with a degree in computer science. Since then, I have
            been working for Paylocity as an Associate Software Engineer.
          </p>
          <div className="BUBBLE font-normal max-w-[60rem] text-center">
            <div className="md:grid grid-cols-3 bg-gray-900 rounded-md p-8">
              <div>
                <p className="text-xl py-2">Languages</p>
                <AboutItem items={languages} />
              </div>
              <div>
                <p className="text-xl py-2">Technologies</p>
                <AboutItem items={technologies} />
              </div>
              <div>
                <p className="text-xl py-2">Dev Tools</p>
                <AboutItem items={tools} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
