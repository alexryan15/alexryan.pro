import React from "react";
import MainMobileItem from "./MainMobileItem";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const StaticColumn = () => {
  return (
    <div className="h-screen text-left">
      <p className="text-5xl font-bold md:px-12 text-HIGHLIGHT">Alex Ryan</p>
      <p className="text-xl py-2 font-semibold md:px-12 text-gray-700">
        Software Engineer at Paylocity
      </p>
      <p className="text-md font-normal py-2 md:px-12 text-gray-600 m-auto">
        I am passionate Software Engineer currently working remotely for
        Paylocity.
      </p>
      {/* Social Links */}
      <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <MainMobileItem
          link="https://www.linkedin.com/in/alex-ryan-1a2a29190/"
          image={<FaLinkedinIn />}
        />
        <MainMobileItem
          link="https://github.com/alexryan15"
          image={<FaGithub />}
        />
        <MainMobileItem
          link="mailto:alexryan1717@hotmail.com"
          image={<AiOutlineMail />}
        />
        <MainMobileItem
          link="https://drive.google.com/file/d/1MgDpQqDw06ZIn1AiHedqzSkxCJGkyxNY/view?usp=sharing"
          image={<BsFillPersonLinesFill />}
        />
      </div>
    </div>
  );
};

export default StaticColumn;
