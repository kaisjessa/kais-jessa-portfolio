import React, { Suspense } from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="hero flex-col">
      <div className="card p-8 m-8 bg-base-100 shadow-xl hero-content flex-col md:flex-row">
        <div
          className="tooltip tooltip-bottom hover:tooltip-open"
          data-tip="Kais Jessa"
        >
          <Suspense fallback={<span className="skeleton w-700 h-700"></span>}>
            <Image
              className="max-w-sm rounded-lg shadow-2xl snap-center"
              src="/profile.jpg"
              width={700}
              height={700}
              alt={"Kais Jessa"}
            />
          </Suspense>
        </div>
        <div className="text-center m-8 p-8">
          <h1 className="text-6xl font-bold font-outline-4">Kais Jessa</h1>
          <p className="py-3 font-outline-4 text-xl">
            Full Stack Software Developer
          </p>
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
