import React from "react";

const MobileSocialItem = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        {props.image}
      </div>
    </a>
  );
};

export default MobileSocialItem;
