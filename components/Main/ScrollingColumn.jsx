import React from "react";
import About from "../About/About";
import Projects from "../Projects";

const ScrollingColumn = () => {
  return (
    <>
      <About className="text-gray-700" />
      <Projects />
    </>
  );
};

export default ScrollingColumn;
