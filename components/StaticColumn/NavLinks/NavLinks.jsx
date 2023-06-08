import React, { useState } from "react";
import { Link } from "react-scroll";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("about");

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <div className="flex flex-col justify-between uppercase md:px-12 mt-20 text-black text-md font-semibold">
      <Link
        to="about"
        spy={true}
        smooth={false}
        duration={200}
        offset={0}
        onSetActive={handleSetActive}
        className={`cursor-pointer py-1 ${
          activeLink === "about"
            ? "translate-x-4 opacity-100 scale-110 duration-200"
            : "opacity-20 hover:opacity-100 hover:translate-x-4 hover:scale-110 duration-200"
        } `}
      >
        - ABOUT
      </Link>
      <Link
        to="experiences"
        spy={true}
        smooth={false}
        duration={200}
        offset={0}
        onSetActive={handleSetActive}
        className={`cursor-pointer py-1 ${
          activeLink === "experiences"
            ? "translate-x-4 opacity-100 scale-110 duration-200"
            : "opacity-20 hover:opacity-100 hover:translate-x-4 hover:scale-110 duration-200"
        }`}
      >
        - EXPERIENCES
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={false}
        duration={200}
        offset={0}
        onSetActive={handleSetActive}
        className={`cursor-pointer py-1 ${
          activeLink === "projects"
            ? "translate-x-4 opacity-100 scale-110 duration-200"
            : "opacity-20 hover:opacity-100 hover:translate-x-4 hover:scale-110 duration-200"
        }`}
      >
        - PROJECTS
      </Link>
    </div>
  );
};

export default NavLinks;
