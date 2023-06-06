import React from "react";
import MainMobileItem from "./MainMobileItem";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const StaticColumn = () => {
  return (
    <div className="h-screen">
      <h1 className="py-4 text-gray-700 ">
        Hi, I&#39;m <span className="text-HIGHLIGHT"> Alex</span>
      </h1>
      <h1 className="py-2 text-gray-700 ">Computer Science Student</h1>
      <p className="py-4 text-black max-w-[70%] m-auto font-normal text-xl">
        I am a student at Penn State studying Computer Science. Upon graduation
        I will be working for Paylocity as an Associate Software Engineer.
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
