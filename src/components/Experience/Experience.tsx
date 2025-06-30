import React from "react";
import "./Experience.css";
import CSharp from "../../images/csharp.svg";
import TypeScript from "../../images/typescript.svg";
import JavaScript from "../../images/javascript.png";
import Python from "../../images/python.svg";
import ReactLogo from "../../images/react.png";
import TeamCity from "../../images/teamcity.png";
import Datadog from "../../images/datadog.png";

const Experience = () => {
  return (
    <div id="experience">
      <div>
        <h1>Experience</h1>
        <p className="experience-description">
          I have been working as a full-stack software engineer at <span className="company">Paylocity</span> for over 2 years, 
          contributing to both frontend and backend development. While I enjoy all aspects of being a developer,
          my passion lies in the backend, particularly in API design, system scalability, and performance. 
          I enjoy building robust, maintainable systems that can handle real-world load. Here are some of the tools that I frequently use:
        </p>
        <div className="images">
          <img src={CSharp} width="50" height="50" />
          <img src={TypeScript} width="50" height="50" />
          <img src={JavaScript} width="50" height="50" />
          <img src={ReactLogo} width="56" height="50" />
          <img src={Python} width="50" height="50" />
          <img src={TeamCity} width="50" height="50" />
          <img src={Datadog} width="50" height="50" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
