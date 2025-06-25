import React from "react";

const SocialItem = ( props: any ) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div>
        {props.image}
      </div>
    </a>
  );
};

export default SocialItem;
