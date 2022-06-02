import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I'm Alex. I am a current junior at Penn State University
            studying Computer Science. I am also the Treasurer for the Men's
            Club Volleyball team at Penn State, where I a manage all of the
            club's finances.
          </p>
          <p className="py-2 text-gray-600">
            In the summer of 2022, I will begin my career by working for
            Paylocity as a Software Engineer Intern in Chicago, IL. Although my
            position is remote, I will be moving to the Chicago to get away from
            home and experience the city lifestyle. Upon receiving my degree, I
            plan to pursue a full-time career as a Software Engineer.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
