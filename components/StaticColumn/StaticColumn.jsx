import React from "react";
import SocialItems from "./SocialItems/SocialItems";
import NavLinks from "./NavLinks/NavLinks";

const StaticColumn = () => {
  return (
    <div className="flex flex-col md:h-screen text-left">
      <div className="justify-between">
        <p className="GRADIENT text-5xl font-bold py-2 md:px-12">Alex Ryan</p>
        <p className="text-xl py-2 font-semibold md:px-12">
          Software Engineer at Paylocity
        </p>
        <p className="text-md font-normal py-2 md:px-12 m-auto">
          I am a Software Engineer working remotely on the Learning Management Solutions team at Paylocity.
        </p>
      </div>
      <div>
        <NavLinks />
      </div>
      <div className="flex items-left justify-between w-full -ml-4 md:ml-auto mt-20 md:mt-auto md:mb-36 py-2 md:px-8">
        <SocialItems />
      </div>
    </div>
  );
};

export default StaticColumn;
