"use client";
import React, { useState } from "react";
import data from "../data/text.js";
import ProjectCard from "./projectCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projectData = data.projects.content;
  return (
    <div id="projects" className="hero flex-col">
      <div className="card w-full m-4 bg-base-100 shadow-xl hero-content flex-col">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">
            {data.projects.title}
          </h2>
          <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
            {projectData.map((el, index) => (
              <>
                {index < 2 || showMore ? (
                  <ProjectCard key={index} {...el} />
                ) : null}
              </>
            ))}
          </div>
        </div>
        <button
          className="btn btn-wide btn-outline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
