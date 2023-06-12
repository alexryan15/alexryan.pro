import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("about");

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <div className="flex flex-col justify-between uppercase md:px-12 mt-20 text-md font-semibold">
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
        <div className="flex">
          <FaLongArrowAltRight className="translate-y-1" />
          <p className="translate-x-2">ABOUT</p>
        </div>
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={false}
        duration={200}
        offset={0}
        onSetActive={handleSetActive}
        className={`cursor-pointer py-1 ${
          activeLink === "experience"
            ? "translate-x-4 opacity-100 scale-110 duration-200"
            : "opacity-20 hover:opacity-100 hover:translate-x-4 hover:scale-110 duration-200"
        }`}
      >
        <div className="flex">
          <FaLongArrowAltRight className="translate-y-1" />
          <p className="translate-x-2">EXPERIENCE</p>
        </div>
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
        <div className="flex">
          <FaLongArrowAltRight className="translate-y-1" />
          <p className="translate-x-2">PROJECTS</p>
        </div>
      </Link>
    </div>
  );
};

export default NavLinks;
