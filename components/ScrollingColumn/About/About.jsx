import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const languages = ["C#", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"];
  const technologies = ["ASP.NET Core", "React", "Redux", "Angular", "XUnit", "Jest"];
  const tools = ["Git", "Datadog", "SSMS", "VS Code", "Visual Studio", "Bash"];

  return (
    <div id="about" className="w-full pt-36 -mt-36 md:px-12 text-left">
      <div>
        <div>
          <h1>ABOUT</h1>
          <p className="py-4 pb-8 text-md font-normal">
            Hi, I&#39;m Alex. I&#39;m a full stack software engineer developing a React.js client, but am particularly passionate about working with ASP.NET Core and C#.
          </p>
          <div className="BORDER font-normal max-w-[60rem] text-center">
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
