import React from "react";

const AboutItem = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item, index) => (
        <p
          className="font-normal text-md text-gray-400 tracking-wide"
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default AboutItem;
