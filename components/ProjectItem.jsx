import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, description, src }) => {
  const srcCheck = "";

  if (src) {
    srcCheck = "View Source";
  }

  return (
    <div className="text-lg justify-center h-[8rem] w-full shadow-lg shadow-gray-400 rounded-xl p-4 border-2 hover:border-[#7510F7] hover:scale-105 duration-500">
      <h3 className="text-[#7510F7]">{title}</h3>
      <p className="font-light py-2">{description}</p>
      <a className="text-[#7510F7]" href={src} target="_blank">
        {srcCheck}
      </a>
    </div>
  );
};

export default ProjectItem;
