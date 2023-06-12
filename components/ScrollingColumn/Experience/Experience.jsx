import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  return (
    <div id="experience" className="w-full pt-36 md:px-12">
      <div className="mx-auto">
        <h1 className="HIGHLIGHT text-left text-2xl">EXPERIENCE</h1>
        <ExperienceItem
          date="Starting July 2023"
          title="Associate Software Engineer"
          company="Paylocity"
          description="To be determined..."
        />
        <ExperienceItem
          date="May 2022 - August 2022"
          title="Software Engineering Intern"
          company="Paylocity"
          description="Worked with the Performance Conversation team in the Performance Management application to improve the experience around employee journals and peer feedback."
        />
      </div>
    </div>
  );
};

export default Experiences;
