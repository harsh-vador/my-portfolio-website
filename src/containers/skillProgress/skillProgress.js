import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress(props) {
  const theme = props.theme;
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            <img
              className="skills-image"
              alt="Skills"
              src={require("../../assests/images/skill.svg")}
            />

            {techStack.experience.map((exp) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
