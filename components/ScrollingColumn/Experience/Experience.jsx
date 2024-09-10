import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  return (
    <div id="experience" className="w-full pt-36 md:px-12">
      <div className="mx-auto">
        <h1>EXPERIENCE</h1>
        <ExperienceItem
          date="August 2024 - Present"
          title="Software Engineer"
          company="Paylocity"
          description="Continuing development for Learning Management in both web application and mobile systems."
        />
        <ExperienceItem
          date="July 2023 - August 2024"
          title="Associate Software Engineer"
          company="Paylocity"
          description="Assisted in the development and maintenance of Learning Management Systems valued at over $140
          million, utilizing React/JavaScript for the front-end and C#/.NET for the back-end. Specialized in API development around SCORM-based content and streamlined user experience."
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
