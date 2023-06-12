import React from "react";
import ScrollingColumn from "./ScrollingColumn/ScrollingColumn";
import StaticColumn from "./StaticColumn/StaticColumn";

const Main = () => {
  return (
    <div id="home" className="text-center md:flex">
      <div className="md:w-2/5 p-8 md:p-20 md:fixed">
        <StaticColumn />
      </div>
      <div className="md:w-3/5 ml-auto p-8 md:p-20 md:overflow-y-auto">
        <ScrollingColumn />
      </div>
    </div>
  );
};

export default Main;
