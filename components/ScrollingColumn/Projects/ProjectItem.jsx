import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectItem = ({ title, description, src }) => {
  let srcCheck = "m-1 invisible";

  if (src) {
    srcCheck = "m-1";
  }

  return (
    <div className="text-base text-left items-center w-full p-2 -mx-2 my-2 rounded-md hover:ml-2 hover:scale-105 hover:bg-gray-800 duration-200">
      <a href={src} target="_blank" rel="noreferrer">
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce="true">
          <div className="flex flex-row">
            <h3>{title}</h3>
            <BiLinkExternal className={srcCheck} />
          </div>
          <p className="font-normal py-2 mb-2 text-gray-400">{description}</p>
        </AnimationOnScroll>
      </a>
    </div>
  );
};

export default ProjectItem;
