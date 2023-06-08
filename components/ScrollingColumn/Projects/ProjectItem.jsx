import React from "react";

const ProjectItem = ({ title, description, src }) => {
  var srcCheck = "";

  if (src) {
    srcCheck = "View Source";
  }

  return (
    <div className="text-base text-left items-center w-full py-2 my-2">
      <h3 className="">{title}</h3>
      <p className="font-normal py-2 text-gray-300">{description}</p>
      <a className="" href={src} target="_blank" rel="noreferrer">
        {srcCheck}
      </a>
    </div>
  );
};

export default ProjectItem;
