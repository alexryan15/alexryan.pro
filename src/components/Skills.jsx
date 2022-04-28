import React from "react";

import Github from "../assets/github.png";
import Java from "../assets/java.png";
import MySQL from "../assets/mysql.png";
import Python from "../assets/python.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>

        {/* Icon Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="pt-4 rounded-lg shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python Icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="pt-4 rounded-lg shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java Icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="pt-4 rounded-lg shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="MySQL Icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="pt-4 rounded-lg shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="pt-4 rounded-lg shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="pt-4 rounded-lg shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
