import React from "react";
import Image from "next/image";

const StackIcon = ({ name, src }: { name: string; src: string }) => {
  return (
    <span className="tooltip tooltip-bottom hover:tooltip-open" data-tip={name}>
      <Image
        className="mx-2 size-10 lg:size-16"
        src={src}
        width={75}
        height={75}
        alt={"My Stack"}
      />
    </span>
  );
};

const Stack = () => {
  return (
    <div id="stack" className="hero flex-col">
      <div className="card w-full m-4 bg-base-100 shadow-xl hero-content flex-col md:flex-row">
        <div className="card-body items-center">
          {/* <h2 className="card-title font-bold text-2xl">My Stack</h2> */}
          <div className="flex flex-row flex-wrap justify-center">
            <StackIcon name="Python" src="/stack/python.svg" />
            <StackIcon name="Javascript" src="/stack/javascript.svg" />
            <StackIcon name="Typescript" src="/stack/typescript.svg" />
            <StackIcon name="React" src="/stack/react.svg" />
            <StackIcon name="Tailwind CSS" src="/stack/tailwind.svg" />
            <StackIcon name="Next.js" src="/stack/next.svg" />
            <StackIcon name="Flask" src="/stack/flask.svg" />
            <StackIcon name="Firebase" src="/stack/firebase.svg" />
            <StackIcon name="Docker" src="/stack/docker.svg" />
            <StackIcon name="Ubuntu" src="/stack/ubuntu.svg" />
            <StackIcon name="GitHub" src="/stack/github.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
