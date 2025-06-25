import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const ProjectItem = ( props: any ) => {
  return (
    <div className="project-item">
      <a href={props.src} target="_blank" rel="noreferrer">
        <div className="project-header">
          <h3>{props.title}</h3>
          <BiLinkExternal />
        </div>
        <p className="project-description">{props.description}</p>
      </a>
    </div>
  );
};

export default ProjectItem;
