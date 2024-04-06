import React from "react";
import data from "../data/text.js";
import ProjectCard from "./projectCard";

const Projects = () => {
  const projectData = data.projects.content;
  return (
    <div id="projects" className="hero flex-col">
      <div className="card w-full m-4 bg-base-100 shadow-xl hero-content flex-col">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">
            {data.projects.title}
          </h2>
          <div className="flex flex-wrap justify-center">
            {projectData.map((el, index) => (
              <>
                <ProjectCard key={index} {...el} />
                <ProjectCard key={index} {...el} />
                <ProjectCard key={index} {...el} />
                <ProjectCard key={index} {...el} />
                <ProjectCard key={index} {...el} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
