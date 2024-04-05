import React from "react";
import data from "../data/text";

const About = () => {
  const aboutText = data.about;
  return (
    <div className="hero flex-col">
      <div className="card p-8 m-8 bg-base-100 shadow-xl hero-content flex-col md:flex-row">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{aboutText.title}</h2>
          <p className="text-lg">{aboutText.content}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
