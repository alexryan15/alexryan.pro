import React from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";

const ScrollingColumn = () => {
  return (
    <>
      <About className="text-gray-700" />
      <Experience />
      <Projects />
    </>
  );
};

export default ScrollingColumn;
