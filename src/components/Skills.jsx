import React from "react";

import Github from "../assets/github.png";
import Java from "../assets/java.png";
import MySQL from "../assets/mysql.png";
import Python from "../assets/python.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen text-gray-300 caret-transparent"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#06cdd6]">
            Skills
          </p>
        </div>

        {/* Icon Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="pt-4 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python Icon" />
            <p className="my-4 text-white">Python</p>
          </div>
          <div className="pt-4 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java Icon" />
            <p className="mt-4 text-white">Java</p>
          </div>
          <div className="pt-4 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="MySQL Icon" />
            <p className="my-4 text-white">MySQL</p>
          </div>
          <div className="pt-4 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
            <p className="my-4 text-white">Github</p>
          </div>
          <div className="pt-4 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p className="my-4 text-white">React</p>
          </div>
          <div className="pt-4 rounded-lg bg-[#0a192f] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p className="my-4 text-white">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
