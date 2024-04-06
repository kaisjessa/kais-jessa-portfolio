import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type project = {
  name: string;
  date: string;
  link: string;
  desc: string;
  git: string;
  image: string;
  comingSoon: boolean;
  tags: string[];
};

const ProjectCard = (props: project) => {
  return (
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="indicator w-full">
        <span className="indicator-item badge badge-accent  ">
          {props.date}
        </span>
        <div className="card card-side bg-base-300 shadow-xl ">
          <figure className="pl-10">
            <Image
              className=""
              src={props.image}
              alt={props.name}
              width={700}
              height={700}
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">{props.name}</h2>
            <p>{props.desc}</p>
            <div className="card-actions">
              <button className="btn btn-sm btn-primary btn-square">
                <FaGithub className="size-6" />
              </button>
              <button className="btn btn-sm btn-secondary btn-square">
                <FaExternalLinkAlt className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
