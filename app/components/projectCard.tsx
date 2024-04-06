import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type project = {
  name: string;
  date: string;
  link: string;
  desc: string;
  git: string;
  image: string;
  tags: string[];
};

const ProjectCard = (props: project) => {
  const badgeColors = ["badge-info"];
  return (
    <div className="p-10 lg:w-1/2">
      <div className="indicator w-full md:w-11/12">
        <span className="indicator-item badge badge-accent">{props.date}</span>
        <div className="card card-side bg-base-300 shadow-xl">
          <figure className="pl-10">
            <Image
              className=""
              src={props.image}
              alt={props.name}
              width={128}
              height={128}
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">{props.name}</h2>
            <p className="text-md">{props.desc}</p>
            <div className="card-actions">
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip={props.git.length > 0 ? "GitHub" : "Coming soon..."}
              >
                <Link
                  className={
                    props.git.length > 0
                      ? "btn btn-sm btn-primary btn-square"
                      : "btn btn-sm btn-disabled btn-square"
                  }
                  href={props.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="size-6" />
                </Link>
              </div>
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip={
                  props.link.length > 0 ? "Open link" : "Coming soon..."
                }
              >
                <Link
                  className={
                    props.link.length > 0
                      ? "btn btn-sm btn-secondary btn-square"
                      : "btn btn-sm btn-disabled btn-square"
                  }
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="size-6" />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag, index) => (
                <span
                  className={"badge " + badgeColors[index % badgeColors.length]}
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
