import React from "react";
import Self from "../assets/self_image.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center w-full h-full items-center caret-transparent">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ed9637]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div>
            Hi, I'm Alex. I am a current junior at Penn State University
            studying Computer Science. I am also the Treasurer for the Men's
            Club Volleyball team at Penn State, where I a manage all of the
            club's finances.
            <br /> <br />
            In the summer of 2022, I will begin my career by working for
            Paylocity as a Software Engineer Intern in Chicago, IL. Although my
            position is remote, I will be moving to the Chicago to get away from
            home and experience the city lifestyle. Upon receiving my degree, I
            plan to pursue a full-time career as a Software Engineer.
          </div>
          <div>
            <img
              src={Self}
              alt="Alex"
              width="260px"
              height="260px"
              className="border-2 border-[#ed9637] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
