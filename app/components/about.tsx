import React from "react";
import data from "../data/text";

const About = () => {
  const aboutText = data.about;
  const aboutContent = aboutText.content.join("");
  return (
    <div id="about" className="hero flex-col">
      <div className="card w-full m-4 bg-base-100 shadow-xl hero-content flex-col md:flex-row">
        <div className="card-body items-center">
          <h2 className="card-title font-bold text-2xl">{aboutText.title}</h2>
          <p className="text-md md:text-lg">{aboutContent}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
