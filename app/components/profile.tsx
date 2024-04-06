import React, { lazy, Suspense } from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="hero flex-col">
      <div className="card mt-8 mb-4 p-8 bg-base-100 shadow-xl hero-content flex-col md:flex-row">
        <div
          className="tooltip tooltip-bottom hover:tooltip-open"
          data-tip="Kais Jessa"
        >
          <Image
            className="max-w-sm rounded-lg shadow-lg snap-center"
            src="/profile.jpg"
            width={300}
            height={300}
            alt={"Kais Jessa"}
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Kais Jessa</h1>
          <p className="py-3 text-xl">Software Developer</p>
          <div
            className="tooltip tooltip-bottom hover:tooltip-open"
            data-tip="mailto:kaisjessa@gmail.com"
          >
            <button className="btn btn-primary m-1">
              <a href="mailto:kaisjessa@gmail.com">Contact Me</a>
            </button>
          </div>
          <div
            className="tooltip tooltip-bottom hover:tooltip-open"
            data-tip="Kais_Jessa_Resume.pdf"
          >
            <button className="btn btn-neutral m-1">
              <a href="/Kais_Jessa_Resume.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
