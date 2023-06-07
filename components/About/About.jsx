import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const languages = ["Python", "JavaScript", "Java", "C#", "C"];
  const technologies = ["React", "Redux", "SQL", ".NET"];
  const tools = ["Github", "Bitbucket", "Linux", "Jira"];

  return (
    <div id="about" className="w-full pt-20 -mt-20 md:px-12">
      <div>
        <div>
          <h1 className="text-left text-2xl tracking-widest text-HIGHLIGHT">
            ABOUT
          </h1>
          <p className="py-4 pb-8 text-black text-md text-left font-normal">
            Hi, I&#39;m Alex. In May of 2023, I graduated from Penn State
            University with a degree in computer science. Since then, I have
            been working for Paylocity as an Associate Software Engineer.
          </p>
          <div className="text-HIGHLIGHT font-normal max-w-[60rem] py-4 md:grid grid-cols-3 text-center rounded-xl border-2 border-HIGHLIGHT">
            <div>
              <p className="text-xl py-2">Languages</p>
              <AboutItem items={languages} />
            </div>
            <div className="md:border-l md:border-r border-HIGHLIGHT">
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
  );
};

export default About;
