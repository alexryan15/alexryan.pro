import React from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experiences from "./Experience/Experiences";

const ScrollingColumn = () => {
  return (
    <>
      <About className="text-gray-700" />
      <Experiences />
      <Projects />
    </>
  );
};

export default ScrollingColumn;
