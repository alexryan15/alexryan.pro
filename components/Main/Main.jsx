import React from "react";
import ScrollingColumn from "./ScrollingColumn";
import StaticColumn from "./StaticColumn";

const Main = () => {
  return (
    <div id="home" className="text-center md:flex">
      <div className="md:w-1/2 p-20 md:fixed">
        <StaticColumn />
      </div>
      <div className="md:w-1/2 bg-white ml-auto p-20 md:overflow-y-auto">
        <ScrollingColumn />
      </div>
    </div>
  );
};

export default Main;
