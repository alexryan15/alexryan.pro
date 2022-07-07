import React from "react";

const ProjectItem = ({ title, description, src }) => {
  var srcCheck = "";

  if (src) {
    srcCheck = "View Source";
  }

  return (
    <div className="text-lg items-center h-[10rem] md:h-[8rem] w-5/6 md:w-full shadow-lg shadow-gray-400 
                    rounded-xl p-4 border-2 hover:border-HIGHLIGHT hover:scale-105 duration-500">
      <h3 className="text-HIGHLIGHT">{title}</h3>
      <p className="font-normal py-2">{description}</p>
      <a className="text-HIGHLIGHT" href={src} target="_blank" rel="noreferrer">
        {srcCheck}
      </a>
    </div>
  );
};

export default ProjectItem;
