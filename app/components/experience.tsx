import React from "react";
import data from "../data/text.js";
import Timeline from "./timeline";
import { IconType } from "react-icons";

const Experience = () => {
  const experienceText = data.experience.content;
  return (
    <div className="hero flex-col">
      <div className="card m-4 bg-base-100 shadow-xl hero-content flex-col md:flex-row">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">
            {data.experience.title}
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {experienceText.map((el, index) => (
              <Timeline
                key={index}
                index={index}
                name={el.name}
                description={el.description}
                position={el.position}
                date={el.date}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
