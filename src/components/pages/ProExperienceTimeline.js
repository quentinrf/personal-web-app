import React from 'react'
import timelineElements from '../../content/timelineElements';
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";
import "./ProExperienceTimeline.css"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

export default function ProExperienceTimeline() {
    let workIconStyles = {background: "#06D6A0"};
    let schoolIconStyles = {background: "#F9C74F"};

    return (
        <div>
          <h2 className="sign-up">Professional Experience</h2>
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";
    
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      );
}

