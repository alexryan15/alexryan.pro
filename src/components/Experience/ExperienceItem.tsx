import React from "react";

const ExperienceItem = ( props: any ) => {
  return (
    <div className="experience-item">
      <div className="experience-date">
        { props.date }
      </div>
      <div className="experience-details">
        <div className="experience-title">
          { props.title } - <span className="company">{ props.company }</span>
        </div>
        <p className="experience-description">
          { props.description }
        </p>
      </div>
  </div>
  );
};

export default ExperienceItem;
