import React from "react";
import ScrollingColumn from "./ScrollingColumn";
import StaticColumn from "./StaticColumn";

const Main = () => {
  return (
    <div id="home" className="text-center flex">
      <div className="w-1/2 p-12 bg-gray-200 fixed">
        <StaticColumn />
      </div>
      <div className="w-1/2 bg-white ml-auto p-12 overflow-y-auto">
        <ScrollingColumn />
      </div>
    </div>
  );
};

export default Main;
