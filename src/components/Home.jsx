import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alex Ryan
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          Computer Science Student
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          I am a student at Penn State studying Computer Science. In the summer
          of 2022, I will be working as a Software Engineer Intern for Paylocity
          in Chicago, IL.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
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
