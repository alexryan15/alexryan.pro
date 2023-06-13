import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ExperienceItem = ({ date, title, company, description }) => {
  return (
    <div className="flex text-left py-4">
      <div className="w-1/3 opacity-70 text-sm">
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          {date}
        </AnimationOnScroll>
      </div>
      <div className="w-2/3 text-base">
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
          {title} - {company} <br />
          <p className="text-sm py-2 text-gray-400">{description}</p>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default ExperienceItem;
