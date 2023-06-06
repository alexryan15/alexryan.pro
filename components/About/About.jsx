import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const languages = ["Python", "JavaScript", "Java", "C#", "C"];
  const technologies = ["React", "Redux", "SQL", ".NET"];
  const tools = ["Github", "Bitbucket", "Linux", "Jira"];

  return (
    <div id="about" className="w-full md:h-screen p-2 flexitems-center py-16">
      <div className="max-w-[60rem] m-auto gap-8">
        <div>
          <h1 className="text-center text-3xl py-4 tracking-widest text-HIGHLIGHT">
            ABOUT
          </h1>
          <p className="py-8 pt-4 text-black text-lg text-center font-normal">
            Hi, I&#39;m Alex. I&#39;m a passionate Associate Software Engineer
            for Paylocity and a recent college graduate with a degree in
            Computer Science from Penn State University.
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
