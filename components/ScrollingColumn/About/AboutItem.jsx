import React from "react";

const AboutItem = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item, index) => (
        <p className="text-black font-normal text-md" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default AboutItem;
