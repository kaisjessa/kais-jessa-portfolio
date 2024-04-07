import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Timeline = ({
  index,
  name,
  date,
  position,
  description,
  technologies,
}: {
  index: number;
  name: string;
  date: string;
  position: string;
  description: string[];
  technologies: string[];
}) => {
  const badgeColors = ["badge-secondary", "badge-primary", ""];
  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <IoIosCheckmarkCircle className="size-5" />
      </div>
      <div className="timeline-start text-start mb-10 md:text-end">
        <div className="text-xl font-black">{name}</div>
        <div className="text-md font-bold">{position}</div>
        <time className="font-mono italic">{date}</time>
        <div className="text-sm">
          {technologies.map((tag, index) => (
            <span
              className={
                "mx-0.5 badge badge-sm badge-outline " +
                badgeColors[index % badgeColors.length]
              }
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="md:hidden">
          {description.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="timeline-end text-start mb-10">
        <ul className="hidden md:block">
          {description.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <hr />
    </li>
  );
};

export default Timeline;
