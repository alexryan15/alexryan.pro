import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../../public/logo.png";
import NavbarItem from "./NavbarItem";
import NavbarItemMobile from "./NavbarItemMobile";
import MobileSocialItem from "./MobileSocialItem";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-14 shadow-lg duration-300 z-[100]"
          : "fixed w-full h-20 duration-300 z-[100]"
      }
    >
      {/* Regular nav links for desktop */}
      <div className="bg-white flex justify-between items-center w-full h-full pr-8 2xl:px-10">
        <Image src={NavLogo} alt="logo" width="75" height="75" />
        <div>
          <ul className="hidden md:flex">
            <NavbarItem link="/" name="HOME" />
            <NavbarItem link="#about" name="ABOUT" />
            <NavbarItem link="#projects" name="PROJECTS" />
            <NavbarItem link="#contact" name="CONTACT" />
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Effects for mobile nav menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          {/* Top of mobile nav menu with close button */}
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>

          {/* Mobile nav menu links */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <NavbarItemMobile
                link="/"
                event={() => setNav(false)}
                name="HOME"
              />
              <NavbarItemMobile
                link="/#about"
                event={() => setNav(false)}
                name="ABOUT"
              />
              <NavbarItemMobile
                link="/#projects"
                event={() => setNav(false)}
                name="PROJECTS"
              />
              <NavbarItemMobile
                link="/#contact"
                event={() => setNav(false)}
                name="CONTACT"
              />
            </ul>

            {/* Socials in mobile menu */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-HIGHLIGHT">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <MobileSocialItem
                  link="https://www.linkedin.com/in/alex-ryan-1a2a29190/"
                  image={<FaLinkedinIn />}
                />
                <MobileSocialItem
                  link="https://github.com/alexryan15"
                  image={<FaGithub />}
                />
                <MobileSocialItem
                  link="mailto:alexryan1717@hotmail.com"
                  image={<AiOutlineMail />}
                />
                <MobileSocialItem
                  link="https://drive.google.com/file/d/1r9kJjlFDFbetGL1qI2ZaGTAnFHmZM55S/view?usp=sharing"
                  image={<BsFillPersonLinesFill />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
