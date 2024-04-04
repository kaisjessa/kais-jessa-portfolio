import React, { Suspense } from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Suspense fallback={<span className="skeleton w-700 h-700"></span>}>
          <Image
            className="max-w-sm rounded-lg shadow-2xl snap-center"
            src="/profile.jpg"
            width={700}
            height={700}
            alt={"Kais Jessa"}
          />
        </Suspense>
        <div>
          <h1 className="text-5xl font-bold font-outline-4">Kais Jessa</h1>
          <p className="py-6 font-outline-4">Professional Software Developer</p>
          <button className="btn btn-primary">
            <a href="mailto:kaisjessa@gmail.com">Contact Me</a>
          </button>
          <button className="btn btn-neutral">
            <a href="/Kais_Jessa_Resume.pdf" download>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
