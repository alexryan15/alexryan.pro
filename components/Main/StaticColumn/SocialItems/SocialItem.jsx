import React from "react";

const SocialItem = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="p-4 cursor-pointer text-black opacity-50 hover:opacity-100 hover:scale-110 ease-in duration-200">
        {props.image}
      </div>
    </a>
  );
};

export default SocialItem;
