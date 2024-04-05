import React from "react";

const Timeline = ({
  index,
  name,
  date,
  position,
  description,
}: {
  index: number;
  name: string;
  date: string;
  position: string;
  description: string[];
}) => {
  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          index % 2 === 0
            ? "timeline-start text-start mb-10 md:text-end"
            : "timeline-end text-start mb-10"
        }
      >
        <time className="font-mono italic">{date}</time>
        <div className="text-xl font-black">{name}</div>
        <div className="text-md font-bold">{position}</div>
        <ul>
          {description.map((el, i) => (
            <li className="text-md p-2" key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </li>
  );
};

export default Timeline;
