import React from "react";
import SocialItems from "./SocialItems/SocialItems";
import StaticLinks from "./StaticLinks";

const StaticColumn = () => {
  return (
    <div className="flex flex-col md:h-screen text-left">
      <div className="justify-between">
        <p className="text-5xl font-bold md:px-12 text-HIGHLIGHT">Alex Ryan</p>
        <p className="text-xl py-2 font-semibold md:px-12 text-gray-700">
          Software Engineer at Paylocity
        </p>
        <p className="text-md font-normal py-2 md:px-12 text-gray-600 m-auto">
          I am passionate Software Engineer currently working remotely for
          Paylocity.
        </p>
      </div>
      <div>
        <StaticLinks />
      </div>
      <div className="flex items-left justify-between w-full -ml-4 md:ml-auto mt-20 md:mt-auto md:mb-36 py-2 md:px-8">
        <SocialItems />
      </div>
    </div>
  );
};

export default StaticColumn;
