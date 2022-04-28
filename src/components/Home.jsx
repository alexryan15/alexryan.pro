import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full caret-transparent">
        <p className="text-white text-xl">Hi, I'm</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Alex Ryan
        </h1>
        <h2 className="text-5xl font-bold text-[#ed9637]">
          Computer Science Student
        </h2>
        <p className="text-white py-4 max-w-[700px] ">
          I am a student at Penn State studying Computer Science. In the summer
          of 2022, I will be working as a Software Engineer Intern for Paylocity
          in Chicago, IL.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
          <button className="group text-white rounded-lg border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ed9637] hover:border-[#ed9637]">
            View Projects
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3 scale-105" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
