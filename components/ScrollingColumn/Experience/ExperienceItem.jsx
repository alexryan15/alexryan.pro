import React from "react";

const ExperienceItem = ({ date, title, company, description }) => {
  return (
    <div className="flex text-left py-4">
      <div className="w-1/3 opacity-70 text-sm">{date}</div>
      <div className="w-2/3 text-base">
        {title} - {company} <br />
        <p className="text-sm py-2">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
