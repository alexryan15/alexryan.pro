import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-HIGHLIGHT"> Alex</span>
          </h1>
          <h1 className="py-2 text-gray-700">Computer Science Student</h1>
          <p className="py-4 text-black max-w-[70%] m-auto font-normal text-xl">
            I am a student at Penn State studying Computer Science. I am
            currently working as a Software Engineer Intern for Paylocity in
            Chicago, IL.
          </p>
          {/* Social Links */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/alex-ryan-1a2a29190/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border-2 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:border-HIGHLIGHT">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/alexryan-15"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border-2 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:border-HIGHLIGHT">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:alexryan1717@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border-2 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:border-HIGHLIGHT">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1r9kJjlFDFbetGL1qI2ZaGTAnFHmZM55S/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border-2 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:border-HIGHLIGHT">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
