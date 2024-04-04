import Link from "next/link";
import React from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex gap-2 ">
      <Link href="https://github.com/kaisjessa" passHref>
        <FaGithub className="size-6 lg:size-10" />
      </Link>
      <Link href="https://www.linkedin.com/in/kais-jessa/" passHref>
        <FaLinkedin className="size-6 lg:size-10" />
      </Link>
      <Link href="mailto:kaisjessa@gmail.com" passHref>
        <MdEmail className="size-6 lg:size-10" />
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <header className="navbar z-20 bg-base-100 sticky top-0 bg-opacity-100">
      <div className="navbar bg-base">
        <div className="navbar-start">
          <Socials />
        </div>
        <div className="navbar-center">
          <h1 className="normal-case text-md font-bold lg:text-3xl">
            Kais Jessa
          </h1>
        </div>
        <div className="navbar-end">
          <FaSun className="m-1 size-6 lg:size-8" />
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          <FaMoon className="m-1 size-6 lg:size-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
