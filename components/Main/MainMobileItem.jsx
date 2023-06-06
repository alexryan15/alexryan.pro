import React from "react";

const MainMobileItem = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="rounded-full border-2 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:border-HIGHLIGHT">
        {props.image}
      </div>
    </a>
  );
};

export default MainMobileItem;
