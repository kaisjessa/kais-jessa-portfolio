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
    <div className="p-10 md:w-1/2 xl:w-1/3">
      <div className="indicator w-full h-full">
        <span className="indicator-item badge badge-accent  ">
          {props.date}
        </span>
        <div className="card card-side bg-base-300 shadow-xl">
          <figure className="pl-10">
            <Image
              className=""
              src={props.image}
              alt={props.name}
              width={256}
              height={256}
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title text-xl">{props.name}</h2>
            <p className="">{props.desc}</p>
            <div className="card-actions">
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip={props.git.length > 0 ? "GitHub" : "Coming soon..."}
              >
                <button
                  className={
                    props.git.length > 0
                      ? "btn btn-sm btn-primary btn-square"
                      : "btn btn-sm btn-disabled btn-square"
                  }
                >
                  <FaGithub className="size-6" />
                </button>
              </div>
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip={
                  props.link.length > 0 ? "Open link" : "Coming soon..."
                }
              >
                <button
                  className={
                    props.link.length > 0
                      ? "btn btn-sm btn-secondary btn-square"
                      : "btn btn-sm btn-disabled btn-square"
                  }
                >
                  <FaExternalLinkAlt className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
